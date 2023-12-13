const {
  createProduct,
  findProduct,
} = require("../controllers/productController");
const express = require("express");
const router = express.Router();

// create the user
router.post("/createProduct", createProduct);
router.get("/getProduct", findProduct);

module.exports = router;
