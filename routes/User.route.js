const express = require("express");
const User = require("../models/user.model.js");
const router = express.Router();
const {getUser, createUser, signIn, updateUser, deleteUser} = require('../controllers/user.controller.js');

router.get("/:id?", getUser);

router.post("/", createUser);

// update a product
router.put("/", updateUser);

// delete a product
router.delete("/:id", deleteUser);

router.post("/signIn", signIn);


module.exports = router;