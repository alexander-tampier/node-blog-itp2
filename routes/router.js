const express = require('express');

const Post = require('../model/post');

const router = express.Router();

/**
 * Get all the posts.
 * @type {Post}
 */
router.get('/posts', (req, res) => {
  Post.find({}).exec((error, posts) => {
    if (error) { return res.send(500, { error }); }
    return res.json({ posts });
  });
});

/**
 * Get a single post.
 * @type {Post}
 */
router.get('/posts/:post_id', (req, res) => {
  Post.findOne({
    _id: req.params.post_id,
  }, (error, post) => {
    if (error) { return res.send(500, { error }); }
    return res.json({ post });
  });
});

/**
 * Create a post.
 * @type {Post}
 */
router.post('/posts', (req, res) => {
  const post = new Post(req.body);
  post.save((error, result) => {
    if (error) { return res.send(500, { error }); }
    return res.status(201).json(result);
  });
});

/**
 * Update a post with new info.
 * @type {Post}
 */
router.put('/posts/:post_id', (req, res) => {
  Post.findByIdAndUpdate(req.params.post_id, req.body, (error) => {
    if (error) { return res.send(500, { error }); }
    return res.send({ success: true });
  });
});

/**
 * [_id description]
 * @type {Post}
 */
router.delete('/posts/:post_id', (req, res) => {
  Post.remove({
    _id: req.params.post_id,
  }, (error) => {
    if (error) { return res.send(500, { error }); }
    return res.send({ success: true });
  });
});

module.exports = router;
