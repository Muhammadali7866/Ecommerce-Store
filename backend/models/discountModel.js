const mongoose = require("mongoose");
const { Schema } = mongoose;

const discountSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  discountPercentage: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const Discount = mongoose.model("Discount", discountSchema);

module.exports = Discount;
