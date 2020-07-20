import React, {useState} from 'react';
// import '../styling/_Register.scss'
import {useDispatch} from "react-redux";
import {setUser} from "../redux/reducer";
import axios from 'axios';
import {useHistory} from 'react-router-dom'

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const register = (e) => {
        e.preventDefault()
        axios.post('/api/register', {username, password, email})
            .then((res) => {
                dispatch(setUser(res.data))
                history.push(`/profile`)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="Auth">
            <h2>HowDoer Registration:</h2>

            <p>Please complete the fields below!</p>
            <div>
                <form onSubmit={register}>
                    <p>Username: </p>
                    <input placeholder='username'
                           name='username'
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}/>
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
}

export default Register;