

// import React, { useEffect, useState } from "react";
// import { useWishlist } from "../../WishlistContext";
// import { useNavigate } from "react-router-dom";
// import { FaTrashAlt } from "react-icons/fa";

// const WishlistPage = () => {
//   const { wishlist, removeFromWishlist } = useWishlist();
//   console.log(wishlist);
  
//   const navigate = useNavigate();
//   const [show, setShow] = useState(false); // control rendering after delay

//   // Wait 2 seconds before showing wishlist
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShow(true);
//     }, 2000);

//     return () => clearTimeout(timer); // cleanup
//   }, []);

//   const handleRemove = (productId) => {
//     removeFromWishlist(productId);
//   };

//   const goToProduct = (id) => {
//     navigate(`/product/${id}`);
//   };

//   if (!show) {
//     return (
//       <div className="flex justify-center items-center min-h-screen text-gray-500">
//         Loading wishlist...
//       </div>
//     );
//   }

//   if (!wishlist || wishlist.length === 0) {
//     return (
//       <div className="flex justify-center items-center min-h-screen text-gray-500">
//         Your wishlist is empty.
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen py-16 bg-gray-100 dark:bg-gray-900">
//       <div className="container mx-auto px-6">
//         <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
//           My Wishlist
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {wishlist?.map((item) => (
//             <div
//               key={item._id}
//               className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 flex flex-col justify-between"
//             >
//               <img
//                 src={item?.product?.image || "https://via.placeholder.com/300"}
//                 alt={item?.product?.title || "Product"}
//                 className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"
//                 onClick={() => goToProduct(item?.product?._id)}
//               />
//               <h2
//                 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white cursor-pointer"
//                 onClick={() => goToProduct(item?.product?._id)}
//               >
//                 {item?.product?.title}
//               </h2>
//               <p className="text-primary font-bold text-xl mb-2">
//                 ₹ {item?.product?.price}
//               </p>
//               <div className="flex justify-between items-center mt-auto">
//                 <button
//                   onClick={() => handleRemove(item?.product?._id)}
//                   className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition flex items-center gap-2"
//                 >
//                   <FaTrashAlt /> Remove
//                 </button>
//                 <button
//                   onClick={() => goToProduct(item?.product?._id)}
//                   className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition"
//                 >
//                   View
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WishlistPage;

















// src/components/WishlistPage/WishlistPage.jsx
import React from "react";
import { useWishlist } from "../../WishlistContext";
import { useCart } from "../../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleMoveToCart = async (item) => {
    try {
      const productId = item.product?._id || item.product;
      // add to cart with default qty 1
      await addToCart(productId, 1);
      // remove from wishlist (use subdoc id)
      await removeFromWishlist(item._id);
    } catch (err) {
      console.error("Failed to move to cart:", err);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((item) => (
              <div key={item._id} className="border rounded-md p-4 flex flex-col items-center">
                <img
                  src={item.product?.image || "https://via.placeholder.com/150"}
                  alt={item.product?.title}
                  className="w-32 h-32 object-cover mb-2 rounded"
                />
                <h2 className="font-medium text-center mb-2 line-clamp-2">
                  {item.product?.title}
                </h2>
                <p className="text-gray-500 mb-2">₹{item.product?.price}</p>

                <div className="flex gap-2 mt-auto">
                  <button
                    onClick={() => handleMoveToCart(item)}
                    className="bg-primary text-white px-4 py-1 rounded hover:scale-105 duration-150"
                  >
                    Move to Cart
                  </button>

                  <button
                    onClick={() => removeFromWishlist(item._id)}
                    className="text-red-500 hover:text-red-600 p-1"
                    aria-label="Remove from wishlist"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={() => navigate("/cart")}
              className="bg-primary text-white px-6 py-2 rounded-full"
            >
              Go to Cart
            </button>

            <button
              onClick={() => clearWishlist()}
              className="border border-gray-300 px-4 py-2 rounded"
            >
              Clear Wishlist
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default WishlistPage;
