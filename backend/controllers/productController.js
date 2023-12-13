const Product = require("../models/productModel");
const Category = require("../models/categoryModel");

// create Product

const createProduct = async (req, res) => {
  const { name, description, SKU, inventory, category, discount } = req.body;
  const products = await Product.create({
    name,
    description,
    SKU,
    inventory,
    category,
    discount,
  });
  return res.status(201).json({
    products,
  });
};

const findProduct = async (req, res) => {
  const product = await Product.find({}).populate("discount");
  return res.status(200).json({
    message: "The product is",
    product,
  });
};

module.exports = { createProduct, findProduct };
