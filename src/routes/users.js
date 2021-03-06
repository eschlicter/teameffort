const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const User = require("../../src/db/models").User;
const validation = require("./validation");



router.get("/users", userController.index);
router.get("/users/signup", userController.signup);

router.post("/users/signup", validation.validateUsers, userController.create);

router.get("/users/signin", userController.signInForm);
router.post("/users/signin", validation.validateUsers, userController.signIn);
router.get("/users/signout", userController.signOut);
router.get("/users/upgrade", userController.upgrade);
router.get("/users/collaborations", userController.listCollaborations);
router.post("/users/:id/upgrade", userController.payment);
router.post("/users/:id/downgrade", userController.downgrade);

module.exports = router;