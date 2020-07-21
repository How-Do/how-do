import React, { useState } from 'react'
// import '../styling/_Register.scss'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/reducer'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function Register() {
<<<<<<< HEAD
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const register = (e) => {
    e.preventDefault()
    axios
      .post('/api/register', { username, password, email })
      .then((res) => {
        dispatch(setUser(res.data))
        history.push(`/profile`)
      })
      .catch((error) => console.log(error))
  }
=======
    const [username, setUsername] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const register = (e) => {
        e.preventDefault()
        axios.post('/api/register', {username, profilePic, password, email})
            .then((res) => {
                dispatch(setUser(res.data))
                history.push(`/profile`)
            })
            .catch(error => console.log(error))
    }
>>>>>>> master

  return (
    <div className='register'>
      <div className='form-box'>
        <h1>HowDoer Registration:</h1>

<<<<<<< HEAD
        <p>
          Tell us who you are, <br /> and we'll tell you what to do.
        </p>
        <form onSubmit={register}>
          <input
            placeholder='Username'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            placeholder='Email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder='Profile Pic URL'
            name='profilePic'
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          />
          <br />
          <button type='submit' className='master-button'>
            Register
          </button>
        </form>
      </div>
    </div>
  )
=======
            <p>Please complete the fields below!</p>
            <div>
                <form onSubmit={register}>
                    <p>Username: </p>
                    <input placeholder='username'
                           name='username'
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}/>
                    <br/>
                    <p>Profile Picture: </p>
                    <input placeholder='Profile Pic'
                           name='profilePic'
                           value={profilePic}
                           onChange={(e) => setProfilePic(e.target.value)}/>
                    <br/>
                    <p>Password:</p>
                    <input  type='password'
                            placeholder='password'
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                    <br/>
                    <p>E-Mail:</p>
                    <input placeholder='email'
                           name='email'
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                    <br/>
                    <button type='submit'>Register</button>
                </form>
            </div>

        </div>
    );
>>>>>>> master
}

export default Register
