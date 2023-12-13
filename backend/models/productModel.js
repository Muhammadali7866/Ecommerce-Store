const mongoose = require("mongoose");
const { Schema } = mongoose;

// define model Schema
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  SKU: {
    type: String,
    required: true,
    unique: true,
  },
  inventory: {
    type: String,
    required: true,
  },
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
  discount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Discount",
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
