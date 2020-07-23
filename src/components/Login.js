import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/reducer'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  function login() {
    axios
      .post('/api/login', { username, password })
      .then((res) => dispatch(setUser(res.data)))
      .catch((error) => {
        console.log(error)
        //alert('Username or password incorrect.')
        toast.error("Username or password incorrect", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      })
  }

  return (
    <div className='Login'>
      <div className='input-block'>
        <input
          name={username}
          value={username}
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          name={password}
          value={password}
          placeholder='Password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='button-block'>
        <button className='master-button' onClick={login}>
          Login
        </button>
        <Link to={'/register'} className='master-button'>
          Register
        </Link>
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  )
}

export default Login
