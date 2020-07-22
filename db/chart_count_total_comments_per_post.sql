SELECT 
COUNT(c.comment_id)
FROM posts p
left join comments c on (p.post_id = c.post_id)
WHERE p.user_id = $1;