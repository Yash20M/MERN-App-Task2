const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookie.jwtCookie;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    console.log(verifyToken);

    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens:token": token,
    });

    if (!rootUser) {
      throw new Error("No user");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userId = rootUser._id;

    next();
  } catch (err) {
    console.log(err);
    res.status(401).send("Unauthrized");
  }
};

module.exports = authenticate;
