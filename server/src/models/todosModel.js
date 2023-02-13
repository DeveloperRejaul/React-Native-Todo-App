const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

//Export the model
const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
