UPDATE VOTES
SET "upvote"= 0,
    "downvote"= 1
WHERE
comment_id = $2 and user_id = $1