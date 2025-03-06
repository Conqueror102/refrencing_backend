const detailsModel = require("../MODEL/detailsModel");
const userModel = require("../MODEL/userModel");

const createUserDetails = async (req, res) => {
    try {
        const { userId, age, address } = req.body;
        const getUser = await userModel.findById(userId);

        if(!getUser){
            return res.status(404).json({
                message: "User not found"
            })
        }

        const createDetails = new detailsModel({
            age,
            address,
            user: getUser._id
        });
        createDetails.save();
        getUser.details = createDetails._id;
        getUser.save();
        return res.status(201).json({
            message: "Details created successfully",
            data: createDetails
        })
    }catch(err){    
        return res.status(500).json({
            message: err.message
        })
    }
}

// update details

const updateDetails = async (req, res) => {
    try{
        const { Id } = req.params       
        if(!Id){
            return res.status(404).json({message:"user not found"})
        }
        const update = await detailsModel.findByIdAndUpdate(Id, req.body, {new:true});
        return res.status(200).json({data:update});
    }catch(err){
        return res.status(500).json({message:"internal server error", error:err.message})
    }
}

module.exports = {  
    createUserDetails,
    updateDetails
}