select p.post_id, p.user_id, p.category, p.description, p.created_at, p.title, p.post_pic, u.username from posts p
left join users u on (p.user_id = u.id)
where post_id = $1;
-- need to add join to get username