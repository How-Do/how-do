import React, { useState, useEffect } from "react";
import AddComment from "./AddComment";
import axios from "axios";

function Post(props) {
  const [userId, setUserId] = useState(1); 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [username, setUsername] = useState("");
  const [commentsArr, setCommentsArr] = useState([]);
  const [postId, setPostId] = useState(props.match.params.id);
  const [vote, setVote] = useState(0)

  useEffect(() => {
    console.log("Props:", props);
    axios.get(`/howdo/post/${postId}`).then((res) => {
      setUserId(res.data.user_id);
      setTitle(res.data.title);
      setDescription(res.data.description);
      setImageUrl(res.data.post_pic);
      setCategory(res.data.category);
      setTimestamp(res.data.created_at);
      setUsername(res.data.username);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`/howdo/comments/${postId}`)
      .then(res => {setCommentsArr(res.data)})
      .catch(error => console.log(error));
  }, [vote]);

  useEffect(() => {
    props.socket.on("sent-comment", (body) => {
      // console.log(body)
      setCommentsArr(body);
    });
  }, []);

  function upvote(comment_id){
    console.log('comment_id', comment_id)
    axios.post(`/howdo/upvote/${comment_id}`)
    setVote(Math.random())
  }

  function downvote(comment_id) {
    // console.log('CommentsArr', commentsArr);
    axios.post(`/howdo/downvote/${comment_id}`)
    setVote(Math.random())
  }

  const commentsMap = commentsArr.map((comment) => {
    // console.log('COMMENT',comment)
    return (
      <div className="post-comment-container">
        <p className="minor-info-text">
          {comment.username} at {comment.created_at}
        </p>
        <h4 id="comment-text">{comment.comment}</h4>
        <br />
        <p className="vote-info-text"> ↑ Upvotes: {comment.upvote}</p>
        <p className="vote-info-text">↓ Downvotes: {comment.downvote}</p>
        <div className="vote-buttons-container">
          <button
            className="vote-button"
            onClick={() => upvote(comment.comment_id)}
          >
            {" "}
            upvote{" "}
          </button>
          <button
            className="vote-button"
            onClick={() => downvote(comment.comment_id)}
          >
            {" "}
            downvote{" "}
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="Post-Container">
      <div className="post-container">
        <div className="post-info-top-container">
          <p className="minor-info-text" id="category-minor-text">
            {category}
          </p>
          <p className="minor-info-text">
            Posted by {username}
          </p>
          <p className="minor-info-text">at {timestamp}
          </p>
        </div>
        <div>
          <h2 className="post-title">{title}</h2>
          <img src={imageUrl} alt="post" className="post-pic" width="350" />
          <p className="post-description">{description}</p>
        </div>
      </div>
      <div className="Add-Comments-Container">
        <br />
        <AddComment id={postId} socket={props.socket} />
      </div>
      <div>{commentsMap}</div>
    </div>
  );
}

export default Post;
