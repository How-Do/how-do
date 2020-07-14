import React from 'react'
import logo from './../images/raccoon-tail.png'
import { useAuth0 } from "@auth0/auth0-react";


const Header = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className='header-bar'>
      <img src={logo} alt='logo' />
      <input placeholder='How do I...' />
      <button>Search</button>
        <button button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  )
}
export default Header
