select c.comment, u.full_name, p.post_id, p.user_id, p.category, p.description, p.created_at, p.title, p.post_pic from posts p
left join users u on (p.user_id = u.id)
left join comments c on (p.post_id = c.post_id);