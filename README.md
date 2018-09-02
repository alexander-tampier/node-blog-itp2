# Nodejs API Backend

Basic Nodejs Backend for manipulating posts out of the database

## Express Router and Routes

Here is an overview of the routes, what they will do, and the HTTP Verb used to access it.

| Route               | HTTP Verb | Description                  |
|---------------------|-----------|------------------------------|
| /api/posts          | `GET`       | Get all the posts.           |
| /api/posts          | `POST`      | Create a post.               |
| /api/posts/:post_id | `GET`       | Get a single post.           |
| /api/posts/:post_id | `PUT`       | Update a post with new info. |
| /api/posts/:post_id | `DELETE`    | Delete a post.               |
