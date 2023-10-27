import React, { useContext } from 'react'
import { AppContext } from '../AppContext/AppContextProvider'
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AppContext);

  if(loading){
    return <h1 className='text-2xl font-bold text-center'>Loading...</h1>
  }else if(user){
    return children
  }else{
    return <Navigate to='/signUp'></Navigate>
  }
}

export default PrivateRoute
