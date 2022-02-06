import React, {useState} from 'react'

const Form = ({title, handelClick}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div>
        <input type='email' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='password'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={()=>handelClick(email, password)}>{title}</button>
    </div>
  )
}

export {Form}
