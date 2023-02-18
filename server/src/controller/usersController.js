const User = require("../models/usersModel.js");

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
      .select({ name: 1 })
      .populate("todos", "title content");
    res.status(200).send({ user: user });
  } catch (error) {
    res.status(400).send({ message: "Error: Somthing Wrong" });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({
      name,
      email,
      password,
    });
    await newUser.save();
    res.status(200).send({ user: newUser });
  } catch (error) {
    res.status(400).send({ message: "Error: Somthing Wrong" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId, name, email, password } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      { _id: userId },
      {
        $set: {
          name,
          email,
          password,
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
    const deletedUser = await User.findByIdAndDelete({ _id: userId });
    res.status(200).send({ message: "detet done", user: deletedUser });
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
};
