const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Variant schema (color, fit, etc.)
const variantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true,
    min: 0
  },
  stripePriceId: {
    type: String,
    required: true
  }
}, { _id: false });

const productSchema = new Schema({
  // Public / frontend
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },

  // Classification
  category: {
    type: String,
    enum: ["parts", "accessories", "merch"],
    required: true
  },
  brand: {
    type: String,
    required: true // "NISMO", "SkylineCulture", etc.
  },

  // Pricing
  price: {
    type: Number,
    required: true
  },

  // Variants
  variants: {
    type: [variantSchema],
    required: true
  },

  // Media (only what backend truly needs)
  thumbnail: {
    type: String,
    required: true
  },
  reviews: {
    type: Array,
    default: []
  }
}, {
  timestamps: true
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
