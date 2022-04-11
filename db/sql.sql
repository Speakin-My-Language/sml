-- CREATE TABLE users (
--   id UUID NOT NULL PRIMARY KEY,
--   name VARCHAR (200) NOT NULL,
--   location VARCHAR,
--   handle VARCHAR,
--   repos_url VARCHAR,
--   twitter VARCHAR,
--   company VARCHAR,
--   website VARCHAR,
--   email VARCHAR,
--   node_id VARCHAR,
--   bio TEXT,
--   languages VARCHAR
--   )


-- CREATE TABLE matches (
--   id UUID NOT NULL PRIMARY KEY,
--   matched_user VARCHAR, <- change to uuid eventually
--   is_matched BOOLEAN
--   )

-- this is the table we're pulling all users from for the newProgrammers controller
-- -- CREATE TABLE all_users (
-- --   id VARCHAR NOT NULL PRIMARY KEY
-- -- )

-- grab all users from join of users table and all users table
-- SELECT * FROM users u JOIN all_users a ON u.id = a.id;


-- how to change something in an SQL table: https://www.geeksforgeeks.org/postgresql-change-column-type/
--how to add something to an SQL table: https://www.w3schools.com/sql/sql_alter.asp
-- null does not need to be in quotes, but uuid does



/*
{
  uuid: 556c9d1f-1704-485b-9c6c-ad565a17bc64 
  login: 'mattfemia',
  id: 45702716,
  node_id: 'MDQ6VXNlcjQ1NzAyNzE2',
  avatar_url: 'https://avatars.githubusercontent.com/u/45702716?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/mattfemia',
  html_url: 'https://github.com/mattfemia',
  followers_url: 'https://api.github.com/users/mattfemia/followers',
  following_url: 'https://api.github.com/users/mattfemia/following{/other_user}',
  gists_url: 'https://api.github.com/users/mattfemia/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/mattfemia/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/mattfemia/subscriptions',
  organizations_url: 'https://api.github.com/users/mattfemia/orgs',
  repos_url: 'https://api.github.com/users/mattfemia/repos',
  events_url: 'https://api.github.com/users/mattfemia/events{/privacy}',
  received_events_url: 'https://api.github.com/users/mattfemia/received_events',
  type: 'User',
  site_admin: false,
  name: 'Matt Femia',
  company: null,
  blog: 'https://www.mattfemia.com',
  location: 'New York, NY',
  email: 'mattfemia1@gmail.com',
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 10,
  public_gists: 0,
  followers: 16,
  following: 19,
  created_at: '2018-12-08T00:55:26Z',
  updated_at: '2022-03-09T15:55:10Z',
  private_gists: 0,
  total_private_repos: 66,
  owned_private_repos: 38,
  disk_usage: 2156040,
  collaborators: 1,
  two_factor_authentication: false,
  plan: {
    name: 'free',
    space: 976562499,
    collaborators: 0,
    private_repos: 10000
  }
}
*/