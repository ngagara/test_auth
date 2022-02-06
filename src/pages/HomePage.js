import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuth } from './../hooks/use_auth'
import { useDispatch } from 'react-redux'
import { removeUser } from '../store/userSlice'


export const HomePage = () => {

  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(removeUser())
  }

  return isAuth ? (
    <div>
      <h1>Welcome</h1>
      <button onClick={logOut}>Log out from {email}</button>
    </div>
  ) : (
    <Routes>
      <Route path="" element={<Navigate to="/login" />}/>
    </Routes>
  )
}
