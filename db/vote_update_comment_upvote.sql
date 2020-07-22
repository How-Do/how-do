UPDATE votes
SET "upvote" = 1,
    "downvote" = 0
WHERE
comment_id = $2 and user_id = $1