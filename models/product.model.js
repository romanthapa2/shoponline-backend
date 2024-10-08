const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  brand: { type: String, required: true },
  desc: { type: String},
  price: { type: String, required: true },
  img: {type: String, required: true},
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);