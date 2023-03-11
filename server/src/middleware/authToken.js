const jwt = require("jsonwebtoken");
const { JWT_TOKEN_SECRET } = require("../config/config.js");

const authToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, JWT_TOKEN_SECRET);
    const { name, email } = decoded;

    if (name && email) {
      req.name = name;
      req.email = email;
      next();
    } else {
      res.status(401).send({ message: "authtenation arror" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(401).send({ message: "authtenation arror" });
  }
};

module.exports = authToken;
