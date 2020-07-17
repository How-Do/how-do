SELECT COUNT(comment_id)
FROM comments
WHERE user_id = $1;