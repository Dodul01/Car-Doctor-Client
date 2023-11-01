import { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  const SignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signOutUser = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      const userEmail = user?.email;
      const loggedUser = { email: userEmail };

      // if (user) {
      //   setLoading(false);
      //   setUser(user)
      //   console.log(user);
      // } else {
      //   setLoading(false)
      //   console.log('user not found');
      // }

      setUser(user);
      setLoading(false);

      // if user exists then issue token
      if (user) {
        axios.post(`http://localhost:5000/jwt`, loggedUser, { withCredentials: true })
          .then(res => {
            console.log(res.data);
          })
      } else {
        axios.post(`http://localhost:5000/logout`, loggedUser, { withCredentials: true })
          .then(res => {
            console.log(res.data);
          })
      }
    })

    return () => {
      unSubscribe();
    }
  }, [])

  const appInfo = {
    SignUp,
    signIn,
    user,
    loading,
    signOutUser
  }

  return (
    <AppContext.Provider value={appInfo}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
