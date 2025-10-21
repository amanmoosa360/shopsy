// // // // src/components/ViewProducts.jsx
// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";

// // // export default function ViewProducts() {
// // //   const [products, setProducts] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     const fetchProducts = async () => {
// // //       try {
// // //         const res = await axios.get("http://localhost:3001/api/products");
// // //         setProducts(res.data);
// // //       } catch (err) {
// // //         console.error("Failed to fetch products:", err.message);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };
// // //     fetchProducts();
// // //   }, []);

// // //   return (
// // //     <div className="p-6 max-w-7xl mx-auto">
// // //       <div className="bg-white rounded-2xl shadow p-6">
// // //         <h2 className="text-2xl font-semibold mb-4">📦 Product List</h2>

// // //         {loading ? (
// // //           <p>Loading products...</p>
// // //         ) : products.length === 0 ? (
// // //           <p>No products found.</p>
// // //         ) : (
// // //           <div className="overflow-x-auto">
// // //             <table className="w-full border-collapse">
// // //               <thead className="bg-gray-100">
// // //                 <tr>
// // //                   <th className="border p-3 text-left">Image</th>
// // //                   <th className="border p-3 text-left">Title</th>
// // //                   <th className="border p-3 text-left">Price</th>
// // //                   <th className="border p-3 text-left">Stock</th>
// // //                   <th className="border p-3 text-left">Brand</th>
// // //                   <th className="border p-3 text-left">Category</th>
// // //                   <th className="border p-3 text-left">Status</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {products.map((p) => (
// // //                   <tr key={p._id} className="hover:bg-gray-50">
// // //                     <td className="border p-3">
// // //                       {p.image ? (
// // //                         <img
// // //                           src={p.image}
// // //                           alt={p.title}
// // //                           className="w-12 h-12 object-cover rounded"
// // //                         />
// // //                       ) : (
// // //                         "—"
// // //                       )}
// // //                     </td>
// // //                     <td className="border p-3">{p.title}</td>
// // //                     <td className="border p-3">₹{p.price}</td>
// // //                     <td className="border p-3">{p.stock}</td>
// // //                     <td className="border p-3">{p.brand}</td>
// // //                     <td className="border p-3">{p.category}</td>
// // //                     <td className="border p-3">
// // //                       {p.available ? (
// // //                         <span className="text-green-600">✅</span>
// // //                       ) : (
// // //                         <span className="text-red-600">❌</span>
// // //                       )}
// // //                     </td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }










// // // // src/components/ViewProducts.jsx
// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";

// // // export default function ViewProducts() {
// // //   const [products, setProducts] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     const fetchProducts = async () => {
// // //       try {
// // //         const res = await axios.get("http://localhost:3001/api/products");
// // //         setProducts(res.data);
// // //       } catch (err) {
// // //         console.error("Failed to fetch products:", err.message);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };
// // //     fetchProducts();
// // //   }, []);
// // // console.log(products);

// // //   return (
// // //     <div className="p-6 max-w-7xl mx-auto">
// // //       <div className="bg-white rounded-2xl shadow p-6">
// // //         <h2 className="text-2xl font-semibold mb-4 text-center">
// // //           📦 Product List
// // //         </h2>

// // //         {loading ? (
// // //           <p className="text-center">Loading products...</p>
// // //         ) : products.length === 0 ? (
// // //           <p className="text-center">No products found.</p>
// // //         ) : (
// // //           <div className="flex justify-center">
// // //             <div className="overflow-x-auto w-full max-w-5xl">
// // //               <table className="w-full border-collapse">
// // //                 <thead className="bg-gray-100">
// // //                   <tr>
// // //                     <th className="border p-3 text-left">Image</th>
// // //                     <th className="border p-3 text-left">Title</th>
// // //                     <th className="border p-3 text-left">Price</th>
// // //                     <th className="border p-3 text-left">Stock</th>
// // //                     <th className="border p-3 text-left">Brand</th>
// // //                     <th className="border p-3 text-left">Category</th>
// // //                     <th className="border p-3 text-left">Status</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
                 
// // //                   {products?.map((p) =>{
// // //                     return(
// // //                         <tr key={p._id} className="hover:bg-gray-50">
// // //                       <td className="border p-3 text-center">
// // //                         {p?.image ? (
// // //                           <img
// // //                             src={p.image}
// // //                             alt={p.title}
// // //                             className="w-12 h-12 object-cover rounded mx-auto"
// // //                           />
// // //                         ) : (
// // //                           "—"
// // //                         )}
// // //                       </td>
// // //                       {console.log(p?.title)
// // //                       }
// // //                       <td className="border p-3">{p?.title}</td>
// // //                       <td className="border p-3">₹{p?.price}</td>
// // //                       <td className="border p-3">{p?.stock}</td>
// // //                       <td className="border p-3">{p?.brand}</td>
// // //                       <td className="border p-3">{p?.category?.name || ""}</td>
// // //                       <td className="border p-3 text-center">
// // //                         {p?.available ? (
// // //                           <span className="text-green-600">✅</span>
// // //                         ) : (
// // //                           <span className="text-red-600">❌</span>
// // //                         )}
// // //                       </td>
// // //                     </tr>
// // //                     )
// // //                   })}
// // //                 </tbody>
// // //               </table>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

















// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // export default function ViewProducts() {
// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [editingProduct, setEditingProduct] = useState(null); // For modal edit
// //   const [form, setForm] = useState({});

// //   const fetchProducts = async () => {
// //     try {
// //       const res = await axios.get("http://localhost:3001/api/products");
// //       setProducts(res.data);
// //     } catch (err) {
// //       console.error(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchProducts();
// //   }, []);

// //   const handleDelete = async (id) => {
// //     if (!window.confirm("Are you sure you want to delete this product?")) return;
// //     try {
// //       await axios.delete(`http://localhost:3001/api/products/${id}`);
// //       setProducts(products.filter((p) => p._id !== id));
// //     } catch (err) {
// //       console.error(err.message);
// //     }
// //   };

// //   const handleEditClick = (product) => {
// //     setEditingProduct(product);
// //     setForm({ ...product, category: product.category?._id || "" });
// //   };

// //   const handleChange = (e) => {
// //     const { name, value, type, checked, files } = e.target;
// //     setForm((prev) => ({
// //       ...prev,
// //       [name]:
// //         type === "checkbox"
// //           ? checked
// //           : type === "file"
// //           ? URL.createObjectURL(files[0])
// //           : value,
// //     }));
// //   };

// //   const handleEditSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await axios.put(
// //         `http://localhost:3001/api/products/${editingProduct._id}`,
// //         form
// //       );
// //       setProducts(products.map((p) => (p._id === res.data._id ? res.data : p)));
// //       setEditingProduct(null);
// //     } catch (err) {
// //       console.error(err.message);
// //     }
// //   };

// //   return (
// //     <div className="p-6 max-w-7xl mx-auto">
// //       <div className="bg-white rounded-2xl shadow p-6">
// //         <h2 className="text-2xl font-semibold mb-4 text-center">📦 Product List</h2>

// //         {loading ? (
// //           <p className="text-center">Loading products...</p>
// //         ) : products.length === 0 ? (
// //           <p className="text-center">No products found.</p>
// //         ) : (
// //           <div className="flex justify-center">
// //             <div className="overflow-x-auto w-full max-w-5xl">
// //               <table className="w-full border-collapse">
// //                 <thead className="bg-gray-100">
// //                   <tr>
// //                     <th className="border p-3 text-left">Image</th>
// //                     <th className="border p-3 text-left">Title</th>
// //                     <th className="border p-3 text-left">Price</th>
// //                     <th className="border p-3 text-left">Stock</th>
// //                     <th className="border p-3 text-left">Brand</th>
// //                     <th className="border p-3 text-left">Category</th>
// //                     <th className="border p-3 text-left">Status</th>
// //                     <th className="border p-3 text-left">Actions</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {products.map((p) => (
// //                     <tr key={p._id} className="hover:bg-gray-50">
// //                       <td className="border p-3 text-center">
// //                         {p?.image ? (
// //                           <img
// //                             src={p.image}
// //                             alt={p.title}
// //                             className="w-12 h-12 object-cover rounded mx-auto"
// //                           />
// //                         ) : (
// //                           "—"
// //                         )}
// //                       </td>
// //                       <td className="border p-3">{p?.title}</td>
// //                       <td className="border p-3">₹{p?.price}</td>
// //                       <td className="border p-3">{p?.stock}</td>
// //                       <td className="border p-3">{p?.brand}</td>
// //                       <td className="border p-3">{p?.category?.name || ""}</td>
// //                       <td className="border p-3 text-center">
// //                         {p?.available ? (
// //                           <span className="text-green-600">✅</span>
// //                         ) : (
// //                           <span className="text-red-600">❌</span>
// //                         )}
// //                       </td>
// //                       <td className="border p-3 flex gap-2">
// //                         <button
// //                           onClick={() => handleEditClick(p)}
// //                           className="px-2 py-1 bg-yellow-400 rounded hover:bg-yellow-500 text-white"
// //                         >
// //                           Edit
// //                         </button>
// //                         <button
// //                           onClick={() => handleDelete(p._id)}
// //                           className="px-2 py-1 bg-red-500 rounded hover:bg-red-600 text-white"
// //                         >
// //                           Delete
// //                         </button>
// //                       </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         )}
// //       </div>

// //       {/* Edit Modal */}
// //       {editingProduct && (
// //         <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
// //           <div className="bg-white p-6 rounded-2xl w-full max-w-md relative">
// //             <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
// //             <form className="space-y-3" onSubmit={handleEditSubmit}>
// //               <input
// //                 type="text"
// //                 name="title"
// //                 value={form.title}
// //                 onChange={handleChange}
// //                 placeholder="Title"
// //                 className="w-full border p-2 rounded"
// //               />
// //               <textarea
// //                 name="description"
// //                 value={form.description}
// //                 onChange={handleChange}
// //                 placeholder="Description"
// //                 className="w-full border p-2 rounded"
// //               />
// //               <input
// //                 type="number"
// //                 name="price"
// //                 value={form.price}
// //                 onChange={handleChange}
// //                 placeholder="Price"
// //                 className="w-full border p-2 rounded"
// //               />
// //               <input
// //                 type="number"
// //                 name="stock"
// //                 value={form.stock}
// //                 onChange={handleChange}
// //                 placeholder="Stock"
// //                 className="w-full border p-2 rounded"
// //               />
// //               <input
// //                 type="text"
// //                 name="brand"
// //                 value={form.brand}
// //                 onChange={handleChange}
// //                 placeholder="Brand"
// //                 className="w-full border p-2 rounded"
// //               />
// //               <input
// //                 type="text"
// //                 name="sku"
// //                 value={form.sku}
// //                 onChange={handleChange}
// //                 placeholder="SKU"
// //                 className="w-full border p-2 rounded"
// //               />
// //               <div className="flex justify-end gap-2 pt-2">
// //                 <button
// //                   type="button"
// //                   onClick={() => setEditingProduct(null)}
// //                   className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400"
// //                 >
// //                   Cancel
// //                 </button>
// //                 <button
// //                   type="submit"
// //                   className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white"
// //                 >
// //                   Save
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }








































// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // export default function ViewProducts() {
// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [editingProduct, setEditingProduct] = useState(null);
// //   const [form, setForm] = useState({
// //     title: "",
// //     description: "",
// //     price: "",
// //     category: "",
// //     brand: "",
// //     stock: "",
// //     sku: "",
// //     discount: "",
// //     available: true,
// //     image: "",
// //   });
// //   const [categories, setCategories] = useState([]);

// //   useEffect(() => {
// //     fetchProducts();
// //     fetchCategories();
// //   }, []);

// //   const fetchProducts = async () => {
// //     try {
// //       const res = await axios.get("http://localhost:3001/api/products");
// //       setProducts(res.data);
// //     } catch (err) {
// //       console.error("Failed to fetch products:", err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const fetchCategories = async () => {
// //     try {
// //       const res = await axios.get("http://localhost:3001/api/categories");
// //       setCategories(res.data);
// //     } catch (err) {
// //       console.error("Failed to fetch categories:", err.message);
// //     }
// //   };

// //   const handleChange = (e) => {
// //     const { name, value, type, checked, files } = e.target;
// //     setForm((prev) => ({
// //       ...prev,
// //       [name]:
// //         type === "checkbox"
// //           ? checked
// //           : type === "file"
// //           ? URL.createObjectURL(files[0]) // preview only
// //           : value,
// //     }));
// //   };

// //   // Open edit modal and populate form
// //   const handleEditClick = (product) => {
// //     setEditingProduct(product);
// //     setForm({
// //       title: product.title,
// //       description: product.description,
// //       price: product.price,
// //       stock: product.stock,
// //       brand: product.brand,
// //       sku: product.sku,
// //       discount: product.discount || "",
// //       available: product.available,
// //       image: product.image || "",
// //       category: product.category?._id || "",
// //     });
// //   };

// //   const handleEditSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const payload = {
// //         title: form.title,
// //         description: form.description,
// //         price: Number(form.price),
// //         stock: Number(form.stock),
// //         brand: form.brand,
// //         sku: form.sku,
// //         discount: form.discount ? Number(form.discount) : 0,
// //         available: form.available,
// //         image: form.image || editingProduct.image,
// //         category: form.category,
// //       };

// //       if (!payload.title || !payload.price || !payload.category) {
// //         alert("Title, Price, and Category are required.");
// //         return;
// //       }

// //       const res = await axios.put(
// //         `http://localhost:3001/api/products/${editingProduct._id}`,
// //         payload
// //       );

// //       setProducts(
// //         products.map((p) => (p._id === res.data._id ? res.data : p))
// //       );
// //       setEditingProduct(null);
// //     } catch (err) {
// //       console.error("Edit failed:", err.response?.data?.error || err.message);
// //     }
// //   };

// //   const handleDelete = async (id) => {
// //     if (!window.confirm("Are you sure you want to delete this product?")) return;
// //     try {
// //       await axios.delete(`http://localhost:3001/api/products/${id}`);
// //       setProducts(products.filter((p) => p._id !== id));
// //     } catch (err) {
// //       console.error("Delete failed:", err.response?.data?.error || err.message);
// //     }
// //   };

// //   return (
// //     <div className="p-6 max-w-7xl mx-auto">
// //       <div className="bg-white rounded-2xl shadow p-6">
// //         <h2 className="text-2xl font-semibold mb-4 text-center">📦 Product List</h2>

// //         {loading ? (
// //           <p className="text-center">Loading products...</p>
// //         ) : products.length === 0 ? (
// //           <p className="text-center">No products found.</p>
// //         ) : (
// //           <div className="flex justify-center">
// //             <div className="overflow-x-auto w-full max-w-5xl">
// //               <table className="w-full border-collapse">
// //                 <thead className="bg-gray-100">
// //                   <tr>
// //                     <th className="border p-3 text-left">Image</th>
// //                     <th className="border p-3 text-left">Title</th>
// //                     <th className="border p-3 text-left">Price</th>
// //                     <th className="border p-3 text-left">Stock</th>
// //                     <th className="border p-3 text-left">Brand</th>
// //                     <th className="border p-3 text-left">Category</th>
// //                     <th className="border p-3 text-left">Status</th>
// //                     <th className="border p-3 text-left">Actions</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {products.map((p) => (
// //                     <tr key={p._id} className="hover:bg-gray-50">
// //                       <td className="border p-3 text-center">
// //                         {p.image ? (
// //                           <img
// //                             src={p.image}
// //                             alt={p.title}
// //                             className="w-12 h-12 object-cover rounded mx-auto"
// //                           />
// //                         ) : (
// //                           "—"
// //                         )}
// //                       </td>
// //                       <td className="border p-3">{p.title}</td>
// //                       <td className="border p-3">₹{p.price}</td>
// //                       <td className="border p-3">{p.stock}</td>
// //                       <td className="border p-3">{p.brand}</td>
// //                       <td className="border p-3">{p.category?.name || ""}</td>
// //                       <td className="border p-3 text-center">
// //                         {p.available ? (
// //                           <span className="text-green-600">✅</span>
// //                         ) : (
// //                           <span className="text-red-600">❌</span>
// //                         )}
// //                       </td>
// //                       <td className="border p-3 flex gap-2">
// //                         <button
// //                           className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
// //                           onClick={() => handleEditClick(p)}
// //                         >
// //                           Edit
// //                         </button>
// //                         <button
// //                           className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
// //                           onClick={() => handleDelete(p._id)}
// //                         >
// //                           Delete
// //                         </button>
// //                       </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         )}

// //         {/* Edit Modal */}
// //         {editingProduct && (
// //           <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
// //             <div className="bg-white p-6 rounded-2xl w-full max-w-xl relative">
// //               <h3 className="text-xl font-semibold mb-4">Edit Product</h3>
// //               <form onSubmit={handleEditSubmit} className="space-y-3">
// //                 <input
// //                   type="text"
// //                   name="title"
// //                   placeholder="Title"
// //                   value={form.title}
// //                   onChange={handleChange}
// //                   className="w-full border p-2 rounded"
// //                 />
// //                 <textarea
// //                   name="description"
// //                   placeholder="Description"
// //                   value={form.description}
// //                   onChange={handleChange}
// //                   className="w-full border p-2 rounded"
// //                 />
// //                 <input
// //                   type="number"
// //                   name="price"
// //                   placeholder="Price"
// //                   value={form.price}
// //                   onChange={handleChange}
// //                   className="w-full border p-2 rounded"
// //                 />
// //                 <input
// //                   type="number"
// //                   name="stock"
// //                   placeholder="Stock"
// //                   value={form.stock}
// //                   onChange={handleChange}
// //                   className="w-full border p-2 rounded"
// //                 />
// //                 <input
// //                   type="text"
// //                   name="brand"
// //                   placeholder="Brand"
// //                   value={form.brand}
// //                   onChange={handleChange}
// //                   className="w-full border p-2 rounded"
// //                 />
// //                 <input
// //                   type="text"
// //                   name="sku"
// //                   placeholder="SKU"
// //                   value={form.sku}
// //                   onChange={handleChange}
// //                   className="w-full border p-2 rounded"
// //                 />
// //                 <input
// //                   type="number"
// //                   name="discount"
// //                   placeholder="Discount %"
// //                   value={form.discount}
// //                   onChange={handleChange}
// //                   className="w-full border p-2 rounded"
// //                 />
// //                 <select
// //                   name="category"
// //                   value={form.category}
// //                   onChange={handleChange}
// //                   className="w-full border p-2 rounded"
// //                 >
// //                   <option value="">-- Select Category --</option>
// //                   {categories.map((cat) => (
// //                     <option key={cat._id} value={cat._id}>
// //                       {cat.name}
// //                     </option>
// //                   ))}
// //                 </select>
// //                 <div className="flex items-center gap-2">
// //                   <input
// //                     type="checkbox"
// //                     name="available"
// //                     checked={form.available}
// //                     onChange={handleChange}
// //                   />
// //                   <label>Available</label>
// //                 </div>
// //                 <input
// //                   type="file"
// //                   name="image"
// //                   accept="image/*"
// //                   onChange={handleChange}
// //                 />
// //                 {form.image && (
// //                   <img
// //                     src={form.image}
// //                     alt="Preview"
// //                     className="w-full h-32 object-cover rounded mb-2"
// //                   />
// //                 )}
// //                 <div className="flex justify-end gap-2 mt-3">
// //                   <button
// //                     type="button"
// //                     onClick={() => setEditingProduct(null)}
// //                     className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
// //                   >
// //                     Cancel
// //                   </button>
// //                   <button
// //                     type="submit"
// //                     className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
// //                   >
// //                     Save Changes
// //                   </button>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }











































// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function ViewProducts() {
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

//   useEffect(() => {
//     fetchProducts();
//     fetchCategories();
//   }, []);

//   // Fetch products with populated category
//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get("http://localhost:3001/api/products");
//       setProducts(res.data);
//     } catch (err) {
//       console.error("Failed to fetch products:", err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchCategories = async () => {
//     try {
//       const res = await axios.get("http://localhost:3001/api/categories");
//       setCategories(res.data);
//     } catch (err) {
//       console.error("Failed to fetch categories:", err.message);
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
//           ? URL.createObjectURL(files[0]) // preview only
//           : value,
//     }));
//   };

//   // Open edit modal and populate form
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

//   // Submit edited product
//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = {
//         title: form.title,
//         description: form.description,
//         price: Number(form.price),
//         stock: Number(form.stock),
//         brand: form.brand,
//         sku: form.sku,
//         discount: form.discount ? Number(form.discount) : 0,
//         available: form.available,
//         image: form.image || editingProduct.image,
//         category: form.category,
//       };

//       if (!payload.title || !payload.price || !payload.category) {
//         alert("Title, Price, and Category are required.");
//         return;
//       }

//       await axios.put(
//         `http://localhost:3001/api/products/${editingProduct._id}`,
//         payload
//       );

//       setEditingProduct(null);

//       // Refetch products to get category populated
//       fetchProducts();
//     } catch (err) {
//       console.error("Edit failed:", err.response?.data?.error || err.message);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this product?")) return;
//     try {
//       await axios.delete(`http://localhost:3001/api/products/${id}`);
//       setProducts(products.filter((p) => p._id !== id));
//     } catch (err) {
//       console.error("Delete failed:", err.response?.data?.error || err.message);
//     }
//   };

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <div className="bg-white rounded-2xl shadow p-6">
//         <h2 className="text-2xl font-semibold mb-4 text-center">📦 Product List</h2>

//         {loading ? (
//           <p className="text-center">Loading products...</p>
//         ) : products.length === 0 ? (
//           <p className="text-center">No products found.</p>
//         ) : (
//           <div className="flex justify-center">
//             <div className="overflow-x-auto w-full max-w-5xl">
//               <table className="w-full border-collapse">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="border p-3 text-left">Image</th>
//                     <th className="border p-3 text-left">Title</th>
//                     <th className="border p-3 text-left">Price</th>
//                     <th className="border p-3 text-left">Stock</th>
//                     <th className="border p-3 text-left">Brand</th>
//                     <th className="border p-3 text-left">Category</th>
//                     <th className="border p-3 text-left">Status</th>
//                     <th className="border p-3 text-left">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {products.map((p) => (
//                     <tr key={p._id} className="hover:bg-gray-50">
//                       <td className="border p-3 text-center">
//                         {p.image ? (
//                           <img
//                             src={p.image}
//                             alt={p.title}
//                             className="w-12 h-12 object-cover rounded mx-auto"
//                           />
//                         ) : (
//                           "—"
//                         )}
//                       </td>
//                       <td className="border p-3">{p.title}</td>
//                       <td className="border p-3">₹{p.price}</td>
//                       <td className="border p-3">{p.stock}</td>
//                       <td className="border p-3">{p.brand}</td>
//                       <td className="border p-3">{p.category?.name || ""}</td>
//                       <td className="border p-3 text-center">
//                         {p.available ? (
//                           <span className="text-green-600">✅</span>
//                         ) : (
//                           <span className="text-red-600">❌</span>
//                         )}
//                       </td>
//                       <td className="border p-3 flex gap-2">
//                         <button
//                           className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
//                           onClick={() => handleEditClick(p)}
//                         >
//                           Edit
//                         </button>
//                         <button
//                           className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                           onClick={() => handleDelete(p._id)}
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}

//         {/* Edit Modal */}
//         {editingProduct && (
//           <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-2xl w-full max-w-xl relative">
//               <h3 className="text-xl font-semibold mb-4">Edit Product</h3>
//               <form onSubmit={handleEditSubmit} className="space-y-3">
//                 <input
//                   type="text"
//                   name="title"
//                   placeholder="Title"
//                   value={form.title}
//                   onChange={handleChange}
//                   className="w-full border p-2 rounded"
//                 />
//                 <textarea
//                   name="description"
//                   placeholder="Description"
//                   value={form.description}
//                   onChange={handleChange}
//                   className="w-full border p-2 rounded"
//                 />
//                 <input
//                   type="number"
//                   name="price"
//                   placeholder="Price"
//                   value={form.price}
//                   onChange={handleChange}
//                   className="w-full border p-2 rounded"
//                 />
//                 <input
//                   type="number"
//                   name="stock"
//                   placeholder="Stock"
//                   value={form.stock}
//                   onChange={handleChange}
//                   className="w-full border p-2 rounded"
//                 />
//                 <input
//                   type="text"
//                   name="brand"
//                   placeholder="Brand"
//                   value={form.brand}
//                   onChange={handleChange}
//                   className="w-full border p-2 rounded"
//                 />
//                 <input
//                   type="text"
//                   name="sku"
//                   placeholder="SKU"
//                   value={form.sku}
//                   onChange={handleChange}
//                   className="w-full border p-2 rounded"
//                 />
//                 <input
//                   type="number"
//                   name="discount"
//                   placeholder="Discount %"
//                   value={form.discount}
//                   onChange={handleChange}
//                   className="w-full border p-2 rounded"
//                 />
//                 <select
//                   name="category"
//                   value={form.category}
//                   onChange={handleChange}
//                   className="w-full border p-2 rounded"
//                 >
//                   <option value="">-- Select Category --</option>
//                   {categories.map((cat) => (
//                     <option key={cat._id} value={cat._id}>
//                       {cat.name}
//                     </option>
//                   ))}
//                 </select>
//                 <div className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     name="available"
//                     checked={form.available}
//                     onChange={handleChange}
//                   />
//                   <label>Available</label>
//                 </div>
//                 <input
//                   type="file"
//                   name="image"
//                   accept="image/*"
//                   onChange={handleChange}
//                 />
//                 {form.image && (
//                   <img
//                     src={form.image}
//                     alt="Preview"
//                     className="w-full h-32 object-cover rounded mb-2"
//                   />
//                 )}
//                 <div className="flex justify-end gap-2 mt-3">
//                   <button
//                     type="button"
//                     onClick={() => setEditingProduct(null)}
//                     className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
//                   >
//                     Save Changes
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


















// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function ViewProducts() {
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

//   useEffect(() => {
//     fetchProducts();
//     fetchCategories();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get("http://localhost:3001/api/products");
//       setProducts(res.data);
//     } catch (err) {
//       console.error("Failed to fetch products:", err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchCategories = async () => {
//     try {
//       const res = await axios.get("http://localhost:3001/api/categories");
//       setCategories(res.data);
//     } catch (err) {
//       console.error("Failed to fetch categories:", err.message);
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
//       category: product.category?._id || "", // Make sure _id is used
//     });
//   };

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       title: form.title,
//       description: form.description,
//       price: Number(form.price),
//       stock: Number(form.stock),
//       brand: form.brand,
//       sku: form.sku,
//       discount: form.discount ? Number(form.discount) : 0,
//       available: form.available,
//       image: form.image || editingProduct.image,
//       category: form.category,
//     };

//     if (!payload.title || !payload.price || !payload.category) {
//       alert("Title, Price, and Category are required.");
//       return;
//     }

//     try {
//       const res = await axios.put(
//         `http://localhost:3001/api/products/${editingProduct._id}`,
//         payload
//       );

//       setProducts(
//         products.map((p) => (p._id === res.data._id ? res.data : p))
//       );
//       setEditingProduct(null);
//     } catch (err) {
//       console.error("Edit failed:", err.response?.data?.error || err.message);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this product?")) return;
//     try {
//       await axios.delete(`http://localhost:3001/api/products/${id}`);
//       setProducts(products.filter((p) => p._id !== id));
//     } catch (err) {
//       console.error("Delete failed:", err.response?.data?.error || err.message);
//     }
//   };

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <div className="bg-white rounded-2xl shadow p-6">
//         <h2 className="text-2xl font-semibold mb-4 text-center">📦 Product List</h2>

//         {loading ? (
//           <p className="text-center">Loading products...</p>
//         ) : products.length === 0 ? (
//           <p className="text-center">No products found.</p>
//         ) : (
//           <div className="flex justify-center">
//             <div className="overflow-x-auto w-full max-w-5xl">
//               <table className="w-full border-collapse">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="border p-3 text-left">Image</th>
//                     <th className="border p-3 text-left">Title</th>
//                     <th className="border p-3 text-left">Price</th>
//                     <th className="border p-3 text-left">Stock</th>
//                     <th className="border p-3 text-left">Brand</th>
//                     <th className="border p-3 text-left">Category</th>
//                     <th className="border p-3 text-left">Status</th>
//                     <th className="border p-3 text-left">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {products.map((p) => (
//                     <tr key={p._id} className="hover:bg-gray-50">
//                       <td className="border p-3 text-center">
//                         {p.image ? (
//                           <img
//                             src={p.image}
//                             alt={p.title}
//                             className="w-12 h-12 object-cover rounded mx-auto"
//                           />
//                         ) : "—"}
//                       </td>
//                       <td className="border p-3">{p.title}</td>
//                       <td className="border p-3">₹{p.price}</td>
//                       <td className="border p-3">{p.stock}</td>
//                       <td className="border p-3">{p.brand}</td>
//                       <td className="border p-3">{p.category?.name || ""}</td>
//                       <td className="border p-3 text-center">
//                         {p.available ? (
//                           <span className="text-green-600">✅</span>
//                         ) : (
//                           <span className="text-red-600">❌</span>
//                         )}
//                       </td>
//                       <td className="border p-3 flex gap-2">
//                         <button
//                           className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
//                           onClick={() => handleEditClick(p)}
//                         >
//                           Edit
//                         </button>
//                         <button
//                           className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                           onClick={() => handleDelete(p._id)}
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}

//         {editingProduct && (
//           <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-2xl w-full max-w-xl relative">
//               <h3 className="text-xl font-semibold mb-4">Edit Product</h3>
//               <form onSubmit={handleEditSubmit} className="space-y-3">
//                 <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} className="w-full border p-2 rounded" />
//                 <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full border p-2 rounded" />
//                 <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} className="w-full border p-2 rounded" />
//                 <input type="number" name="stock" placeholder="Stock" value={form.stock} onChange={handleChange} className="w-full border p-2 rounded" />
//                 <input type="text" name="brand" placeholder="Brand" value={form.brand} onChange={handleChange} className="w-full border p-2 rounded" />
//                 <input type="text" name="sku" placeholder="SKU" value={form.sku} onChange={handleChange} className="w-full border p-2 rounded" />
//                 <input type="number" name="discount" placeholder="Discount %" value={form.discount} onChange={handleChange} className="w-full border p-2 rounded" />

//                 {/* Category Dropdown */}
//                 <select name="category" value={form.category} onChange={handleChange} className="w-full border p-2 rounded">
//                   <option value="">-- Select Category --</option>
//                   {categories.map(cat => (
//                     <option key={cat._id} value={cat._id}>{cat.name}</option>
//                   ))}
//                 </select>

//                 <div className="flex items-center gap-2">
//                   <input type="checkbox" name="available" checked={form.available} onChange={handleChange} />
//                   <label>Available</label>
//                 </div>

//                 <input type="file" name="image" accept="image/*" onChange={handleChange} />
//                 {form.image && <img src={form.image} alt="Preview" className="w-full h-32 object-cover rounded mb-2" />}

//                 <div className="flex justify-end gap-2 mt-3">
//                   <button type="button" onClick={() => setEditingProduct(null)} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">Cancel</button>
//                   <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Save Changes</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }















import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ViewProducts() {
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
  const [uploading, setUploading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Failed to fetch products:", err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/categories");
      setCategories(res.data);
    } catch (err) {
      console.error("Failed to fetch categories:", err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ✅ Cloudinary Image Upload for Edit Modal
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setSuccessMsg("");

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "aman123"); // 🔁 replace with your preset
    data.append("cloud_name", "dxspaesuo"); // 🔁 replace with your cloud name

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dxspaesuo/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const uploadRes = await res.json();
      if (uploadRes.secure_url) {
        setForm((prev) => ({ ...prev, image: uploadRes.secure_url }));
        setSuccessMsg("✅ Image uploaded successfully!");
      } else {
        setSuccessMsg("❌ Failed to upload image.");
      }
    } catch (error) {
      console.error("Cloudinary upload failed", error);
      setSuccessMsg("❌ Image upload error!");
    } finally {
      setUploading(false);
    }
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
    setSuccessMsg("");
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: form.title,
      description: form.description,
      price: Number(form.price),
      stock: Number(form.stock),
      brand: form.brand,
      sku: form.sku,
      discount: form.discount ? Number(form.discount) : 0,
      available: form.available,
      image: form.image || editingProduct.image,
      category: form.category,
    };

    if (!payload.title || !payload.price || !payload.category) {
      alert("Title, Price, and Category are required.");
      return;
    }

    try {
      const res = await axios.put(
        `http://localhost:3001/api/products/${editingProduct._id}`,
        payload
      );

      setProducts(
        products.map((p) => (p._id === res.data._id ? res.data : p))
      );
      setEditingProduct(null);
    } catch (err) {
      console.error("Edit failed:", err.response?.data?.error || err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(`http://localhost:3001/api/products/${id}`);
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Delete failed:", err.response?.data?.error || err.message);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">📦 Product List</h2>

        {loading ? (
          <p className="text-center">Loading products...</p>
        ) : products.length === 0 ? (
          <p className="text-center">No products found.</p>
        ) : (
          <div className="flex justify-center">
            <div className="overflow-x-auto w-full max-w-5xl">
              <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border p-3 text-left">Image</th>
                    <th className="border p-3 text-left">Title</th>
                    <th className="border p-3 text-left">Price</th>
                    <th className="border p-3 text-left">Stock</th>
                    <th className="border p-3 text-left">Brand</th>
                    <th className="border p-3 text-left">Category</th>
                    <th className="border p-3 text-left">Status</th>
                    <th className="border p-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p._id} className="hover:bg-gray-50">
                      <td className="border p-3 text-center">
                        {p.image ? (
                          <img
                            src={p.image}
                            alt={p.title}
                            className="w-12 h-12 object-cover rounded mx-auto"
                          />
                        ) : "—"}
                      </td>
                      <td className="border p-3">{p.title}</td>
                      <td className="border p-3">₹{p.price}</td>
                      <td className="border p-3">{p.stock}</td>
                      <td className="border p-3">{p.brand}</td>
                      <td className="border p-3">{p.category?.name || ""}</td>
                      <td className="border p-3 text-center">
                        {p.available ? (
                          <span className="text-green-600">✅</span>
                        ) : (
                          <span className="text-red-600">❌</span>
                        )}
                      </td>
                      <td className="border p-3 flex gap-2">
                        <button
                          className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                          onClick={() => handleEditClick(p)}
                        >
                          Edit
                        </button>
                        <button
                          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                          onClick={() => handleDelete(p._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Edit Modal */}
        {editingProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl w-full max-w-xl relative">
              <h3 className="text-xl font-semibold mb-4">Edit Product</h3>
              {successMsg && (
                <p className="mb-3 text-green-600 font-medium">{successMsg}</p>
              )}
              <form onSubmit={handleEditSubmit} className="space-y-3">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                <textarea
                  name="description"
                  placeholder="Description"
                  value={form.description}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={form.price}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                <input
                  type="number"
                  name="stock"
                  placeholder="Stock"
                  value={form.stock}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                <input
                  type="text"
                  name="brand"
                  placeholder="Brand"
                  value={form.brand}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                <input
                  type="text"
                  name="sku"
                  placeholder="SKU"
                  value={form.sku}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                <input
                  type="number"
                  name="discount"
                  placeholder="Discount %"
                  value={form.discount}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                >
                  <option value="">-- Select Category --</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="available"
                    checked={form.available}
                    onChange={handleChange}
                  />
                  <label>Available</label>
                </div>

                {/* ✅ Cloudinary Image Upload */}
                <div>
                  <label className="block font-medium">Product Image</label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={uploading}
                  />
                  {uploading && (
                    <p className="text-blue-600 text-sm mt-1 animate-pulse">
                      Uploading image...
                    </p>
                  )}
                  {form.image && (
                    <img
                      src={form.image}
                      alt="Preview"
                      className="w-full h-32 object-cover rounded mt-2"
                    />
                  )}
                </div>

                <div className="flex justify-end gap-2 mt-3">
                  <button
                    type="button"
                    onClick={() => setEditingProduct(null)}
                    className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={uploading}
                    className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
