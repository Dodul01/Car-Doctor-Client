import { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  const SignUp = (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch(error => {
        console.log(error);
      })
  }

  const signIn = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const signOutUser = () => {
    signOut(auth)
      .then((res) => {
        console.log('sign out sucessfully!');
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
        setUser(user)
        console.log(user);
      } else {
        setLoading(false)
        console.log('user not found');
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
