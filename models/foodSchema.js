const mongoose = require("mongoose");

const foodSchema = mongoose.Schema(
  {
    foodName: {
      type: String,
      trim: true,
    },
    foodPrice: {
      type: Number,
      trim: true,
    },
    FoodCategory: {
      type: String,
      trim: true,
    },
    FoodArea: {
      type: String,
      trim: true,
    },
    foodImage: {
      type: String,
      default:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
    },
    foodDesc: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Food = new mongoose.model("Food", foodSchema);
module.exports = Food;
