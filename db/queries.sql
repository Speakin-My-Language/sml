--- Get matches for each
SELECT * FROM matches m INNER JOIN users u ON m.id = u.id WHERE u.node_id = 'MDQ6VXNlcjQ1NzAyNzE2';

--- 
INSERT INTO users 
(name, location, handle, repos_url, twitter, 
company, website, email, node_id, bio, languages)
VALUES ('Matt Femia', 'New York, NY', 'mattfemia', '', $5, $6, $7, $8, $9, $10, null)


-- Check if User is in database before inserting into database (by node_id)
SELECT u.node_id FROM users u WHERE u.node_id = $1;