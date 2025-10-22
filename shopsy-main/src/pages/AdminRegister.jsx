// import React, { useState } from "react";

// const AdminRegister = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Register Data:", formData);
//     alert("Registered Successfully!");
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white dark:bg-gray-800 p-8 rounded-md shadow-md w-96"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Admin Register</h2>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"
//         />
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
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdminRegister;
















// import React, { useState } from "react";

// const AdminRegister = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Register Data:", formData);
//     alert("Registered Successfully!");
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white dark:bg-gray-800 p-8 rounded-md shadow-md w-96"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
//           Admin Register
//         </h2>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"
//         />
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
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdminRegister;















// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AdminRegister = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Register Data:", formData);
//     alert("Registered Successfully!");
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
//           Admin Register
//         </h2>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"
//         />
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
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdminRegister;
















// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AdminRegister = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Register Data:", formData);
//     alert("Registered Successfully!");
//   };

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white dark:bg-gray-800 p-8 rounded-md shadow-md w-96"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
//           Admin Register
//         </h2>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"
//         />
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
//           Register
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

// export default AdminRegister;












import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminRegister = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { data } = await axios.post("https://shopsy-jyse.onrender.com/api/admin/register", formData);
      console.log("Registered Admin:", data);
      alert("Registered Successfully!");
      navigate("/admin/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-md shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Admin Register</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full mb-4 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full mb-4 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none" />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full mb-4 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none" />
        <button type="submit" disabled={loading} className="w-full bg-primary text-white py-2 rounded hover:bg-secondary transition">
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
      <button onClick={() => navigate(-1)} className="mt-6 px-6 py-2 bg-gray-300 dark:bg-gray-700 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition">Back</button>
    </div>
  );
};

export default AdminRegister;
