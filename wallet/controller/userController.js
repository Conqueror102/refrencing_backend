const user = require("../model/userModel");
// const wallet = require("../model/walletModel");
const argon2 = require("argon2")

const createuser = async (req, res) => {
    try{
        const { name, email, password} = req.body
        const check = await user.findOne({email});
        if(check){
            return res.status(404).json({message:"user does not exist"});
        }

        const hashPass = await argon2.hash(password)
        const create = await user.create({
            name,
            email,
            password:hashPass
        })
        return res.status(201).json({data: create});
    }catch(err){
        return res.status(500).json({error:err.message})
    }
}

const getUser = async (req, res) => {
    try{
        const {userId} = req.params;
        const getUser = await user.findById(userId).populate("wallet");
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

module.exports = {createuser, getUser}