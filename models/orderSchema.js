const mongoose = require("mongoose");
const orderSchema = mongoose.Schema(
  {},
  {
    timestamps: true,
  }
);

const Order = new mongoose.model("Order", orderSchema);
module.exports = Order;
