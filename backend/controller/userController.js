const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//@desc Reguster users (Signup)
// @route POST/api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please provide Your Credentials");
    }
    const users = await User.create();
    res.status(201).json({
        user: "created user successfully",
    });
});

//@desc Login users or AUthenticate
// @route POST/api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
    res.status(201).json({
        user: " user logged in successfully",
    });
});

//@desc Get users data
// @route GET/api/users/me
// @access public
const getMe = asyncHandler(async (req, res) => {
    res.status(201).json({
        user: "user data displayed successfully",
    });
});

//@desc Logout users
// @route DELETE/api/users/logout
// @access public
// const logoutUser = (req, res) => {
//     res.status(201).json({
//         user: "created user successfully",
//     });
// };

module.exports = {
    registerUser,
    loginUser,
    getMe,
};
