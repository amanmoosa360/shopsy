// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // export default function CategoriesList() {
// //   const [categories, setCategories] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchCategories = async () => {
// //       try {
// //         const res = await axios.get("http://localhost:3001/api/categories");
// //         setCategories(res.data);
// //       } catch (err) {
// //         console.error("Failed to fetch categories:", err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchCategories();
// //   }, []);

// //   return (
// //     <div className="p-6 max-w-7xl mx-auto bg-white rounded-2xl shadow">
// //       <h2 className="text-2xl font-semibold mb-4">📋 Categories List</h2>
// //       {loading ? (
// //         <p>Loading categories...</p>
// //       ) : categories.length === 0 ? (
// //         <p>No categories found.</p>
// //       ) : (
// //         <div className="overflow-x-auto">
// //           <table className="w-full border-collapse">
// //             <thead className="bg-gray-100">
// //               <tr>
// //                 <th className="border p-3 text-left">Image</th>
// //                 <th className="border p-3 text-left">Name</th>
// //                 <th className="border p-3 text-left">Description</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {categories.map((c) => (
// //                 <tr key={c._id} className="hover:bg-gray-50">
// //                   <td className="border p-3">
// //                     {c.image ? (
// //                       <img
// //                         src={c.image}
// //                         alt={c.name}
// //                         className="w-12 h-12 object-cover rounded"
// //                       />
// //                     ) : (
// //                       "—"
// //                     )}
// //                   </td>
// //                   <td className="border p-3">{c.name}</td>
// //                   <td className="border p-3">{c.description}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }



























// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function CategoriesList() {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [editingCategory, setEditingCategory] = useState(null);
//   const [form, setForm] = useState({ name: "", description: "", image: "" });

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const res = await axios.get("http://localhost:3001/api/categories");
//       setCategories(res.data);
//     } catch (err) {
//       console.error("Failed to fetch categories:", err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleEditClick = (category) => {
//     setEditingCategory(category);
//     setForm({
//       name: category.name,
//       description: category.description || "",
//       image: category.image || "",
//     });
//   };

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     if (!form.name.trim()) {
//       alert("Category name is required");
//       return;
//     }
//     try {
//       await axios.put(
//         `http://localhost:3001/api/categories/${editingCategory._id}`,
//         form
//       );
//       setEditingCategory(null);
//       fetchCategories(); // refetch after edit
//     } catch (err) {
//       console.error("Failed to update category:", err.response?.data?.error || err.message);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this category?")) return;
//     try {
//       await axios.delete(`http://localhost:3001/api/categories/${id}`);
//       setCategories(categories.filter((c) => c._id !== id));
//     } catch (err) {
//       console.error("Failed to delete category:", err.response?.data?.error || err.message);
//     }
//   };

//   return (
//     <div className="p-6 max-w-7xl mx-auto bg-white rounded-2xl shadow">
//       <h2 className="text-2xl font-semibold mb-4">📋 Categories List</h2>

//       {loading ? (
//         <p>Loading categories...</p>
//       ) : categories.length === 0 ? (
//         <p>No categories found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border p-3 text-left">Image</th>
//                 <th className="border p-3 text-left">Name</th>
//                 <th className="border p-3 text-left">Description</th>
//                 <th className="border p-3 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {categories.map((c) => (
//                 <tr key={c._id} className="hover:bg-gray-50">
//                   <td className="border p-3">
//                     {c.image ? (
//                       <img
//                         src={c.image}
//                         alt={c.name}
//                         className="w-12 h-12 object-cover rounded"
//                       />
//                     ) : (
//                       "—"
//                     )}
//                   </td>
//                   <td className="border p-3">{c.name}</td>
//                   <td className="border p-3">{c.description}</td>
//                   <td className="border p-3 flex gap-2">
//                     <button
//                       className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
//                       onClick={() => handleEditClick(c)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                       onClick={() => handleDelete(c._id)}
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
//       {editingCategory && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-2xl w-full max-w-xl relative">
//             <h3 className="text-xl font-semibold mb-4">Edit Category</h3>
//             <form onSubmit={handleEditSubmit} className="space-y-3">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={form.name}
//                 onChange={handleChange}
//                 className="w-full border p-2 rounded"
//               />
//               <textarea
//                 name="description"
//                 placeholder="Description"
//                 value={form.description}
//                 onChange={handleChange}
//                 className="w-full border p-2 rounded"
//               />
//               <input
//                 type="text"
//                 name="image"
//                 placeholder="Image URL"
//                 value={form.image}
//                 onChange={handleChange}
//                 className="w-full border p-2 rounded"
//               />
//               <div className="flex justify-end gap-2 mt-3">
//                 <button
//                   type="button"
//                   onClick={() => setEditingCategory(null)}
//                   className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
//                 >
//                   Save Changes
//                 </button>
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

// export default function CategoriesList() {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [editingCategory, setEditingCategory] = useState(null);
//   const [form, setForm] = useState({ name: "", description: "", image: "" });

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const res = await axios.get("http://localhost:3001/api/categories");
//       setCategories(res.data);
//     } catch (err) {
//       console.error(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleEditClick = (category) => {
//     setEditingCategory(category);
//     setForm({ name: category.name, description: category.description || "", image: category.image || "" });
//   };

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.put(`http://localhost:3001/api/categories/${editingCategory._id}`, form);
//       setCategories(categories.map(c => c._id === res.data._id ? res.data : c));
//       setEditingCategory(null);
//     } catch (err) {
//       console.error(err.response?.data?.error || err.message);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this category?")) return;
//     try {
//       await axios.delete(`http://localhost:3001/api/categories/${id}`);
//       setCategories(categories.filter(c => c._id !== id));
//     } catch (err) {
//       console.error(err.response?.data?.error || err.message);
//     }
//   };

//   return (
//     <div className="p-6 max-w-7xl mx-auto bg-white rounded-2xl shadow">
//       <h2 className="text-2xl font-semibold mb-4">📋 Categories List</h2>

//       {loading ? <p>Loading...</p> : categories.length === 0 ? <p>No categories found</p> : (
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border p-3 text-left">Image</th>
//                 <th className="border p-3 text-left">Name</th>
//                 <th className="border p-3 text-left">Description</th>
//                 <th className="border p-3 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {categories.map(c => (
//                 <tr key={c._id} className="hover:bg-gray-50">
//                   <td className="border p-3">{c.image ? <img src={c.image} alt={c.name} className="w-12 h-12 object-cover rounded" /> : "—"}</td>
//                   <td className="border p-3">{c.name}</td>
//                   <td className="border p-3">{c.description}</td>
//                   <td className="border p-3 flex gap-2">
//                     <button onClick={() => handleEditClick(c)} className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">Edit</button>
//                     <button onClick={() => handleDelete(c._id)} className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {editingCategory && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-2xl w-full max-w-xl relative">
//             <h3 className="text-xl font-semibold mb-4">Edit Category</h3>
//             <form onSubmit={handleEditSubmit} className="space-y-3">
//               <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" />
//               <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full border p-2 rounded" />
//               <input type="text" name="image" placeholder="Image URL" value={form.image} onChange={handleChange} className="w-full border p-2 rounded" />
//               <div className="flex justify-end gap-2 mt-3">
//                 <button type="button" onClick={() => setEditingCategory(null)} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">Cancel</button>
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

export default function CategoriesList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingCategory, setEditingCategory] = useState(null);
  const [form, setForm] = useState({ name: "", description: "", image: "" });
  const [uploading, setUploading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const CLOUD_NAME = "dxspaesuo"; // 🔁 replace with your Cloudinary cloud name
  const UPLOAD_PRESET = "aman123"; // 🔁 replace with your Cloudinary upload preset

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/categories");
      setCategories(res.data);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleEditClick = (category) => {
    setEditingCategory(category);
    setForm({
      name: category.name,
      description: category.description || "",
      image: category.image || "",
    });
    setSuccessMsg("");
  };

  // ✅ Cloudinary image upload handler for Edit modal
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setSuccessMsg("");

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", UPLOAD_PRESET);
    data.append("cloud_name", CLOUD_NAME);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        { method: "POST", body: data }
      );
      const uploadRes = await res.json();

      if (uploadRes.secure_url) {
        setForm((prev) => ({ ...prev, image: uploadRes.secure_url }));
        setSuccessMsg("✅ Image uploaded successfully!");
      } else {
        setSuccessMsg("❌ Failed to upload image.");
      }
    } catch (err) {
      console.error("Cloudinary upload failed", err);
      setSuccessMsg("❌ Image upload error!");
    } finally {
      setUploading(false);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:3001/api/categories/${editingCategory._id}`,
        form
      );
      setCategories(categories.map(c => c._id === res.data._id ? res.data : c));
      setEditingCategory(null);
    } catch (err) {
      console.error(err.response?.data?.error || err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;
    try {
      await axios.delete(`http://localhost:3001/api/categories/${id}`);
      setCategories(categories.filter(c => c._id !== id));
    } catch (err) {
      console.error(err.response?.data?.error || err.message);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">📋 Categories List</h2>

      {loading ? <p>Loading...</p> : categories.length === 0 ? <p>No categories found</p> : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-3 text-left">Image</th>
                <th className="border p-3 text-left">Name</th>
                <th className="border p-3 text-left">Description</th>
                <th className="border p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map(c => (
                <tr key={c._id} className="hover:bg-gray-50">
                  <td className="border p-3">
                    {c.image ? (
                      <img src={c.image} alt={c.name} className="w-12 h-12 object-cover rounded" />
                    ) : "—"}
                  </td>
                  <td className="border p-3">{c.name}</td>
                  <td className="border p-3">{c.description}</td>
                  <td className="border p-3 flex gap-2">
                    <button
                      onClick={() => handleEditClick(c)}
                      className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(c._id)}
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
      {editingCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-full max-w-xl relative">
            <h3 className="text-xl font-semibold mb-4">Edit Category</h3>

            {successMsg && (
              <p className="mb-3 text-green-600 font-medium">{successMsg}</p>
            )}

            <form onSubmit={handleEditSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
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

              {/* ✅ Cloudinary Image Upload */}
              <div>
                <label className="block font-medium mb-1">Category Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="w-full border p-2 rounded"
                />
                {uploading && (
                  <p className="text-blue-600 text-sm animate-pulse mt-1">
                    Uploading image...
                  </p>
                )}
                {form.image && (
                  <div className="mt-3">
                    <img
                      src={form.image}
                      alt="Preview"
                      className="w-40 h-40 object-cover rounded-lg border"
                    />
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-2 mt-3">
                <button
                  type="button"
                  onClick={() => setEditingCategory(null)}
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
  );
}
