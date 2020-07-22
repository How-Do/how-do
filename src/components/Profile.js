import React, { useEffect, useState } from 'react'
import ChartOne from './ChartOne'
import ChartTwo from './ChartTwo'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector((reduxState) => reduxState.reducer.user)

  console.log(user)
  return (
    <div className='profile-container'>
      <div className='column-3'>
        <div className='profile-info-container'>
          <img className='profile-pic' src={user.profile_pic} alt='profile' />
          <p className='user-info-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className='column-4'>
        <div className='welcome-container'>
          <h3 className='username'>Welcome {user.username}</h3>
        </div>
        <div className='chart-card-container'>
          <div className='outer-chart-container'>
            <ChartOne />
          </div>
          <div className='outer-chart-container'>
            <ChartTwo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
