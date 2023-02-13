const {
  acssesUsers,
  createUser,
  updateUser,
  deletUser,
} = require("../controller/usersController.js");
const router = require("express").Router();

router.get("/", acssesUsers);
router.post("/", createUser);
router.put("/", updateUser);
router.delete("/", deletUser);

module.exports = router;
