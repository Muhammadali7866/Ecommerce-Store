const { createCategory } = require("../controllers/categoryController");
const express = require("express");
const router = express.Router();

// create the user
router.post("/createCategory", createCategory);

module.exports = router;
