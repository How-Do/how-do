select 
c.comment_id, 
c.user_id, 
c.created_at, 
c.comment_pic, 
c.comment, 
u.full_name, 
p.id
from posts p
left join users u on (p.user_id = u.id)
left join comments c on (p.id = c.post_id)
where p.id = $1;