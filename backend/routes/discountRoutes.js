const express = require("express");
const router = express.Router();
const { createDiscount } = require("../controllers/discountController");

// creat route
router.post("/createDiscount", createDiscount);

module.exports = router;
