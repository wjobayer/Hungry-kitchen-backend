const express = require("express");
const router = express.Router();
const { getOrder, postOrder, updateOrderById, deleteOrderById } = require("../controllers/orderController");
router.get("/", getOrder);
router.post("/", postOrder);
router.put("/:id", updateOrderById);
router.delete("/:id", deleteOrderById);

module.exports = router;