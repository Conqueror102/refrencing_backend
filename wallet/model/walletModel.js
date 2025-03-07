const { Schema, model } = require("mongoose");

const walletSchema = new Schema({
    owner: {
        type: String,
        required: true
    },
    balance: {
        type: String,
        required: true
    },
    currency:{
        type: String,
        required: true
    },
     user: {
        type: Schema.Types.ObjectId,
        ref: "user"
       }
});

 

module.exports = model("user", walletSchema);