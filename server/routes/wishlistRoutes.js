// import express from "express";
// import Wishlist from "../models/Wishlist.js";

// const router = express.Router();

// // router.get("/:sessionId", async (req, res) => {
// //   try {
// //     let wishlist = await Wishlist.findOne({ sessionId: req.params.sessionId }).populate("items.product");
// //     if (!wishlist) {
// //       // Create empty wishlist for new session
// //       wishlist = new Wishlist({ sessionId: req.params.sessionId, items: [] });
// //       await wishlist.save();
// //     }
// //     res.json(wishlist.items);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });
// // Get wishlist for a session
// router.get("/:sessionId", async (req, res) => {
//   try {
//     let wishlist = await Wishlist.findOne({ sessionId: req.params.sessionId }).populate("items.product");

//     if (!wishlist) {
//       // Create empty wishlist for new session
//       wishlist = new Wishlist({ sessionId: req.params.sessionId, items: [] });
//       await wishlist.save();
//       // Re-fetch to ensure proper populate (even if empty)
//       wishlist = await Wishlist.findOne({ sessionId: req.params.sessionId }).populate("items.product");
//     }

//     res.json(wishlist.items);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


// // Add product to wishlist
// router.post("/:sessionId/add", async (req, res) => {
//   const { productId } = req.body;
//   try {
//     let wishlist = await Wishlist.findOne({ sessionId: req.params.sessionId });
//     if (!wishlist) {
//       wishlist = new Wishlist({ sessionId: req.params.sessionId, items: [] });
//     }

//     // Avoid duplicates
//     if (!wishlist.items.find((item) => item.product.toString() === productId)) {
//       wishlist.items.push({ product: productId });
//       await wishlist.save();
//     }

//     res.json(wishlist.items);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Remove product from wishlist
// router.delete("/:sessionId/remove/:productId", async (req, res) => {
//   try {
//     const wishlist = await Wishlist.findOne({ sessionId: req.params.sessionId });
//     if (!wishlist) return res.status(404).json({ error: "Wishlist not found" });

//     wishlist.items = wishlist.items.filter(
//       (item) => item.product.toString() !== req.params.productId
//     );
//     await wishlist.save();
//     res.json(wishlist.items);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// export default router;












// backend: routes/wishlistRoutes.js
import express from "express";
import Wishlist from "../models/Wishlist.js";
import Product from "../models/Product.js"; // ensure Product model exists

const router = express.Router();

// Add product to wishlist (idempotent)
router.post("/", async (req, res) => {
  try {
    const { sessionId, productId } = req.body;
    if (!sessionId || !productId) return res.status(400).json({ error: "sessionId and productId required" });

    let wishlist = await Wishlist.findOne({ sessionId });
    if (!wishlist) {
      wishlist = new Wishlist({ sessionId, items: [] });
    }

    // Prevent duplicates: check if product is already in wishlist
    const exists = wishlist.items.find((it) => it.product.toString() === productId);
    if (!exists) {
      wishlist.items.push({ product: productId });
      await wishlist.save();
    }

    await wishlist.populate("items.product", "title price image");
    return res.json({ message: "Added to wishlist", items: wishlist.items });
  } catch (err) {
    console.error("Wishlist add error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get wishlist by sessionId
router.get("/:sessionId", async (req, res) => {
  try {
    const { sessionId } = req.params;
    const wishlist = await Wishlist.findOne({ sessionId }).populate("items.product", "title price image");
    if (!wishlist) return res.json({ items: [] });
    return res.json({ items: wishlist.items });
  } catch (err) {
    console.error("Wishlist fetch error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Remove wishlist item by itemId (subdocument id)
router.delete("/:sessionId/item/:itemId", async (req, res) => {
  try {
    const { sessionId, itemId } = req.params;
    const wishlist = await Wishlist.findOne({ sessionId });
    if (!wishlist) return res.status(404).json({ error: "Wishlist not found" });

    wishlist.items.pull({ _id: itemId });
    await wishlist.save();
    await wishlist.populate("items.product", "title price image");
    res.json({ message: "Removed", items: wishlist.items });
  } catch (err) {
    console.error("Wishlist remove error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Clear entire wishlist
router.delete("/:sessionId", async (req, res) => {
  try {
    const { sessionId } = req.params;
    const wishlist = await Wishlist.findOne({ sessionId });
    if (!wishlist) return res.json({ message: "Wishlist already empty", items: [] });

    wishlist.items = [];
    await wishlist.save();
    res.json({ message: "Wishlist cleared", items: [] });
  } catch (err) {
    console.error("Wishlist clear error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
