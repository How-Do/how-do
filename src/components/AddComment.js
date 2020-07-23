import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'

function AddComment(props) {
  const [comment, setComment] = useState("");
  const [commentPic, setCommentPic] = useState("");
  const [postId, setPostId] = useState(props.id);

  console.log(props);
  console.log(props.socket);

  const userId = useSelector(
    (reduxState) => reduxState.reducer.user ? reduxState.reducer.user.user_id : null
  )

  function addComment(e) {
    e.preventDefault();
    props.socket.emit("create-comment", {
      userId,
      postId,
      comment,
      commentPic,
    });
    setComment("");
    setCommentPic("");
  }

  return (
    <div className="idk">
      <h3>Comments: This is how we do it!</h3>
      {userId ? 
        <div className="addcomment-container">
          <h4>Add Comment</h4>
          <form name="" className="commentForm">
            <textarea
              placeholder="Your best instructions and advice...🦝"
              name="comment"
              rows="3"
              cols="30"
              required
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <input
              type="url"
              placeholder="Add an image url here if you would like..."
              name="commentPic"
              value={commentPic}
              required
              onChange={(e) => setCommentPic(e.target.value)}
            />
            <button type="submit" value="addComment" onClick={addComment}>
              Answer
            </button>
          </form>
        </div>
      : null}
    </div>
  );
}

export default AddComment;
