const {
  acssesTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todosController.js");
const authToken = require("../middleware/authToken.js");
const router = require("express").Router();

router.get("/", authToken, acssesTodos);
router.post("/", createTodo);
router.put("/", updateTodo);
router.delete("/", deleteTodo);

module.exports = router;
