const Food = require("../models/foodSchema");

// get food api
const getFood = async (req, res) => {
  try {
    const foods = await Food.find({});
    res.status(200).json(foods);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
// get single food api
const getFoodById = async (req, res) => {
  try {
    const _id = req.params.id;
    const singleFood = await Food.findOne({_id});
    res.status(200).json(singleFood);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
// post Food api
const addFood = async (req, res) => {
  try {
    const food = Food(req.body);
    const foodData = await food.save();
    res.status(200).json(foodData);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// food update api
const foodUpdateById = async (req, res) => {
  try {
    const { foodName, foodCategory, foodPrice, foodArea, foodPic, foodDesc } =
      req.body;
    const _id = req.params.id;
    const updateFood = await Food.findByIdAndUpdate(
      { _id },
      {
        $set: {
          foodName,
          foodCategory,
          foodArea,
          foodPrice,
          foodPic,
          foodDesc,
        },
      },
      {
        new: true,
      }
    );
    const saveUpdateFood = await updateFood.save();
    res.status(200).json(saveUpdateFood);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// food delete api
const foodDeleteById = async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteFood = await Food.findByIdAndDelete(_id);
    res.status(200).json(deleteFood);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getFood,
  addFood,
  foodUpdateById,
  foodDeleteById,
  getFoodById,
};
