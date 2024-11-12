const User = require('../models/user.model.js');

const getUser = async (req,res)=>{
  try {
    if (req.query){
    const users = await User.find(req.query);
    res.status(200).json(users);
    return
    }
    else{
      res.status(200).json(await User.find({}))
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  console.log(req.body)
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const signIn = async(req,res)=>{
  try{
    const user = await User.findOne({username:req.body.username,password:req.body.password});
    if (!user){
      res.status(403).json({message:"Wrong username or password"});
    }
    else{
      res.status(200).json({message:`Logged in successfully`});
    }
  }
  catch(err){
    res.status(500).json({ message: error.message });
  }
}

const updateUser = async (req,res)=>{
  try{
    const user = await User.findOne({username:req.body.username,password:req.body.password});
    if (!user){
      res.status(403).json({message:"Wrong username or password"});
      return
    }
    await User.findByIdAndUpdate(user.id,{username:req.body.updateUsername,name:req.body.updateName,password:req.body.updatePassword});
    res.status(200).json({message:"Updated username and password"});
  }
  catch (err){
    res.status(500).json({ message: err.message });
  }
}

const deleteUser = async(req,res)=>{
  try {
    const { id } = req.params;

    const product = await User.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


module.exports={
  getUser,createUser,signIn,updateUser,deleteUser
}