// // src/context/CartContext.jsx
// import React, { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";

// const CartContext = createContext();

// const API_BASE =  "http://localhost:3001";
// const SESSION_KEY = "shopsy_sessionId";

// function makeSessionId() {
//   return "sess_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
// }

// export const CartProvider = ({ children }) => {
//   const [sessionId, setSessionId] = useState(() => {
//     const existing = localStorage.getItem(SESSION_KEY);
//     if (existing) return existing;
//     const id = makeSessionId();
//     localStorage.setItem(SESSION_KEY, id);
//     return id;
//   });

//   const [cart, setCart] = useState([]); // cart items: [{ _id: cartItemId, product: {...}, quantity }]

//   // Fetch cart on mount
//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const res = await axios.get(`${API_BASE}/api/cart/${sessionId}`);
//         setCart(res.data.items || []);
//       } catch (err) {
//         console.error("Failed to fetch cart:", err?.response?.data || err.message);
//       }
//     };
//     if (sessionId) fetchCart();
//   }, [sessionId]);

//   // Add product to cart (backend will create/append)
//   const addToCart = async (productId, quantity = 1) => {
//     try {
//       const res = await axios.post(`${API_BASE}/api/cart`, {
//         sessionId,
//         productId,
//         quantity,
//       });
//       setCart(res.data.items || []);
//       return res.data;
//     } catch (err) {
//       console.error("Add to cart error:", err?.response?.data || err.message);
//       throw err;
//     }
//   };

//   // const removeFromCart = async (itemId) => {
//   //   try {
//   //     const res = await axios.delete(`${API_BASE}/api/cart/${sessionId}/item/${itemId}`);
//   //     setCart(res.data.items || []);
//   //     return res.data;
//   //   } catch (err) {
//   //     console.error("Remove cart item error:", err?.response?.data || err.message);
//   //     throw err;
//   //   }
//   // };

//   const removeFromCart = async (itemId) => {
  
//   try {
//     const res = await axios.delete(`${API_BASE}/api/cart/${sessionId}/item/${itemId}`);
//     console.log(res);
    
//     setCart(res.data.items || []);
//     return res.data;
//   } catch (err) {
//     console.error("Remove cart item error:", err?.response?.data || err.message);
//     throw err;
//   }
// };


//   const updateQuantity = async (itemId, quantity) => {
//     try {
//       const res = await axios.put(`${API_BASE}/api/cart/${sessionId}/item/${itemId}`, {
//         quantity,
//       });
//       setCart(res.data.items || []);
//       return res.data;
//     } catch (err) {
//       console.error("Update quantity error:", err?.response?.data || err.message);
//       throw err;
//     }
//   };

//   const clearCart = async () => {
//     try {
//       // backend supports clearing entire cart (we implement delete route)
//       const res = await axios.delete(`${API_BASE}/api/cart/${sessionId}`);
//       setCart([]);
//       return res.data;
//     } catch (err) {
//       console.error("Clear cart error:", err?.response?.data || err.message);
//       setCart([]); // fallback to local clear
//       throw err;
//     }
//   };

//   return (
//     <CartContext.Provider
//       value={{ sessionId, cart, addToCart, removeFromCart, updateQuantity, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);













// // src/context/CartContext.jsx
// import React, { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";

// const CartContext = createContext();

// const API_BASE = "http://localhost:3001";
// const SESSION_KEY = "shopsy_sessionId";

// // Generate a unique session ID
// function makeSessionId() {
//   return "sess_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
// }

// export const CartProvider = ({ children }) => {
//   const [sessionId, setSessionId] = useState(() => {
//     const existing = localStorage.getItem(SESSION_KEY);
//     if (existing) return existing;
//     const id = makeSessionId();
//     localStorage.setItem(SESSION_KEY, id);
//     return id;
//   });

//   const [cart, setCart] = useState([]);

//   // Fetch cart on mount or sessionId change
//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const res = await axios.get(`${API_BASE}/api/cart/${sessionId}`);
//         setCart(res.data.items || []);
//       } catch (err) {
//         console.error("Failed to fetch cart:", err?.response?.data || err.message);
//       }
//     };
//     if (sessionId) fetchCart();
//   }, [sessionId]);

//   // Add product to cart
//   const addToCart = async (productId, quantity = 1) => {
//     try {
//       const res = await axios.post(`${API_BASE}/api/cart`, {
//         sessionId,
//         productId,
//         quantity,
//       });
//       setCart(res.data.items || []);
//       return res.data;
//     } catch (err) {
//       console.error("Add to cart error:", err?.response?.data || err.message);
//       throw err;
//     }
//   };

//   // Remove a cart item
//   const removeFromCart = async (itemId) => {
//     try {
//       const res = await axios.delete(`${API_BASE}/api/cart/${sessionId}/item/${itemId}`);
//       setCart(res.data.items || []);
//       return res.data;
//     } catch (err) {
//       console.error("Remove cart item error:", err?.response?.data || err.message);
//       throw err;
//     }
//   };

//   // Update quantity of a cart item
//   const updateQuantity = async (itemId, quantity) => {
//     try {
//       const res = await axios.put(`${API_BASE}/api/cart/${sessionId}/item/${itemId}`, { quantity });
//       setCart(res.data.items || []);
//       return res.data;
//     } catch (err) {
//       console.error("Update quantity error:", err?.response?.data || err.message);
//       throw err;
//     }
//   };

//   // Clear entire cart
//   const clearCart = async () => {
//     try {
//       const res = await axios.delete(`${API_BASE}/api/cart/${sessionId}`);
//       setCart([]); // update frontend state immediately
//       return res.data;
//     } catch (err) {
//       console.error("Clear cart error:", err?.response?.data || err.message);
//       setCart([]); // fallback to frontend clear even if backend fails
//       throw err;
//     }
//   };

//   return (
//     <CartContext.Provider
//       value={{ sessionId, cart, addToCart, removeFromCart, updateQuantity, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
//ogggggggggggggggggggggggggggggggggggggggggggggggggggggggggg















// src/context/CartContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const SESSION_KEY = "shopsy_sessionId"; // single shared session key
const API_BASE = "http://localhost:3001";

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
