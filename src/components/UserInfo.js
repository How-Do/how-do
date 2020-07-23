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

  // function update(e) {
  //   e.preventDefault();
  //   socket.emit("update-user-info", {
  //     userId,
  //     username,
  //     email,
  //     password,
  //     profilePic,
  //     userDescription,
  //   });
  //   // setTitle("");
  //   // setDescription("");
  //   // setImageUrl("");
  //   // setCategory("");
  //   // document.getElementById("howDoForm").reset();
  //   toggleButton();
  // }
  //console.log('USERID', userId);
  console.log("USER PROPS 2", userId);


//   useEffect(() => {
//     axios
//         .get('/howdo/posts')
//         .then((res) => {
//             setPosts(res.data)
//             dispatch(setUsers(res.data))
//         })
//         .catch((error) => console.log(error))
// }, [])


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
        alert("Could not update user information");
      });
      toggleButton();
  };

  return (
    <div className="userinfo-green-container">
      <Transition timeout={0} in={isActive} appear>
        {(status) => (
          <div className={`userinfo-box userinfo-box-${status}`}>
            <h3 className="info-text">Update User Info</h3>
            <form className="userinfo-form" id="howDoForm">
              <p className="userinfo-form-text">Username:</p>
              <input
                className="addpost-form-input"
                type="text"
                name="username"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <p className="userinfo-form-text">Email:</p>
              <input
                className="addpost-form-input"
                type="text"
                name="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="userinfo-form-text">Password:</p>
              <input
                className="addpost-form-input"
                type="password"
                name="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
               <p className="addpost-form-text">Profile Picture URL:</p>
              <input
                className="addpost-form-input"
                type="url"
                name="profilePic"
                value={profilePic}
                required
                onChange={(e) => setProfilePic(e.target.value)}
              />
              <p className="addpost-form-text">Description:</p>
              <textarea
                className="addpost-textarea"
                name="userDescription"
                rows="3"
                cols="50"
                required
                value={userDescription}
                onChange={(e) => setUserDescription(e.target.value)}
              />
              <button
                className="addpost-submit-button"
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
        <HamburgerArrow buttonWidth={20} {...{ isActive, toggleButton }} />
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default UserInfo;
