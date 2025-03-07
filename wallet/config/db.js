const { connect } = require("mongoose");

require("dotenv/config");

const { MONGODB_URL } = process.env

const connectDB = async () => {
    try{
        await 
        connect(MONGODB_URL)
        console.log("connected successfuly");
    }catch(err){
        console.log("error connected to server");
    }
}

module.exports = connectDB