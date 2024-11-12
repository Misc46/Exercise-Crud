const Post = require('../models/post.model.js');
const User = require('../models/user.model.js');

const getPosts = async (req,res)=>{
  try {
    console.log(req.query)
    if (req.query){
    const posts = await Post.find(req.query);
    res.status(200).json(posts);
    }
    else{
      const posts = await Post.find({});
      res.status(200).json(posts);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(200).json(post);
   }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req,res)=>{
  try{
       const post = await Post.findById(req.params.id);
    if (!post){
      res.status(404).json({message:"Post doesn't exist"});
      return
    }
        await Post.findByIdAndDelete(post.id);
        res.status(200).json({message:`Deleted successfully`});
  }
  catch(error){
    res.status(500).json({message:error.message});
  }
}

const editPost = async (req,res)=>{
  try{
    const post = await Post.findById(req.params.id)
    if (!post){
      res.status(404).json({message:"Post doesn't exist"})
      return
    }
        await Post.findByIdAndUpdate(post.id,{textPost:req.body.textPost});
        res.status(200).json({message:`Edited successfully`});
  }
  catch(error){
    res.status(500).json({error:error.message})
  }
}


module.exports={
  getPosts,createPost,deletePost,editPost
}