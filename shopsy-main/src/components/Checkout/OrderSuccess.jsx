// src/components/Checkout/OrderSuccess.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const API_BASE = "http://localhost:3001";

const OrderSuccess = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/orders/${orderId}`);
        setOrder(res.data.order);
      } catch (err) {
        console.error("Fetch order failed", err?.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };
    if (orderId) load();
  }, [orderId]);

  if (loading) return <div className="container mx-auto py-8">Loading...</div>;

  if (!order)
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Order not found</h1>
        <Link to="/" className="text-blue-600">Go home</Link>
      </div>
    );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Thank you — your order is confirmed!</h1>

      <div className="border rounded p-4 mb-4">
        <div className="mb-2">Order ID: <span className="font-semibold">{order._id}</span></div>
        <div className="mb-2">Name: {order.user?.name}</div>
        <div className="mb-2">Address: {order.user?.address}</div>
        <div className="mb-2">Total: ₹{order.total}</div>
        <div className="mb-2">Status: {order.status}</div>
      </div>

      <h2 className="font-semibold mb-2">Items</h2>
      <div className="grid gap-3">
        {order.items.map((it) => (
          <div key={it._id} className="flex items-center gap-3 border rounded p-3">
            <img src={it.image || "https://via.placeholder.com/80"} alt={it.title} className="w-20 h-20 object-cover rounded" />
            <div>
              <div className="font-medium">{it.title}</div>
              <div className="text-gray-500">₹{it.price} × {it.quantity}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Link to="/" className="text-white bg-gradient-to-r from-primary to-secondary py-2 px-4 rounded">
          Continue shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
