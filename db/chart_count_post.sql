SELECT COUNT(post_id)
FROM posts
WHERE user_id = $1;

-- SELECT COUNT(comment_id)
-- FROM comments
-- WHERE user_id = $1;

-- SELECT 
-- COUNT(p.post_id),
-- COUNT(c.comment_id)
-- FROM posts p
-- left join comments c on (p.post_id = c.post_id)
-- WHERE p.user_id = $1;