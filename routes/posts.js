const express = require("express");
const Post = require("../models/Post");
const posts_router = express.Router();

//Get all posts
posts_router.get("/", async (req, res) => {
  try {
    const posts = await Post.find(); //this will replace the filter i had in react
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//Specific posts by userId
posts_router.get("/:userId", async (req, res) => {
  try {
    //map posts with userId
    const posts = await Post.find({ userId: req.params.userId }); //this will replace the filter i had in react
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//add post

posts_router.post("/", async (req, res) => {
  const post = new Post({
    userId: req.body.userId,
    title: req.body.title,
    description: req.body.description,
    post_body: req.body.post_body,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    message: err;
  }
});

//delete post
posts_router.delete("/:_id", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params._id });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//update post
posts_router.patch("/:_id", async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
    });
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = posts_router;
