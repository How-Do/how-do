select count(upvote) from votes
where comment_id = $1 and upvote > 0;