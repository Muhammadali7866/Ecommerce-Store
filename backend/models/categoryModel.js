const mongoose = require("mongoose");
const Product = require("./productModel");
const { Schema } = mongoose;

// define the schema of the model

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
});

// convert to model
const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
