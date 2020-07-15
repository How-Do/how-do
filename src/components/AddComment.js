import React, { useState, useEffect } from "react";

function AddComment(props) {
  const [comment, setComment] = useState("");
  const [userId, setUserId] = useState(1); //<-- This needs to be dynamic
  const [commentPic, setCommentPic] = useState("");
  const [postId, setPostId] = useState(props.id);

  console.log(props);
  console.log(props.socket);

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
    <div className="addcomment-container">
      <h3>Comments</h3>
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
  );
}

export default AddComment;
