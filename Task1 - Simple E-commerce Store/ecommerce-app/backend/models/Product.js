const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  images: [String],
  category: String,
  description: String,
  specifications: [String] 
});


module.exports = mongoose.model("Product", ProductSchema);
