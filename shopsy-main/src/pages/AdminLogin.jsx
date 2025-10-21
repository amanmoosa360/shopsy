// import React, { useState } from "react";

// const AdminLogin = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login Data:", formData);
//     alert("Logged In Successfully!");
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white dark:bg-gray-800 p-8 rounded-md shadow-md w-96"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Admin Login</h2>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"
//         />
//         <button
//           type="submit"
//           className="w-full bg-primary text-white py-2 rounded hover:bg-secondary transition"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;
















// import React, { useState } from "react";

// const AdminLogin = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login Data:", formData);
//     alert("Login Successful!");
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white dark:bg-gray-800 p-8 rounded-md shadow-md w-96"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
//           Admin Login
//         </h2>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"
//         />
//         <button
//           type="submit"
//           className="w-full bg-primary text-white py-2 rounded hover:bg-secondary transition"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;


















// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AdminLogin = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login Data:", formData);
//     alert("Login Successful!");
//   };

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
//       <button
//         onClick={() => navigate(-1)}
//         className="self-start ml-8 mb-4 px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition"
//       >
//         Back
//       </button>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white dark:bg-gray-800 p-8 rounded-md shadow-md w-96"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
//           Admin Login
//         </h2>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"
//         />
//         <button
//           type="submit"
//           className="w-full bg-primary text-white py-2 rounded hover:bg-secondary transition"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;

















// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AdminLogin = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login Data:", formData);
//     alert("Login Successful!");
//   };

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white dark:bg-gray-800 p-8 rounded-md shadow-md w-96"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
//           Admin Login
//         </h2>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"
//         />
//         <button
//           type="submit"
//           className="w-full bg-primary text-white py-2 rounded hover:bg-secondary transition"
//         >
//           Login
//         </button>
//       </form>

//       <button
//         onClick={() => navigate(-1)}
//         className="mt-6 px-6 py-2 bg-gray-300 dark:bg-gray-700 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition"
//       >
//         Back
//       </button>
//     </div>
//   );
// };

// export default AdminLogin;














// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const AdminLogin = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     try {
//       const { data } = await axios.post("http://localhost:3001/api/admin/login", formData);
//       console.log("Logged in Admin:", data);
//       localStorage.setItem("adminToken", data.token); // save token
//       alert("Login Successful!");
//       navigate("/");
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
//       <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-md shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Admin Login</h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full mb-4 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none" />
//         <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full mb-4 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none" />
//         <button type="submit" disabled={loading} className="w-full bg-primary text-white py-2 rounded hover:bg-secondary transition">
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//       <button onClick={() => navigate(-1)} className="mt-6 px-6 py-2 bg-gray-300 dark:bg-gray-700 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition">Back</button>
//     </div>
//   );
// };

// export default AdminLogin;










// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { AuthContext } from "../AuthContext"; // ✅ Import AuthContext

// const AdminLogin = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const { login } = useContext(AuthContext); // ✅ Get login function from context

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     try {
//       const { data } = await axios.post(
//         "http://localhost:3001/api/admin/login",
//         formData
//       );
//       console.log("Logged in Admin:", data);

//       login(data.token); // ✅ Use context login function

//       alert("Login Successful!");
//       navigate("/"); // Redirect to home page
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white dark:bg-gray-800 p-8 rounded-md shadow-md w-96"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
//           Admin Login
//         </h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-primary text-white py-2 rounded hover:bg-secondary transition"
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//       <button
//         onClick={() => navigate(-1)}
//         className="mt-6 px-6 py-2 bg-gray-300 dark:bg-gray-700 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition"
//       >
//         Back
//       </button>
//     </div>
//   );
// };

// export default AdminLogin;
//ogggggggggggggggggggggggggggggggg



















// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { AuthContext } from "../AuthContext"; // ✅ Import AuthContext

// const AdminLogin = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const { login } = useContext(AuthContext); // ✅ Get login function from context

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     try {
//       const { data } = await axios.post(
//         "http://localhost:3001/api/admin/login",
//         formData
//       );
//       console.log("Logged in Admin:", data);


//       // Updated: Pass token, user, and sessionId to context
//       login(data.token, data, data._id);

//       alert("Login Successful!");
//       navigate("/"); // Redirect to home page
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white dark:bg-gray-800 p-8 rounded-md shadow-md w-96"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
//           Admin Login
//         </h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-primary text-white py-2 rounded hover:bg-secondary transition"
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//       <button
//         onClick={() => navigate(-1)}
//         className="mt-6 px-6 py-2 bg-gray-300 dark:bg-gray-700 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition"
//       >
//         Back
//       </button>
//     </div>
//   );
// };

// export default AdminLogin;
//oggggggggggggggggggggggggggggggggggg



















// src/pages/AdminLogin.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import { useCart } from "../context/CartContext"; // adjust path if needed

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);
  const { sessionId: cartSessionId } = useCart();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { data } = await axios.post("http://localhost:3001/api/admin/login", formData);
      // backend expected to return token + user object. Adjust if your backend shape differs:
      // E.g. data = { token: "...", user: {...} }
      const token = data.token || data?.accessToken || null;
      const userData = data.user || data?.admin || (typeof data === "object" ? data : null);

      // Pass the cart session into login so AuthContext will reuse it
      login(token, userData, cartSessionId);

      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-md shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Admin Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"/>
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"/>
        <button type="submit" disabled={loading} className="w-full bg-primary text-white py-2 rounded hover:bg-secondary transition">
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
