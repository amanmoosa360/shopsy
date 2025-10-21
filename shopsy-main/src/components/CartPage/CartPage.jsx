// import React from "react";
// import { IoCloseOutline } from "react-icons/io5";

// const Popup = ({ orderPopup, setOrderPopup }) => {
//   return (
//     <>
//       {orderPopup && (
//         <div className="popup">
//           <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
//             <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
//               {/* header */}
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h1>Order Now</h1>
//                 </div>
//                 <div>
//                   <IoCloseOutline
//                     className="text-2xl cursor-pointer "
//                     onClick={() => setOrderPopup(false)}
//                   />
//                 </div>
//               </div>
//               {/* form section */}
//               <div className="mt-4">
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className=" w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className=" w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Address"
//                   className=" w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
//                 />
//                 <div className="flex justify-center">
//                   <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full ">
//                     Order Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Popup;

















// import React from "react";
// import { IoCloseOutline } from "react-icons/io5";
// import { useCart } from "../../CartContext";

// const Popup = ({ orderPopup, setOrderPopup }) => {
//   const { cart } = useCart();

//   // ✅ Calculate total price
//   const totalPrice = cart.reduce((total, item) => total + item.price, 0);

//   return (
//     <>
//       {orderPopup && (
//         <div className="popup">
//           <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
//             <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[350px] max-h-[90vh] overflow-y-auto">

//               {/* Header */}
//               <div className="flex items-center justify-between border-b pb-2">
//                 <h1 className="text-lg font-semibold">Your Cart ({cart.length})</h1>
//                 <IoCloseOutline
//                   className="text-2xl cursor-pointer"
//                   onClick={() => setOrderPopup(false)}
//                 />
//               </div>

//               {/* Cart Items */}
//               <div className="mt-3 space-y-3">
//                 {cart.length > 0 ? (
//                   cart.map((item, index) => (
//                     <div key={index} className="flex justify-between items-center p-2 border rounded-md dark:border-gray-600">
//                       <div>
//                         <p className="text-sm font-medium">{item.title}</p>
//                         <p className="text-xs text-gray-500">₹{item.price}</p>
//                       </div>
//                       <img src={item.image} alt="product" className="w-12 h-12 rounded-md object-cover" />
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-center text-gray-500 py-4">Your cart is empty</p>
//                 )}
//               </div>

//               {/* Total Price */}
//               {cart.length > 0 && (
//                 <div className="border-t mt-3 pt-2 flex justify-between font-semibold">
//                   <span>Total:</span>
//                   <span>₹{totalPrice}</span>
//                 </div>
//               )}

//               {/* Order Form */}
//               <div className="mt-4">
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="w-full rounded-full border dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-3"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="w-full rounded-full border dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-3"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Address"
//                   className="w-full rounded-full border dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
//                 />
//                 <div className="flex justify-center">
//                   <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-6 rounded-full">
//                     Confirm Order
//                   </button>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Popup;
















// // src/components/Popup/Popup.jsx
// import React from "react";
// import { IoCloseOutline } from "react-icons/io5";
// import { useCart } from "../../CartContext";

// const Popup = ({ orderPopup, setOrderPopup }) => {
//   const { cart } = useCart();

//   // ✅ Calculate total price considering quantity
//   const totalPrice = cart.reduce(
//     (total, item) => total + (item.price || 0) * (item.quantity || 1),
//     0
//   );

//   return (
//     <>
//       {orderPopup && (
//         <div className="popup">
//           <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
//             <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[350px] max-h-[90vh] overflow-y-auto">
              
//               {/* Header */}
//               <div className="flex items-center justify-between border-b pb-2">
//                 <h1 className="text-lg font-semibold">Your Cart ({cart.length})</h1>
//                 <IoCloseOutline
//                   className="text-2xl cursor-pointer"
//                   onClick={() => setOrderPopup(false)}
//                 />
//               </div>

//               {/* Cart Items */}
//               <div className="mt-3 space-y-3">
//                 {cart.length > 0 ? (
//                   <div className="space-y-2 max-h-64 overflow-auto">
//                     {cart.map((item) => (
//                       <div
//                         key={item._id}
//                         className="flex items-center gap-3 p-2 border rounded-md dark:border-gray-600"
//                       >
//                         <img
//                           src={item.product?.image || item.image || "https://via.placeholder.com/60"}
//                           alt={item.product?.title || item.title}
//                           className="w-12 h-12 object-cover rounded-md"
//                         />
//                         <div className="flex-1">
//                           <p className="text-sm font-medium line-clamp-1">
//                             {item.product?.title || item.title}
//                           </p>
//                           <p className="text-xs text-gray-500">
//                             ₹{item.product?.price || item.price} × {item.quantity || 1}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <p className="text-center text-gray-500 py-4">Your cart is empty</p>
//                 )}
//               </div>

//               {/* Total Price */}
//               {cart.length > 0 && (
//                 <div className="border-t mt-3 pt-2 flex justify-between font-semibold">
//                   <span>Total:</span>
//                   <span>₹{totalPrice}</span>
//                 </div>
//               )}

//               {/* Order Form */}
//               <div className="mt-4">
//                 {/* <input
//                   type="text"
//                   placeholder="Name"
//                   className="w-full rounded-full border dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-3"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="w-full rounded-full border dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-3"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Address"
//                   className="w-full rounded-full border dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
//                 /> */}
//                 <div className="flex justify-center">
//                   <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-6 rounded-full">
//                     Confirm Order
//                   </button>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Popup;




















// // src/components/Popup/Popup.jsx
// import React from "react";
// import { IoCloseOutline } from "react-icons/io5";
// import { useCart } from "../../CartContext";

// const Popup = ({ orderPopup, setOrderPopup }) => {
//   const { cart } = useCart();

//   // ✅ Calculate total price considering quantity and item structure
//   const totalPrice = cart.reduce((total, item) => {
//     const price = item.product?.price || item.price || 0; // product price fallback
//     const quantity = item.quantity || 1; // fallback if quantity undefined
//     return total + price * quantity;
//   }, 0);

//   return (
//     <>
//       {orderPopup && (
//         <div className="popup">
//           <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
//             <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[350px] max-h-[90vh] overflow-y-auto">

//               {/* Header */}
//               <div className="flex items-center justify-between border-b pb-2">
//                 <h1 className="text-lg font-semibold">Your Cart ({cart.length})</h1>
//                 <IoCloseOutline
//                   className="text-2xl cursor-pointer"
//                   onClick={() => setOrderPopup(false)}
//                 />
//               </div>

//               {/* Cart Items */}
//               <div className="mt-3 space-y-3">
//                 {cart.length > 0 ? (
//                   <div className="space-y-2 max-h-64 overflow-auto">
//                     {cart.map((item) => (
//                       <div
//                         key={item._id || item.id}
//                         className="flex items-center gap-3 p-2 border rounded-md dark:border-gray-600"
//                       >
//                         <img
//                           src={item.product?.image || item.image || "https://via.placeholder.com/60"}
//                           alt={item.product?.title || item.title}
//                           className="w-12 h-12 object-cover rounded-md"
//                         />
//                         <div className="flex-1">
//                           <p className="text-sm font-medium line-clamp-1">
//                             {item.product?.title || item.title}
//                           </p>
//                           <p className="text-xs text-gray-500">
//                             ₹{item.product?.price || item.price} × {item.quantity || 1}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <p className="text-center text-gray-500 py-4">Your cart is empty</p>
//                 )}
//               </div>

//               {/* Total Price */}
//               {cart.length > 0 && (
//                 <div className="border-t mt-3 pt-2 flex justify-between font-semibold">
//                   <span>Total:</span>
//                   <span>₹{totalPrice}</span>
//                 </div>
//               )}

//               {/* Order Form */}
//               <div className="mt-4">
//                 {/* <input
//                   type="text"
//                   placeholder="Name"
//                   className="w-full rounded-full border dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-3"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="w-full rounded-full border dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-3"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Address"
//                   className="w-full rounded-full border dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
//                 /> */}
//                 <div className="flex justify-center">
//                   <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-6 rounded-full">
//                     Confirm Order
//                   </button>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Popup;



















// // src/components/Popup/Popup.jsx
// import React from "react";
// import { IoCloseOutline } from "react-icons/io5";
// import { FaTrashAlt } from "react-icons/fa";
// import { useCart } from "../../CartContext";

// const Popup = ({ orderPopup, setOrderPopup }) => {
//   const { cart, removeFromCart, updateQuantity } = useCart();

//   // ✅ Calculate total price
//   const totalPrice = cart.reduce((total, item) => {
//     const price = item.product?.price || item.price || 0;
//     const quantity = item.quantity || 1;
//     return total + price * quantity;
//   }, 0);

//   // Handle increment/decrement
//   const handleQuantityChange = (item, delta) => {
//     const newQuantity = (item.quantity || 1) + delta;
//     if (newQuantity < 1) return; // minimum 1
//     updateQuantity(item._id || item.id, newQuantity);
//   };

//   return (
//     <>
//       {orderPopup && (
//         <div className="popup">
//           <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
//             <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[350px] max-h-[90vh] overflow-y-auto">

//               {/* Header */}
//               <div className="flex items-center justify-between border-b pb-2">
//                 <h1 className="text-lg font-semibold">Your Cart ({cart.length})</h1>
//                 <IoCloseOutline
//                   className="text-2xl cursor-pointer"
//                   onClick={() => setOrderPopup(false)}
//                 />
//               </div>

//               {/* Cart Items */}
//               <div className="mt-3 space-y-3">
//                 {cart.length > 0 ? (
//                   <div className="space-y-2 max-h-64 overflow-auto">
//                     {cart.map((item) => (
//                       <div
//                         key={item._id || item.id}
//                         className="flex items-center justify-between gap-3 p-2 border rounded-md dark:border-gray-600"
//                       >
//                         <div className="flex items-center gap-3">
//                           <img
//                             src={item.product?.image || item.image || "https://via.placeholder.com/60"}
//                             alt={item.product?.title || item.title}
//                             className="w-12 h-12 object-cover rounded-md"
//                           />
//                           <div className="flex-1">
//                             <p className="text-sm font-medium line-clamp-1">
//                               {item.product?.title || item.title}
//                             </p>
//                             <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
//                               <button
//                                 onClick={() => handleQuantityChange(item, -1)}
//                                 className="px-1 bg-gray-200 rounded hover:bg-gray-300"
//                               >
//                                 -
//                               </button>
//                               <span>{item.quantity || 1}</span>
//                               <button
//                                 onClick={() => handleQuantityChange(item, 1)}
//                                 className="px-1 bg-gray-200 rounded hover:bg-gray-300"
//                               >
//                                 +
//                               </button>
//                               <span>₹{item.product?.price || item.price}</span>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Delete button */}
//                         <button
//                           onClick={() => removeFromCart(item._id || item.id)}
//                           className="text-red-500 hover:text-red-600"
//                           title="Remove item"
//                         >
//                           <FaTrashAlt />
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <p className="text-center text-gray-500 py-4">Your cart is empty</p>
//                 )}
//               </div>

//               {/* Total Price */}
//               {cart.length > 0 && (
//                 <div className="border-t mt-3 pt-2 flex justify-between font-semibold">
//                   <span>Total:</span>
//                   <span>₹{totalPrice}</span>
//                 </div>
//               )}

//               {/* Order Form */}
//               <div className="mt-4">
//                 <div className="flex justify-center">
//                   <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-6 rounded-full">
//                     Confirm Order
//                   </button>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Popup;























// // src/components/Popup/Popup.jsx
// import React from "react";
// import { IoCloseOutline } from "react-icons/io5";
// import { FaTrashAlt } from "react-icons/fa";
// import { useCart } from "../../CartContext";

// const Popup = ({ orderPopup, setOrderPopup }) => {
//   const { cart, removeFromCart, updateQuantity } = useCart();

//   const totalPrice = cart.reduce((total, item) => {
//     const price = item.product?.price || item.price || 0;
//     const quantity = item.quantity || 1;
//     return total + price * quantity;
//   }, 0);

//   const handleQuantityChange = (item, delta) => {
//     const newQuantity = (item.quantity || 1) + delta;
//     if (newQuantity < 1) return;
//     updateQuantity(item._id || item.id, newQuantity);
//   };

//   return (
//     <>
//       {orderPopup && (
//         <div className="popup">
//           <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
//             <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[350px] max-h-[90vh] overflow-y-auto">

//               {/* Header */}
//               <div className="flex items-center justify-between border-b pb-2">
//                 <h1 className="text-lg font-semibold">Your Cart ({cart.length})</h1>
//                 <IoCloseOutline
//                   className="text-2xl cursor-pointer"
//                   onClick={() => setOrderPopup(false)}
//                 />
//               </div>

//               {/* Cart Items */}
//               <div className="mt-3 space-y-3">
//                 {cart.length > 0 ? (
//                   <div className="space-y-2 max-h-64 overflow-auto">
//                     {cart.map((item) => (
//                       <div
//                         key={item._id || item.id}
//                         className="flex items-center justify-between gap-3 p-2 border rounded-md dark:border-gray-600"
//                       >
//                         <div className="flex items-center gap-3">
//                           <img
//                             src={item.product?.image || item.image || "https://via.placeholder.com/60"}
//                             alt={item.product?.title || item.title}
//                             className="w-12 h-12 object-cover rounded-md"
//                           />
//                           <div className="flex-1">
//                             <p className="text-sm font-medium line-clamp-1">
//                               {item.product?.title || item.title}
//                             </p>

//                             {/* Quantity Controls */}
//                             <div className="flex items-center gap-2 mt-1">
//                               <button
//                                 onClick={() => handleQuantityChange(item, -1)}
//                                 className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold"
//                               >
//                                 -
//                               </button>
//                               <span className="px-2 text-sm">{item.quantity || 1}</span>
//                               <button
//                                 onClick={() => handleQuantityChange(item, 1)}
//                                 className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold"
//                               >
//                                 +
//                               </button>
//                               <span className="ml-2 text-sm text-gray-500">
//                                 ₹{item.product?.price || item.price}
//                               </span>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Delete button */}
//                         <button
//                           onClick={() => removeFromCart(item._id || item.id)}
//                           className="text-red-500 hover:text-red-600"
//                           title="Remove item"
//                         >
//                           <FaTrashAlt />
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <p className="text-center text-gray-500 py-4">Your cart is empty</p>
//                 )}
//               </div>

//               {/* Total Price */}
//               {cart.length > 0 && (
//                 <div className="border-t mt-3 pt-2 flex justify-between font-semibold">
//                   <span>Total:</span>
//                   <span>₹{totalPrice}</span>
//                 </div>
//               )}

//               {/* Order Form */}
//               <div className="mt-4">
//                 <div className="flex justify-center">
//                   <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-6 rounded-full">
//                     Confirm Order
//                   </button>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Popup;
















// // src/components/Popup/Popup.jsx
// import React from "react";
// import { IoCloseOutline } from "react-icons/io5";
// import { FaTrashAlt } from "react-icons/fa";
// import { useCart } from "../../CartContext";

// const Popup = ({ orderPopup, setOrderPopup }) => {
//   const { cart, removeFromCart, updateQuantity } = useCart();

//   // Calculate total price
//   const totalPrice = cart.reduce((total, item) => {
//     const price = item.product?.price || item.price || 0;
//     const quantity = item.quantity || 1;
//     return total + price * quantity;
//   }, 0);

//   // Handle increment/decrement
//   const handleQuantityChange = (item, delta) => {
//     const newQuantity = (item.quantity || 1) + delta;
//     if (newQuantity < 1) return; // minimum 1
//     updateQuantity(item._id, newQuantity); // use cart item _id
//   };

//   return (
//     <>
//       {orderPopup && (
//         <div className="popup">
//           <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
//             <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[350px] max-h-[90vh] overflow-y-auto">

//               {/* Header */}
//               <div className="flex items-center justify-between border-b pb-2">
//                 <h1 className="text-lg font-semibold">Your Cart ({cart.length})</h1>
//                 <IoCloseOutline
//                   className="text-2xl cursor-pointer"
//                   onClick={() => setOrderPopup(false)}
//                 />
//               </div>

//               {/* Cart Items */}
//               <div className="mt-3 space-y-3">
//                 {cart.length > 0 ? (
//                   <div className="space-y-2 max-h-64 overflow-auto">
//                     {cart.map((item) => (
//                       <div
//                         key={item._id}
//                         className="flex items-center justify-between gap-3 p-2 border rounded-md dark:border-gray-600"
//                       >
//                         <div className="flex items-center gap-3">
//                           <img
//                             src={item.product?.image || item.image || "https://via.placeholder.com/60"}
//                             alt={item.product?.title || item.title}
//                             className="w-12 h-12 object-cover rounded-md"
//                           />
//                           <div className="flex-1">
//                             <p className="text-sm font-medium line-clamp-1">
//                               {item.product?.title || item.title}
//                             </p>

//                             {/* Quantity Controls */}
//                             <div className="flex items-center gap-2 mt-1">
//                               <button
//                                 onClick={() => handleQuantityChange(item, -1)}
//                                 className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold"
//                               >
//                                 -
//                               </button>
//                               <span className="px-2 text-sm">{item.quantity || 1}</span>
//                               <button
//                                 onClick={() => handleQuantityChange(item, 1)}
//                                 className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold"
//                               >
//                                 +
//                               </button>
//                               <span className="ml-2 text-sm text-gray-500">
//                                 ₹{item.product?.price || item.price}
//                               </span>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Delete button */}
//                         <button
//                           onClick={() => removeFromCart(item._id)} // pass correct cart item _id
//                           className="text-red-500 hover:text-red-600"
//                           title="Remove item"
//                         >
//                           <FaTrashAlt />
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <p className="text-center text-gray-500 py-4">Your cart is empty</p>
//                 )}
//               </div>

//               {/* Total Price */}
//               {cart.length > 0 && (
//                 <div className="border-t mt-3 pt-2 flex justify-between font-semibold">
//                   <span>Total:</span>
//                   <span>₹{totalPrice}</span>
//                 </div>
//               )}

//               {/* Order Form */}
//               <div className="mt-4">
//                 <div className="flex justify-center">
//                   <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-6 rounded-full">
//                     Confirm Order
//                   </button>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Popup;

















// import React from "react";
// import { IoCloseOutline } from "react-icons/io5";
// import { FaTrashAlt } from "react-icons/fa";
// import { useCart } from "../../CartContext";

// const Popup = ({ orderPopup, setOrderPopup }) => {
//   const { cart, removeFromCart, updateQuantity } = useCart();
 
  

//   const totalPrice = cart.reduce((total, item) => {
//     const price = item.product?.price || item.price || 0;
//     const quantity = item.quantity || 1;
//     return total + price * quantity;
//   }, 0);

//   const handleQuantityChange = (item, delta) => {
//     const newQuantity = (item.quantity || 1) + delta;
//     if (newQuantity < 1) return;
//     updateQuantity(item._id, newQuantity); // ✅ pass cart item _id
//   };

//   return (
//     <>
//       {orderPopup && (
//         <div className="popup">
//           <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
//             <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[350px] max-h-[90vh] overflow-y-auto">

//               {/* Header */}
//               <div className="flex items-center justify-between border-b pb-2">
//                 <h1 className="text-lg font-semibold">Your Cart ({cart.length})</h1>
//                 <IoCloseOutline
//                   className="text-2xl cursor-pointer"
//                   onClick={() => setOrderPopup(false)}
//                 />
//               </div>

//               {/* Cart Items */}
//               <div className="mt-3 space-y-3">
//                 {cart.length > 0 ? (
//                   <div className="space-y-2 max-h-64 overflow-auto">
//                     {cart.map((item) => (
//                       <div
//                         key={item._id}
//                         className="flex items-center justify-between gap-3 p-2 border rounded-md dark:border-gray-600"
//                       >
//                         <div className="flex items-center gap-3">
//                           <img
//                             src={item.product?.image || item.image || "https://via.placeholder.com/60"}
//                             alt={item.product?.title || item.title}
//                             className="w-12 h-12 object-cover rounded-md"
//                           />
//                           <div className="flex-1">
//                             <p className="text-sm font-medium line-clamp-1">
//                               {item.product?.title || item.title}
//                             </p>

//                             {/* Quantity Controls */}
//                             <div className="flex items-center gap-2 mt-1">
//                               <button
//                                 onClick={() => handleQuantityChange(item, -1)}
//                                 className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold"
//                               >
//                                 -
//                               </button>
//                               <span className="px-2 text-sm">{item.quantity || 1}</span>
//                               <button
//                                 onClick={() => handleQuantityChange(item, 1)}
//                                 className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold"
//                               >
//                                 +
//                               </button>
//                               <span className="ml-2 text-sm text-gray-500">
//                                 ₹{item.product?.price || item.price}
//                               </span>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Delete button */}
//                         <button
//                           onClick={() => removeFromCart(item._id)} // ✅ pass cart item _id
//                           className="text-red-500 hover:text-red-600"
//                           title="Remove item"
//                         >
//                           <FaTrashAlt />
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <p className="text-center text-gray-500 py-4">Your cart is empty</p>
//                 )}
//               </div>

//               {/* Total Price */}
//               {cart.length > 0 && (
//                 <div className="border-t mt-3 pt-2 flex justify-between font-semibold">
//                   <span>Total:</span>
//                   <span>₹{totalPrice}</span>
//                 </div>
//               )}

//               {/* Order Form */}
//               <div className="mt-4">
//                 <div className="flex justify-center">
//                   <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-6 rounded-full">
//                     Confirm Order
//                   </button>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Popup;
//oggggg










import React from "react";
import { useCart } from "../../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
   const navigate = useNavigate();
  const totalPrice = cart.reduce((total, item) => {
    const price = item.product?.price || item.price || 0;
    const quantity = item.quantity || 1;
    return total + price * quantity;
  }, 0);

  const handleQuantityChange = (item, delta) => {
    const newQuantity = (item.quantity || 1) + delta;
    if (newQuantity < 1) return;
    updateQuantity(item._id, newQuantity);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cart.map((item) => (
              <div
                key={item._id}
                className="border rounded-md p-4 flex flex-col items-center"
              >
                <img
                  src={item.product?.image || "https://via.placeholder.com/150"}
                  alt={item.product?.title}
                  className="w-32 h-32 object-cover mb-2 rounded"
                />
                <h2 className="font-medium text-center mb-2 line-clamp-2">
                  {item.product?.title || item.title}
                </h2>
                <p className="text-gray-500 mb-2">
                  ₹{item.product?.price || item.price} × {item.quantity}
                </p>

                <div className="flex items-center gap-2 mb-2">
                  <button
                    onClick={() => handleQuantityChange(item, -1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity || 1}</span>
                  <button
                    onClick={() => handleQuantityChange(item, 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <FaTrashAlt />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center font-semibold text-lg">
            <span>Total:</span>
            <span>₹{totalPrice}</span>
          </div>
          

          <div className="mt-4 flex justify-center">
  <button
    onClick={() => navigate("/checkout")}
    className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-6 rounded-full hover:scale-105 duration-200"
  >
    Proceed to checkout
  </button>
</div>
        </>
      )}
    </div>
  );
};

export default CartPage;
