const express = require("express");
const router = express.Router();
const { getUser, postUser, getUserById, updateUserById } = require("../controllers/userController");
router.get("/", getUser);
router.get("/:id", getUserById);
router.post("/", postUser);
router.put("/:id", updateUserById);

module.exports = router;