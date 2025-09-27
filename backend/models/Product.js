const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
      type: String,
      required: true
      
  },
  stockQuantity: {
    type: Number,
    required: true
  },
  threshold: {
    type: Number,
    default: 5
  }
});

module.exports = mongoose.model("Product", productSchema);
