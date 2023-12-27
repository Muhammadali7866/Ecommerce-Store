const mongoose = require("mongoose");
const { Schema } = mongoose;

const discountSchema = new Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  discountPercentage: {
    type: String,
    required: true,
  },
  discountPrice: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const Discount = mongoose.model("Discount", discountSchema);

module.exports = Discount;
