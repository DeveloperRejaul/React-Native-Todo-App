const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  todos: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Todo",
      required: true,
    },
  ],
});

//Export the model
const User = mongoose.model("User", userSchema);
module.exports = User;
