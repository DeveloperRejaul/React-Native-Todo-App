const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
require("dotenv").config();

// configer multer file uploads
const storage = multer.diskStorage({
  destination: (req, res, callback) => {
    callback(null, "src/uploads/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

// config
const config = {
  PORT: process.env.PORT || 4000,
  dbConnecte: async () => {
    await mongoose.connect(
      process.env.DBURL || "mongodb://127.0.0.1:27017/TodoApp"
    );
    console.log("database connected");
  },
  upload: upload,

  cloudinaryConfig: () => {
    // Cloudinary Configuration
    cloudinary.config({
      cloud_name: "dwvtgpici",
      api_key: "285945558357813",
      api_secret: "khuPFA09D_QqaPCycinRmwWgb-Y",
    });
  },
  cloudinary: cloudinary,
};

module.exports = config;
