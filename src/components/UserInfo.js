import React, { useState, useCallback, useEffect } from "react";
import "./../styles/styles.css";
//import { HamburgerArrow } from "react-animated-burgers";
import { Transition } from "react-transition-group";
import { useSelector } from 'react-redux'


function UserInfo({ socket }) {

//     const user = useSelector((reduxState) => reduxState.reducer.user);

//   const [email, setEmail] = useState(user.email);
//   const [password, setPassword] = useState(user.password);
//   const [phone, setPhone] = useState(user.pone);
//   const [userName, setFirstName] = useState(user.first_name);
//   const [profilePic, setProfilePic] = useState(user.profile_pic);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [isActive, setIsActive] = useState(false);
  const toggleButton = useCallback(() => setIsActive((pre) => !pre));
  
  
  const userId = useSelector(
    (reduxState) => reduxState.reducer.user ? reduxState.reducer.user.user_id : null
  )

  function addPost(e) {
    e.preventDefault();
    socket.emit("create-post", {
      userId,
      title,
      description,
      imageUrl,
      category,
    });
    setTitle("");
    setDescription("");
    setImageUrl("");
    setCategory("");
    document.getElementById('howDoForm').reset();
    toggleButton();
  }
  //console.log('USERID', userId);
  console.log('USER PROPS 2', userId);

  return (
    <div className="userinfo-green-container">
      <Transition timeout={100} in={isActive} appear>
        {(status) => (
          <div className={`box box-${status}`}>
            <h3 className="how-text">Update User Info</h3>
            <form className="add-post-form" id="howDoForm">
            {/* <h3 className="how-text">Ask a Question</h3> */}
            <p className="userinfo-form-text">How Do I:</p>
              <input className="addpost-form-input"
                type="text"
                //placeholder="How Do I..."
                name="title"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
              />
              <p className="addpost-form-text">Additional Details:</p>
              <textarea className="addpost-textarea"
                //placeholder="Add any additional details/description here...🦝"
                name="description"
                rows="3"
                cols="50"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <p className="addpost-form-text">Optional Image URL:</p>
              <input className="addpost-form-input"
                type="url"
                //placeholder="Add an image url here if you would like..."
                name="image_url"
                value={imageUrl}
                required
                onChange={(e) => setImageUrl(e.target.value)}
              />
              <p className="addpost-form-text">Category:</p>
              <select className="addpost-dropdown"
                id="status"
                name="category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option  className="addpost-dropdown"
                value="" selected>What bin does this belong in?</option>
                <option  className="addpost-dropdown"value="home_improvement">Home Improvement</option>
                <option  className="addpost-dropdown"
                value="hobbies">Hobbies</option>
                <option  className="addpost-dropdown"
                value="life_hacks">Life Hacks</option>
                <option  className="addpost-dropdown"
                value="food_and_drink">Food & Drink</option>
                <option  className="addpost-dropdown"
                value="outdoors">Outdoors</option>
              </select>
              <button 
              className="addpost-submit-button"
              type="submit" 
              value="addHowDo" 
              onClick={addPost}
              >
                Ask
              </button>
            </form>
          </div>
        )}
      </Transition>
      <button {...{ isActive, toggleButton }}>Edit</button>
    </div>
  );
}

export default UserInfo;