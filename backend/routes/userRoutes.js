const { userRegister } = require("../controllers/userController");
const express = require("express");
const router = express.Router();

// create the user
router.post("/createUser", userRegister);

module.exports = router;
