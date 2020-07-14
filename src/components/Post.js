import React, { useState, useEffect } from "react";
import AddComment from './AddComment';
import axios from 'axios'

//This component still needs to be updated to be able to pull the user from session once login is working

function Post(props) {
  const [userId, setUserId] = useState(1); //<-- This needs to be dynamic
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
      console.log('Props:', props);
      
        axios.get(`/howdo/post/${props.match.params.id}`)
        .then(res => {   
            console.log(res.data)        
            setUserId(res.data.user_id)
            setTitle(res.data.title)
            setDescription(res.data.description)
            setImageUrl(res.data.post_pic)
            setCategory(res.data.category)
            setTimestamp(res.data.created_at)
        })
}, [])

  return (
    <div className="Post-Container" style={{backgroundColor: "lightblue"}}>
      <div>
        <p>{category}</p>
        <p>Username</p>
        <div>{timestamp}</div>
      </div>
      <div>
        <p>{title}</p>
        <img />
        <p>{description}</p>
      </div>
      <div className="Comments-Container">
        <AddComment/>
      </div>

      {/* <form name='howDoForm' className='howDoForm'> */}
      {/* <input
                    type='text'
                    placeholder='How Do I...'
                    name='title'
                    value={title}
                    required
                    onChange={(e) => setTitle(e.target.value)}/>
                <textarea
                    placeholder='Add any additional details/description here...🦝'
                    name='description'
                    rows='3'
                    cols='30'
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}/>
                <input
                    type='url'
                    placeholder='Add an image url here if you would like...'
                    name='image_url'
                    value={imageUrl}
                    required
                    onChange={(e) => setImageUrl(e.target.value)}/>
                <select id='status' name='category' onChange={(e) => setCategory(e.target.value)}>
                    <option value=''>What can does this belong in?</option>
                    <option value='home_improvement'>Home Improvement</option>
                    <option value='hobbies'>Hobbies</option>
                    <option value='life_hacks'>Life Hacks</option>
                    <option value='food_and_drink'>Food & Drink</option>
                    <option value='outdoors'>Outdoors</option>
                </select>   
                <button
                    type='submit'
                    value='addHowDo'
                    onClick={() => socket.emit("create-post", {userId, title, description, imageUrl, category})}>Save Changes</button> */}
      {/* </form> */}
    </div>
  );
}

export default Post;
