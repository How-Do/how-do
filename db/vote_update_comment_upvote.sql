UPDATE VOTES
  set "upote"= 1,
  set "downvote"= 0,
WHERE
comment_id = $1 and user_id = $2
