const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const cors = require("cors");

//Import ROUTES
const postsRoute = require("./routes/posts");
const usersRoute = require("./routes/users");
const commentsRoute = require("./routes/comments");

//Middlewares

app.use(cors());
app.use(bodyParser.json());

//ROUTES
app.get("/", (req, res) => {
  res.send("fl dar");
});

app.use("/posts", postsRoute);
app.use("/users", usersRoute);
app.use("/comments", commentsRoute);

//Connect to DB

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to the basedoudoné");
});
//How to start listening to the server
app.listen(4000);
