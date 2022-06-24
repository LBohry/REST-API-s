const express = require("express");
const Comment = require("../models/Comment");
const comments_router = express.Router();

//Get all comments by postId
comments_router.get("/:postId", async (req, res) => {
  try {
    //map posts with userId
    const comments = await Comment.find({ postId: req.params.postId });
    res.json(comments);
  } catch (err) {
    res.json({ message: err });
  }
});

//Specific comment by id
comments_router.get("/:_id", async (req, res) => {
  try {
    const comments = await Comment.findById(req.params._id);
    res.json(comments);
  } catch (err) {
    res.json({ message: err });
  }
});

//add Comment

comments_router.post("/", async (req, res) => {
  const jdid = req.body;
  const comment = new Comment({
    postId: jdid.postId,
    commentUser: jdid.commentUser,
    commentBody: jdid.commentBody,
  });

  try {
    const savedComment = await comment.save();
    res.json(savedComment);
  } catch (err) {
    message: err;
  }
});

//delete comment
comments_router.delete("/:_id", async (req, res) => {
  try {
    const removedcomment = await Post.remove({ _id: req.params._id });
    res.json(removedcomment);
  } catch (err) {
    res.json({ message: err });
  }
});

//update comment
comments_router.patch("/:_id", async (req, res) => {
  try {
    const updatedcomment = await Post.findByIdAndUpdate(
      req.params._id,
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedcomment);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = comments_router;
