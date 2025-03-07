const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
     wallet: {
        type: Schema.Types.ObjectId,
        ref: "wallet"
       }
});

 

module.exports = model("userCreate", userSchema);