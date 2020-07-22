UPDATE VOTES
  set "upote"= 0,
  set "downvote"= 1,
WHERE
comment_id = $1 and user_id = $2
