import React, { useState, useCallback, useEffect } from "react";
import "./../styles/styles.css";
import { HamburgerArrow } from "react-animated-burgers";
import { Transition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {setUser} from "../redux/reducer";

function UserInfo({ socket }) {
    const user = useSelector((reduxState) => reduxState.reducer.user);
    const dispatch = useDispatch()

    const userId = useSelector((reduxState) =>
    reduxState.reducer.user ? reduxState.reducer.user.user_id : null);

    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const [username, setUsername] = useState(user.username);
    const [profilePic, setProfilePic] = useState(user.profile_pic);
    const [userDescription, setUserDescription] = useState(user.user_description);

    const [isActive, setIsActive] = useState(false);
    const toggleButton = useCallback(() => setIsActive((pre) => !pre));

  const update = async (e) => {
    e.preventDefault();
    await axios
      .put("/auth/user", {
      userId,
      username,
      email,
      password,
      profilePic,
      userDescription,
      })
      .then((res) => {
        toast.success("Profile has been successful updated", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
         dispatch(setUser(res.data))
      })
      .catch((err) => {
        toast.error("Could not update user information", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        //alert("Could not update user information");
      });
      toggleButton();
  };

  return (
    <div className="userinfo-green-container">
      <Transition timeout={0} in={isActive} appear>
        {(status) => (
          <div className={`userinfo-box userinfo-box-${status}`}>
            <form className="userinfo-form" id="howDoForm">
              <p className="userinfo-form-text">Username:</p>
              <input
                className="userinfo-form-input"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <p className="userinfo-form-text">Email:</p>
              <input
                className="userinfo-form-input"
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="userinfo-form-text">Password:</p>
              <input
                className="userinfo-form-input"
                type="password"
                name="password"
                required="input your old password or a new one"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
               <p className="userinfo-form-text">Profile Picture URL:</p>
              <input
                className="userinfo-form-input"
                type="url"
                name="profilePic"
                value={profilePic}
                onChange={(e) => setProfilePic(e.target.value)}
              />
              <p className="userinfo-form-text">Description:</p>
              <textarea
                className="userinfo-textarea"
                name="userDescription"
                rows="3"
                cols="35"
                value={userDescription}
                onChange={(e) => setUserDescription(e.target.value)}
              />
              <button
                className="userinfo-submit-button"
                type="submit"
                value="update"
                onClick={update}
              >
                Update
              </button>
            </form>
          </div>
        )}
      </Transition>
      <div className="edit-button-container">
        <p className="userinfo-edit-button">Edit</p>
        <HamburgerArrow buttonWidth={20} {...{ isActive, toggleButton }}/>
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default UserInfo;
