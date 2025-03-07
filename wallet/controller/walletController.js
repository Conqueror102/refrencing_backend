
const user = require("../model/userModel");
const wallet = require("../model/walletModel");

const createWallet = async (req, res) => {
    try{
        const { userId, owner, balance, currency} = req.body
        const find = await user.findById(userId);
        if(!find)return res.status(500).json({message:"user not found"});

        const create = new wallet({
            owner,
            balance,
            currency,
            user:find._id
        })
        await create.save()
        find.wallet = create._id
        await find.save();
        return res.status(201).json({ message: "Wallet created successfully", wallet: create });
    }catch(err){
        console.log(err);
        return res.status(500).json({error:err.message});
    }
};

module.exports = {createWallet}