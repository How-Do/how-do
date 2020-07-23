import React, { useEffect, useState } from 'react';
import ChartOne from './ChartOne';
import ChartTwo from './ChartTwo';
import ChartThree from './ChartThree';
import { useSelector, useDispatch } from 'react-redux';
import UserInfo from './UserInfo';

const Profile = () => {
  const user = useSelector((reduxState) => reduxState.reducer.user);
  console.log(user, 'user');
  const dispatch = useDispatch();

  const [email, setEmail] = useState(user.email);
  const [profilePic, setProfilePic] = useState(user.profile_pic);
  const [username, setUsername] = useState(user.username);
  const [createdAt, setCreatedAt] = useState(user.created_at);
  const [userDescription, setUserDescription] = useState(user.user_description);
  console.log(user.user_description)
  console.log(userDescription)
  useEffect(() => {
    console.log("use effect in profile", user)
    setUsername(user.username);
    setEmail(user.email);
    setUserDescription(user.user_description);
    setCreatedAt(user.created_at);
    setProfilePic(user.profile_pic);
  }, [user]);


  return (
    <div className="profile-container">
      <div className="chart-card-container">
        <div className="outer-chart-container" id="profile-box">
          <img className="profile-pic" src={profilePic} alt="profile" />
          <UserInfo />
          <div className="userinfo-text-container">
          <p className="userinfo-text">Username: {username}</p>
          <p className="userinfo-text">Email: {email}</p>
          <p className="userinfo-text">Description: {userDescription}</p>
          <p className="userinfo-text">Member since: {createdAt}</p>
          </div>
        </div>

        <div className="outer-chart-container">
          <ChartOne />
        </div>
        <div className="outer-chart-container">
          <ChartTwo />
        </div>
        <div className="outer-chart-container">
          <ChartThree />
        </div>
      </div>
    </div>
  );
};

export default Profile;
