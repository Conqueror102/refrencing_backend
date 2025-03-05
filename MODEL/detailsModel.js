const mongoose = require("mongoose");

const detailsSchema = new mongoose.Schema({
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
});

module.exports = detailsModel = mongoose.model("details", detailsSchema);