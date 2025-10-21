

// import React, { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";

// const WishlistContext = createContext();

// export const useWishlist = () => useContext(WishlistContext);

// export const WishlistProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState([]);
//   const [loading, setLoading] = useState(true); // track loading
//   const [sessionId, setSessionId] = useState(null);

//   // Initialize sessionId immediately
//   useEffect(() => {
//     let storedId = localStorage.getItem("sessionId");
//     if (!storedId) {
//       storedId = "sess_" + Math.random().toString(36).substring(2);
//       localStorage.setItem("sessionId", storedId);
//     }
//     setSessionId(storedId);
//   }, []);

//   // Fetch wishlist after sessionId is ready
//   useEffect(() => {
//     if (!sessionId) return;

//     const fetchWishlist = async () => {
//       try {
//         setLoading(true);
//         const res = await axios.get(`http://localhost:3001/api/wishlist/${sessionId}`);
//         setWishlist(res.data);
//       } catch (err) {
//         console.error("Failed to fetch wishlist:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWishlist();
//   }, [sessionId]);

//   const addToWishlist = async (productId) => {
//     if (!sessionId) return;
//     try {
//       const res = await axios.post(`http://localhost:3001/api/wishlist/${sessionId}/add`, { productId });
//       setWishlist(res.data);
//     } catch (err) {
//       console.error("Failed to add to wishlist:", err);
//     }
//   };

//   const removeFromWishlist = async (productId) => {
//     if (!sessionId) return;
//     try {
//       const res = await axios.delete(`http://localhost:3001/api/wishlist/${sessionId}/remove/${productId}`);
//       setWishlist(res.data);
//     } catch (err) {
//       console.error("Failed to remove from wishlist:", err);
//     }
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, loading }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };













// src/WishlistContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const WishlistContext = createContext();

const API_BASE = "http://localhost:3001";
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
