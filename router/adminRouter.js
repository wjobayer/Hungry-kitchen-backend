const express = require("express");
const router = express.Router();

// internal import
const { getAdmin } = require("../controllers/adminController");
router.get("/", getAdmin);

module.exports = router;
