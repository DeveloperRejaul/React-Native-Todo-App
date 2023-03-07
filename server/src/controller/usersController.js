const { cloudinary } = require("../config/config.js");
const Todo = require("../models/todosModel.js");
const User = require("../models/usersModel.js");
const bcrypt = require("bcrypt");
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
  const file = req.files.image;
  const result = await cloudinary.uploader.upload(file.tempFilePath, {
    public_id: Date.now(),
    resource_type: "auto",
    folder: "images",
  });

  const { name, email, password } = JSON.parse(req.body.data);
  try {
    bcrypt.hash(password, saltRounds, async function (err, hash) {
      const newUser = await User.create({
        name,
        email,
        password: hash,
        image: result.url,
      });
      await res.status(200).send({ user: newUser });
    });
  } catch (error) {
    await res.status(400).send({ message: "Error: Somthing Wrong" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId, name, email, password } = req.body;

    bcrypt.hash(password, saltRounds, async function (err, hash) {
      const updatedUser = await User.findByIdAndUpdate(
        { _id: userId },
        {
          $set: {
            name,
            email,
            password: hash,
          },
        },
        { new: true }
      );

      res.status(200).send({ message: "user updated", user: updatedUser });
    });
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

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const findUser = await User.findOne({ email: email });
    bcrypt.hash(password, saltRounds, async function (err, hash) {
      if (findUser.password === hash) {
        res.status(200).send({ user: findUser });
      } else {
        res.status(400).send({ message: "user not found" });
      }
    });
  } catch (error) {
    res.status(400).send({ message: "Error: Somthing Wrong" });
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
