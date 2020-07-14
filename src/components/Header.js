import React from 'react'
import logo from './../images/big-raccoon-tail.png'
import './../styles/styles.css'
// import { connect } from 'react-redux'
// import { setUser } from '../../redux/reducer'
// import { useHistory } from 'react-router-dom'
// import { logout } from '../../../server/authController'

const Header = () => {
  return (
    <div className='header-bar'>
      <div className='logo-block'>
        <img src={logo} alt='logo' className='logo' />
        <h1>howDo</h1>
      </div>
      <div className='search-block'>
        <input placeholder='How do I...' className='master-input-box' />
        <button className='master-button'>Search</button>
      </div>
      <a href='http://localhost:3001/auth'>
        <button className='master-button'>Log In</button>
      </a>
    </div>
  )
}

export default Header
