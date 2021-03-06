const express = require("express");
const router = express.Router();
const { getResturant, addFood } = require("../controllers/resturantController");
router.get("/", getResturant);
router.post("/", addFood);

module.exports = router;
