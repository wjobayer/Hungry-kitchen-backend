const getUser = async (req, res) => {
  try {
    res.status(200).json("This is get user");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getUser,
};
