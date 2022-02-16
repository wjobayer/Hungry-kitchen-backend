const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./database/db");
const adminRouter = require("./router/adminRouter");
const userRouter = require("./router/userRouter");
const partnerRouter = require("./router/partnerRouter");

// port number
const port = process.env.PORT || 8000;

// connect database
// connectDB();

// request parser
app.use(express.json());
app.use(cors());

// router setup
app.use("/", adminRouter);
app.use("/user", userRouter);
app.use("/partner", partnerRouter);
app.use("/rider", riderRouter);


app.listen(port, ()=>{
    console.log(`server running port is ${port}`);
})