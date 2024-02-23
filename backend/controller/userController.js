import User from "../model/userModel.js";

export const createUser = async (req, res) => {
    try{
    const userData = new User(req.body);
    console.log(User);
    if(!userData){
        return res.status(404).json({message: "Invalid user data"});
    }
    const {email} = userData;
    const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "Email address is already in use" });
        }
    const savedData = await userData.save();
    res.status(200).json(savedData);

    } catch (err) {
        res.status(500).json(err);
    } 
}

export const getAll =async (req, res) => {
    try {
        const userData = await User.find();
        if(!userData){
            return res.status(404).json({message: "User data not found"});
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getOne =async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({message: "User data not found"});
        }
        res.status(200).json(userExist);
    } catch (err) {
        res.status(500).json({error: err});
    }
}

export const userUpdate =async (req, res) => {
    try {
       const id =req.params.id;
       const userExist = await User.findById(id);
       if(!userExist){
           return res.status(404).json({message: "User data not found"});
       }
       
       const updatedData =await User.findByIdAndUpdate(id, req.body, {new: true});
       res.status(200).json(updatedData);
    } catch (error) {
        res.status(500).json({error: err});
    }
}

export const userDelete = async (req, res) => {
    try {
        const id =req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({message: "User data not found"});
        }
        const deletedData = await User.findByIdAndDelete(id);
        res.status(200).json(deletedData);
    } catch (error) {
        res.status(500).json({error: err});
    }
}