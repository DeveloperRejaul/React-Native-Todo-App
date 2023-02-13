const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const config = require("./src/config/config.js");
const usersRoute = require("./src/routers/usersRoute.js");
const todosRoute = require("./src/routers/todosRoute.js");
config.dbConnecte();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/users", usersRoute);
app.use("/api/todos", todosRoute);

module.exports = app;
