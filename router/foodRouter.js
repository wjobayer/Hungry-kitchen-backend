const express = require("express");
const router = express.Router();

// internal import
const { getFood, addFood, foodUpdateById, foodDeleteById } = require("../controllers/foodController");
router.get("/", getFood);
router.post("/", addFood);
router.put("/:id", foodUpdateById);
router.delete("/:id", foodDeleteById);

module.exports = router;
