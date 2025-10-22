// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // const Categories = () => {
// //   const [categories, setCategories] = useState([]);

// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:3001/api/categories")
// //       .then((res) => setCategories(res.data))
// //       .catch((err) => console.error(err));
// //   }, []);

// //   return (
// //     <div className="mt-14 mb-12">
// //       <div className="container">
// //         {/* Header section */}
// //         <div className="text-center mb-10 max-w-[600px] mx-auto">
// //           <p data-aos="fade-up" className="text-sm text-primary">
// //             Explore Categories
// //           </p>
// //           <h1 data-aos="fade-up" className="text-3xl font-bold">
// //             Categories
// //           </h1>
// //           <p data-aos="fade-up" className="text-xs text-gray-400">
// //             Browse our top product categories and find what you love.
// //           </p>
// //         </div>

// //         {/* Body section */}
// //         <div>
// //           <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
// //             {categories.map((cat, index) => (
// //               <div
// //                 data-aos="fade-up"
// //                 data-aos-delay={index * 100}
// //                 key={cat._id}
// //                 className="space-y-3"
// //               >
// //                 <img
// //                   src={cat.image || "https://via.placeholder.com/150"}
// //                   alt={cat.name}
// //                   className="h-[220px] w-[150px] object-cover rounded-md"
// //                 />
// //                 <div>
// //                   <h3 className="font-semibold">{cat.name}</h3>
// //                   <p className="text-sm text-gray-600 line-clamp-2">
// //                     {cat.description || "No description available."}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* View all button */}
// //           <div className="flex justify-center">
// //             <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
// //               View All Categories
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Categories;

















// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Categories = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/api/categories")
//       .then((res) => setCategories(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div className="mt-14 mb-12">
//       <div className="container">
//         {/* Header section */}
//         <div className="text-center mb-10 max-w-[600px] mx-auto">
//           <p data-aos="fade-up" className="text-sm text-primary">
//             Explore Categories
//           </p>
//           <h1 data-aos="fade-up" className="text-3xl font-bold">
//             Categories
//           </h1>
//           <p data-aos="fade-up" className="text-xs text-gray-400">
//             Browse our top product categories and find what you love.
//           </p>
//         </div>

//         {/* Body section with scroll */}
//         <div className="relative">
//           <div
//             className="flex gap-5 overflow-x-auto scroll-smooth pb-4 px-2 scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-200"
//             style={{ scrollBehavior: "smooth" }}
//           >
//             {categories.map((cat, index) => (
//               <div
//                 data-aos="fade-up"
//                 data-aos-delay={index * 100}
//                 key={cat._id}
//                 className="flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] space-y-3"
//               >
//                 <img
//                   src={cat.image || "https://via.placeholder.com/150"}
//                   alt={cat.name}
//                   className="h-[220px] w-full object-cover rounded-md shadow-md hover:scale-105 duration-300"
//                 />
//                 <div>
//                   <h3 className="font-semibold text-center">{cat.name}</h3>
//                   <p className="text-sm text-gray-600 text-center line-clamp-2">
//                     {cat.description || "No description available."}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* View all button */}
//           <div className="flex justify-center">
//             <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md hover:bg-primary/90 transition">
//               View All Categories
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Categories;
// this one is ok






















// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Categories = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/api/categories")
//       .then((res) => setCategories(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div className="mt-14 mb-12">
//       <div className="container">
//         {/* Header section */}
//         <div className="text-center mb-10 max-w-[600px] mx-auto">
//           <p data-aos="fade-up" className="text-sm text-primary">
//             Explore Categories
//           </p>
//           <h1 data-aos="fade-up" className="text-3xl font-bold">
//             Categories
//           </h1>
//           <p data-aos="fade-up" className="text-xs text-gray-400">
//             Browse our top product categories and find what you love.
//           </p>
//         </div>

//         {/* Body section with hidden scrollbar */}
//         <div className="relative">
//           <div
//             className="flex gap-5 overflow-x-auto scroll-smooth pb-4 px-2 hide-scrollbar"
//             style={{ scrollBehavior: "smooth" }}
//           >
//             {categories.map((cat, index) => (
//               <div
//                 data-aos="fade-up"
//                 data-aos-delay={index * 100}
//                 key={cat._id}
//                 className="flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] space-y-3"
//               >
//                 <img
//                   src={cat.image || "https://via.placeholder.com/150"}
//                   alt={cat.name}
//                   className="h-[220px] w-full object-cover rounded-md shadow-md hover:scale-105 duration-300"
//                 />
//                 <div>
//                   <h3 className="font-semibold text-center">{cat.name}</h3>
//                   <p className="text-sm text-gray-600 text-center line-clamp-2">
//                     {cat.description || "No description available."}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* View all button */}
//           <div className="flex justify-center">
//             <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md hover:bg-primary/90 transition">
//               View All Categories
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Categories;











import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://shopsy-jyse.onrender.com/api/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleCategoryClick = (id) => {
    navigate(`/category/${id}`);
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Explore Categories
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Categories
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Browse our top product categories and find what you love.
          </p>
        </div>

        {/* Body section */}
        <div className="relative">
          <div
            className="flex gap-5 overflow-x-auto scroll-smooth pb-4 px-2 hide-scrollbar"
            style={{ scrollBehavior: "smooth" }}
          >
            {categories.map((cat, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={cat._id}
                className="flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] space-y-3 cursor-pointer"
                onClick={() => handleCategoryClick(cat._id)}
              >
                <img
                  src={cat.image || "https://via.placeholder.com/150"}
                  alt={cat.name}
                  className="h-[220px] w-full object-cover rounded-md shadow-md hover:scale-105 duration-300"
                />
                <div>
                  <h3 className="font-semibold text-center">{cat.name}</h3>
                  <p className="text-sm text-gray-600 text-center line-clamp-2">
                    {cat.description || "No description available."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
