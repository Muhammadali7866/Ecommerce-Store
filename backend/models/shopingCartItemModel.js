const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      Ref: "Product",
    },
  ],
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

const CartItem = mongoose.model("CartItem", cartSchema);
module.exports = CartItem;
