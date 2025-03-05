const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
   details: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "details"
   }
});

module.exports = userModel = mongoose.model("user", userSchema);