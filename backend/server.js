const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./dbconfig/db");
const port = process.env.PORT || 5000;
const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/userRoutes");

connectDB(); //running the database
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler); //middleware for handling errors and status codes

//Port server
app.listen(port, () => {
    console.log("====================================");
    console.log(`Server Running on Port ${port}`.cyan.underline);
    console.log("====================================");
});
