// backend/models/Order.js
import mongoose from "mongoose";

const OrderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  title: { type: String },
  price: { type: Number },
  image: { type: String },
  quantity: { type: Number, default: 1 },
});

const OrderSchema = new mongoose.Schema(
  {
    sessionId: { type: String, required: true, index: true },
    user: {
      name: { type: String, required: true },
      email: { type: String },
      phone: { type: String },
      address: { type: String, required: true },
    },
    items: [OrderItemSchema],
    total: { type: Number, default: 0 },
    status: { type: String, default: "pending" }, // pending, confirmed, shipped etc.
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
