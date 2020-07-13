import React from 'react'
import logo from './../images/raccoon-tail.png'
// import { connect } from 'react-redux'
// import { setUser } from '../../redux/reducer'
// import { useHistory } from 'react-router-dom'
// import { logout } from '../../../server/authController'

const Header = () => {
  return (
    <div className='header-bar'>
      <img src={logo} alt='logo' />
      <input placeholder='How do I...' />
      <button>Search</button>
      <a href='http://localhost:3001/auth'>
        <button>Log In</button>
      </a>
    </div>
  )
}

export default Header
