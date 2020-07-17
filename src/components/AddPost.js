import React, { useState, useCallback } from "react";
import "./../styles/styles.css";
import { HamburgerArrow } from "react-animated-burgers";
import { Transition } from "react-transition-group";

//This component still needs to be updated to be able to pull the user from session once login is working

function AddPost({ socket }) {
  const [userId, setUserId] = useState(1); //<-- This needs to be dynamic
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");

  const [isActive, setIsActive] = useState(false);
  const toggleButton = useCallback(() => setIsActive((pre) => !pre));

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
    document.getElementById('howDoForm').reset()
  }

  return (
    <div className="AddPost-green-container">
      <Transition timeout={2000} in={isActive} appear>
        {(status) => (
          <div className={`box box-${status}`}>
            <h3 className="how-text">Ask a Question</h3>
            <form className="add-post-form" id="howDoForm">
            {/* <h3 className="how-text">Ask a Question</h3> */}
            <p className="addpost-form-text">How Do I:</p>
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
              <button className="addpost-submit-button"
              type="submit" value="addHowDo" onClick={addPost}>
                Ask
              </button>
            </form>
          </div>
        )}
      </Transition>
      <HamburgerArrow {...{ isActive, toggleButton }} />
    </div>
  );
}

export default AddPost;
