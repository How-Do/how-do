select 
c.comment_id, 
c.user_id, 
c.created_at, 
c.comment_pic,
c.comment, 
u.username,
p.post_id
from comments c
join users u on (c.user_id = u.id)
join posts p on (c.post_id = p.post_id)
where p.post_id = $1;