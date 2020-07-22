module.exports = {
upvoteComment: async (req, res) => {
  const db = req.app.get("db");
  const {user_id} = req.session.user;
  const {comment_id} = req.params;
  console.log('comment_id',typeof comment_id)
  console.log('user_id',user_id)

  if(!req.session.user) {
    res.status(500).send('Please log in to vote');
  }
  const hasVotedOnComment  = await db.vote_check_if_voted_comment(
    user_id,
    comment_id,
  );

  if (hasVotedOnComment.length ===0) {
  //  await db.vote_upvote_comment(commentId);
    await db.vote_upvote_comment_instance(user_id, comment_id);
  } else{

    //await db.vote_upvote_comment_2(commentId);
    await db.vote_update_comment_upvote(user_id, comment_id);
  }
},

downvoteComment: async (req, res) => {
    const db = req.app.get('db')
    const {user_id} = req.session.user
    const {comment_id} = req.params
    const hasVotedOnComment  = await db.vote_check_if_voted_comment(
      user_id,
      comment_id,
    );


    if (hasVotedOnComment.length === 0) {
        //if user had downvoted
        await db.vote_downvote_comment_instance(user_id, comment_id)
    } else {
        await db.vote_update_comment_downvote(user_id, comment_id)
    }

    res.sendStatus(200)
}
}
