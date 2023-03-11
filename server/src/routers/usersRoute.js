const {
  acssesUsers,
  createUser,
  updateUser,
  deletUser,
  acssesUserById,
  loginUser,
} = require("../controller/usersController.js");
const upload = require("../middleware/fileUploads.js");
const router = require("express").Router();

router.get("/:id", acssesUserById);
router.get("/", acssesUsers);
router.post("/login", loginUser);
router.post("/", upload.single("PROFILE_IMAGE"), createUser);
router.put("/", updateUser);
router.delete("/", deletUser);

module.exports = router;
