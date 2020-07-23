import React, { useEffect, useState } from "react";
import ChartOne from "./ChartOne";
import ChartTwo from "./ChartTwo";
import ChartThree from "./ChartThree";
import { useSelector } from "react-redux";
import UserInfo from "./UserInfo";

const Profile = () => {
  const user = useSelector((reduxState) => reduxState.reducer.user);

  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [phone, setPhone] = useState(user.pone);
  const [userName, setFirstName] = useState(user.first_name);
  const [profilePic, setProfilePic] = useState(user.profile_pic);

  // const update = async (e) => {
  //   e.preventDefault();
  //   await axios
  //     .put("/auth/user", {
  //       email,
  //       password,
  //       phone,
  //       first_name,
  //       last_name,
  //       profile_pic,
  //     })
  //     .then((res) => {
  //       toast.success("Profile has been successful updated", {
  //         position: toast.POSITION.BOTTOM_RIGHT
  //       });
  //       props.setUser(res.data);
  //       //props.history.push("/dash");
  //     })
  //     .catch((err) => {
  //       alert("Could not update user information");
  //     });
  // };

  console.log(user);
  return (
    <div className="profile-container">
      <div className="profile-info-container">
        <img className="profile-pic" src={user.profile_pic} alt="profile" />
        <p className="user-info-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <UserInfo/>
      </div>

      <h3 className="username">Welcome {user.username}</h3>
      <div className="chart-card-container">
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
