import React from 'react'
import { useAuth } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom';


function ProtectedRoutes({children}) {
  const {isAuth} = useAuth();
  return (
    <div>
      {
        isAuth ? children: <Navigate to="/login"/>
      }
    </div>
  )
}


export default ProtectedRoutes
