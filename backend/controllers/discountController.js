const Discount = require("../models/discountModel");

// create APi

const createDiscount = async (req, res) => {
  const { name, description, discountPercentage, active } = req.body;

  const discount = await Discount.create({
    name,
    description,
    discountPercentage,
    active,
  });
  return res.status(201).json({
    message: "discount object is created successfully",
    status: "success",
    doc: {
      discount,
    },
  });
};

module.exports = { createDiscount };
