const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/users/", userController.index);
router.get("/users/signup/", userController.signup);
router.post("/users/signup/", userController.create);


module.exports = router;