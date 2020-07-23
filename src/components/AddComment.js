import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function AddComment(props) {
  const [comment, setComment] = useState("");
  const [commentPic, setCommentPic] = useState("");
  const [postId, setPostId] = useState(props.id);

  console.log(props);
  console.log(props.socket);

  const userId = useSelector((reduxState) =>
    reduxState.reducer.user ? reduxState.reducer.user.user_id : null
  );

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
    <div className="post-container" id="add-comment-container">
      <h3 className="add-comment-title">Leave a comment:</h3>
      <form name="commentForm" className="commentForm">
        <textarea
        className="add-comment-input"
          placeholder="Your best instructions and advice...🦝"
          name="comment"
          rows="3"
          cols="30"
          required
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        {/* <input
        className="add-comment-input"
          type="url"
          placeholder="Optional Image URL"
          name="commentPic"
          value={commentPic}
          required
          onChange={(e) => setCommentPic(e.target.value)}
        /> */}
        <button className="add-comment-button" type="submit" value="addComment" onClick={addComment}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddComment;
