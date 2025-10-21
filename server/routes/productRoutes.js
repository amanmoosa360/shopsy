









// // import express from "express";
// // import Product from "../models/Product.js";

// // const router = express.Router();

// // // Create product
// // router.post("/", async (req, res) => {
// //   try {
// //     const product = new Product(req.body);
// //     await product.save();
// //     res.status(201).json(product);
// //   } catch (error) {
// //     res.status(400).json({ error: error.message });
// //   }
// // });

// // // Get all products (with category populated)
// // router.get("/", async (req, res) => {
// //   try {
// //     const products = await Product.find().populate("category", "name description image");
// //     res.json(products);
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // });

// // export default router;















// import express from "express";
// import Product from "../models/Product.js";

// const router = express.Router();

// // Create product
// router.post("/", async (req, res) => {
//   try {
//     const product = new Product(req.body);
//     await product.save();
//     res.status(201).json(product);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Get all products (with category populated)
// router.get("/", async (req, res) => {
//   try {
//     const products = await Product.find().populate("category", "name description image");
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Update product
// router.put("/:id", async (req, res) => {
//   try {
//     const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updated);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Delete product
// router.delete("/:id", async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.json({ message: "Product deleted" });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// export default router;




















// import express from "express";
// import Product from "../models/Product.js";

// const router = express.Router();

// // Create product
// router.post("/", async (req, res) => {
//   try {
//     const product = new Product(req.body);
//     await product.save();
//     res.status(201).json(product);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// // Get all products with category populated
// router.get("/", async (req, res) => {
//   try {
//     const products = await Product.find().populate("category");
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Update product
// router.put("/:id", async (req, res) => {
//   try {
//     const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate("category");
//     if (!updatedProduct) return res.status(404).json({ error: "Product not found" });
//     res.json(updatedProduct);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// // Delete product
// router.delete("/:id", async (req, res) => {
//   try {
//     const deletedProduct = await Product.findByIdAndDelete(req.params.id);
//     if (!deletedProduct) return res.status(404).json({ error: "Product not found" });
//     res.json({ message: "Product deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// export default router;














// import express from "express";
// import Product from "../models/Product.js";

// const router = express.Router();

// // Create product
// router.post("/", async (req, res) => {
//   try {
//     const product = new Product(req.body);
//     await product.save();
//     res.status(201).json(product);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// // Get all products with category populated
// router.get("/", async (req, res) => {
//   try {
//     const products = await Product.find().populate("category");
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // ✅ Get single product by ID
// router.get("/:id", async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id).populate("category");
//     if (!product) return res.status(404).json({ error: "Product not found" });
//     res.json(product);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Update product
// router.put("/:id", async (req, res) => {
//   try {
//     const updatedProduct = await Product.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true, runValidators: true }
//     ).populate("category");
//     if (!updatedProduct) return res.status(404).json({ error: "Product not found" });
//     res.json(updatedProduct);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// // Delete product
// router.delete("/:id", async (req, res) => {
//   try {
//     const deletedProduct = await Product.findByIdAndDelete(req.params.id);
//     if (!deletedProduct) return res.status(404).json({ error: "Product not found" });
//     res.json({ message: "Product deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// export default router;












import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// ✅ Create a new product
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    // Populate category before sending response
    await product.populate("category", "name");
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Get all products (category populated)
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().populate("category", "name");
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get single product by ID (category populated)
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category", "name");
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Update a product
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate("category", "name");

    if (!updatedProduct) return res.status(404).json({ error: "Product not found" });
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Delete a product
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ error: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
