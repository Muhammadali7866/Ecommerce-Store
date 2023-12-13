const Category = require("../models/categoryModel");

// create the category
const createCategory = async (req, res) => {
  const { name, description } = req.body;
  const category = await Category.create({
    name,
    description,
  });
  return res.status(201).json({
    message: "Success",
    categories: {
      category,
    },
  });
};

module.exports = { createCategory };
