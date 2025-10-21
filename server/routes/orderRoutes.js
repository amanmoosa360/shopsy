









// // backend/routes/orderRoutes.js
// import express from "express";
// import Order from "../models/Order.js";
// import Cart from "../models/Cart.js";
// import Product from "../models/Product.js";

// const router = express.Router();

// /**
//  * Create order from current cart items.
//  * Expects body: { sessionId, user: { name, email, phone, address } }
//  */
// router.post("/", async (req, res) => {
//   try {
//     const { sessionId, user } = req.body;
//     if (!sessionId || !user || !user.name || !user.address) {
//       return res.status(400).json({ error: "sessionId and user.name & user.address required" });
//     }

//     // load cart
//     const cart = await Cart.findOne({ sessionId }).populate("items.product", "title price image");
//     if (!cart || cart.items.length === 0) {
//       return res.status(400).json({ error: "Cart is empty" });
//     }

//     // build order items and total
//     const items = cart.items.map((it) => {
//       const prod = it.product;
//       return {
//         product: prod._id,
//         title: prod.title || "",
//         price: prod.price || 0,
//         image: prod.image || "",
//         quantity: it.quantity || 1,
//       };
//     });

//     const total = items.reduce((s, i) => s + (i.price || 0) * (i.quantity || 1), 0);

//     // create order
//     const order = new Order({
//       sessionId,
//       user,
//       items,
//       total,
//       status: "confirmed",
//     });

//     await order.save();

//     // clear cart
//     cart.items = [];
//     await cart.save();

//     res.status(201).json({ message: "Order created", orderId: order._id, order });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// /**
//  * Get order by id (for confirmation page)
//  */
// router.get("/:orderId", async (req, res) => {
//   try {
//     const { orderId } = req.params;
//     const order = await Order.findById(orderId).populate("items.product", "title price image");
//     if (!order) return res.status(404).json({ error: "Order not found" });
//     res.json({ order });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// /**
//  * ✅ Get all orders (Admin Dashboard)
//  */
// router.get("/", async (req, res) => {
//   try {
//     const orders = await Order.find()
//       .populate("items.product", "title price image")
//       .sort({ createdAt: -1 });
//     res.json(orders);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// /**
//  * ✅ Get orders by single user (via sessionId)
//  */
// router.get("/user/:sessionId", async (req, res) => {
//   try {
//     const { sessionId } = req.params;
//     const orders = await Order.find({ sessionId })
//       .populate("items.product", "title price image")
//       .sort({ createdAt: -1 });

//     if (!orders || orders.length === 0) {
//       return res.status(404).json({ message: "No orders found for this user" });
//     }

//     res.json(orders);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// export default router;
//oggggggggggggggggggggggggggggggggggggg

















// backend/routes/orderRoutes.js
import express from "express";
import Order from "../models/Order.js";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

const router = express.Router();

/**
 * Create order from current cart items.
 * Expects body: { sessionId, user: { name, email, phone, address } }
 */
router.post("/", async (req, res) => {
  try {
    const { sessionId, user } = req.body;
    if (!sessionId || !user || !user.name || !user.address) {
      return res.status(400).json({ error: "sessionId and user.name & user.address required" });
    }

    // load cart
    const cart = await Cart.findOne({ sessionId }).populate("items.product", "title price image");
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    // build order items and total
    const items = cart.items.map((it) => {
      const prod = it.product;
      return {
        product: prod._id,
        title: prod.title || "",
        price: prod.price || 0,
        image: prod.image || "",
        quantity: it.quantity || 1,
      };
    });

    const total = items.reduce((s, i) => s + (i.price || 0) * (i.quantity || 1), 0);

    // create order
    const order = new Order({
      sessionId,
      user,
      items,
      total,
      status: "Pending",
    });

    await order.save();

    // clear cart
    cart.items = [];
    await cart.save();

    res.status(201).json({ message: "Order created", orderId: order._id, order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * Get order by id (for confirmation page)
 */
router.get("/:orderId", async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId).populate("items.product", "title price image");
    if (!order) return res.status(404).json({ error: "Order not found" });
    res.json({ order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * ✅ Get all orders (Admin Dashboard)
 */
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("items.product", "title price image")
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * ✅ Get orders by single user (via sessionId)
 */
router.get("/user/:sessionId", async (req, res) => {
  try {
    const { sessionId } = req.params;
    const orders = await Order.find({ sessionId })
      .populate("items.product", "title price image")
      .sort({ createdAt: -1 });

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders found for this user" });
    }

    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * ✅ Update Order Status (PATCH)
 */
router.patch("/:orderId/status", async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const validStatuses = ["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: "Invalid status value" });
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    if (!updatedOrder) return res.status(404).json({ error: "Order not found" });

    res.json({ message: "Status updated successfully", order: updatedOrder });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
