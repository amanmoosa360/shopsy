



// // src/components/ProductForm.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function ProductForm() {
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     price: "",
//     category: null,
//     brand: "",
//     stock: "",
//     sku: "",
//     discount: "",
//     available: true,
//     image: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [submitting, setSubmitting] = useState(false);
//   const [successMsg, setSuccessMsg] = useState("");

//   const [categories, setCategories] = useState([]);

// useEffect(() => {
//   // Fetch categories from backend
//   axios.get("http://localhost:3001/api/categories")
//     .then((res) => setCategories(res.data))
//     .catch((err) => console.error("Failed to load categories", err));
// }, []);
// console.log(categories);

//   const validate = () => {
//     const e = {};
//     if (!form.title || form.title.trim().length < 3)
//       e.title = "Title must be at least 3 characters.";
//     if (!form.description || form.description.trim().length < 10)
//       e.description = "Description must be at least 10 characters.";
//     if (!form.price || isNaN(Number(form.price)) || Number(form.price) <= 0)
//       e.price = "Enter a valid positive price.";
//     if (!form.stock || isNaN(Number(form.stock)) || Number(form.stock) < 0)
//       e.stock = "Enter stock quantity (0 or more).";
//     if (!form.category) e.category = "Please select a category.";
//     if (!form.brand) e.brand = "Please enter brand.";
//     if (!form.sku) e.sku = "Enter unique SKU code.";
//     return e;
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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSuccessMsg("");
//     const eObj = validate();
//     setErrors(eObj);
//     if (Object.keys(eObj).length) return;

//     setSubmitting(true);
//     try {
//       await axios.post("http://localhost:3001/api/products", form);
//       setSuccessMsg("✅ Product created successfully!");
//       setForm({
//         title: "",
//         description: "",
//         price: "",
//         category: null,
//         brand: "",
//         stock: "",
//         sku: "",
//         discount: "",
//         available: true,
//         image: "",
//       });
//       setErrors({});
//     } catch (err) {
//       console.error(err);
//       setSuccessMsg(
//         "❌ Error saving product: " + (err.response?.data?.error || err.message)
//       );
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="flex flex-col gap-6 p-6 max-w-7xl mx-auto">
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Product Form */}
//         <div className="w-full md:w-2/3">
//           <div className="bg-white rounded-2xl shadow p-6">
//             <h2 className="text-2xl font-semibold mb-4">🛒 Create New Product</h2>

//             {successMsg && (
//               <p className="mb-3 text-green-600 font-medium">{successMsg}</p>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-4">
//               {/* Title */}
//               <div>
//                 <label className="block font-medium">Title</label>
//                 <input
//                   type="text"
//                   name="title"
//                   value={form.title}
//                   onChange={handleChange}
//                   className="w-full border p-2 rounded"
//                 />
//                 {errors.title && (
//                   <p className="text-red-500 text-sm">{errors.title}</p>
//                 )}
//               </div>

//               {/* Description */}
//               <div>
//                 <label className="block font-medium">Description</label>
//                 <textarea
//                   name="description"
//                   value={form.description}
//                   onChange={handleChange}
//                   className="w-full border p-2 rounded"
//                 />
//                 {errors.description && (
//                   <p className="text-red-500 text-sm">{errors.description}</p>
//                 )}
//               </div>

//               {/* Price */}
//               <div>
//                 <label className="block font-medium">Price (₹)</label>
//                 <input
//                   type="number"
//                   name="price"
//                   value={form.price}
//                   onChange={handleChange}
//                   className="w-full border p-2 rounded"
//                 />
//                 {errors.price && (
//                   <p className="text-red-500 text-sm">{errors.price}</p>
//                 )}
//               </div>

//               {/* Stock */}
//               <div>
//                 <label className="block font-medium">Stock</label>
//                 <input
//                   type="number"
//                   name="stock"
//                   value={form.stock}
//                   onChange={handleChange}
//                   className="w-full border p-2 rounded"
//                 />
//                 {errors.stock && (
//                   <p className="text-red-500 text-sm">{errors.stock}</p>
//                 )}
//               </div>

//               {/* Category */}
//               <div>
//                 <label className="block font-medium">Category</label>
//              <select
//   name="category"
//   value={form.category}
//   onChange={handleChange}
//   className="w-full border p-2 rounded"
// >
//   <option value="">-- Select Category --</option>
//   {categories.map((cat) => (
//     <option key={cat._id} value={cat._id}>
//       {cat.name}
//     </option>
//   ))}
// </select>

//                 {errors.category && (
//                   <p className="text-red-500 text-sm">{errors.category}</p>
//                 )}
//               </div>

//               {/* Brand */}
//               <div>
//                 <label className="block font-medium">Brand</label>
//                 <input
//                   type="text"
//                   name="brand"
//                   value={form.brand}
//                   onChange={handleChange}
//                   className="w-full border p-2 rounded"
//                 />
//                 {errors.brand && (
//                   <p className="text-red-500 text-sm">{errors.brand}</p>
//                 )}
//               </div>

//               {/* SKU */}
//               <div>
//                 <label className="block font-medium">SKU</label>
//                 <input
//                   type="text"
//                   name="sku"
//                   value={form.sku}
//                   onChange={handleChange}
//                   className="w-full border p-2 rounded"
//                 />
//                 {errors.sku && (
//                   <p className="text-red-500 text-sm">{errors.sku}</p>
//                 )}
//               </div>

//               {/* Discount */}
//               <div>
//                 <label className="block font-medium">Discount (%)</label>
//                 <input
//                   type="number"
//                   name="discount"
//                   value={form.discount}
//                   onChange={handleChange}
//                   className="w-full border p-2 rounded"
//                 />
//               </div>

//               {/* Availability */}
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   name="available"
//                   checked={form.available}
//                   onChange={handleChange}
//                 />
//                 <label className="font-medium">Available</label>
//               </div>

//               {/* Image */}
//               <div>
//                 <label className="block font-medium">Product Image</label>
//                 <input
//                   type="file"
//                   name="image"
//                   accept="image/*"
//                   onChange={handleChange}
//                 />
//               </div>

//               {/* Actions */}
//               <div className="flex justify-end gap-3 pt-3">
//                 <button
//                   type="button"
//                   onClick={() =>
//                     setForm({
//                       title: "",
//                       description: "",
//                       price: "",
//                       category: "",
//                       brand: "",
//                       stock: "",
//                       sku: "",
//                       discount: "",
//                       available: true,
//                       image: "",
//                     })
//                   }
//                   disabled={submitting}
//                   className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50"
//                 >
//                   Reset
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={submitting}
//                   className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 flex items-center"
//                 >
//                   {submitting && (
//                     <span className="animate-spin mr-2 border-t-2 border-white rounded-full w-4 h-4"></span>
//                   )}
//                   {submitting ? "Creating..." : "Create Product"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>

//         {/* Live Preview */}
//         <div className="hidden md:block w-full md:w-1/3">
//           <div className="bg-gray-50 rounded-2xl border p-4">
//             <h4 className="text-gray-500 mb-2">📌 Live Preview</h4>
//             <div className="p-3 bg-white rounded-lg shadow-inner">
//               {form.image && (
//                 <img
//                   src={form.image}
//                   alt="Preview"
//                   className="w-full h-40 object-cover rounded-md mb-3"
//                 />
//               )}
//               <h5 className="font-semibold text-lg">
//                 {form.title || "Untitled Product"}
//               </h5>
//               <p className="text-sm text-gray-600 min-h-[64px]">
//                 {form.description || "No description yet."}
//               </p>
//               <p className="text-sm">
//                 <strong>Price:</strong>{" "}
//                 {form.price ? `₹${form.price}` : "—"}{" "}
//                 {form.discount && `(Discount: ${form.discount}%)`}
//               </p>
//               <p className="text-sm">
//                 <strong>Category:</strong> {form.category || "—"}
//               </p>
//               <p className="text-sm">
//                 <strong>Brand:</strong> {form.brand || "—"}
//               </p>
//               <p className="text-sm">
//                 <strong>Stock:</strong> {form.stock || "—"}
//               </p>
//               <p className="text-sm">
//                 <strong>SKU:</strong> {form.sku || "—"}
//               </p>
//               <p className="text-sm">
//                 <strong>Status:</strong>{" "}
//                 {form.available ? "✅ Available" : "❌ Not Available"}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProductForm() {
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
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Failed to load categories", err));
  }, []);

  const validate = () => {
    const e = {};
    if (!form.title || form.title.trim().length < 3)
      e.title = "Title must be at least 3 characters.";
    if (!form.description || form.description.trim().length < 10)
      e.description = "Description must be at least 10 characters.";
    if (!form.price || isNaN(Number(form.price)) || Number(form.price) <= 0)
      e.price = "Enter a valid positive price.";
    if (!form.stock || isNaN(Number(form.stock)) || Number(form.stock) < 0)
      e.stock = "Enter stock quantity (0 or more).";
    if (!form.category) e.category = "Please select a category.";
    if (!form.brand) e.brand = "Please enter brand.";
    if (!form.sku) e.sku = "Enter unique SKU code.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ✅ Cloudinary image upload handler
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setSuccessMsg("");

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "aman123"); // 🔁 replace
    data.append("cloud_name", "dxspaesuo"); // 🔁 replace

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/dxspaesuo/image/upload`,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    const eObj = validate();
    setErrors(eObj);
    if (Object.keys(eObj).length) return;

    setSubmitting(true);
    try {
      await axios.post("http://localhost:3001/api/products", form);
      setSuccessMsg("✅ Product created successfully!");
      setForm({
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
    } catch (err) {
      console.error(err);
      setSuccessMsg(
        "❌ Error saving product: " + (err.response?.data?.error || err.message)
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Form */}
        <div className="w-full md:w-2/3">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">🛒 Create New Product</h2>

            {successMsg && (
              <p className="mb-3 text-green-600 font-medium">{successMsg}</p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Title */}
              <div>
                <label className="block font-medium">Title</label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm">{errors.title}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block font-medium">Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                {errors.description && (
                  <p className="text-red-500 text-sm">{errors.description}</p>
                )}
              </div>

              {/* Price */}
              <div>
                <label className="block font-medium">Price (₹)</label>
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                {errors.price && (
                  <p className="text-red-500 text-sm">{errors.price}</p>
                )}
              </div>

              {/* Stock */}
              <div>
                <label className="block font-medium">Stock</label>
                <input
                  type="number"
                  name="stock"
                  value={form.stock}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                {errors.stock && (
                  <p className="text-red-500 text-sm">{errors.stock}</p>
                )}
              </div>

              {/* Category */}
              <div>
                <label className="block font-medium">Category</label>
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
                {errors.category && (
                  <p className="text-red-500 text-sm">{errors.category}</p>
                )}
              </div>

              {/* Brand */}
              <div>
                <label className="block font-medium">Brand</label>
                <input
                  type="text"
                  name="brand"
                  value={form.brand}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                {errors.brand && (
                  <p className="text-red-500 text-sm">{errors.brand}</p>
                )}
              </div>

              {/* SKU */}
              <div>
                <label className="block font-medium">SKU</label>
                <input
                  type="text"
                  name="sku"
                  value={form.sku}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                {errors.sku && (
                  <p className="text-red-500 text-sm">{errors.sku}</p>
                )}
              </div>

              {/* Discount */}
              <div>
                <label className="block font-medium">Discount (%)</label>
                <input
                  type="number"
                  name="discount"
                  value={form.discount}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>

              {/* Availability */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="available"
                  checked={form.available}
                  onChange={handleChange}
                />
                <label className="font-medium">Available</label>
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
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() =>
                    setForm({
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
                    })
                  }
                  disabled={submitting}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  disabled={submitting || uploading}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 flex items-center"
                >
                  {submitting && (
                    <span className="animate-spin mr-2 border-t-2 border-white rounded-full w-4 h-4"></span>
                  )}
                  {submitting ? "Creating..." : "Create Product"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Live Preview */}
        <div className="hidden md:block w-full md:w-1/3">
          <div className="bg-gray-50 rounded-2xl border p-4">
            <h4 className="text-gray-500 mb-2">📌 Live Preview</h4>
            <div className="p-3 bg-white rounded-lg shadow-inner">
              {form.image && (
                <img
                  src={form.image}
                  alt="Preview"
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
              )}
              <h5 className="font-semibold text-lg">
                {form.title || "Untitled Product"}
              </h5>
              <p className="text-sm text-gray-600 min-h-[64px]">
                {form.description || "No description yet."}
              </p>
              <p className="text-sm">
                <strong>Price:</strong>{" "}
                {form.price ? `₹${form.price}` : "—"}{" "}
                {form.discount && `(Discount: ${form.discount}%)`}
              </p>
              <p className="text-sm">
                <strong>Category:</strong> {form.category || "—"}
              </p>
              <p className="text-sm">
                <strong>Brand:</strong> {form.brand || "—"}
              </p>
              <p className="text-sm">
                <strong>Stock:</strong> {form.stock || "—"}
              </p>
              <p className="text-sm">
                <strong>SKU:</strong> {form.sku || "—"}
              </p>
              <p className="text-sm">
                <strong>Status:</strong>{" "}
                {form.available ? "✅ Available" : "❌ Not Available"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
