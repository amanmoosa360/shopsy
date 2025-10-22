






// src/context/CartContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const SESSION_KEY = "shopsy_sessionId"; // single shared session key
const API_BASE = "https://shopsy-jyse.onrender.com";

function makeSessionId() {
  return "sess_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export const CartProvider = ({ children }) => {
  const [sessionId, setSessionId] = useState(() => {
    const existing = localStorage.getItem(SESSION_KEY);
    if (existing && existing !== "undefined") return existing;
    const id = makeSessionId();
    localStorage.setItem(SESSION_KEY, id);
    return id;
  });

  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (!sessionId) return;
    const fetchCart = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/cart/${sessionId}`);
        setCart(res.data.items || []);
      } catch (err) {
        console.error("Failed to fetch cart:", err?.response?.data || err.message);
      }
    };
    fetchCart();
  }, [sessionId]);

  const addToCart = async (productId, quantity = 1) => {
    try {
      const res = await axios.post(`${API_BASE}/api/cart`, { sessionId, productId, quantity });
      setCart(res.data.items || []);
      return res.data;
    } catch (err) {
      console.error("Add to cart error:", err?.response?.data || err.message);
      throw err;
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      const res = await axios.delete(`${API_BASE}/api/cart/${sessionId}/item/${itemId}`);
      setCart(res.data.items || []);
      return res.data;
    } catch (err) {
      console.error("Remove cart item error:", err?.response?.data || err.message);
      throw err;
    }
  };

  const updateQuantity = async (itemId, quantity) => {
    try {
      const res = await axios.put(`${API_BASE}/api/cart/${sessionId}/item/${itemId}`, { quantity });
      setCart(res.data.items || []);
      return res.data;
    } catch (err) {
      console.error("Update quantity error:", err?.response?.data || err.message);
      throw err;
    }
  };

  const clearCart = async () => {
    try {
      const res = await axios.delete(`${API_BASE}/api/cart/${sessionId}`);
      setCart([]);
      return res.data;
    } catch (err) {
      console.error("Clear cart error:", err?.response?.data || err.message);
      setCart([]);
      throw err;
    }
  };

  return (
    <CartContext.Provider value={{ sessionId, cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
