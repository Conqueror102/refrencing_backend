const { default: mongoose } = require("mongoose");

require("dotenv/config");

const {MONGODB_URI} = process.env;

const connectDB = async () => {
    try{
        await mongoose.connect(MONGODB_URI)
        console.log("server connected to database");
    }catch(err){
        console.log(err)
    }
};

module.exports = connectDB;
