import React, {useState, useEffect} from "react";
import AddComment from "./AddComment";
import axios from "axios";

//This component still needs to be updated to be able to pull the user from session once login is working

function Post(props) {
  const [userId, setUserId] = useState(1); //<-- This needs to be dynamic
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [commentsArr, setCommentsArr] = useState([]);
  const [postId, setPostId] = useState(props.match.params.id);

  useEffect(() => {
    console.log("Props:", props);
    axios.get(`/howdo/post/${postId}`).then(res => {
      console.log(res.data);
      setUserId(res.data.user_id);
      setTitle(res.data.title);
      setDescription(res.data.description);
      setImageUrl(res.data.post_pic);
      setCategory(res.data.category);
      setTimestamp(res.data.created_at);
    });
  }, []);

  useEffect(() => {
    // console.log('POST ID', postId)
    axios
      .get(`/howdo/comments/${postId}`)
      .then(res => {setCommentsArr(res.data)})
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    props.socket.on("sent-comment", body => {
      // console.log(body)
      setCommentsArr(body);
    });
  }, []);

  function upvote(comment_id){
    console.log('comment_id', comment_id)
    axios.post(`/howdo/upvote/${comment_id}`)}

  function downvote(comment_id){
    // console.log('CommentsArr', commentsArr);
    axios.post(`/howdo/downvote/${comment_id}`)}

  const commentsMap = commentsArr.map(comment => {
    // console.log('COMMENT',comment)
    return(
      <div>
        {comment.comment}
        <div className="user-info">{comment.full_name}</div>
        <div className="">{comment.created_at}</div>
        <button onClick={() => upvote(comment.comment_id)}> upvote </button>
        <p>Upvotes: {comment.upvote}</p>
        <p>Downvotes: {comment.downvote}</p>
        <button onClick={() => downvote(comment.comment_id)}> downvote </button>
      </div>
    )
  });

  return (
    <div className="Post-Container" style={{backgroundColor: "lightblue"}}>
      <div>
        <p>{category}</p>
        <p>Username</p>
        <div>{timestamp}</div>
      </div>
      <div>
        <p>{title}</p>
        <img src={imageUrl} alt="post" width="200" height="200" />
        <p>{description}</p>
      </div>
      <div className="Comments-Container">
        <br />
        <AddComment id={postId} socket={props.socket} />
      </div>
      <div>{commentsMap}</div>
    </div>
  );
}

export default Post;
