// import React from "react";

// import { FaStar } from "react-icons/fa6";
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios"

// const Products = () => {
//   const [product, setproduct] = useState([])



//   useEffect(() => {
//      axios
//      .get("http://localhost:3001/api/products")
//      .then((result)=>setproduct(result.data))
//     .catch((err)=> console.log(err)
//     )
    
//   }, [])
//   console.log(product);
  
//   return (
//     <div className="mt-14 mb-12">
//       <div className="container">
//         {/* Header section */}
//         <div className="text-center mb-10 max-w-[600px] mx-auto">
//           <p data-aos="fade-up" className="text-sm text-primary">
//             Top Selling Products for you
//           </p>
//           <h1 data-aos="fade-up" className="text-3xl font-bold">
//             Products
//           </h1>
//           <p data-aos="fade-up" className="text-xs text-gray-400">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
//             asperiores modi Sit asperiores modi
//           </p>
//         </div>
//         {/* Body section */}
//         <div>
//           <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
//             {/* card section */}
//             {product.map((data) => (
//               <div
//                 data-aos="fade-up"
//                 data-aos-delay={data.aosDelay}
//                 key={data.id}
//                 className="space-y-3"
//               >
//                 <img
//                   src={data.image}
//                   alt=""
//                   className="h-[220px] w-[150px] object-cover rounded-md"
//                 />
//                 <div>
//                   <h3 className="font-semibold">{data.title}</h3>
//                     <h3 className="font-semibold">₹ {data.price || "0"}</h3>
//                   <p className="text-sm text-gray-600">{data.color}</p>
//                   <div className="flex items-center gap-1">
//                     <FaStar className="text-yellow-400" />
//                     <span>{data.rating}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           {/* view all button */}
//           <div className="flex justify-center">
//             <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
//               View All Button
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;
//without scroll bar og








// import React, { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa6";
// import axios from "axios";

// const Products = () => {
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/api/products")
//       .then((result) => setProduct(result.data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="mt-14 mb-12">
//       <div className="container">
//         {/* Header section */}
//         <div className="text-center mb-10 max-w-[600px] mx-auto">
//           <p data-aos="fade-up" className="text-sm text-primary">
//             Top Selling Products for you
//           </p>
//           <h1 data-aos="fade-up" className="text-3xl font-bold">
//             Products
//           </h1>
//           <p data-aos="fade-up" className="text-xs text-gray-400">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
//             asperiores modi Sit asperiores modi
//           </p>
//         </div>

//         {/* Body section with hidden horizontal scroll */}
//         <div className="relative">
//           <div
//             className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-2 hide-scrollbar"
//             style={{ scrollBehavior: "smooth" }}
//           >
//             {/* Card section */}
//             {product.map((data, index) => (
//               <div
//                 data-aos="fade-up"
//                 data-aos-delay={index * 100}
//                 key={data._id || index}
//                 className="flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] space-y-3"
//               >
//                 <img
//                   src={data.image || "https://via.placeholder.com/150"}
//                   alt={data.title}
//                   className="h-[220px] w-full object-cover rounded-md shadow-md hover:scale-105 duration-300"
//                 />
//                 <div className="text-center">
//                   <h3 className="font-semibold">{data.title}</h3>
//                   <h3 className="font-semibold text-primary">
//                     ₹ {data.price || "0"}
//                   </h3>
//                   <p className="text-sm text-gray-600">{data.color}</p>
//                   <div className="flex items-center justify-center gap-1">
//                     <FaStar className="text-yellow-400" />
//                     <span>{data.rating || "4.5"}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* View all button */}
//           <div className="flex justify-center">
//             <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md hover:bg-primary/90 transition">
//               View All Products
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;













// import React, { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa6";
// import axios from "axios";

// const Products = () => {
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/api/products")
//       .then((result) => {
//         // Filter only popular products (you can modify the logic below)
//         const popularProducts = result.data.filter(
//           (p) => (p.rating && p.rating >= 4.5) || (p.discount && p.discount >= 20)
//         );
//         setProduct(popularProducts);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="mt-14 mb-12">
//       <div className="container">
//         {/* Header section */}
//         <div className="text-center mb-10 max-w-[600px] mx-auto">
//           <p data-aos="fade-up" className="text-sm text-primary">
//             Our Most Popular Picks
//           </p>
//           <h1 data-aos="fade-up" className="text-3xl font-bold">
//             Popular Products
//           </h1>
//           <p data-aos="fade-up" className="text-xs text-gray-400">
//             Check out our top-rated and most-loved products chosen by our happy customers.
//           </p>
//         </div>

//         {/* Body section with hidden horizontal scroll */}
//         <div className="relative">
//           <div
//             className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-2 hide-scrollbar"
//             style={{ scrollBehavior: "smooth" }}
//           >
//             {/* Card section */}
//             {product.length > 0 ? (
//               product.map((data, index) => (
//                 <div
//                   data-aos="fade-up"
//                   data-aos-delay={index * 100}
//                   key={data._id || index}
//                   className="flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] space-y-3"
//                 >
//                   <img
//                     src={data.image || "https://via.placeholder.com/150"}
//                     alt={data.title}
//                     className="h-[220px] w-full object-cover rounded-md shadow-md hover:scale-105 duration-300"
//                   />
//                   <div className="text-center">
//                     <h3 className="font-semibold">{data.title}</h3>
//                     <h3 className="font-semibold text-primary">
//                       ₹ {data.price || "0"}
//                     </h3>
//                     {data.discount ? (
//                       <p className="text-sm text-green-600">
//                         {data.discount}% Off
//                       </p>
//                     ) : null}
//                     <div className="flex items-center justify-center gap-1">
//                       <FaStar className="text-yellow-400" />
//                       <span>{data.rating || "4.5"}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-center text-gray-500 w-full">
//                 No popular products available right now.
//               </p>
//             )}
//           </div>

//           {/* View all button */}
//           <div className="flex justify-center">
//             <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md hover:bg-primary/90 transition">
//               View All Products
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;















// import React, { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa6";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Products = () => {
//   const [product, setProduct] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/api/products")
//       .then((result) => {
//         const popularProducts = result.data.filter(
//           (p) => (p.rating && p.rating >= 4.5) || (p.discount && p.discount >= 20)
//         );
//         setProduct(popularProducts);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="mt-14 mb-12">
//       <div className="container">
//         <div className="text-center mb-10 max-w-[600px] mx-auto">
//           <p data-aos="fade-up" className="text-sm text-primary">Our Most Popular Picks</p>
//           <h1 data-aos="fade-up" className="text-3xl font-bold">Popular Products</h1>
//           <p data-aos="fade-up" className="text-xs text-gray-400">
//             Check out our top-rated and most-loved products chosen by our happy customers.
//           </p>
//         </div>

//         <div className="relative">
//           <div className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-2 hide-scrollbar">
//             {product.length > 0 ? (
//               product.map((data, index) => (
//                 <div
//                   onClick={() => navigate(`/product/${data._id}`)}
//                   data-aos="fade-up"
//                   data-aos-delay={index * 100}
//                   key={data._id || index}
//                   className="cursor-pointer flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] space-y-3"
//                 >
//                   <img
//                     src={data.image || "https://via.placeholder.com/150"}
//                     alt={data.title}
//                     className="h-[220px] w-full object-cover rounded-md shadow-md hover:scale-105 duration-300"
//                   />
//                   <div className="text-center">
//                     <h3 className="font-semibold">{data.title}</h3>
//                     <h3 className="font-semibold text-primary">₹ {data.price || "0"}</h3>
//                     {data.discount ? <p className="text-sm text-green-600">{data.discount}% Off</p> : null}
//                     <div className="flex items-center justify-center gap-1">
//                       <FaStar className="text-yellow-400" />
//                       <span>{data.rating || "4.5"}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-center text-gray-500 w-full">No popular products available right now.</p>
//             )}
//           </div>

//           <div className="flex justify-center">
//             <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md hover:bg-primary/90 transition">
//               View All Products
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;






















// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { FaStar } from "react-icons/fa6";

// export default function Products({ isAdmin = false }) {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     price: "",
//     category: "",
//     brand: "",
//     stock: "",
//     sku: "",
//     discount: "",
//     available: true,
//     image: "",
//   });
//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchProducts();
//     if (isAdmin) fetchCategories();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get("http://localhost:3001/api/products");
//       setProducts(res.data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchCategories = async () => {
//     try {
//       const res = await axios.get("http://localhost:3001/api/categories");
//       setCategories(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]:
//         type === "checkbox"
//           ? checked
//           : type === "file"
//           ? URL.createObjectURL(files[0])
//           : value,
//     }));
//   };

//   const handleEditClick = (product) => {
//     setEditingProduct(product);
//     setForm({
//       title: product.title,
//       description: product.description,
//       price: product.price,
//       stock: product.stock,
//       brand: product.brand,
//       sku: product.sku,
//       discount: product.discount || "",
//       available: product.available,
//       image: product.image || "",
//       category: product.category?._id || "",
//     });
//   };

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     const payload = {
//       ...form,
//       price: Number(form.price),
//       stock: Number(form.stock),
//       discount: form.discount ? Number(form.discount) : 0,
//     };
//     try {
//       const res = await axios.put(
//         `http://localhost:3001/api/products/${editingProduct._id}`,
//         payload
//       );
//       setProducts(products.map((p) => (p._id === res.data._id ? res.data : p)));
//       setEditingProduct(null);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to update product");
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this product?")) return;
//     try {
//       await axios.delete(`http://localhost:3001/api/products/${id}`);
//       setProducts(products.filter((p) => p._id !== id));
//     } catch (err) {
//       console.error(err);
//       alert("Failed to delete product");
//     }
//   };

//   if (!isAdmin) {
//     // ✅ Customer view (homepage)
//     return (
//       <div className="mt-14 mb-12">
//         <div className="container">
//           <div className="text-center mb-10 max-w-[600px] mx-auto">
//             <p className="text-sm text-primary">Our Most Popular Picks</p>
//             <h1 className="text-3xl font-bold">Popular Products</h1>
//             <p className="text-xs text-gray-400">
//               Check out our top-rated and most-loved products chosen by our happy customers.
//             </p>
//           </div>
//           <div className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-2 hide-scrollbar">
//             {products.length > 0 ? (
//               products.map((data, index) => (
//                 <div
//                   key={data._id || index}
//                   className="cursor-pointer flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] space-y-3"
//                   onClick={() => navigate(`/product/${data._id}`)}
//                 >
//                   <img
//                     src={data.image || "https://via.placeholder.com/150"}
//                     alt={data.title}
//                     className="h-[220px] w-full object-cover rounded-md shadow-md hover:scale-105 duration-300"
//                   />
//                   <div className="text-center">
//                     <h3 className="font-semibold">{data.title}</h3>
//                     <h3 className="font-semibold text-primary">₹ {data.price || "0"}</h3>
//                     {data.discount ? (
//                       <p className="text-sm text-green-600">{data.discount}% Off</p>
//                     ) : null}
//                     <div className="flex items-center justify-center gap-1">
//                       <FaStar className="text-yellow-400" />
//                       <span>{data.rating || "4.5"}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-center text-gray-500 w-full">No popular products available.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // ✅ Admin view
//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h2 className="text-2xl font-semibold mb-4 text-center">📦 Product Dashboard</h2>
//       {loading ? (
//         <p className="text-center">Loading products...</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border p-3">Image</th>
//                 <th className="border p-3">Title</th>
//                 <th className="border p-3">Price</th>
//                 <th className="border p-3">Stock</th>
//                 <th className="border p-3">Brand</th>
//                 <th className="border p-3">Category</th>
//                 <th className="border p-3">Available</th>
//                 <th className="border p-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((p) => (
//                 <tr key={p._id} className="hover:bg-gray-50">
//                   <td className="border p-3 text-center">
//                     {p.image ? (
//                       <img src={p.image} alt={p.title} className="w-12 h-12 object-cover mx-auto" />
//                     ) : "—"}
//                   </td>
//                   <td className="border p-3">{p.title}</td>
//                   <td className="border p-3">₹{p.price}</td>
//                   <td className="border p-3">{p.stock}</td>
//                   <td className="border p-3">{p.brand}</td>
//                   <td className="border p-3">{p.category?.name || ""}</td>
//                   <td className="border p-3 text-center">{p.available ? "✅" : "❌"}</td>
//                   <td className="border p-3 flex gap-2">
//                     <button
//                       onClick={() => handleEditClick(p)}
//                       className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(p._id)}
//                       className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Edit Modal */}
//       {editingProduct && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-2xl w-full max-w-xl relative">
//             <h3 className="text-xl font-semibold mb-4">Edit Product</h3>
//             <form onSubmit={handleEditSubmit} className="space-y-3">
//               <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} className="w-full border p-2 rounded" />
//               <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full border p-2 rounded" />
//               <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} className="w-full border p-2 rounded" />
//               <input type="number" name="stock" placeholder="Stock" value={form.stock} onChange={handleChange} className="w-full border p-2 rounded" />
//               <input type="text" name="brand" placeholder="Brand" value={form.brand} onChange={handleChange} className="w-full border p-2 rounded" />
//               <input type="text" name="sku" placeholder="SKU" value={form.sku} onChange={handleChange} className="w-full border p-2 rounded" />
//               <input type="number" name="discount" placeholder="Discount %" value={form.discount} onChange={handleChange} className="w-full border p-2 rounded" />
//               <select name="category" value={form.category} onChange={handleChange} className="w-full border p-2 rounded">
//                 <option value="">-- Select Category --</option>
//                 {categories.map(cat => (
//                   <option key={cat._id} value={cat._id}>{cat.name}</option>
//                 ))}
//               </select>
//               <div className="flex items-center gap-2">
//                 <input type="checkbox" name="available" checked={form.available} onChange={handleChange} />
//                 <label>Available</label>
//               </div>
//               <input type="file" name="image" accept="image/*" onChange={handleChange} />
//               {form.image && <img src={form.image} alt="Preview" className="w-full h-32 object-cover rounded mb-2" />}

//               <div className="flex justify-end gap-2 mt-3">
//                 <button type="button" onClick={() => setEditingProduct(null)} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">Cancel</button>
//                 <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Save Changes</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



















// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { FaStar } from "react-icons/fa6";

// export default function Products({ isAdmin = false }) {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     price: "",
//     category: "",
//     brand: "",
//     stock: "",
//     sku: "",
//     discount: "",
//     available: true,
//     image: "",
//   });
//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchProducts();
//     if (isAdmin) fetchCategories();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get("http://localhost:3001/api/products"); 
//       // Make sure your backend populates category: Product.find().populate('category')
//       let data = res.data;

//       if (!isAdmin) {
//         // Filter only products whose category name is "Popular Products"
//         data = data.filter((p) => p.category?.name === "Popular Products");
//       }

//       setProducts(data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchCategories = async () => {
//     try {
//       const res = await axios.get("http://localhost:3001/api/categories");
//       setCategories(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]:
//         type === "checkbox"
//           ? checked
//           : type === "file"
//           ? URL.createObjectURL(files[0])
//           : value,
//     }));
//   };

//   const handleEditClick = (product) => {
//     setEditingProduct(product);
//     setForm({
//       title: product.title,
//       description: product.description,
//       price: product.price,
//       stock: product.stock,
//       brand: product.brand,
//       sku: product.sku,
//       discount: product.discount || "",
//       available: product.available,
//       image: product.image || "",
//       category: product.category?._id || "",
//     });
//   };

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     const payload = {
//       ...form,
//       price: Number(form.price),
//       stock: Number(form.stock),
//       discount: form.discount ? Number(form.discount) : 0,
//     };
//     try {
//       const res = await axios.put(
//         `http://localhost:3001/api/products/${editingProduct._id}`,
//         payload
//       );
//       setProducts(products.map((p) => (p._id === res.data._id ? res.data : p)));
//       setEditingProduct(null);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to update product");
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this product?")) return;
//     try {
//       await axios.delete(`http://localhost:3001/api/products/${id}`);
//       setProducts(products.filter((p) => p._id !== id));
//     } catch (err) {
//       console.error(err);
//       alert("Failed to delete product");
//     }
//   };

//   // --------------------- CUSTOMER VIEW ---------------------
//   if (!isAdmin) {
//     return (
//       <div className="mt-14 mb-12">
//         <div className="container">
//           <div className="text-center mb-10 max-w-[600px] mx-auto">
//             <p className="text-sm text-primary">Our Most Popular Picks</p>
//             <h1 className="text-3xl font-bold">Popular Products</h1>
//             <p className="text-xs text-gray-400">
//               Check out our top-rated and most-loved products chosen by our happy customers.
//             </p>
//           </div>
//           <div className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-2 hide-scrollbar">
//             {products.length > 0 ? (
//               products.map((data, index) => (
//                 <div
//                   key={data._id || index}
//                   className="cursor-pointer flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] space-y-3"
//                   onClick={() => navigate(`/product/${data._id}`)}
//                 >
//                   <img
//                     src={data.image || "https://via.placeholder.com/150"}
//                     alt={data.title}
//                     className="h-[220px] w-full object-cover rounded-md shadow-md hover:scale-105 duration-300"
//                   />
//                   <div className="text-center">
//                     <h3 className="font-semibold">{data.title}</h3>
//                     <h3 className="font-semibold text-primary">₹ {data.price || "0"}</h3>
//                     {data.discount ? (
//                       <p className="text-sm text-green-600">{data.discount}% Off</p>
//                     ) : null}
//                     <div className="flex items-center justify-center gap-1">
//                       <FaStar className="text-yellow-400" />
//                       <span>{data.rating || "4.5"}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-center text-gray-500 w-full">No popular products available.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // --------------------- ADMIN VIEW ---------------------
//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h2 className="text-2xl font-semibold mb-4 text-center">📦 Product Dashboard</h2>
//       {loading ? (
//         <p className="text-center">Loading products...</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border p-3">Image</th>
//                 <th className="border p-3">Title</th>
//                 <th className="border p-3">Price</th>
//                 <th className="border p-3">Stock</th>
//                 <th className="border p-3">Brand</th>
//                 <th className="border p-3">Category</th>
//                 <th className="border p-3">Available</th>
//                 <th className="border p-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((p) => (
//                 <tr key={p._id} className="hover:bg-gray-50">
//                   <td className="border p-3 text-center">
//                     {p.image ? (
//                       <img src={p.image} alt={p.title} className="w-12 h-12 object-cover mx-auto" />
//                     ) : "—"}
//                   </td>
//                   <td className="border p-3">{p.title}</td>
//                   <td className="border p-3">₹{p.price}</td>
//                   <td className="border p-3">{p.stock}</td>
//                   <td className="border p-3">{p.brand}</td>
//                   <td className="border p-3">{p.category?.name || ""}</td>
//                   <td className="border p-3 text-center">{p.available ? "✅" : "❌"}</td>
//                   <td className="border p-3 flex gap-2">
//                     <button
//                       onClick={() => handleEditClick(p)}
//                       className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(p._id)}
//                       className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Edit Modal */}
//       {editingProduct && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-2xl w-full max-w-xl relative">
//             <h3 className="text-xl font-semibold mb-4">Edit Product</h3>
//             <form onSubmit={handleEditSubmit} className="space-y-3">
//               {/* ... form fields same as before */}
//               <input type="file" name="image" accept="image/*" onChange={handleChange} />
//               {form.image && <img src={form.image} alt="Preview" className="w-full h-32 object-cover rounded mb-2" />}
//               <div className="flex justify-end gap-2 mt-3">
//                 <button type="button" onClick={() => setEditingProduct(null)} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">Cancel</button>
//                 <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Save Changes</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }















import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

export default function Products({ isAdmin = false }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    brand: "",
    stock: "",
    sku: "",
    discount: "",
    available: true,
    image: "",
  });
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
    if (isAdmin) fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      // ✅ Populate category to get its name
      const res = await axios.get("http://localhost:3001/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/categories");
      setCategories(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? URL.createObjectURL(files[0])
          : value,
    }));
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
    setForm({
      title: product.title,
      description: product.description,
      price: product.price,
      stock: product.stock,
      brand: product.brand,
      sku: product.sku,
      discount: product.discount || "",
      available: product.available,
      image: product.image || "",
      category: product.category?._id || "",
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
      discount: form.discount ? Number(form.discount) : 0,
    };
    try {
      const res = await axios.put(
        `http://localhost:3001/api/products/${editingProduct._id}`,
        payload
      );
      setProducts(products.map((p) => (p._id === res.data._id ? res.data : p)));
      setEditingProduct(null);
    } catch (err) {
      console.error(err);
      alert("Failed to update product");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(`http://localhost:3001/api/products/${id}`);
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete product");
    }
  };

  // ✅ Filter only popular products for customer view
  const popularProducts = products.filter(
    (p) => p.category?.name?.toLowerCase() === "popular products"
  );

  if (!isAdmin) {
    // Customer view
    return (
      <div className="mt-14 mb-12">
        <div className="container">
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm text-primary">Our Most Popular Picks</p>
            <h1 className="text-3xl font-bold">Popular Products</h1>
            <p className="text-xs text-gray-400">
              Check out our top-rated and most-loved products chosen by our happy customers.
            </p>
          </div>
          <div className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-2 hide-scrollbar">
            {popularProducts.length > 0 ? (
              popularProducts.map((data, index) => (
                <div
                  key={data._id || index}
                  className="cursor-pointer flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] space-y-3"
                  onClick={() => navigate(`/product/${data._id}`)}
                >
                  <img
                    src={data.image || "https://via.placeholder.com/150"}
                    alt={data.title}
                    className="h-[220px] w-full object-cover rounded-md shadow-md hover:scale-105 duration-300"
                  />
                  <div className="text-center">
                    <h3 className="font-semibold">{data.title}</h3>
                    <h3 className="font-semibold text-primary">₹ {data.price || "0"}</h3>
                    {data.discount ? (
                      <p className="text-sm text-green-600">{data.discount}% Off</p>
                    ) : null}
                    <div className="flex items-center justify-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{data.rating || "4.5"}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 w-full">No popular products available.</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Admin view
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">📦 Product Dashboard</h2>
      {loading ? (
        <p className="text-center">Loading products...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-3">Image</th>
                <th className="border p-3">Title</th>
                <th className="border p-3">Price</th>
                <th className="border p-3">Stock</th>
                <th className="border p-3">Brand</th>
                <th className="border p-3">Category</th>
                <th className="border p-3">Available</th>
                <th className="border p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p._id} className="hover:bg-gray-50">
                  <td className="border p-3 text-center">
                    {p.image ? (
                      <img src={p.image} alt={p.title} className="w-12 h-12 object-cover mx-auto" />
                    ) : "—"}
                  </td>
                  <td className="border p-3">{p.title}</td>
                  <td className="border p-3">₹{p.price}</td>
                  <td className="border p-3">{p.stock}</td>
                  <td className="border p-3">{p.brand}</td>
                  <td className="border p-3">{p.category?.name || ""}</td>
                  <td className="border p-3 text-center">{p.available ? "✅" : "❌"}</td>
                  <td className="border p-3 flex gap-2">
                    <button
                      onClick={() => handleEditClick(p)}
                      className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(p._id)}
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit Modal */}
      {editingProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-full max-w-xl relative">
            <h3 className="text-xl font-semibold mb-4">Edit Product</h3>
            <form onSubmit={handleEditSubmit} className="space-y-3">
              <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} className="w-full border p-2 rounded" />
              <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full border p-2 rounded" />
              <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} className="w-full border p-2 rounded" />
              <input type="number" name="stock" placeholder="Stock" value={form.stock} onChange={handleChange} className="w-full border p-2 rounded" />
              <input type="text" name="brand" placeholder="Brand" value={form.brand} onChange={handleChange} className="w-full border p-2 rounded" />
              <input type="text" name="sku" placeholder="SKU" value={form.sku} onChange={handleChange} className="w-full border p-2 rounded" />
              <input type="number" name="discount" placeholder="Discount %" value={form.discount} onChange={handleChange} className="w-full border p-2 rounded" />
              <select name="category" value={form.category} onChange={handleChange} className="w-full border p-2 rounded">
                <option value="">-- Select Category --</option>
                {categories.map(cat => (
                  <option key={cat._id} value={cat._id}>{cat.name}</option>
                ))}
              </select>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="available" checked={form.available} onChange={handleChange} />
                <label>Available</label>
              </div>
              <input type="file" name="image" accept="image/*" onChange={handleChange} />
              {form.image && <img src={form.image} alt="Preview" className="w-full h-32 object-cover rounded mb-2" />}
              <div className="flex justify-end gap-2 mt-3">
                <button type="button" onClick={() => setEditingProduct(null)} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
