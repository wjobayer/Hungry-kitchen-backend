const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    password:{
      type:String,
    },
    phoneNumber: {
      type: Number,
      trim: true,
    },
    role: {
      type: String,
      enum: ["Admin", "Customer", "RestOwner", "Rider"],
      default: "Customer",
    },
    image: {
      type: String,
      default:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
    },
  },
  {
    timestamps: true,
  }
);

const User = new mongoose.model("User", userSchema);
module.exports = User;
