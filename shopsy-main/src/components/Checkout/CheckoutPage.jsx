// src/components/Checkout/CheckoutPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import axios from "axios";

const API_BASE = "https://shopsy-jyse.onrender.com";

const CheckoutPage = () => {
  const { sessionId, cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const totalPrice = cart.reduce((total, item) => {
    const price = item.product?.price || item.price || 0;
    const quantity = item.quantity || 1;
    return total + price * quantity;
  }, 0);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.address) {
      setError("Please enter your name and address.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const payload = { sessionId, user: form };
      const res = await axios.post(`${API_BASE}/api/orders`, payload);
      const orderId = res.data.orderId;
      // clear cart in frontend
      clearCart().catch(() => {}); // ignore errors, backend cart already cleared
      // navigate to confirmation
      navigate(`/order-success/${orderId}`);
    } catch (err) {
      console.error("Checkout error:", err?.response?.data || err.message);
      setError(err?.response?.data?.error || "Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Order summary */}
        <div className="border rounded p-4">
          <h2 className="font-semibold mb-4">Order Summary</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <>
              <ul className="space-y-3">
                {cart.map((item) => (
                  <li key={item._id} className="flex items-center gap-3">
                    <img
                      src={item.product?.image || "https://via.placeholder.com/80"}
                      alt={item.product?.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="font-medium line-clamp-1">
                        {item.product?.title || item.title}
                      </div>
                      <div className="text-gray-500">
                        ₹{item.product?.price || item.price} × {item.quantity}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-4 font-semibold flex justify-between">
                <span>Total:</span>
                <span>₹{totalPrice}</span>
              </div>
            </>
          )}
        </div>

        {/* Checkout form */}
        <div className="border rounded p-4">
          <h2 className="font-semibold mb-4">Shipping & contact</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full name"
              className="w-full border px-3 py-2 rounded"
              required
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email (optional)"
              className="w-full border px-3 py-2 rounded"
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone (optional)"
              className="w-full border px-3 py-2 rounded"
            />
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Delivery address"
              className="w-full border px-3 py-2 rounded"
              rows={4}
              required
            />

            {error && <div className="text-red-500">{error}</div>}

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={loading || cart.length === 0}
                className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-6 rounded-full hover:scale-105 duration-200 disabled:opacity-60"
              >
                {loading ? "Placing order..." : `Place order • ₹${totalPrice}`}
              </button>
              <button
                type="button"
                onClick={() => navigate("/cart")}
                className="py-2 px-4 rounded border"
              >
                Back to cart
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
