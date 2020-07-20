import React, { useState } from 'react'
// import logo from './../images/raccoon-tail-glow.png'
import logo from './../images/big-raccoon-tail.png'
import './../styles/styles.css'
// import { connect } from 'react-redux'
// import { setUser } from '../../redux/reducer'
// import { useHistory } from 'react-router-dom'
// import { logout } from '../../../server/authController'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setResults } from './../redux/searchReducer'

const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()
  const state = useSelector(({ searchReducer }) => searchReducer)
  const dispatch = useDispatch()
  // const [search, setSearch] = useState(null)

  function searchPosts(e) {
    axios
      .get(`/howdo/posts?search=${e}`)
      .then((res) => {
        dispatch(setResults(res.data))
      })
      .catch((error) => console.log(error))
  }

  console.log(state, 'state')

  return (
    <div className='header-bar'>
      <div className='logo-block'>
        <img src={logo} alt='logo' className='logo' />
        <h1>howDo</h1>
      </div>
      <div className='search-block'>
        <input
          placeholder='Search'
          className='master-input-box'
          onChange={(e) => searchPosts(e.target.value)}
        />
      </div>
      <div className='links'>
        <Link to={'/'}> Dashboard </Link>
        <Link to={'/profile'}> Profile </Link>
        <Link to={'/favorites'}> Favorites </Link>
      </div>
      <div>
        {isAuthenticated ? (
          <div>
            <button className='master-button' onClick={() => logout()}>
              Log Out
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={() => loginWithRedirect()}
              className='master-button'>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
export default Header
