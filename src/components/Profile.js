import React, { useEffect, useState } from "react";
import ChartOne from "./ChartOne";
import ChartTwo from "./ChartTwo";
import ChartThree from "./ChartThree";
import { useSelector, useDispatch } from "react-redux";
import UserInfo from "./UserInfo";

const Profile = () => {
  const user = useSelector((reduxState) => reduxState.reducer.user);
  const dispatch = useDispatch()

  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);
  //const [profilePic, setProfilePic] = useState(user.profile_pic);
  const [userDescription, setUserDescription] = useState(user.user_description);

  useEffect(() => {
    setUsername(user.username);
  }, [user.username]);

  return (
    <div className="profile-container">
      {/* <div className="chart-card-container">
        <img className="profile-pic" src={user.profile_pic} alt="profile" />
        <p className="user-info-text">
        {username} 
        {email}
        {userDescription}
        </p>
        <UserInfo/>
      </div> */}
      <div className="chart-card-container">
        <div className="outer-chart-container">
          <img className="profile-pic" src={user.profile_pic} alt="profile" />
          <p className="userinfo-text">
            username: {username}
            {email}
            {userDescription}
          </p>
          <UserInfo />
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
