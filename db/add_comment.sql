insert into comments
(user_id, post_id, comment, comment_pic)
values
($1, $2, $3, $4);
select * from comments
where post_id = $2;