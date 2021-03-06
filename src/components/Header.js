import React, { useState } from 'react'
// import logo from './../images/raccoon-tail-glow.png'
import logo from './../images/big-raccoon-tail.png'
import './../styles/styles.css'
// import { connect } from 'react-redux'
import { setUser } from '../redux/reducer'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setResults } from '../redux/searchReducer'
import Login from './Login'
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const state = useSelector(({ searchReducer }) => searchReducer)
  const stateTwo = useSelector(({ reducer }) => reducer)
  const dispatch = useDispatch()
  const history = useHistory()

  function searchPosts(e) {
    axios
      .get(`/howdo/posts?search=${e}`)
      .then((res) => {
        dispatch(setResults(res.data))
      })
      .catch((error) => console.log(error))
  }

  function logout() {
    axios.delete('/api/logout').then((res) => {
      dispatch(setUser(null))
      history.push('/')
    })
  }

  const showMenu = () => {
    var x = document.getElementById('mobile-links')
    console.log(x, 'what is x')
    if (x.style.display === 'block') {
      x.style.display = 'none'
    } else {
      x.style.display = 'block'
    }
  }

  function logout() {
    axios.delete('/api/logout').then((res) => {
      dispatch(setUser(null))
      history.push('/')
    })
  }

  // console.log(state, 'state')

  return (
    <div className='header-bar'>
      <div className='desktop-header'>
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
          <Link onClick={showMenu} to={'/'}>
            Dashboard
          </Link>
          {stateTwo.user ? (
            <Link onClick={showMenu} to={'/profile'}>
              Profile
            </Link>
          ) : null}
          <Link onClick={showMenu} to={'/about'}>
            About
          </Link>
        </div>
        <div>
          {stateTwo.user ? (
            <div className='logout-div'>
              <button className='master-button' onClick={() => logout()}>
                Logout
              </button>
            </div>
          ) : (
            <div className='login-div'>
              <Login onClick={showMenu} />
            </div>
          )}
        </div>
      </div>
      <div className='mobile-header'>
        <div className='mobile-logo-block'>
          <a onClick={showMenu}>
            <img src={logo} alt='logo' className='logo' />
          </a>
          <h1>howDo</h1>
        </div>
        <div className='mobile-search-block'>
          <input
            placeholder='Search'
            className='master-input-box'
            onChange={(e) => searchPosts(e.target.value)}
          />
        </div>
        <div id='mobile-links'>
          <div className='mobile-links-container'>
            <Link onClick={showMenu} to={'/'}>
              {' '}
              Dashboard{' '}
            </Link>
            {stateTwo.user ? (
              <Link onClick={showMenu} to={'/profile'}>
                Profile
              </Link>
            ) : null}
            <Link onClick={showMenu} to={'/about'}>
              {' '}
              About{' '}
            </Link>
          </div>
          <div>
            {stateTwo.user ? (
              <div className='logout-div'>
                <button className='master-button' onClick={() => logout()}>
                  Logout
                </button>
              </div>
            ) : (
              <div className='mobile-login-div'>
                <Login onClick={showMenu} />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <ToastContainer autoClose={2000} /> */}
    </div>
  )
}
export default Header
