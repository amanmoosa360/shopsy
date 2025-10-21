












import express from "express";
import Category from "../models/Category.js";

const router = express.Router();

// ===================== CREATE CATEGORY =====================
router.post("/", async (req, res) => {
  try {
    const { name, description, image } = req.body;

    if (!name || name.trim() === "") {
      return res.status(400).json({ error: "Category name is required" });
    }

    const category = new Category({ name, description, image });
    await category.save();

    res.status(201).json(category);
  } catch (error) {
    console.error("Error creating category:", error.message);
    res.status(500).json({ error: "Failed to create category" });
  }
});

// ===================== GET ALL CATEGORIES =====================
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error.message);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
});

// ===================== GET SINGLE CATEGORY BY ID =====================
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ error: "Category not found" });
    res.json(category);
  } catch (error) {
    console.error("Error fetching category:", error.message);
    res.status(500).json({ error: "Failed to fetch category" });
  }
});

// ===================== UPDATE CATEGORY =====================
router.put("/:id", async (req, res) => {
  try {
    const { name, description, image } = req.body;

    if (name && name.trim() === "") {
      return res.status(400).json({ error: "Category name cannot be empty" });
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { name, description, image },
      { new: true, runValidators: true }
    );

    if (!updatedCategory) return res.status(404).json({ error: "Category not found" });

    res.json(updatedCategory);
  } catch (error) {
    console.error("Error updating category:", error.message);
    res.status(500).json({ error: "Failed to update category" });
  }
});

// // ===================== DELETE CATEGORY =====================
// router.delete("/:id", async (req, res) => {
//   try {
//     const deletedCategory = await Category.findByIdAndDelete(req.params.id);
//     if (!deletedCategory) return res.status(404).json({ error: "Category not found" });

//     res.json({ message: "Category deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting category:", error.message);
//     res.status(500).json({ error: "Failed to delete category" });
//   }
// });
// DELETE a single cart item
router.delete("/:sessionId/item/:itemId", async (req, res) => {
  try {
    const { sessionId, itemId } = req.params;

    const cart = await Cart.findOne({ sessionId });
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    const item = cart.items.id(itemId);
    if (!item) return res.status(404).json({ error: "Cart item not found" });

    item.remove();
    await cart.save();
    await cart.populate("items.product", "title price image");
    res.json({ items: cart.items });
  } catch (err) {
    console.error("Delete cart item error:", err);
    res.status(500).json({ error: "Server error" });
  }
});


export default router;
