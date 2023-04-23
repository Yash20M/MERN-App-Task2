const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");

dotenv.config({ path: "./config.env" });

const user = require("./model/userSchema");
require("./DataBase/connection");

const port = process.env.PORT;

// Link the Router File

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
app.use(cors());
app.use(express.json());
app.use(require("./router/auth"));

// Middelwares
const middleware = (req, res, next) => {
  console.log("THis is middleware");
  next();
};

app.get("/", middleware, (req, res) => {
  res.send("THis is Home Page");
});

app.get("/contact", (req, res) => {
  res.send("THis is contact Page");
});

app.get("/login", (req, res) => {
  res.send("THis is Login Page");
});

app.get("/register", (req, res) => {
  res.send("This is from router");
});

app.listen(port, () => {
  console.log("Server started at port", port);
});
