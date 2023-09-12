const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dbConnect = require("./db/dbConnect");
const User = require("./db/userModel");
const express = require("express");
const auth = require("./auth");

const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());

dbConnect();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.post("/register", (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      const user = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      user
        .save()
        .then((result) => {
          res.status(201).send({
            message: "User created successfuly",
            result,
          });
        })
        .catch((e) => {
          res.status(500).send({
            message: "Error creating user",
            e,
          });
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Password was not hash successfuly",
        err,
      });
    });
});

app.post("/login", (req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      bcrypt
        .compare(req.body.password, user.password)
        .then((pwdCheck) => {
          if (!pwdCheck) {
            return res.status(400).send({
              message: "Password does not match",
              e,
            });
          }
          const token = jwt.sign(
            {
              userID: user._id,
              userUsername: user.username,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );
          res.status(200).send({
            message: "Login Successful",
            username: user.username,
            token,
          });
        })
        .catch((e) => {
          res.status(400).send({
            message: "Password does not match",
            e,
          });
        });
    })
    .catch((err) => {
      res.status(404).send({
        message: "Username not found",
        err,
      });
    });
});

app.get("/free-endpoint", (req, res) => {
  res.json({
    message: "You are free to access me anytime",
  });
});

app.get("/auth-endpoint", auth, (req, res) => {
  res.json({
    message: "You are authorized to access me",
  });
});

app.listen(PORT, () => console.log(`Serve is running on port ${PORT}`));

module.exports = app;
