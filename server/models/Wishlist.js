// import mongoose from "mongoose";

// const WishlistItemSchema = new mongoose.Schema({
//   product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
// });

// const WishlistSchema = new mongoose.Schema({
//   sessionId: { type: String, required: true, index: true },
//   items: [WishlistItemSchema],
// });

// export default mongoose.model("Wishlist", WishlistSchema);









// backend: models/Wishlist.js
import mongoose from "mongoose";

const WishlistItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  // you can keep other metadata (e.g. addedAt) if you want
  addedAt: { type: Date, default: Date.now },
});

const WishlistSchema = new mongoose.Schema(
  {
    sessionId: { type: String, required: true, index: true },
    items: [WishlistItemSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Wishlist", WishlistSchema);
