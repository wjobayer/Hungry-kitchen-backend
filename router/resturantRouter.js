const express = require("express");
const router = express.Router();
const { getResturant } = require("../controllers/resturantController");
router.get("/", getResturant);

module.exports = router;
