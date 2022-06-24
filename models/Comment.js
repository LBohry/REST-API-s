const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
  postId: {
    type: String,
    required: true,
  },
  commentUser: {
    type: String,
    required: true,
  },
  commentBody: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Comments", CommentSchema);
