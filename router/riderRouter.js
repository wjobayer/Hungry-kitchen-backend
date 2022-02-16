const express = require("express");
const router = express.Router();

// internal import
const { getRider } = require("../controllers/getRider");
router.get("/", getRider);

module.exports = router;
