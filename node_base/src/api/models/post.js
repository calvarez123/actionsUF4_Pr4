const mongoose = require('mongoose');

// Define the Mongoose schema for posts
const PostSchema = new mongoose.Schema({
  id: Number,
  title: String,
  score: Number,
  viewCount: Number,
  commentCount: Number,
  creationDate: Date,
  answerCount: Number,
  tags: [String],
  ownerUserId: Number
});

// Export the model
module.exports = mongoose.model('Post', PostSchema);
