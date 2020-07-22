select count(v.downvote) from votes v
left join comments c on (v.user_id = c.user_id)
where c.user_id = $1 and v.downvote > 0;