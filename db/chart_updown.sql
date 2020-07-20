SELECT COUNT(upvote), COUNT(downvote)
FROM comments
WHERE user_id = $1;