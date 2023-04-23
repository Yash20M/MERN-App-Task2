const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");

require("../DataBase/connection");
const User = require("../model/userSchema");
const authenticate = require("../middleware/authenticate");

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, confirmPassword } = req.body;

  if (!name || !email || !phone || !work || !password || !confirmPassword) {
    return res.status(422).json({ error: "PLease fill all the details" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email is already in use" });
    } else if (password != confirmPassword) {
      res.status(422).json({ err: "Message password didnt match" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        confirmPassword,
      });

      console.log(password);
      const userRegistered = await user.save();
      if (userRegistered) {
        return res
          .status(201)
          .json({ message: "User Registered Successfully" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  // console.log(req.body);
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please fill all the details" });
    }

    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      const token = await userLogin.generateAuthToken();
      // console.log(token);

      res.cookie("jwtCookie", token, {
        expires: new Date(Date.now() + 258900000),
        httpOnly: true,
      });

      if (!isMatch) {
        return res.status(400).json({ message: "Invalid Login Credentials" });
      } else {
        return res.status(201).json({ message: "Logged In Successfully" });
      }
    } else {
      return res.status(400).json({ message: "Invalid Login Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/about", authenticate, (req, res) => {
  res.send("HEllo");
  console.log(req.rootUser);
});

module.exports = router;
