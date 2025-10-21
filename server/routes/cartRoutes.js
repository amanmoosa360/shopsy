// backend: routes/cartRoutes.js
import express from "express";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js"; // ensure you have this model

const router = express.Router();

// ----------------- Add product to cart -----------------
router.post("/", async (req, res) => {
  try {
    const { sessionId, productId, quantity = 1 } = req.body;
    if (!sessionId || !productId) return res.status(400).json({ error: "sessionId and productId required" });

    let cart = await Cart.findOne({ sessionId });
    if (!cart) {
      cart = new Cart({ sessionId, items: [] });
    }

    const existing = cart.items.find((it) => it.product.toString() === productId);
    if (existing) {
      existing.quantity = existing.quantity + Number(quantity);
    } else {
      cart.items.push({ product: productId, quantity: Number(quantity) });
    }

    await cart.save();
    await cart.populate("items.product", "title price image");
    res.json({ message: "Added", items: cart.items });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// ----------------- Get cart by sessionId -----------------
router.get("/:sessionId", async (req, res) => {
  try {
    const { sessionId } = req.params;
    const cart = await Cart.findOne({ sessionId }).populate("items.product", "title price image");
    if (!cart) return res.json({ items: [] });
    return res.json({ items: cart.items });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// ----------------- Update quantity for a cart item -----------------
router.put("/:sessionId/item/:itemId", async (req, res) => {
  try {
    const { sessionId, itemId } = req.params;
    const { quantity } = req.body;

    const cart = await Cart.findOne({ sessionId });
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    const item = cart.items.id(itemId);
    if (!item) return res.status(404).json({ error: "Cart item not found" });

    item.quantity = Number(quantity);
    await cart.save();
    await cart.populate("items.product", "title price image");
    res.json({ items: cart.items });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// ----------------- Delete a cart item -----------------
// router.delete("/:sessionId/item/:itemId", async (req, res) => {
//   try {
//     const { sessionId, itemId } = req.params;
//     console.log(sessionId)
//       console.log(itemId)
//     const cart = await Cart.findOne({ sessionId });
//     if (!cart) return res.status(404).json({ error: "Cart not found" });

//     cart.items.id(itemId).remove();
//     await cart.save();
//     await cart.populate("items.product", "title price image");
//     res.json({ items: cart.items });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// });
router.delete("/:sessionId/item/:itemId", async (req, res) => {
  try {
    const { sessionId, itemId } = req.params;

    const cart = await Cart.findOne({ sessionId });
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    // ✅ Safer and works with subdocument array
    cart.items.pull({ _id: itemId });

    await cart.save();
    await cart.populate("items.product", "title price image");

    res.json({ items: cart.items });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});


// ----------------- Clear entire cart -----------------
router.delete("/:sessionId", async (req, res) => {
  try {
    const { sessionId } = req.params;
    const cart = await Cart.findOne({ sessionId });
    if (!cart) return res.json({ message: "Cart already empty", items: [] });

    cart.items = [];
    await cart.save();
    res.json({ message: "Cart cleared", items: [] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
