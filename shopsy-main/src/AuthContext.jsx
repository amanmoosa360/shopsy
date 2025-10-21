










// // src/AuthContext.jsx
// import React, { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLogged, setIsLogged] = useState(() => {
//     const token = localStorage.getItem("adminToken");
//     return !!token && token !== "undefined" && token !== "";
//   });

//   const [user, setUser] = useState(() => {
//     const savedUser = localStorage.getItem("adminUser");
//     return savedUser ? JSON.parse(savedUser) : null;
//   });

//   const [sessionId, setSessionId] = useState(() => {
//     return localStorage.getItem("sessionId") || null;
//   });

//   useEffect(() => {
//     const onStorage = (e) => {
//       if (e.key === "adminToken") {
//         const token = e.newValue;
//         setIsLogged(!!token && token !== "undefined" && token !== "");
//       }
//       if (e.key === "adminUser") {
//         const u = e.newValue ? JSON.parse(e.newValue) : null;
//         setUser(u);
//       }
//       if (e.key === "sessionId") {
//         setSessionId(e.newValue || null);
//       }
//     };
//     window.addEventListener("storage", onStorage);
//     return () => window.removeEventListener("storage", onStorage);
//   }, []);

//   const login = (token, userData, session) => {
//     localStorage.setItem("adminToken", token);
//     localStorage.setItem("adminUser", JSON.stringify(userData));
//     localStorage.setItem("sessionId", session);
//     setIsLogged(true);
//     setUser(userData);
//     setSessionId(session);
//   };

//   const logout = () => {
//     localStorage.removeItem("adminToken");
//     localStorage.removeItem("adminUser");
//     localStorage.removeItem("sessionId");
//     setIsLogged(false);
//     setUser(null);
//     setSessionId(null);
//   };

//   return (
//     <AuthContext.Provider value={{ isLogged, login, logout, user, sessionId }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };




// // src/AuthContext.jsx
// import React, { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   // Safe isLogged initialization
//   const [isLogged, setIsLogged] = useState(() => {
//     const token = localStorage.getItem("adminToken");
//     console.log(token);
//     return !!token && token !== "undefined" && token !== "";
//   });
  
  

//   // Safe user initialization
//   const [user, setUser] = useState(() => {
//     const savedUser = localStorage.getItem("adminUser");
//     console.log(savedUser);
    
//     if (!savedUser || savedUser === "undefined") return null;

//     try {
//       return JSON.parse(savedUser);
//     } catch (err) {
//       console.warn("Failed to parse adminUser from localStorage", err);
//       localStorage.removeItem("adminUser"); // optional cleanup
//       return null;
//     }
//   });

//   // Safe sessionId initialization
//   const [sessionId, setSessionId] = useState(() => {
//     const sid = localStorage.getItem("sessionId");
//     return sid && sid !== "undefined" ? sid : null;
//   });

//   // Handle changes in localStorage from other tabs/windows
//   useEffect(() => {
//     const onStorage = (e) => {
//       if (e.key === "adminToken") {
//         const token = e.newValue;
//         setIsLogged(!!token && token !== "undefined" && token !== "");
//       }
//       if (e.key === "adminUser") {
//         if (!e.newValue || e.newValue === "undefined") {
//           setUser(null);
//         } else {
//           try {
//             setUser(JSON.parse(e.newValue));
//           } catch (err) {
//             console.warn("Failed to parse adminUser from storage event", err);
//             setUser(null);
//             localStorage.removeItem("adminUser");
//           }
//         }
//       }
//       if (e.key === "sessionId") {
//         setSessionId(e.newValue && e.newValue !== "undefined" ? e.newValue : null);
//       }
//     };

//     window.addEventListener("storage", onStorage);
//     return () => window.removeEventListener("storage", onStorage);
//   }, []);

//   // Login function: saves token, user, session
//   const login = (token, userData, session) => {
//     if (token) localStorage.setItem("adminToken", token);
//     if (userData) localStorage.setItem("adminUser", JSON.stringify(userData));
//     if (session) localStorage.setItem("sessionId", session);

//     setIsLogged(true);
//     setUser(userData || null);
//     setSessionId(session || null);
//   };

//   // Logout function: removes everything from localStorage
//   const logout = () => {
//     localStorage.removeItem("adminToken");
//     localStorage.removeItem("adminUser");
//     localStorage.removeItem("sessionId");

//     setIsLogged(false);
//     setUser(null);
//     setSessionId(null);
//   };

//   return (
//     <AuthContext.Provider value={{ isLogged, login, logout, user, sessionId }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };



















// import React, { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   // Track if auth is loading
//   const [loadingAuth, setLoadingAuth] = useState(true);

//   const [isLogged, setIsLogged] = useState(false);
//   const [user, setUser] = useState(null);
//   const [sessionId, setSessionId] = useState(null);



//   // Initialize auth from localStorage
//   useEffect(() => {
//     const token = localStorage.getItem("adminToken");
//     const savedUser = localStorage.getItem("adminUser");
//     console.log(savedUser);
    
//     const sid = localStorage.getItem("sessionId");

//     setIsLogged(!!token && token !== "undefined" && token !== "");
//     if (savedUser && savedUser !== "undefined") {
//       try {
//         setUser(JSON.parse(savedUser));
//       } catch (err) {
//         console.warn("Failed to parse adminUser from localStorage", err);
//         localStorage.removeItem("adminUser");
//         setUser(null);
//       }
//     }
//     setSessionId(sid && sid !== "undefined" ? sid : null);

//     setLoadingAuth(false); // finished loading
//   }, []);

//   // Handle changes in localStorage from other tabs/windows
//   useEffect(() => {
//     const onStorage = (e) => {
//       if (e.key === "adminToken") {
//         setIsLogged(!!e.newValue && e.newValue !== "undefined");
//       }
//       if (e.key === "adminUser") {
//         if (!e.newValue || e.newValue === "undefined") {
//           setUser(null);
//         } else {
//           try {
//             setUser(JSON.parse(e.newValue));
//           } catch {
//             setUser(null);
//             localStorage.removeItem("adminUser");
//           }
//         }
//       }
//       if (e.key === "sessionId") {
//         setSessionId(e.newValue && e.newValue !== "undefined" ? e.newValue : null);
//       }
//     };
//     window.addEventListener("storage", onStorage);
//     return () => window.removeEventListener("storage", onStorage);
//   }, []);
//   console.log(localStorage.sessionId);
  

//   const login = (token, userData, session) => {

   
//     console.log(userData);
    
    
//     if (token) localStorage.setItem("adminToken", token);
//     if (userData) localStorage.setItem("adminUser", JSON.stringify(userData));
//     if (session) localStorage.setItem("sessionId", session);

//     setIsLogged(true);
//     setUser(userData || null);
//     setSessionId(session || null);
//   };

//   const logout = () => {
//     localStorage.removeItem("adminToken");
//     localStorage.removeItem("adminUser");
//     localStorage.removeItem("sessionId");

//     setIsLogged(false);
//     setUser(null);
//     setSessionId(null);
//   };

//   return (
//     <AuthContext.Provider value={{ isLogged, user, sessionId, login, logout, loadingAuth }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };










// src/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { SESSION_KEY } from "./context/CartContext"; // adjust path if you placed CartContext elsewhere

export const AuthContext = createContext();

function makeSessionId() {
  return "sess_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export const AuthProvider = ({ children }) => {
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    try {
      const token = localStorage.getItem("adminToken");
      const savedUser = localStorage.getItem("adminUser");
      let parsedUser = null;

      if (savedUser && savedUser !== "undefined") {
        try {
          parsedUser = JSON.parse(savedUser);
        } catch (err) {
          console.warn("Failed to parse adminUser from localStorage:", err);
          localStorage.removeItem("adminUser");
          parsedUser = null;
        }
      }

      let sid = localStorage.getItem(SESSION_KEY);
      if (!sid || sid === "undefined") {
        sid = makeSessionId();
        localStorage.setItem(SESSION_KEY, sid);
      }

      setIsLogged(!!token && token !== "undefined" && token !== "");
      setUser(parsedUser);
      setSessionId(sid);
    } finally {
      setLoadingAuth(false);
    }
  }, []);

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "adminToken") {
        setIsLogged(!!e.newValue && e.newValue !== "undefined");
      }
      if (e.key === "adminUser") {
        if (!e.newValue || e.newValue === "undefined") {
          setUser(null);
        } else {
          try {
            setUser(JSON.parse(e.newValue));
          } catch {
            setUser(null);
            localStorage.removeItem("adminUser");
          }
        }
      }
      if (e.key === SESSION_KEY) {
        setSessionId(e.newValue && e.newValue !== "undefined" ? e.newValue : null);
      }
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  /**
   * login(token, userData, sessionFromCaller)
   * - prefer sessionFromCaller (if passed), otherwise use existing shopsy_sessionId
   */
  const login = (token, userData, sessionFromCaller) => {
    if (token) localStorage.setItem("adminToken", token);

    if (userData !== undefined && userData !== null) {
      localStorage.setItem("adminUser", JSON.stringify(userData));
    }

    let sid = sessionFromCaller || localStorage.getItem(SESSION_KEY);
    if (!sid || sid === "undefined") sid = makeSessionId();
    localStorage.setItem(SESSION_KEY, sid);

    setIsLogged(true);
    setUser(userData || null);
    setSessionId(sid);
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    // keep shopsy_sessionId so cart persists after logout
    const sid = localStorage.getItem(SESSION_KEY);
    setIsLogged(false);
    setUser(null);
    setSessionId(sid && sid !== "undefined" ? sid : null);
  };

  return (
    <AuthContext.Provider value={{ isLogged, user, sessionId, login, logout, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
