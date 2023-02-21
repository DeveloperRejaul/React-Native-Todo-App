const config = require("../config/config.js");
const {
  acssesUsers,
  createUser,
  updateUser,
  deletUser,
  acssesUserById,
} = require("../controller/usersController.js");
const router = require("express").Router();

router.get("/:id", acssesUserById);
router.get("/", acssesUsers);
router.post("/", createUser);
router.put("/", updateUser);
router.delete("/", deletUser);

module.exports = router;
