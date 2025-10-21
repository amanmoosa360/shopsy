// backend: models/Cart.js
import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, default: 1 },
});

const CartSchema = new mongoose.Schema(
  {
    sessionId: { type: String, required: true, index: true },
    items: [CartItemSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Cart", CartSchema);
