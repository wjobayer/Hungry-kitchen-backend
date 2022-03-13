const express = require("express");
const router = express.Router();
const { getUser, postUser, getUserById, updateUserById, getUserByEmail } = require("../controllers/userController");
router.get("/", getUser);
router.get("/:id", getUserById);
router.get("/email/:email", getUserByEmail);
router.post("/", postUser);
router.put("/:id", updateUserById);

module.exports = router;