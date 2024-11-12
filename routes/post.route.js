const express = require("express");
const Post = require("../models/post.model.js");
const router = express.Router();
const {getPosts, createPost, deletePost, editPost} = require('../controllers/post.controller.js');

router.get("/", getPosts);

router.post("/", createPost);

// update a product
router.put("/:id", editPost);

// delete a product
router.delete("/:id", deletePost);

module.exports = router;