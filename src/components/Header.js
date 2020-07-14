import React from 'react'
import logo from './../images/raccoon-tail.png'
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from "react-router-dom";


const Header = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className='header-bar'>
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
