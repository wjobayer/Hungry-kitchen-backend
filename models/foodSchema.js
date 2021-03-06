const mongoose = require("mongoose");
const foodSchema = mongoose.Schema(
  {
    resturantName:{
      type: String,
      trim: true,
    },
    foodName: {
      type: String,
      trim: true,
    },
    foodPrice: {
      type: Number,
      trim: true,
    },
    foodCategory: {
      type: String,
      trim: true,
    },
    foodArea: {
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



// const mongoose = require("mongoose");
// const foodSchema = mongoose.Schema(
//   {
//     resturantName: {
//       type: String,
//       trim: true,
//     },
//     foodName: {
//       type: String,
//       trim: true,
//     },
//     price: {
//       type: Number,
//       trim: true,
//     },
//     category: {
//       type: String,
//       trim: true,
//     },
//     foodArea: {
//       type: String,
//       trim: true,
//     },
//     foodImage: {
//       type: String,
//       default:
//         "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
//     },
//     resturantImage: {
//       type: String,
//     },
//     foodDescription: {
//       type: String,
//       trim: true,
//     },
//     type: String,
//     resturantOpen: String,
//     resturantClose: String,
//   },
//   {
//     timestamps: true,
//   }
// );

// const Food = new mongoose.model("Food", foodSchema);
// module.exports = Food;
