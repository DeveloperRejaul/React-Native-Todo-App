const mongoose = require("mongoose");
require("dotenv").config();

const config = {
  PORT: process.env.PORT || 4000,

  dbConnecte: async () => {
    await mongoose.connect(
      process.env.DBURL || "mongodb://127.0.0.1:27017/TodoApp"
    );
    console.log("database connected");
  },
};

module.exports = config;
