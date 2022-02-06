import React from 'react'
import { Form } from './Form'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/userSlice'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handelLogin = (email, password) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
      .then(({user})=> {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken
        }))
        navigate('/')
      })
      .catch(console.log)
    }


  return (
    <Form title='sing in' handelClick={handelLogin}/>
  )
}

export  {Login}
