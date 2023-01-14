import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

    const token = localStorage.token
    const location = useLocation()

  return (
    <>
    {
        token ? <Outlet /> : <Navigate to='/' state={{from: location}} replace />    
    }
    </>
  )
}

export default ProtectedRoute