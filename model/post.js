const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: String,
  content: String,
  image_source: String,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
