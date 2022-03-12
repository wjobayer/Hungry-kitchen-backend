const User = require("../models/userSchema");

// post user api
const postUser = async (req, res) => {
  try {
    const user = User(req.body);
    const userData = await user.save();
    res.status(201).json(userData);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// get all user api
const getUser = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// get single user api
const getUserById = async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.findById(_id);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// update single user api
const updateUserById = async (req, res) => {
  try {
    const _id = req.params.id;
    const { userName, email, phoneNumber, role, image } = req.body;
    const user = await User.findByIdAndUpdate(
      _id,
      {
        userName,
        email,
        phoneNumber,
        role,
        image,
      },
      {
        new: true,
      }
    );
    const updateUser = await user.save();
    res.status(201).json(updateUser);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  postUser,
  getUser,
  getUserById,
  updateUserById,
};
