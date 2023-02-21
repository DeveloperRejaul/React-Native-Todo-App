const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const app = express();
const config = require("./src/config/config.js");
const usersRoute = require("./src/routers/usersRoute.js");
const todosRoute = require("./src/routers/todosRoute.js");

config.dbConnecte();
config.cloudinaryConfig();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(
  fileUpload({
    useTempFiles: true,
    limits: { fileSize: 50 * 2024 * 1024 },
    // tempFileDir: "/15.cloudinary-image-upload/temp",
  })
);

app.use("/api/users", usersRoute);
app.use("/api/todos", todosRoute);

module.exports = app;
