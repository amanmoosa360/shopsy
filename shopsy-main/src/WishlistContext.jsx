










// src/WishlistContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const WishlistContext = createContext();

const API_BASE = "https://shopsy-jyse.onrender.com";
const SESSION_KEY = "shopsy_sessionId"; // reuse same session key

export const WishlistProvider = ({ children }) => {
  const [sessionId] = useState(() => {
    // read existing sessionId created by CartContext (or create one if not present)
    const existing = localStorage.getItem(SESSION_KEY);
    if (existing) return existing;
    const id = "sess_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    localStorage.setItem(SESSION_KEY, id);
    return id;
  });

  const [wishlist, setWishlist] = useState([]);

  // fetch wishlist
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/wishlist/${sessionId}`);
        setWishlist(res.data.items || []);
      } catch (err) {
        console.error("Failed to fetch wishlist:", err?.response?.data || err.message);
      }
    };
    if (sessionId) fetchWishlist();
  }, [sessionId]);

  const addToWishlist = async (productId) => {
    try {
      const res = await axios.post(`${API_BASE}/api/wishlist`, { sessionId, productId });
      setWishlist(res.data.items || []);
      return res.data;
    } catch (err) {
      console.error("Add to wishlist error:", err?.response?.data || err.message);
      throw err;
    }
  };

  const removeFromWishlist = async (itemId) => {
    try {
      const res = await axios.delete(`${API_BASE}/api/wishlist/${sessionId}/item/${itemId}`);
      setWishlist(res.data.items || []);
      return res.data;
    } catch (err) {
      console.error("Remove wishlist item error:", err?.response?.data || err.message);
      throw err;
    }
  };

  const clearWishlist = async () => {
    try {
      await axios.delete(`${API_BASE}/api/wishlist/${sessionId}`);
      setWishlist([]);
    } catch (err) {
      console.error("Clear wishlist error:", err?.response?.data || err.message);
      setWishlist([]); // fallback
      throw err;
    }
  };

  return (
    <WishlistContext.Provider value={{ sessionId, wishlist, addToWishlist, removeFromWishlist, clearWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
