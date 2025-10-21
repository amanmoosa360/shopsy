




// const mongoose = require('mongoose');

// const categorySchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     description: { type: String },
//     image: { type: String },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model('Category', categorySchema);



import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;

