






















// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function CreateCategory() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ name: "", description: "", image: "" });
//   const [errors, setErrors] = useState({});
//   const [successMsg, setSuccessMsg] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrors({});
//     setSuccessMsg("");

//     if (!form.name.trim()) {
//       setErrors({ name: "Category name is required" });
//       return;
//     }

//     try {
//       await axios.post("http://localhost:3001/api/categories", form);
//       setSuccessMsg("✅ Category created successfully!");
//       setForm({ name: "", description: "", image: "" });

//       // Redirect to category list page after success (optional)
//       setTimeout(() => navigate("/categories"), 1000);
//     } catch (err) {
//       console.error(err);
//       setErrors({ submit: "❌ Failed to create category" });
//     }
//   };

//   return (
//     <div className="p-6 max-w-2xl mx-auto bg-white rounded-2xl shadow">
//       <h2 className="text-2xl font-semibold mb-4">➕ Create Category</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block font-medium mb-1">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             className="w-full border rounded p-2"
//           />
//           {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Description</label>
//           <textarea
//             name="description"
//             value={form.description}
//             onChange={handleChange}
//             className="w-full border rounded p-2"
//           />
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Image URL</label>
//           <input
//             type="text"
//             name="image"
//             value={form.image}
//             onChange={handleChange}
//             className="w-full border rounded p-2"
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-600"
//         >
//           Create Category
//         </button>

//         {successMsg && <p className="text-green-500">{successMsg}</p>}
//         {errors.submit && <p className="text-red-500">{errors.submit}</p>}
//       </form>
//     </div>
//   );
// }




import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateCategory() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", description: "", image: "" });
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");
  const [uploading, setUploading] = useState(false);

  const CLOUD_NAME = "dxspaesuo"; // 🔁 Replace
  const UPLOAD_PRESET = "aman123"; // 🔁 Replace

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Cloudinary image upload handler
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
        setErrors({ image: "❌ Failed to upload image" });
      }
    } catch (err) {
      console.error("Cloudinary upload failed", err);
      setErrors({ image: "❌ Error uploading image" });
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMsg("");

    if (!form.name.trim()) {
      setErrors({ name: "Category name is required" });
      return;
    }

    try {
      await axios.post("http://localhost:3001/api/categories", form);
      setSuccessMsg("✅ Category created successfully!");
      setForm({ name: "", description: "", image: "" });

      // Redirect to category list page after success (optional)
      setTimeout(() => navigate("/categories"), 1000);
    } catch (err) {
      console.error(err);
      setErrors({ submit: "❌ Failed to create category" });
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">➕ Create Category</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        {/* ✅ Cloudinary Image Upload */}
        <div>
          <label className="block font-medium mb-1">Category Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            disabled={uploading}
            className="w-full border rounded p-2"
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
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image}</p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={uploading}
          className="bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-600 disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Create Category"}
        </button>

        {successMsg && <p className="text-green-500">{successMsg}</p>}
        {errors.submit && <p className="text-red-500">{errors.submit}</p>}
      </form>
    </div>
  );
}
