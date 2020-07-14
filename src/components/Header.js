import React from 'react'
import logo from './../images/big-raccoon-tail.png'
import './../styles/styles.css'
// import { connect } from 'react-redux'
// import { setUser } from '../../redux/reducer'
// import { useHistory } from 'react-router-dom'
// import { logout } from '../../../server/authController'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

const Header = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <div className='header-bar'>
      <div className='logo-block'>
        <img src={logo} alt='logo' className='logo' />
        <h1>howDo</h1>
      </div>
      <div className='search-block'>
        <input placeholder='How do I...' className='master-input-box' />
      </div>
      <div className='links'>
        <Link to={'/'}> Dashboard </Link>
        <Link to={'/post'}> Post </Link>
        <Link to={'/profile'}> Profile </Link>
        <Link to={'/favorites'}> Favorites </Link>
      </div>
      <button
        button
        onClick={() => loginWithRedirect()}
        className='master-button'>
        Login
      </button>
    </div>
  )
}
export default Header
