module.exports = {
  upvoteComment: async (req, res) => {
    const db = req.app.get("db");
    const {user_id} = req.session.user;
    const {comment_id} = req.params;
    console.log('comment_id', comment_id)
    console.log('user_id',user_id)

    // if(!req.session.user) {
    //   res.status(500).send('Please log in to vote');
    // }
    try {
      const hasVotedOnComment  = await db.vote_check_if_voted_comment(
        +user_id,
        +comment_id,
      );
        console.log('has voted', hasVotedOnComment);
      
        if (hasVotedOnComment.length === 0) {
        //  if user has not voted
        console.log('Upvote');
        await db.vote_upvote_comment_instance(+user_id, +comment_id);
      } else {
        console.log('update to upvote');
        //if user has voted
        await db.vote_update_comment_upvote(+user_id, +comment_id);
    
        res.sendStatus(200)
      }
    } catch (error) {
      console.log(error);
    }
  },

  downvoteComment: async (req, res) => {
      const db = req.app.get('db')
      const {user_id} = req.session.user
      const {comment_id} = req.params
      
      try {
        const hasVotedOnComment  = await db.    
      vote_check_if_voted_comment(
        +user_id,
        +comment_id,
      );
      
      console.log('comment_id', comment_id)
      console.log('user_id',user_id)


      if (hasVotedOnComment.length === 0) {
          await db.vote_downvote_comment_instance(+user_id, +comment_id)
      } else {
          await db.vote_update_comment_downvote(+user_id, +comment_id)
      }

      res.sendStatus(200)

      } catch (error) {
        console.log(error);
      }
    }
}
