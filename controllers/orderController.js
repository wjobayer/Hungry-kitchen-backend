const Order = require("../models/orderSchema");

// get all order api
const getOrder = async (req, res) => {
  try {
    const orderData = await Order.find({});
    res.status(200).json(orderData);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// post order data api
const postOrder = async (req, res) => {
  try {
    const orderData = await Order(req.body);
    const saveOrderData = await orderData.save();
    res.status(200).json(saveOrderData);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// get single order data by id
const getOrderById = async (req, res) => {
  try {
    const _id = req.params.id;
    const singleOrderData = await Order.findById(_id);
    res.status(200).json(singleOrderData);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// update order api
const updateOrderById = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateOrder = await Order.findOneAndUpdate(_id, req.body, {
      new: true,
    });
    const saveUpdateData = await updateOrder.save();
    res.status(200).json(saveUpdateData);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
// delete order data api
const deleteOrderById = async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteOrder = await Order.findOneAndDelete(_id);
    res.status(200).json(deleteOrder);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getOrder,
  postOrder,
  getOrderById,
  updateOrderById,
  deleteOrderById,
};
