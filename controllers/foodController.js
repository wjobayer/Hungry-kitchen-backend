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

module.exports = {
  getFood,
  addFood,
};
