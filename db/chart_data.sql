SELECT 
*
FROM posts p
WHERE user_id = $1;


-- SELECT 
-- *
-- FROM posts p
-- left join comments c on (p.post_id = c.post_id)
-- WHERE p.user_id = $1;