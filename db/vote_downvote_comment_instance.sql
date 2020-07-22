INSERT  INTO VOTES(
  user_id,
  comment_id,
  downvote
) VALUES (
  $1, $2,
  1
)
