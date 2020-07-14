import React from 'react'
import logo from './../images/big-raccoon-tail.png'
import './../styles/styles.css'
// import { connect } from 'react-redux'
// import { setUser } from '../../redux/reducer'
// import { useHistory } from 'react-router-dom'
// import { logout } from '../../../server/authController'
import logo from './../images/raccoon-tail.png'
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from "react-router-dom";


const Header = () => {
  const { loginWithRedirect } = useAuth0();
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
      <img src={logo} alt='logo' />
      <div className='links'>
          <Link to={'/'}> Dashboard </Link>
          <Link to={'/addpost'}> Add Post </Link>
          <Link to={'/post'}> Post </Link>
          <Link to={'/profile'}> Profile </Link>
          <Link to={'/favorites'}> Favorites </Link>
      </div>
      <input placeholder='How do I...' />
      <button>Search</button>
        <button button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  )
}
export default Header
