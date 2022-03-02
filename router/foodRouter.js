const express = require("express");
const router = express.Router();

// internal import
const { getFood, addFood } = require("../controllers/foodController");
router.get("/", getFood);
router.post("/", addFood);

module.exports = router;
