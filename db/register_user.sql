INSERT INTO users (username, profile_pic, password, email)
VALUES ($1, $2, $3, $4);

SELECT * FROM users
WHERE username = $1;