const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  post_body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  }, //hedhi bech twali date li hbat feha l post
});

module.exports = mongoose.model("Posts", PostSchema);
