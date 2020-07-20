select 
c.comment_id, 
c.user_id, 
c.created_at, 
c.comment_pic, 
c.comment, 
u.username,
p.post_id
from posts p
left join users u on (p.user_id = u.id)
left join comments c on (p.post_id = c.post_id)
where p.post_id = $1;