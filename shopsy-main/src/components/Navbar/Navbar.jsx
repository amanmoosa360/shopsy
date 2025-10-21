// import React from "react";
// import Logo from "../../assets/logo.png";
// import { IoMdSearch } from "react-icons/io";
// import { FaCartShopping } from "react-icons/fa6";
// import { FaCaretDown } from "react-icons/fa";
// import DarkMode from "./DarkMode";

// const Menu = [
//   {
//     id: 1,
//     name: "Home",
//     link: "/#",
//   },
//   {
//     id: 2,
//     name: "Top Rated",
//     link: "/#services",
//   },
//   {
//     id: 3,
//     name: "Kids Wear",
//     link: "/#",
//   },
//   {
//     id: 3,
//     name: "Mens Wear",
//     link: "/#",
//   },
//   {
//     id: 3,
//     name: "Electronics",
//     link: "/#",
//   },
// ];

// const DropdownLinks = [
//   {
//     id: 1,
//     name: "Trending Products",
//     link: "/#",
//   },
//   {
//     id: 2,
//     name: "Best Selling",
//     link: "/#",
//   },
//   {
//     id: 3,
//     name: "Top Rated",
//     link: "/#",
//   },
// ];

// const Navbar = ({ handleOrderPopup }) => {
//   return (
//     <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
//       {/* upper Navbar */}
//       <div className="bg-primary/40 py-2">
//         <div className="container flex justify-between items-center">
//           <div>
//             <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
//               <img src={Logo} alt="Logo" className="w-10" />
//               Shopsy
//             </a>
//           </div>

//           {/* search bar */}
//           <div className="flex justify-between items-center gap-4">
//             <div className="relative group hidden sm:block">
//               <input
//                 type="text"
//                 placeholder="search"
//                 className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
//               />
//               <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
//             </div>

//             {/* order button */}
//             <button
//               onClick={() => handleOrderPopup()}
//               className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
//             >
//               <span className="group-hover:block hidden transition-all duration-200">
//                 Order
//               </span>
//               <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
//             </button>

//             {/* Darkmode Switch */}
//             <div>
//               <DarkMode />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* lower Navbar */}
//       <div data-aos="zoom-in" className="flex justify-center">
//         <ul className="sm:flex hidden items-center gap-4">
//           {Menu.map((data) => (
//             <li key={data.id}>
//               <a
//                 href={data.link}
//                 className="inline-block px-4 hover:text-primary duration-200"
//               >
//                 {data.name}
//               </a>
//             </li>
//           ))}
//           {/* Simple Dropdown and Links */}
//           <li className="group relative cursor-pointer">
//             <a href="#" className="flex items-center gap-[2px] py-2">
//               Trending Products
//               <span>
//                 <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
//               </span>
//             </a>
//             <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
//               <ul>
//                 {DropdownLinks.map((data) => (
//                   <li key={data.id}>
//                     <a
//                       href={data.link}
//                       className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
//                     >
//                       {data.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

















// // src/components/Navbar/Navbar.jsx
// import React from "react";
// import Logo from "../../assets/logo.png";
// import { IoMdSearch } from "react-icons/io";
// import { FaCartShopping } from "react-icons/fa6";
// import { FaCaretDown } from "react-icons/fa";
// import DarkMode from "./DarkMode";
// import { useCart } from "../../CartContext";

// const Menu = [
//   { id: 1, name: "Home", link: "/#" },
//   { id: 2, name: "Top Rated", link: "/#services" },
//   { id: 3, name: "Kids Wear", link: "/#" },
//   { id: 4, name: "Mens Wear", link: "/#" },
//   { id: 5, name: "Electronics", link: "/#" },
// ];

// const DropdownLinks = [
//   { id: 1, name: "Trending Products", link: "/#" },
//   { id: 2, name: "Best Selling", link: "/#" },
//   { id: 3, name: "Top Rated", link: "/#" },
// ];

// const Navbar = ({ handleOrderPopup }) => {
//   const { cart } = useCart();

//   const totalItems = cart.reduce((s, item) => s + (item.quantity || 0), 0);

//   return (
//     <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
//       {/* upper Navbar */}
//       <div className="bg-primary/40 py-2">
//         <div className="container flex justify-between items-center">
//           <div>
//             <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
//               <img src={Logo} alt="Logo" className="w-10" />
//               Shopsy
//             </a>
//           </div>

//           {/* search bar */}
//           <div className="flex justify-between items-center gap-4">
//             <div className="relative group hidden sm:block">
//               <input
//                 type="text"
//                 placeholder="search"
//                 className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
//               />
//               <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
//             </div>

//             {/* order button + mini preview */}
//             <div className="relative group">
//               <button
//                 onClick={() => handleOrderPopup()}
//                 className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
//               >
//                 <span className="hidden group-hover:block transition-all duration-200">
//                   Order
//                 </span>

//                 <div className="relative">
//                   <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
//                   {totalItems > 0 && (
//                     <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                       {totalItems}
//                     </span>
//                   )}
//                 </div>
//               </button>

//               {/* hover preview */}
//               <div className="absolute right-0 mt-3 w-64 rounded-md bg-white p-3 text-black shadow-md hidden group-hover:block z-50">
//                 <h4 className="font-semibold mb-2">Cart Preview</h4>
//                 {cart.length === 0 ? (
//                   <p className="text-sm text-gray-500">No items in cart</p>
//                 ) : (
//                   <div className="space-y-2 max-h-48 overflow-auto">
//                     {cart.map((it) => (
//                       <div key={it._id} className="flex items-center gap-3">
//                         <img
//                           src={it.product?.image || "https://via.placeholder.com/60"}
//                           alt={it.product?.title}
//                           className="w-12 h-12 object-cover rounded"
//                         />
//                         <div className="flex-1">
//                           <div className="text-sm font-medium line-clamp-1">
//                             {it.product?.title}
//                           </div>
//                           <div className="text-xs text-gray-500">
//                             ₹ {it.product?.price} × {it.quantity}
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                     <button
//                       onClick={() => handleOrderPopup()}
//                       className="w-full mt-2 bg-primary text-white py-1 rounded text-sm"
//                     >
//                       View / Checkout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Darkmode Switch */}
//             <div>
//               <DarkMode />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* lower Navbar */}
//       <div data-aos="zoom-in" className="flex justify-center">
//         <ul className="sm:flex hidden items-center gap-4">
//           {Menu.map((data) => (
//             <li key={data.id}>
//               <a
//                 href={data.link}
//                 className="inline-block px-4 hover:text-primary duration-200"
//               >
//                 {data.name}
//               </a>
//             </li>
//           ))}
//           {/* Simple Dropdown and Links */}
//           <li className="group relative cursor-pointer">
//             <a href="#" className="flex items-center gap-[2px] py-2">
//               Trending Products
//               <span>
//                 <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
//               </span>
//             </a>
//             <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
//               <ul>
//                 {DropdownLinks.map((data) => (
//                   <li key={data.id}>
//                     <a
//                       href={data.link}
//                       className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
//                     >
//                       {data.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
//ogggggg














// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Logo from "../../assets/logo.png";
// import { IoMdSearch } from "react-icons/io";
// import { FaCartShopping } from "react-icons/fa6";
// import { FaCaretDown } from "react-icons/fa";
// import DarkMode from "./DarkMode";
// import { useCart } from "../../CartContext";

// const Menu = [
//   { id: 1, name: "Home", link: "/" },
//   { id: 2, name: "Top Rated", link: "/#services" },
//   { id: 3, name: "Kids Wear", link: "/#" },
//   { id: 4, name: "Mens Wear", link: "/#" },
//   { id: 5, name: "Electronics", link: "/#" },
// ];

// const DropdownLinks = [
//   { id: 1, name: "Trending Products", link: "/#" },
//   { id: 2, name: "Best Selling", link: "/#" },
//   { id: 3, name: "Top Rated", link: "/#" },
// ];

// const Navbar = () => {
//   const { cart } = useCart();
//   const navigate = useNavigate();

//   const totalItems = cart.reduce((s, item) => s + (item.quantity || 0), 0);

//   const goToCartPage = () => {
//     navigate("/cart");
//   };

//   return (
//     <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
//       {/* upper Navbar */}
//       <div className="bg-primary/40 py-2">
//         <div className="container flex justify-between items-center">
//           <div>
//             <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
//               <img src={Logo} alt="Logo" className="w-10" />
//               Shopsy
//             </a>
//           </div>

//           {/* search bar */}
//           <div className="flex justify-between items-center gap-4">
//             <div className="relative group hidden sm:block">
//               <input
//                 type="text"
//                 placeholder="search"
//                 className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
//               />
//               <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
//             </div>

//             {/* order button + mini preview */}
//             <div className="relative group">
//               <button
//                 onClick={goToCartPage}
//                 className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
//               >
//                 <span className="hidden group-hover:block transition-all duration-200">
//                   Order
//                 </span>

//                 <div className="relative">
//                   <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
//                   {totalItems > 0 && (
//                     <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                       {totalItems}
//                     </span>
//                   )}
//                 </div>
//               </button>
//             </div>

//             {/* Darkmode Switch */}
//             <div>
//               <DarkMode />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* lower Navbar */}
//       <div data-aos="zoom-in" className="flex justify-center">
//         <ul className="sm:flex hidden items-center gap-4">
//           {Menu.map((data) => (
//             <li key={data.id}>
//               <a
//                 href={data.link}
//                 className="inline-block px-4 hover:text-primary duration-200"
//               >
//                 {data.name}
//               </a>
//             </li>
//           ))}
//           {/* Simple Dropdown and Links */}
//           <li className="group relative cursor-pointer">
//             <a href="#" className="flex items-center gap-[2px] py-2">
//               Trending Products
//               <span>
//                 <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
//               </span>
//             </a>
//             <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
//               <ul>
//                 {DropdownLinks.map((data) => (
//                   <li key={data.id}>
//                     <a
//                       href={data.link}
//                       className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
//                     >
//                       {data.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;















// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Logo from "../../assets/logo.png";
// import { IoMdSearch } from "react-icons/io";
// import { FaShoppingCart, FaHeart, FaCaretDown } from "react-icons/fa";
// import DarkMode from "./DarkMode";
// import { useCart } from "../../CartContext";

// // Dummy wishlist for example (replace with actual context if you have one)
// const wishlist = [
//   { id: 1, title: "Sample Product 1" },
//   { id: 2, title: "Sample Product 2" },
// ];

// const Menu = [
//   { id: 1, name: "Home", link: "/" },
//   { id: 2, name: "Top Rated", link: "/#services" },
//   { id: 3, name: "Kids Wear", link: "/#" },
//   { id: 4, name: "Mens Wear", link: "/#" },
//   { id: 5, name: "Electronics", link: "/#" },
// ];

// const DropdownLinks = [
//   { id: 1, name: "Trending Products", link: "/#" },
//   { id: 2, name: "Best Selling", link: "/#" },
//   { id: 3, name: "Top Rated", link: "/#" },
// ];

// const Navbar = () => {
//   const { cart } = useCart();
//   const navigate = useNavigate();

//   const totalCartItems = cart.reduce((s, item) => s + (item.quantity || 0), 0);
//   const totalWishlistItems = wishlist.length; // replace with your wishlist context

//   const goToCartPage = () => navigate("/cart");
//   const goToWishlistPage = () => navigate("/wishlist"); // replace with your wishlist route

//   return (
//     <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
//       {/* upper Navbar */}
//       <div className="bg-primary/40 py-2">
//         <div className="container flex justify-between items-center">
//           <div>
//             <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
//               <img src={Logo} alt="Logo" className="w-10" />
//               Shopsy
//             </a>
//           </div>

//           {/* search bar */}
//           <div className="flex justify-between items-center gap-4">
//             <div className="relative group hidden sm:block">
//               <input
//                 type="text"
//                 placeholder="search"
//                 className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
//               />
//               <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
//             </div>

//             {/* Cart & Wishlist Buttons */}
//             <div className="relative flex items-center gap-4">
//               {/* Cart Button */}
//               <button
//                 onClick={goToCartPage}
//                 className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
//               >
//                 <span className="hidden group-hover:block transition-all duration-200">
//                   Order
//                 </span>
//                 <div className="relative">
//                   <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
//                   {totalCartItems > 0 && (
//                     <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                       {totalCartItems}
//                     </span>
//                   )}
//                 </div>
//               </button>

//               {/* Wishlist Button */}
//               <button
//                 onClick={goToWishlistPage}
//                 className="bg-pink-500 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
//               >
//                 <span className="hidden group-hover:block transition-all duration-200">
//                   Wishlist
//                 </span>
//                 <div className="relative">
//                   <FaHeart className="text-xl text-white drop-shadow-sm cursor-pointer" />
//                   {totalWishlistItems > 0 && (
//                     <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                       {totalWishlistItems}
//                     </span>
//                   )}
//                 </div>
//               </button>
//             </div>

//             {/* Darkmode Switch */}
//             <div>
//               <DarkMode />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* lower Navbar */}
//       <div data-aos="zoom-in" className="flex justify-center">
//         <ul className="sm:flex hidden items-center gap-4">
//           {Menu.map((data) => (
//             <li key={data.id}>
//               <a
//                 href={data.link}
//                 className="inline-block px-4 hover:text-primary duration-200"
//               >
//                 {data.name}
//               </a>
//             </li>
//           ))}
//           {/* Simple Dropdown */}
//           <li className="group relative cursor-pointer">
//             <a href="#" className="flex items-center gap-[2px] py-2">
//               Trending Products
//               <span>
//                 <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
//               </span>
//             </a>
//             <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
//               <ul>
//                 {DropdownLinks.map((data) => (
//                   <li key={data.id}>
//                     <a
//                       href={data.link}
//                       className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
//                     >
//                       {data.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;













// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Logo from "../../assets/logo.png";
// import { IoMdSearch } from "react-icons/io";
// import { FaShoppingCart, FaHeart, FaCaretDown } from "react-icons/fa";
// import DarkMode from "./DarkMode";
// import { useCart } from "../../CartContext";
// import { useWishlist } from "../../WishlistContext"; // ✅ Import Wishlist Context

// const Menu = [
//   { id: 1, name: "Home", link: "/" },
//   { id: 2, name: "Top Rated", link: "/#services" },
//   { id: 3, name: "Kids Wear", link: "/#" },
//   { id: 4, name: "Mens Wear", link: "/#" },
//   { id: 5, name: "Electronics", link: "/#" },
// ];

// const DropdownLinks = [
//   { id: 1, name: "Trending Products", link: "/#" },
//   { id: 2, name: "Best Selling", link: "/#" },
//   { id: 3, name: "Top Rated", link: "/#" },
// ];

// const Navbar = () => {
//   const { cart } = useCart();
//   const { wishlist } = useWishlist(); // ✅ Use Wishlist from Context
//   const navigate = useNavigate();

//   const totalCartItems = cart.reduce((s, item) => s + (item.quantity || 0), 0);
//   const totalWishlistItems = wishlist.length; // ✅ Dynamic count

//   const goToCartPage = () => navigate("/cart");
//   const goToWishlistPage = () => navigate("/wishlist");

//   return (
//     <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
//       {/* Upper Navbar */}
//       <div className="bg-primary/40 py-2">
//         <div className="container flex justify-between items-center">
//           {/* Logo */}
//           <div>
//             <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
//               <img src={Logo} alt="Logo" className="w-10" />
//               Shopsy
//             </a>
//           </div>

//           {/* Search Bar & Buttons */}
//           <div className="flex justify-between items-center gap-4">
//             {/* Search */}
//             <div className="relative group hidden sm:block">
//               <input
//                 type="text"
//                 placeholder="search"
//                 className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
//               />
//               <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
//             </div>

//             {/* Cart & Wishlist Buttons */}
//             <div className="relative flex items-center gap-4">
//               {/* Cart */}
//               <button
//                 onClick={goToCartPage}
//                 className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
//               >
//                 <span className="hidden group-hover:block transition-all duration-200">
//                   Order
//                 </span>
//                 <div className="relative">
//                   <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
//                   {totalCartItems > 0 && (
//                     <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                       {totalCartItems}
//                     </span>
//                   )}
//                 </div>
//               </button>

//               {/* Wishlist */}
//               <button
//                 onClick={goToWishlistPage}
//                 className="bg-pink-500 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
//               >
//                 <span className="hidden group-hover:block transition-all duration-200">
//                   Wishlist
//                 </span>
//                 <div className="relative">
//                   <FaHeart className="text-xl text-white drop-shadow-sm cursor-pointer" />
//                   {totalWishlistItems > 0 && (
//                     <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                       {totalWishlistItems}
//                     </span>
//                   )}
//                 </div>
//               </button>
//             </div>

//             {/* Darkmode */}
//             <div>
//               <DarkMode />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Lower Navbar */}
//       <div data-aos="zoom-in" className="flex justify-center">
//         <ul className="sm:flex hidden items-center gap-4">
//           {Menu.map((data) => (
//             <li key={data.id}>
//               <a
//                 href={data.link}
//                 className="inline-block px-4 hover:text-primary duration-200"
//               >
//                 {data.name}
//               </a>
//             </li>
//           ))}

//           {/* Dropdown */}
//           <li className="group relative cursor-pointer">
//             <a href="#" className="flex items-center gap-[2px] py-2">
//               Trending Products
//               <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
//             </a>
//             <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
//               <ul>
//                 {DropdownLinks.map((data) => (
//                   <li key={data.id}>
//                     <a
//                       href={data.link}
//                       className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
//                     >
//                       {data.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;













// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Logo from "../../assets/logo.png";
// import { IoMdSearch } from "react-icons/io";
// import { FaShoppingCart, FaHeart, FaCaretDown, FaUserShield } from "react-icons/fa";
// import DarkMode from "./DarkMode";
// import { useCart } from "../../CartContext";
// import { useWishlist } from "../../WishlistContext"; // ✅ Import Wishlist Context

// const Menu = [
//   { id: 1, name: "Home", link: "/" },
//   { id: 2, name: "Top Rated", link: "/#services" },
//   { id: 3, name: "Kids Wear", link: "/#" },
//   { id: 4, name: "Mens Wear", link: "/#" },
//   { id: 5, name: "Electronics", link: "/#" },
// ];

// const DropdownLinks = [
//   { id: 1, name: "Trending Products", link: "/#" },
//   { id: 2, name: "Best Selling", link: "/#" },
//   { id: 3, name: "Top Rated", link: "/#" },
// ];

// const Navbar = () => {
//   const { cart } = useCart();
//   const { wishlist } = useWishlist(); // ✅ Use Wishlist from Context
//   const navigate = useNavigate();

//   const totalCartItems = cart.reduce((s, item) => s + (item.quantity || 0), 0);
//   const totalWishlistItems = wishlist.length; // ✅ Dynamic count

//   const goToCartPage = () => navigate("/cart");
//   const goToWishlistPage = () => navigate("/wishlist");
//   const goToAdminPage = () => navigate("/admin"); // ✅ Admin navigation

//   return (
//     <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
//       {/* Upper Navbar */}
//       <div className="bg-primary/40 py-2">
//         <div className="container flex justify-between items-center">
//           {/* Logo */}
//           <div>
//             <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
//               <img src={Logo} alt="Logo" className="w-10" />
//               Shopsy
//             </a>
//           </div>

//           {/* Search Bar & Buttons */}
//           <div className="flex justify-between items-center gap-4">
//             {/* Search */}
//             <div className="relative group hidden sm:block">
//               <input
//                 type="text"
//                 placeholder="search"
//                 className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
//               />
//               <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
//             </div>

//             {/* Cart, Wishlist & Admin Buttons */}
//             <div className="relative flex items-center gap-4">
//               {/* Cart */}
//               <button
//                 onClick={goToCartPage}
//                 className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
//               >
//                 <span className="hidden group-hover:block transition-all duration-200">
//                   Order
//                 </span>
//                 <div className="relative">
//                   <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
//                   {totalCartItems > 0 && (
//                     <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                       {totalCartItems}
//                     </span>
//                   )}
//                 </div>
//               </button>

//               {/* Wishlist */}
//               <button
//                 onClick={goToWishlistPage}
//                 className="bg-pink-500 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
//               >
//                 <span className="hidden group-hover:block transition-all duration-200">
//                   Wishlist
//                 </span>
//                 <div className="relative">
//                   <FaHeart className="text-xl text-white drop-shadow-sm cursor-pointer" />
//                   {totalWishlistItems > 0 && (
//                     <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                       {totalWishlistItems}
//                     </span>
//                   )}
//                 </div>
//               </button>

//               {/* Admin */}
//               <button
//                 onClick={goToAdminPage}
//                 className="bg-gray-800 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2"
//               >
//                 <FaUserShield className="text-xl" />
//                 <span className="hidden group-hover:block transition-all duration-200">
//                   Admin
//                 </span>
//               </button>
//             </div>

//             {/* Darkmode */}
//             <div>
//               <DarkMode />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Lower Navbar */}
//       <div data-aos="zoom-in" className="flex justify-center">
//         <ul className="sm:flex hidden items-center gap-4">
//           {Menu.map((data) => (
//             <li key={data.id}>
//               <a
//                 href={data.link}
//                 className="inline-block px-4 hover:text-primary duration-200"
//               >
//                 {data.name}
//               </a>
//             </li>
//           ))}

//           {/* Dropdown */}
//           <li className="group relative cursor-pointer">
//             <a href="#" className="flex items-center gap-[2px] py-2">
//               Trending Products
//               <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
//             </a>
//             <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
//               <ul>
//                 {DropdownLinks.map((data) => (
//                   <li key={data.id}>
//                     <a
//                       href={data.link}
//                       className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
//                     >
//                       {data.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;









// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Logo from "../../assets/logo.png";
// import { IoMdSearch } from "react-icons/io";
// import { FaShoppingCart, FaHeart, FaCaretDown, FaUserShield } from "react-icons/fa";
// import DarkMode from "./DarkMode";
// import { useCart } from "../../CartContext";
// import { useWishlist } from "../../WishlistContext";

// const Menu = [
//   { id: 1, name: "Home", link: "/" },
//   { id: 2, name: "Top Rated", link: "/#services" },
//   { id: 3, name: "Kids Wear", link: "/#" },
//   { id: 4, name: "Mens Wear", link: "/#" },
//   { id: 5, name: "Electronics", link: "/#" },
// ];

// const DropdownLinks = [
//   { id: 1, name: "Trending Products", link: "/#" },
//   { id: 2, name: "Best Selling", link: "/#" },
//   { id: 3, name: "Top Rated", link: "/#" },
// ];

// const Navbar = () => {
//   const { cart } = useCart();
//   const { wishlist } = useWishlist();
//   const navigate = useNavigate();
//   const [adminDropdownOpen, setAdminDropdownOpen] = useState(false);

//   const totalCartItems = cart.reduce((s, item) => s + (item.quantity || 0), 0);
//   const totalWishlistItems = wishlist.length;

//   const goToCartPage = () => navigate("/cart");
//   const goToWishlistPage = () => navigate("/wishlist");

//   return (
//     <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
//       {/* Upper Navbar */}
//       <div className="bg-primary/40 py-2">
//         <div className="container flex justify-between items-center">
//           {/* Logo */}
//           <div>
//             <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
//               <img src={Logo} alt="Logo" className="w-10" />
//               Shopsy
//             </a>
//           </div>

//           {/* Search & Buttons */}
//           <div className="flex justify-between items-center gap-4">
//             <div className="relative hidden sm:block">
//               <input
//                 type="text"
//                 placeholder="search"
//                 className="w-[200px] sm:w-[200px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
//               />
//               <IoMdSearch className="text-gray-500 absolute top-1/2 -translate-y-1/2 right-3" />
//             </div>

//             <div className="relative flex items-center gap-4">
//               {/* Cart */}
//               <button
//                 onClick={goToCartPage}
//                 className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
//               >
//                 <span className="hidden sm:block">Order</span>
//                 <div className="relative">
//                   <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
//                   {totalCartItems > 0 && (
//                     <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                       {totalCartItems}
//                     </span>
//                   )}
//                 </div>
//               </button>

//               {/* Wishlist */}
//               <button
//                 onClick={goToWishlistPage}
//                 className="bg-pink-500 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
//               >
//                 <span className="hidden sm:block">Wishlist</span>
//                 <div className="relative">
//                   <FaHeart className="text-xl text-white drop-shadow-sm cursor-pointer" />
//                   {totalWishlistItems > 0 && (
//                     <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                       {totalWishlistItems}
//                     </span>
//                   )}
//                 </div>
//               </button>

//               {/* Admin Dropdown */}
//               <div className="relative">
//                 <button
//                   onClick={() => setAdminDropdownOpen(!adminDropdownOpen)}
//                   className="bg-gray-800 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2"
//                 >
//                   <FaUserShield className="text-xl" />
//                   <span className="hidden sm:block">Admin</span>
//                   <FaCaretDown className="ml-1 text-sm" />
//                 </button>

//                 {/* Dropdown Menu */}
//                 {adminDropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md shadow-lg transition-all duration-200">
//                     <ul>
//                       <li>
//                         <button
//                           onClick={() => navigate("/admin/register")}
//                           className="w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
//                         >
//                           Register
//                         </button>
//                       </li>
//                       <li>
//                         <button
//                           onClick={() => navigate("/admin/login")}
//                           className="w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
//                         >
//                           Login
//                         </button>
//                       </li>
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Darkmode */}
//             <DarkMode />
//           </div>
//         </div>
//       </div>

//       {/* Lower Navbar */}
//       <div data-aos="zoom-in" className="flex justify-center">
//         <ul className="sm:flex hidden items-center gap-4">
//           {Menu.map((data) => (
//             <li key={data.id}>
//               <a
//                 href={data.link}
//                 className="inline-block px-4 hover:text-primary duration-200"
//               >
//                 {data.name}
//               </a>
//             </li>
//           ))}

//           {/* Trending Products Dropdown */}
//           <li className="relative group">
//             <button className="flex items-center gap-2 py-2 px-4 hover:text-primary duration-200">
//               Trending Products
//               <FaCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
//             </button>
//             <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
//               <ul>
//                 {DropdownLinks.map((data) => (
//                   <li key={data.id}>
//                     <a
//                       href={data.link}
//                       className="block w-full px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
//                     >
//                       {data.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;















// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Logo from "../../assets/logo.png";
// import { IoMdSearch } from "react-icons/io";
// import { FaShoppingCart, FaHeart, FaCaretDown, FaUserShield } from "react-icons/fa";
// import DarkMode from "./DarkMode";
// import { useCart } from "../../CartContext";
// import { useWishlist } from "../../WishlistContext";

// const Menu = [
//   { id: 1, name: "Home", link: "/" },
//   { id: 2, name: "Top Rated", link: "/#services" },
//   { id: 3, name: "Kids Wear", link: "/#" },
//   { id: 4, name: "Mens Wear", link: "/#" },
//   { id: 5, name: "Electronics", link: "/#" },
// ];

// const DropdownLinks = [
//   { id: 1, name: "Trending Products", link: "/#" },
//   { id: 2, name: "Best Selling", link: "/#" },
//   { id: 3, name: "Top Rated", link: "/#" },
// ];

// const Navbar = () => {
//   const { cart } = useCart();
//   const { wishlist } = useWishlist();
//   const navigate = useNavigate();
//   const [adminDropdownOpen, setAdminDropdownOpen] = useState(false);

//   const totalCartItems = cart.reduce((s, item) => s + (item.quantity || 0), 0);
//   const totalWishlistItems = wishlist.length;

//   const goToCartPage = () => navigate("/cart");
//   const goToWishlistPage = () => navigate("/wishlist");

//   return (
//     <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
//       {/* Upper Navbar */}
//       <div className="bg-primary/40 py-2">
//         <div className="container flex justify-between items-center">
//           {/* Logo */}
//           <div>
//             <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
//               <img src={Logo} alt="Logo" className="w-10" />
//               Shopsy
//             </a>
//           </div>

//           {/* Search & Buttons */}
//           <div className="flex justify-between items-center gap-4">
//             <div className="relative hidden sm:block">
//               <input
//                 type="text"
//                 placeholder="search"
//                 className="w-[200px] sm:w-[200px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
//               />
//               <IoMdSearch className="text-gray-500 absolute top-1/2 -translate-y-1/2 right-3" />
//             </div>

//             <div className="relative flex items-center gap-4">
//               {/* Cart */}
//               <button
//                 onClick={goToCartPage}
//                 className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
//               >
//                 <span className="hidden sm:block">Order</span>
//                 <div className="relative">
//                   <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
//                   {totalCartItems > 0 && (
//                     <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                       {totalCartItems}
//                     </span>
//                   )}
//                 </div>
//               </button>

//               {/* Wishlist */}
//               <button
//                 onClick={goToWishlistPage}
//                 className="bg-pink-500 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
//               >
//                 <span className="hidden sm:block">Wishlist</span>
//                 <div className="relative">
//                   <FaHeart className="text-xl text-white drop-shadow-sm cursor-pointer" />
//                   {totalWishlistItems > 0 && (
//                     <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                       {totalWishlistItems}
//                     </span>
//                   )}
//                 </div>
//               </button>

//               {/* Admin Dropdown */}
//               <div className="relative">
//                 <button
//                   onClick={() => setAdminDropdownOpen(!adminDropdownOpen)}
//                   className="bg-gray-800 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2"
//                 >
//                   <FaUserShield className="text-xl" />
//                   <span className="hidden sm:block">Admin</span>
//                   <FaCaretDown className="ml-1 text-sm" />
//                 </button>

//                 {/* Dropdown Menu */}
//                 {adminDropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md shadow-lg transition-all duration-200">
//                     <ul>
//                       <li>
//                         <button
//                           onClick={() => navigate("/admin/register")}
//                           className="w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
//                         >
//                           Register
//                         </button>
//                       </li>
//                       <li>
//                         <button
//                           onClick={() => navigate("/admin/login")}
//                           className="w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
//                         >
//                           Login
//                         </button>
//                       </li>
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Darkmode */}
//             <DarkMode />
//           </div>
//         </div>
//       </div>

//       {/* Lower Navbar */}
//       <div data-aos="zoom-in" className="flex justify-center">
//         <ul className="sm:flex hidden items-center gap-4">
//           {Menu.map((data) => (
//             <li key={data.id}>
//               <a
//                 href={data.link}
//                 className="inline-block px-4 hover:text-primary duration-200"
//               >
//                 {data.name}
//               </a>
//             </li>
//           ))}

//           {/* Trending Products Dropdown */}
//           <li className="relative group">
//             <button className="flex items-center gap-2 py-2 px-4 hover:text-primary duration-200">
//               Trending Products
//               <FaCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
//             </button>
//             <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
//               <ul>
//                 {DropdownLinks.map((data) => (
//                   <li key={data.id}>
//                     <a
//                       href={data.link}
//                       className="block w-full px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
//                     >
//                       {data.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;












// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../../assets/logo.png";
// import { IoMdSearch } from "react-icons/io";
// import { FaShoppingCart, FaHeart, FaCaretDown, FaUserShield } from "react-icons/fa";
// import DarkMode from "./DarkMode";
// import { useCart } from "../../CartContext";
// import { useWishlist } from "../../WishlistContext";

// const Menu = [
//   { id: 1, name: "Home", link: "/" },
//   { id: 2, name: "Top Rated", link: "/#services" },
//   { id: 3, name: "Kids Wear", link: "/#" },
//   { id: 4, name: "Mens Wear", link: "/#" },
//   { id: 5, name: "Electronics", link: "/#" },
// ];

// const DropdownLinks = [
//   { id: 1, name: "Trending Products", link: "/#" },
//   { id: 2, name: "Best Selling", link: "/#" },
//   { id: 3, name: "Top Rated", link: "/#" },
// ];

// const Navbar = () => {
//   const { cart } = useCart();
//   const { wishlist } = useWishlist();
//   const [adminDropdownOpen, setAdminDropdownOpen] = useState(false);

//   const totalCartItems = cart.reduce((s, item) => s + (item.quantity || 0), 0);
//   const totalWishlistItems = wishlist.length;

//   return (
//     <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
//       {/* Upper Navbar */}
//       <div className="bg-primary/40 py-2">
//         <div className="container flex justify-between items-center">
//           <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
//             <img src={Logo} alt="Logo" className="w-10" />
//             Shopsy
//           </Link>

//           <div className="flex justify-between items-center gap-4">
//             <div className="relative hidden sm:block">
//               <input
//                 type="text"
//                 placeholder="search"
//                 className="w-[200px] sm:w-[200px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
//               />
//               <IoMdSearch className="text-gray-500 absolute top-1/2 -translate-y-1/2 right-3" />
//             </div>

//             <div className="relative flex items-center gap-4">
//               <Link
//                 to="/cart"
//                 className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
//               >
//                 <span className="hidden sm:block">Order</span>
//                 <div className="relative">
//                   <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
//                   {totalCartItems > 0 && (
//                     <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                       {totalCartItems}
//                     </span>
//                   )}
//                 </div>
//               </Link>

//               <Link
//                 to="/wishlist"
//                 className="bg-pink-500 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
//               >
//                 <span className="hidden sm:block">Wishlist</span>
//                 <div className="relative">
//                   <FaHeart className="text-xl text-white drop-shadow-sm cursor-pointer" />
//                   {totalWishlistItems > 0 && (
//                     <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                       {totalWishlistItems}
//                     </span>
//                   )}
//                 </div>
//               </Link>

//               {/* Admin Dropdown */}
//               <div className="relative">
//                 <button
//                   onClick={() => setAdminDropdownOpen(!adminDropdownOpen)}
//                   className="bg-gray-800 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2"
//                 >
//                   <FaUserShield className="text-xl" />
//                   <span className="hidden sm:block">Admin</span>
//                   <FaCaretDown className="ml-1 text-sm" />
//                 </button>

//                 {adminDropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md shadow-lg transition-all duration-200">
//                     <ul>
//                       <li>
//                         <Link
//                           to="/admin/register"
//                           className="block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
//                           onClick={() => setAdminDropdownOpen(false)}
//                         >
//                           Register
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="/admin/login"
//                           className="block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
//                           onClick={() => setAdminDropdownOpen(false)}
//                         >
//                           Login
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 )}
//               </div>

//               <DarkMode />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;











// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../../assets/logo.png";
// import { IoMdSearch } from "react-icons/io";
// import {
//   FaShoppingCart,
//   FaHeart,
//   FaCaretDown,
//   FaUserShield,
//   FaUser
// } from "react-icons/fa";
// import DarkMode from "./DarkMode";
// import { useCart } from "../../CartContext";
// import { useWishlist } from "../../WishlistContext";

// const Menu = [
//   { id: 1, name: "Home", link: "/" },
//   { id: 2, name: "Top Rated", link: "/#services" },
//   { id: 3, name: "Kids Wear", link: "/#" },
//   { id: 4, name: "Mens Wear", link: "/#" },
//   { id: 5, name: "Electronics", link: "/#" }
// ];

// const DropdownLinks = [
//   { id: 1, name: "Trending Products", link: "/#" },
//   { id: 2, name: "Best Selling", link: "/#" },
//   { id: 3, name: "Top Rated", link: "/#" }
// ];

// const Navbar = () => {
//   const { cart } = useCart();
//   const { wishlist } = useWishlist();
//   const [adminDropdownOpen, setAdminDropdownOpen] = useState(false);

//   const totalCartItems = cart.reduce((s, item) => s + (item.quantity || 0), 0);
//   const totalWishlistItems = wishlist.length;

//   return (
//     <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
//       {/* Upper Navbar */}
//       <div className="bg-primary/40 py-2">
//         <div className="container flex justify-between items-center">
//           <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
//             <img src={Logo} alt="Logo" className="w-10" />
//             Shopsy
//           </Link>

//           <div className="flex justify-between items-center gap-4">
//             <div className="relative hidden sm:block">
//               <input
//                 type="text"
//                 placeholder="search"
//                 className="w-[200px] sm:w-[200px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
//               />
//               <IoMdSearch className="text-gray-500 absolute top-1/2 -translate-y-1/2 right-3" />
//             </div>

//             <div className="relative flex items-center gap-4">
//               {/* Cart */}
//               <Link
//                 to="/cart"
//                 className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
//               >
//                 <span className="hidden sm:block">Order</span>
//                 <div className="relative">
//                   <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
//                   {totalCartItems > 0 && (
//                     <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                       {totalCartItems}
//                     </span>
//                   )}
//                 </div>
//               </Link>

//               {/* Wishlist */}
//               <Link
//                 to="/wishlist"
//                 className="bg-pink-500 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
//               >
//                 <span className="hidden sm:block">Wishlist</span>
//                 <div className="relative">
//                   <FaHeart className="text-xl text-white drop-shadow-sm cursor-pointer" />
//                   {totalWishlistItems > 0 && (
//                     <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                       {totalWishlistItems}
//                     </span>
//                   )}
//                 </div>
//               </Link>

//               {/* Admin Dropdown */}
//               <div className="relative">
//                 <button
//                   onClick={() => setAdminDropdownOpen(!adminDropdownOpen)}
//                   className="bg-gray-800 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2"
//                 >
//                   <FaUserShield className="text-xl" />
//                   <span className="hidden sm:block">Admin</span>
//                   <FaCaretDown className="ml-1 text-sm" />
//                 </button>

//                 {adminDropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md shadow-lg transition-all duration-200">
//                     <ul>
//                       <li>
//                         <Link
//                           to="/admin/register"
//                           className="block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
//                           onClick={() => setAdminDropdownOpen(false)}
//                         >
//                           Register
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="/admin/login"
//                           className="block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
//                           onClick={() => setAdminDropdownOpen(false)}
//                         >
//                           Login
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 )}
//               </div>

//               <DarkMode />

//               {/* ✅ Profile Icon at the end */}
//               <Link
//                 to="/profile"
//                 className="bg-blue-600 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
//               >
//                 <span className="hidden sm:block">Profile</span>
//                 <FaUser className="text-xl text-white drop-shadow-sm cursor-pointer" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
//ogggggggggggggggggggggggggggg







// // File: src/components/Navbar/Navbar.jsx
// import React, { useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Logo from "../../assets/logo.png";
// import { IoMdSearch } from "react-icons/io";
// import {
//   FaShoppingCart,
//   FaHeart,
//   FaCaretDown,
//   FaUserShield,
//   FaUser
// } from "react-icons/fa";
// import DarkMode from "./DarkMode";
// import { useCart } from "../../CartContext";
// import { useWishlist } from "../../WishlistContext";
// import { AuthContext } from "../../AuthContext";

// const Navbar = () => {
//   const { cart } = useCart();
//   const { wishlist } = useWishlist();
//   const { isLogged, logout } = useContext(AuthContext); // ✅ Auth context
//   const [adminDropdownOpen, setAdminDropdownOpen] = useState(false);
//   const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
//   const navigate = useNavigate();

//   const totalCartItems = cart.reduce((s, item) => s + (item.quantity || 0), 0);
//   const totalWishlistItems = wishlist.length;

//   const handleLogout = () => {
//     logout();
//     setProfileDropdownOpen(false);
//     navigate("/");
//   };

//   return (
//     <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
//       <div className="bg-primary/40 py-2">
//         <div className="container flex justify-between items-center">
//           <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
//             <img src={Logo} alt="Logo" className="w-10" />
//             Shopsy
//           </Link>

//           <div className="flex justify-between items-center gap-4">
//             {/* Search Input */}
//             <div className="relative hidden sm:block">
//               <input
//                 type="text"
//                 placeholder="search"
//                 className="w-[200px] sm:w-[200px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
//               />
//               <IoMdSearch className="text-gray-500 absolute top-1/2 -translate-y-1/2 right-3" />
//             </div>

//             <div className="relative flex items-center gap-4">
//               {/* Cart */}
//               <Link
//                 to="/cart"
//                 className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
//               >
//                 <span className="hidden sm:block">Order</span>
//                 <div className="relative">
//                   <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
//                   {totalCartItems > 0 && (
//                     <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                       {totalCartItems}
//                     </span>
//                   )}
//                 </div>
//               </Link>

//               {/* Wishlist */}
//               <Link
//                 to="/wishlist"
//                 className="bg-pink-500 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
//               >
//                 <span className="hidden sm:block">Wishlist</span>
//                 <div className="relative">
//                   <FaHeart className="text-xl text-white drop-shadow-sm cursor-pointer" />
//                   {totalWishlistItems > 0 && (
//                     <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                       {totalWishlistItems}
//                     </span>
//                   )}
//                 </div>
//               </Link>

//               {/* Admin Dropdown */}
//               <div className="relative">
//                 <button
//                   onClick={() => setAdminDropdownOpen(!adminDropdownOpen)}
//                   className="bg-gray-800 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2"
//                 >
//                   <FaUserShield className="text-xl" />
//                   <span className="hidden sm:block">Admin</span>
//                   <FaCaretDown className="ml-1 text-sm" />
//                 </button>

//                 {adminDropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md shadow-lg transition-all duration-200">
//                     <ul>
//                       {/* Optionally hide login/register when already logged in */}
//                       {!isLogged && (
//                         <>
//                           <li>
//                             <Link
//                               to="/admin/register"
//                               className="block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
//                               onClick={() => setAdminDropdownOpen(false)}
//                             >
//                               Register
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="/admin/login"
//                               className="block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
//                               onClick={() => setAdminDropdownOpen(false)}
//                             >
//                               Login
//                             </Link>
//                           </li>
//                         </>
//                       )}
//                       {isLogged && (
//                         <li>
//                           <button
//                             onClick={() => {
//                               logout();
//                               setAdminDropdownOpen(false);
//                               navigate("/");
//                             }}
//                             className="w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
//                           >
//                             Logout
//                           </button>
//                         </li>
//                       )}
//                     </ul>
//                   </div>
//                 )}
//               </div>

//               <DarkMode />

//               {/* Profile Dropdown */}
//               <div className="relative">
//                 <button
//                   onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
//                   className="bg-blue-600 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
//                 >
//                   <span className="hidden sm:block">{isLogged ? "Profile" : "Account"}</span>
//                   <FaUser className="text-xl text-white drop-shadow-sm cursor-pointer" />
//                 </button>

//                 {profileDropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md shadow-lg transition-all duration-200">
//                     <ul>
//                       {isLogged ? (
//                         <>
//                           <li>
//                             <Link
//                               to="/profile"
//                               className="block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
//                               onClick={() => setProfileDropdownOpen(false)}
//                             >
//                               Profile
//                             </Link>
//                           </li>
//                           <li>
//                             <button
//                               onClick={handleLogout}
//                               className="w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
//                             >
//                               Logout
//                             </button>
//                           </li>
//                         </>
//                       ) : (
//                         <>
//                           <li>
//                             <Link
//                               to="/admin/register"
//                               className="block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
//                               onClick={() => setProfileDropdownOpen(false)}
//                             >
//                               Register
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="/admin/login"
//                               className="block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
//                               onClick={() => setProfileDropdownOpen(false)}
//                             >
//                               Login
//                             </Link>
//                           </li>
//                         </>
//                       )}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



















// File: src/components/Navbar/Navbar.jsx
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import {
  FaShoppingCart,
  FaHeart,
  FaCaretDown,
  FaUserShield,
  FaUser
} from "react-icons/fa";
import DarkMode from "./DarkMode";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../WishlistContext";
import { AuthContext } from "../../AuthContext";

const Navbar = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const { isLogged, logout } = useContext(AuthContext); // ✅ Auth context
  const [adminDropdownOpen, setAdminDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const totalCartItems = cart.reduce((s, item) => s + (item.quantity || 0), 0);
  const totalWishlistItems = wishlist.length;

  const handleLogout = () => {
    logout();
    alert("Logged out successfully!"); // ✅ ALERT ADDED HERE
    setProfileDropdownOpen(false);
    navigate("/");
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
            <img src={Logo} alt="Logo" className="w-10" />
            Shopsy
          </Link>

          <div className="flex justify-between items-center gap-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            <div className="relative flex items-center gap-4">
              <Link
                to="/cart"
                className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
              >
                <span className="hidden sm:block">Order</span>
                <div className="relative">
                  <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
                  {totalCartItems > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                      {totalCartItems}
                    </span>
                  )}
                </div>
              </Link>

              <Link
                to="/wishlist"
                className="bg-pink-500 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
              >
                <span className="hidden sm:block">Wishlist</span>
                <div className="relative">
                  <FaHeart className="text-xl text-white drop-shadow-sm cursor-pointer" />
                  {totalWishlistItems > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                      {totalWishlistItems}
                    </span>
                  )}
                </div>
              </Link>

              <div className="relative">
                <button
                  onClick={() => setAdminDropdownOpen(!adminDropdownOpen)}
                  className="bg-gray-800 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2"
                >
                  <FaUserShield className="text-xl" />
                  <span className="hidden sm:block">Admin</span>
                  <FaCaretDown className="ml-1 text-sm" />
                </button>

                {adminDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md shadow-lg transition-all duration-200">
                    <ul>
                      {!isLogged && (
                        <>
                          <li>
                            <Link
                              to="/admin/register"
                              className="block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
                              onClick={() => setAdminDropdownOpen(false)}
                            >
                              Register
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/admin/login"
                              className="block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
                              onClick={() => setAdminDropdownOpen(false)}
                            >
                              Login
                            </Link>
                          </li>
                        </>
                      )}
                      {isLogged && (
                        <li>
                          <button
                            onClick={() => {
                              logout();
                              alert("Logged out successfully!"); // ✅ ALERT HERE TOO (ADMIN LOGOUT)
                              setAdminDropdownOpen(false);
                              navigate("/");
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
                          >
                            Logout
                          </button>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>

              <DarkMode />

              <div className="relative">
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="bg-blue-600 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
                >
                  <span className="hidden sm:block">{isLogged ? "Profile" : "Account"}</span>
                  <FaUser className="text-xl text-white drop-shadow-sm cursor-pointer" />
                </button>

                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md shadow-lg transition-all duration-200">
                    <ul>
                      {isLogged ? (
                        <>
                          <li>
                            <Link
                              to="/profile"
                              className="block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
                              onClick={() => setProfileDropdownOpen(false)}
                            >
                              Profile
                            </Link>
                          </li>
                          <li>
                            <button
                              onClick={handleLogout}
                              className="w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
                            >
                              Logout
                            </button>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link
                              to="/admin/register"
                              className="block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
                              onClick={() => setProfileDropdownOpen(false)}
                            >
                              Register
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/admin/login"
                              className="block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
                              onClick={() => setProfileDropdownOpen(false)}
                            >
                              Login
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
