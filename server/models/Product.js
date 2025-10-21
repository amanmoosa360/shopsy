


// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: String,
//   price: { type: Number, required: true },
//   category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
//   brand: String,
//   stock: Number,
//   sku: String,
//   discount: Number,
//   available: { type: Boolean, default: true },
//   image: String,
// });

// export default mongoose.model("Product", productSchema);











import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    brand: String,
    stock: Number,
    sku: String,
    discount: Number,
    available: { type: Boolean, default: true },
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
