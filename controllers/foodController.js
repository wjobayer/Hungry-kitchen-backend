// get food api
const getFood = async (req, res) => {
  try {
    res.status(200).json("getFood");
  } catch (error) {
    res.status(400).json(error.message);
  }
}; 

// post Food api
const addFood = async (req, res) => {
  try {
    console.log("body", req.body)
    console.log("files", req.files)
    res.status(200).json("postFood");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getFood,
  addFood,
};
