const express = require("express");
const router = express.Router();

// internal import
const { getRider } = require("../controllers/riderController");
router.get("/", getRider);

module.exports = router;
