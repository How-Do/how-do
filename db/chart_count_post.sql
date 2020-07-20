SELECT COUNT(post_id)
FROM posts
WHERE user_id = $1;