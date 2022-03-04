const mongoose = require("mongoose");
require("dotenv").config();
// const db = "mongodb://localhost:27017/hungry-kitchen"
const db = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7xx1x.mongodb.net/hungry-kitchen?retryWrites=true&w=majority`;
const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("connection successfull");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
 
module.exports = connectDB;
