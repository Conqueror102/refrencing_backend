
const userModel = require('../MODEL/userModel');

const createUser = async (req, res) => {
    try{
        const {name, email} = req.body;
        const checkUserExist = await userModel.findOne({email});
        if(checkUserExist){
            return res.status(400).json({
                message: "User already exists"
            })
        }
        const newUser = await userModel.create({
            name,
            email   
        })

        return res.status(201).json({
            message: "User created successfully",data: newUser
        })
    }catch(err){
        return res.status(500).json({
            message: err.message
        })
    }
}

const getUser = async (req, res) => {
    try{
        const {userId} = req.params;
        const getUser = await userModel.findById(userId).populate("details");
        if(!getUser){
            return res.status(404).json({
                message: "User not found"
            })
        }
        return res.status(200).json({
            message: "User found",
            data: getUser
        })
        
    }catch(err){
        return res.status(500).json({
            message: err.message
        })
    }
}

module.exports = {
    createUser,
    getUser
}