const mongoose = require("mongoose");
const orderSchema = mongoose.Schema(
  {
    userName: {
      type: String,
    },
    userEmail: {
      type: String,
      unique: true,
    },
    orderItem: {
      type: String,
    },
    quantity: {
      type: String,
    },
    time: {
      type: Date,
    },
    finalPrice: {
      type: Number,
    },
    userLocation: [
      {
        latitude: Number,
      },
      {
        longitude: Number,
      },
    ],
    status: {
      type: String,
      enum: ["Pending", "Order Accepted", "Order on the way", "User Received"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const Order = new mongoose.model("Order", orderSchema);
module.exports = Order;
