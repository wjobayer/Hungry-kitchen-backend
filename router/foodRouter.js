const express = require("express");
const router = express.Router();

// internal import
const {
  getFood,
  addFood,
  foodUpdateById,
  foodDeleteById,
  getFoodById,
  categoryByfood
} = require("../controllers/foodController");
router.get("/", getFood);
router.get("/category", categoryByfood);
router.get("/:id", getFoodById);
router.post("/", addFood);
router.put("/:id", foodUpdateById);
router.delete("/:id", foodDeleteById);

module.exports = router;
