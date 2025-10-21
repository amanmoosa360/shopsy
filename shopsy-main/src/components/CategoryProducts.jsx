// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const CategoryProducts = () => {
//   const { id } = useParams(); // category ID
//   const [products, setProducts] = useState([]);
//   const [categoryName, setCategoryName] = useState("");

//   useEffect(() => {
//     // Fetch category details
//     axios
//       .get(`http://localhost:3001/api/categories/${id}`)
//       .then((res) => setCategoryName(res.data.name))
//       .catch((err) => console.error(err));

//     // Fetch products under this category
//     axios
//       .get(`http://localhost:3001/api/products`)
//       .then((res) => {
//         const filtered = res.data.filter(
//           (product) => product.category?._id === id
//         );
//         setProducts(filtered);
//       })
//       .catch((err) => console.error(err));
//   }, [id]);

//   return (
//     <div className="mt-14 mb-12">
//       <div className="container">
//         <h1 className="text-3xl font-bold mb-6">{categoryName} Products</h1>

//         {products.length === 0 ? (
//           <p>No products found in this category.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {products.map((product) => (
//               <div
//                 key={product._id}
//                 className="border rounded-md p-4 shadow-md hover:shadow-lg transition"
//               >
//                 <img
//                   src={product.image || "https://via.placeholder.com/150"}
//                   alt={product.title}
//                   className="h-48 w-full object-cover mb-2 rounded-md"
//                 />
//                 <h3 className="font-semibold">{product.title}</h3>
//                 <p className="text-gray-600">${product.price}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryProducts;












import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CategoryProducts = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/categories/${id}`)
      .then((res) => setCategoryName(res.data.name))
      .catch((err) => console.error(err));

    axios
      .get(`http://localhost:3001/api/products`)
      .then((res) => {
        const filtered = res.data.filter((product) => product.category?._id === id);
        setProducts(filtered);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <h1 className="text-3xl font-bold mb-6">{categoryName} Products</h1>

        {products.length === 0 ? (
          <p>No products found in this category.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                onClick={() => navigate(`/product/${product._id}`)}
                className="cursor-pointer border rounded-md p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition"
              >
                <img
                  src={product.image || "https://via.placeholder.com/150"}
                  alt={product.title}
                  className="h-48 w-full object-cover mb-2 rounded-md"
                />
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-gray-600">₹ {product.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
