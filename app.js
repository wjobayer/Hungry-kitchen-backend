const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./database/db");
const adminRouter = require("./router/adminRouter");
const userRouter = require("./router/userRouter");
const resturantRouter = require("./router/resturantRouter");
const riderRouter = require("./router/riderRouter");
const foodRouter = require("./router/foodRouter");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

// port number
const port = process.env.PORT || 5000;

// connect database
connectDB();

// request parser
app.use(express.json());
app.use(cors());

// router setup
app.use("/", adminRouter);
app.use("/user", userRouter);
app.use("/partner", resturantRouter);
app.use("/rider", riderRouter);
app.use("/food", foodRouter);

// Error Handling middleware
app.use(notFound)
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`server running port is ${port}`);
})