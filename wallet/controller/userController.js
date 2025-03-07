const user = require("../model/userModel");
// const wallet = require("../model/walletModel");
const argon = require("argon")

const createuser = async (req, res) => {
    try{
        const { name, email, password} = req.body
        const check = await user.findOne({email});
        if(!check){
            return res.status(404).json({message:"user does not exist"});
        }

        const hashPass = await argon.hash(password)
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

module.exports = {createuser}