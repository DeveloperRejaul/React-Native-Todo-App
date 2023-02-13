const Todo = require("../models/todosModel.js");
const User = require("../models/usersModel.js");

const acssesTodos = async (req, res) => {
  try {
    const allTodos = await Todo.find().populate("user", "name profilePic -_id");
    res.status(200).send({ Todos: allTodos });
  } catch (error) {
    res.status(400).send({ message: "Error: Somthing Wrong" });
  }
};

const createTodo = async (req, res) => {
  try {
    const { title, content, userId } = req.body;
    const todo = new Todo({
      title,
      content,
      user: userId,
    });
    const newTodo = await todo.save();
    // updata user data
    await User.updateOne(
      { _id: userId },
      {
        $push: {
          todos: newTodo._id,
        },
      }
    );

    res.status(200).send({ todo: newTodo });
  } catch (error) {
    res.status(400).send({ message: "Error: Somthing Wrong" });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { todoId, title, content } = req.body;
    const newTodo = await Todo.findByIdAndUpdate(
      { _id: todoId },
      {
        $set: {
          title,
          content,
        },
      },
      { new: true }
    );
    res.status(200).send({ todo: newTodo });
  } catch (error) {
    res.status(400).send({ message: "Error: Somthing Wrong" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { todoId } = req.body;
    const deletedTodo = await Todo.findByIdAndDelete({ _id: todoId });
    res.status(200).send({ message: "delete done", todo: deletedTodo });
  } catch (error) {
    res.status(400).send({ message: "Error: Somthing Wrong" });
  }
};

module.exports = {
  acssesTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
