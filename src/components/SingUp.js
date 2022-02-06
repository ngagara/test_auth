import React from 'react'
import {
  useNavigate
} from 'react-router-dom'
import {
  Form
} from './Form'
import {
  useDispatch
} from 'react-redux'
import {
  setUser
} from '../store/userSlice'
import {
  getAuth,
  createUserWithEmailAndPassword
} from "firebase/auth";

const SingUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken
        }));
        navigate('/')
      })
      .catch(console.error)

  }


  return ( <Form title = 'register'
    handelClick = {
      handelRegister
    }
    />
  )
}

export {
  SingUp
}