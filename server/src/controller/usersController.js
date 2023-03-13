const Todo = require("../models/todosModel.js");
const User = require("../models/usersModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config.js");
const saltRounds = 10;

const acssesUsers = async (req, res) => {
  try {
    const allUsers = await User.find()
      .select({ name: 1 })
      .populate("todos", "title content");
    res.status(200).send({ users: allUsers });
  } catch (error) {
    res.status(400).send({ message: "Error: Somthing Wrong" });
  }
};

const acssesUserById = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id })
      .select({ name: 1, image: 1 })
      .populate("todos", "title content");
    res.status(200).send({ user: user });
  } catch (error) {
    res.status(400).send({ message: "Error: Somthing Wrong" });
  }
};

const createUser = async (req, res) => {
  const profilePicruteName = req.file.filename;
  const { name, email, password } = req.body;

  try {
    const bcryptedPassword = await bcrypt.hash(password, saltRounds);
    const profilePictureURL = `${req.protocol}://${req.get(
      "host"
    )}/${profilePicruteName}`;

    const newUser = await User.create({
      name,
      email,
      password: bcryptedPassword,
      image: profilePictureURL,
    });
    await res.status(200).send({ user: newUser });
  } catch (error) {
    await res.status(400).send({ message: "Error: Somthing Wrong" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId, name, email, password } = req.body;

    const bcryptedPass = await bcrypt.hash(password, saltRounds);
    const updatedUser = await User.findByIdAndUpdate(
      { _id: userId },
      {
        $set: {
          name,
          email,
          password: bcryptedPass,
        },
      },
      { new: true }
    );

    res.status(200).send({ message: "user updated", user: updatedUser });
  } catch (error) {
    res.status(400).send({ message: "Error: Somthing Wrong" });
  }
};

const deletUser = async (req, res) => {
  try {
    const { userId } = req.body;

    await Todo.deleteMany({ user: userId });
    const deletedUser = await User.findByIdAndDelete({ _id: userId });
    res.status(200).send({ message: "detete done", user: deletedUser });
  } catch (error) {
    res.status(400).send({ message: "Error: Somthing Wrong" });
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email: email });
    const isValidPass = await bcrypt.compare(password, findUser.password);
    if (isValidPass) {
      const token = jwt.sign(
        {
          name: findUser.name,
          email: findUser.email,
        },
        config.JWT_TOKEN_SECRET,
        { expiresIn: "15d" }
      );
      res.status(200).send({ token: token, userid: findUser._id });
    } else {
      res.status(200).send({ message: "Authentication filled" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(200).send({ message: "Authentication filled" });
  }
};

module.exports = {
  acssesUsers,
  createUser,
  updateUser,
  deletUser,
  acssesUserById,
  loginUser,
};
