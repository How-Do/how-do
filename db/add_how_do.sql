insert into posts
(user_id, title, description, post_pic, category)
values
($1, $2, $3, $4, $5);

select * from posts;