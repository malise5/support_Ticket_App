const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const goalRoutes = require("./routes/goalRoutes");

const app = express();

//Routes
app.use("/api/goals", goalRoutes);

//Port server
app.listen(port, () => {
    console.log("====================================");
    console.log(`Server Running on Port ${port}`);
    console.log("====================================");
});
