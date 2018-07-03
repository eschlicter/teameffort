//contain all of the user-related routes 
//(Sign up, Login, etc.).

const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/users/signup", userController.signup);