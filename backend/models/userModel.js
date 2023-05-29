const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please Provide Your Name"],
        },
        email: {
            type: String,
            required: [true, "Please Provide Your Email Address"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please Set Your password"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);
