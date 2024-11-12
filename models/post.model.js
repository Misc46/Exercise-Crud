const mongoose = require('mongoose');
const User = require("./user.model");

const postSchema = mongoose.Schema(
    {
        textPost:{
            type:String,
            required:false,
            immutable:false,
            default:null
        },
        author:{
            type: mongoose.Schema.ObjectId,
            ref:"User",
            required:true,
            immutable:true,
        },
    },
    {
        timestamps:true,
    }
);

const Post = mongoose.model("Post",postSchema);

module.exports = Post;