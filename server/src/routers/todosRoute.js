const {
  acssesTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todosController.js");
const router = require("express").Router();

router.get("/", acssesTodos);
router.post("/", createTodo);
router.put("/", updateTodo);
router.delete("/", deleteTodo);

module.exports = router;
