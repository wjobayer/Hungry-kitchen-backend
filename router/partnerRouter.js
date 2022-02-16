const express = require("express");
const router = express.Router();
const { getPartner } = require("../controllers/partnerController");
router.get("/", getPartner);

module.exports = router;
