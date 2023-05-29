const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
    {
        user: {
            //This is the foreign key from the user
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        text: {
            type: String,
            required: [true, "Please add a text Value"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Goal", goalSchema);
