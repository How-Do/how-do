UPDATE users SET 
username = $2, 
email = $3, 
password = $4,
profile_pic = $5,   
user_description = $6
WHERE id = $1
returning *
;