const express = require("express");
const User = require("../models/User");
const users_router = express.Router();

//Get all users
users_router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

//Specific User
users_router.get("/:_id", async (req, res) => {
  try {
    const user = await User.findById(req.params._id);
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

//add User
users_router.post("/", async (req, res) => {
  const jdid = req.body;
  const user = new User({
    name: jdid.name,
    username: jdid.username,
    email: jdid.email,
    phone: jdid.phone,
    job: jdid.job,
  });

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    message: err;
  }
});

//update User
users_router.patch("/:_id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
    });

    res.json(updatedUser);
    res.json({ message: err });
  } catch (err) {
    message: err;
  }
});

//delete User
users_router.delete("/:_id", async (req, res) => {
  try {
    const removedUser = await User.findByIdAndRemove(req.params._id);
    res.json(removedUser);
  } catch (err) {
    message: err;
  }
});
module.exports = users_router;
