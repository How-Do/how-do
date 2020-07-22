select count(downvote) from votes
where comment_id = $1 and downvote > 0;