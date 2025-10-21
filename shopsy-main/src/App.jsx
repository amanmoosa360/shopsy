// import React from "react";
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import Products from "./components/Products/Products";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import TopProducts from "./components/TopProducts/TopProducts";
// import Banner from "./components/Banner/Banner";
// import Subscribe from "./components/Subscribe/Subscribe";
// import Testimonials from "./components/Testimonials/Testimonials";
// import Footer from "./components/Footer/Footer";
// import Popup from "./components/Popup/Popup";

// const App = () => {
//   const [orderPopup, setOrderPopup] = React.useState(false);

//   const handleOrderPopup = () => {
//     setOrderPopup(!orderPopup);
//   };
//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 800,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
//       <Navbar handleOrderPopup={handleOrderPopup} />
//       <Hero handleOrderPopup={handleOrderPopup} />
//       <Products />
//       <TopProducts handleOrderPopup={handleOrderPopup} />
//       <Banner />
//       <Subscribe />
//       <Products />
//       <Testimonials />
//       <Footer />
//       <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
//     </div>
//   );
// };

// export default App;














// import React from "react";
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import Products from "./components/Products/Products";

// import AOS from "aos";
// import "aos/dist/aos.css";
// import TopProducts from "./components/TopProducts/TopProducts";
// import Banner from "./components/Banner/Banner";
// import Subscribe from "./components/Subscribe/Subscribe";
// import Testimonials from "./components/Testimonials/Testimonials";
// import Footer from "./components/Footer/Footer";
// import Popup from "./components/Popup/Popup";
// import Categories from "./Categories";

// const App = () => {
//   const [orderPopup, setOrderPopup] = React.useState(false);

//   const handleOrderPopup = () => {
//     setOrderPopup(!orderPopup);
//   };

//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 800,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
//       <Navbar handleOrderPopup={handleOrderPopup} />
//       <Hero handleOrderPopup={handleOrderPopup} />

//       {/* ✅ Show Categories section like Products */}
//       <Categories />

//       {/* ✅ Products and other sections */}
//       <Products />
//       <TopProducts handleOrderPopup={handleOrderPopup} />
//       <Banner />
//       <Subscribe />
//       <Testimonials />
//       <Footer />
//       <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
//     </div>
//   );
// };

// export default App;














// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

// // Components
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import Products from "./components/Products/Products";
// import TopProducts from "./components/TopProducts/TopProducts";
// import Banner from "./components/Banner/Banner";
// import Subscribe from "./components/Subscribe/Subscribe";
// import Testimonials from "./components/Testimonials/Testimonials";
// import Footer from "./components/Footer/Footer";
// import Popup from "./components/Popup/Popup";
// import Categories from "./Categories";
// import CategoryProducts from "./components/CategoryProducts";


// const App = () => {
//   const [orderPopup, setOrderPopup] = React.useState(false);

//   const handleOrderPopup = () => {
//     setOrderPopup(!orderPopup);
//   };

//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 800,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <Router>
//       <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
//         <Navbar handleOrderPopup={handleOrderPopup} />
//         <Routes>
//           {/* Home Page */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <Hero handleOrderPopup={handleOrderPopup} />
//                 <Categories />
//                 <Products />
//                 <TopProducts handleOrderPopup={handleOrderPopup} />
//                 <Banner />
//                 <Subscribe />
//                 <Testimonials />
//                 <Footer />
//                 <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
//               </>
//             }
//           />

//           {/* Category Products Page */}
//           <Route path="/category/:id" element={<CategoryProducts />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


















// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

// // Components
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import Products from "./components/Products/Products";
// import TopProducts from "./components/TopProducts/TopProducts";
// import Banner from "./components/Banner/Banner";
// import Subscribe from "./components/Subscribe/Subscribe";
// import Testimonials from "./components/Testimonials/Testimonials";
// import Footer from "./components/Footer/Footer";
// import Popup from "./components/Popup/Popup";
// import Categories from "./Categories";
// import CategoryProducts from "./components/CategoryProducts";
// import ProductDetails from "./components/ProductDetails";


// const App = () => {
//   const [orderPopup, setOrderPopup] = React.useState(false);

//   const handleOrderPopup = () => {
//     setOrderPopup(!orderPopup);
//   };

//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 800,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <Router>
//       <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
//         <Navbar handleOrderPopup={handleOrderPopup} />
//         <Routes>
//           {/* Home Page */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <Hero handleOrderPopup={handleOrderPopup} />
//                 <Categories />
//                 <Products />
//                 <TopProducts handleOrderPopup={handleOrderPopup} />
//                 <Banner />
//                 <Subscribe />
//                 <Testimonials />
//                 <Footer />
//                 <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
//               </>
//             }
//           />

//           {/* ✅ Category Products Page */}
//           <Route path="/category/:id" element={<CategoryProducts />} />

//           {/* ✅ Product Detail Page */}
//           <Route path="/product/:id" element={<ProductDetails />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;














// // src/App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import { CartProvider } from "./CartContext";

// // Components
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import Products from "./components/Products/Products";
// import TopProducts from "./components/TopProducts/TopProducts";
// import Banner from "./components/Banner/Banner";
// import Subscribe from "./components/Subscribe/Subscribe";
// import Testimonials from "./components/Testimonials/Testimonials";
// import Footer from "./components/Footer/Footer";
// import Popup from "./components/Popup/Popup";
// import Categories from "./Categories";
// import CategoryProducts from "./components/CategoryProducts";
// import ProductDetails from "./components/ProductDetails";

// const App = () => {
//   const [orderPopup, setOrderPopup] = React.useState(false);

//   const handleOrderPopup = () => {
//     setOrderPopup((p) => !p);
//   };

//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 800,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <CartProvider>
//       <Router>
//         <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
//           <Navbar handleOrderPopup={handleOrderPopup} />
//           {/* Make popup globally available */}
//           <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />

//           <Routes>
//             {/* Home Page */}
//             <Route
//               path="/"
//               element={
//                 <>
//                   <Hero handleOrderPopup={handleOrderPopup} />
//                   <Categories />
//                   <Products />
//                   <TopProducts handleOrderPopup={handleOrderPopup} />
//                   <Banner />
//                   <Subscribe />
//                   <Testimonials />
//                   <Footer />
//                 </>
//               }
//             />

//             {/* Category Products Page */}
//             <Route path="/category/:id" element={<CategoryProducts />} />

//             {/* Product Detail Page */}
//             <Route path="/product/:id" element={<ProductDetails />} />
//           </Routes>
//         </div>
//       </Router>
//     </CartProvider>
//   );
// };

// export default App;
//ogggg

















// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import { CartProvider } from "./CartContext";

// // Components
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import Products from "./components/Products/Products";
// import TopProducts from "./components/TopProducts/TopProducts";
// import Banner from "./components/Banner/Banner";
// import Subscribe from "./components/Subscribe/Subscribe";
// import Testimonials from "./components/Testimonials/Testimonials";
// import Footer from "./components/Footer/Footer";
// import Categories from "./Categories";
// import CategoryProducts from "./components/CategoryProducts";
// import ProductDetails from "./components/ProductDetails";

// // NEW: Cart Page
// import CartPage from "./components/CartPage/CartPage";

// const App = () => {
//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 800,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <CartProvider>
//       <Router>
//         <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
//           <Navbar />

//           <Routes>
//             {/* Home Page */}
//             <Route
//               path="/"
//               element={
//                 <>
//                   <Hero />
//                   <Categories />
//                   <Products />
//                   <TopProducts />
//                   <Banner />
//                   <Subscribe />
//                   <Testimonials />
//                   <Footer />
//                 </>
//               }
//             />

//             {/* Category Products Page */}
//             <Route path="/category/:id" element={<CategoryProducts />} />

//             {/* Product Detail Page */}
//             <Route path="/product/:id" element={<ProductDetails />} />

//             {/* Cart Page */}
//             <Route path="/cart" element={<CartPage />} />
//           </Routes>
//         </div>
//       </Router>
//     </CartProvider>
//   );
// };

// export default App;












// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import { CartProvider } from "./CartContext";
// import { WishlistProvider } from "./WishlistContext"; // ✅ Add Wishlist Provider

// // Components
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import Products from "./components/Products/Products";
// import TopProducts from "./components/TopProducts/TopProducts";
// import Banner from "./components/Banner/Banner";
// import Subscribe from "./components/Subscribe/Subscribe";
// import Testimonials from "./components/Testimonials/Testimonials";
// import Footer from "./components/Footer/Footer";
// import Categories from "./Categories";
// import CategoryProducts from "./components/CategoryProducts";
// import ProductDetails from "./components/ProductDetails";

// // NEW Pages
// import CartPage from "./components/CartPage/CartPage"; // ✅ Wishlist page
// import WishlistPage from "./components/WishlistPage/WishlistPage";

// const App = () => {
//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 800,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <CartProvider>
//       <WishlistProvider>
//         <Router>
//           <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
//             <Navbar />

//             <Routes>
//               {/* Home Page */}
//               <Route
//                 path="/"
//                 element={
//                   <>
//                     <Hero />
//                     <Categories />
//                     <Products />
//                     <TopProducts />
//                     <Banner />
//                     <Subscribe />
//                     <Testimonials />
//                     <Footer />
//                   </>
//                 }
//               />

//               {/* Category Products Page */}
//               <Route path="/category/:id" element={<CategoryProducts />} />

//               {/* Product Detail Page */}
//               <Route path="/product/:id" element={<ProductDetails />} />

//               {/* Cart Page */}
//               <Route path="/cart" element={<CartPage />} />

//               {/* Wishlist Page */}
//               <Route path="/wishlist" element={<WishlistPage />} />
//             </Routes>
//           </div>
//         </Router>
//       </WishlistProvider>
//     </CartProvider>
//   );
// };

// export default App;













// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import { CartProvider } from "./CartContext";
// import { WishlistProvider } from "./WishlistContext"; // ✅ Add Wishlist Provider

// // Components
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import Products from "./components/Products/Products";
// import TopProducts from "./components/TopProducts/TopProducts";
// import Banner from "./components/Banner/Banner";
// import Subscribe from "./components/Subscribe/Subscribe";
// import Testimonials from "./components/Testimonials/Testimonials";
// import Footer from "./components/Footer/Footer";
// import Categories from "./Categories";
// import CategoryProducts from "./components/CategoryProducts";
// import ProductDetails from "./components/ProductDetails";

// // NEW Pages
// import CartPage from "./components/CartPage/CartPage"; // ✅ Wishlist page
// import WishlistPage from "./components/WishlistPage/WishlistPage";

// const App = () => {
//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 800,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <CartProvider>
//       <WishlistProvider>
//         <Router>
//           <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
//             <Navbar />

//             <Routes>
//               {/* Home Page */}
//               <Route
//                 path="/"
//                 element={
//                   <>
//                     <Hero />
//                     <Categories />
//                     <Products />
//                     <TopProducts />
//                     <Banner />
//                     <Subscribe />
//                     <Testimonials />
//                     <Footer />
//                   </>
//                 }
//               />

//               {/* Category Products Page */}
//               <Route path="/category/:id" element={<CategoryProducts />} />

//               {/* Product Detail Page */}
//               <Route path="/product/:id" element={<ProductDetails />} />

//               {/* Cart Page */}
//               <Route path="/cart" element={<CartPage />} />

//               {/* Wishlist Page */}
//               <Route path="/wishlist" element={<WishlistPage />} />
//             </Routes>
//           </div>
//         </Router>
//       </WishlistProvider>
//     </CartProvider>
//   );
// };

// export default App;












// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import { CartProvider } from "./CartContext";
// import { WishlistProvider } from "./WishlistContext";

// // Components
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import Products from "./components/Products/Products";
// import TopProducts from "./components/TopProducts/TopProducts";
// import Banner from "./components/Banner/Banner";
// import Subscribe from "./components/Subscribe/Subscribe";
// import Testimonials from "./components/Testimonials/Testimonials";
// import Footer from "./components/Footer/Footer";
// import Categories from "./Categories";
// import CategoryProducts from "./components/CategoryProducts";
// import ProductDetails from "./components/ProductDetails";

// // Pages
// import CartPage from "./components/CartPage/CartPage";
// import WishlistPage from "./components/WishlistPage/WishlistPage";
// import AdminRegister from "./pages/AdminRegister";
// import AdminLogin from "./pages/AdminLogin";

// const App = () => {
//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 800,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <CartProvider>
//       <WishlistProvider>
//         <Router>
//           <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
//             <Navbar />

//             <Routes>
//               {/* Home Page */}
//               <Route
//                 path="/"
//                 element={
//                   <>
//                     <Hero />
//                     <Categories />
//                     <Products />
//                     <TopProducts />
//                     <Banner />
//                     <Subscribe />
//                     <Testimonials />
//                     <Footer />
//                   </>
//                 }
//               />

//               {/* Category Products Page */}
//               <Route path="/category/:id" element={<CategoryProducts />} />

//               {/* Product Detail Page */}
//               <Route path="/product/:id" element={<ProductDetails />} />

//               {/* Cart Page */}
//               <Route path="/cart" element={<CartPage />} />

//               {/* Wishlist Page */}
//               <Route path="/wishlist" element={<WishlistPage />} />

//               {/* Admin Pages */}
//               <Route path="/admin/register" element={<AdminRegister />} />
//               <Route path="/admin/login" element={<AdminLogin />} />
//             </Routes>
//           </div>
//         </Router>
//       </WishlistProvider>
//     </CartProvider>
//   );
// };

// export default App;
















// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

// // Contexts
// import { CartProvider } from "./CartContext";
// import { WishlistProvider } from "./WishlistContext";

// // Components
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import Products from "./components/Products/Products";
// import TopProducts from "./components/TopProducts/TopProducts";
// import Banner from "./components/Banner/Banner";
// import Subscribe from "./components/Subscribe/Subscribe";
// import Testimonials from "./components/Testimonials/Testimonials";
// import Footer from "./components/Footer/Footer";
// import Categories from "./Categories";
// import CategoryProducts from "./components/CategoryProducts";
// import ProductDetails from "./components/ProductDetails";

// // Pages
// import CartPage from "./components/CartPage/CartPage";
// import WishlistPage from "./components/WishlistPage/WishlistPage";
// import AdminRegister from "./pages/AdminRegister";
// import AdminLogin from "./pages/AdminLogin";
// import CheckoutPage from "./components/Checkout/CheckoutPage";
// import OrderSuccess from "./components/Checkout/OrderSuccess";


// const App = () => {
//   useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 800,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <CartProvider>
//       <WishlistProvider>
//         <Router>
//           <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
//             <Navbar />

//             <Routes>
//               {/* Home Page */}
//               <Route
//                 path="/"
//                 element={
//                   <>
//                     <Hero />
//                     <Categories />
//                     <Products />
//                     <TopProducts />
//                     <Banner />
//                     <Subscribe />
//                     <Testimonials />
//                     <Footer />
//                   </>
//                 }
//               />

//               {/* Category Products */}
//               <Route path="/category/:id" element={<CategoryProducts />} />

//               {/* Product Details */}
//               <Route path="/product/:id" element={<ProductDetails />} />

//               {/* Cart */}
//               <Route path="/cart" element={<CartPage />} />

//               {/* Wishlist */}
//               <Route path="/wishlist" element={<WishlistPage />} />

//                <Route path="/checkout" element={<CheckoutPage />} />  {/* ✅ ADD THIS */}
//   <Route path="/order-success/:orderId" element={<OrderSuccess />} /> {/* ✅ ADD THIS */}

//               {/* Admin Pages */}
//               <Route path="/admin/register" element={<AdminRegister />} />
//               <Route path="/admin/login" element={<AdminLogin />} />
//             </Routes>
//           </div>
//         </Router>
//       </WishlistProvider>
//     </CartProvider>
//   );
// };

// export default App;
//oggggggggggggggggggggggggggggg












// // src/App.jsx
// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

// // Contexts
// import { CartProvider } from "./CartContext";
// import { WishlistProvider } from "./WishlistContext";
// import { AuthProvider } from "./AuthContext"; // ✅ Added AuthProvider

// // Components
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import Products from "./components/Products/Products";
// import TopProducts from "./components/TopProducts/TopProducts";
// import Banner from "./components/Banner/Banner";
// import Subscribe from "./components/Subscribe/Subscribe";
// import Testimonials from "./components/Testimonials/Testimonials";
// import Footer from "./components/Footer/Footer";
// import Categories from "./Categories";
// import CategoryProducts from "./components/CategoryProducts";
// import ProductDetails from "./components/ProductDetails";

// // Pages
// import CartPage from "./components/CartPage/CartPage";
// import WishlistPage from "./components/WishlistPage/WishlistPage";
// import AdminRegister from "./pages/AdminRegister";
// import AdminLogin from "./pages/AdminLogin";
// import CheckoutPage from "./components/Checkout/CheckoutPage";
// import OrderSuccess from "./components/Checkout/OrderSuccess";

// const App = () => {
//   useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 800,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <AuthProvider> {/* ✅ Wrap entire app with AuthProvider */}
//       <CartProvider>
//         <WishlistProvider>
//           <Router>
//             <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
//               <Navbar />

//               <Routes>
//                 {/* Home Page */}
//                 <Route
//                   path="/"
//                   element={
//                     <>
//                       <Hero />
//                       <Categories />
//                       <Products />
//                       <TopProducts />
//                       <Banner />
//                       <Subscribe />
//                       <Testimonials />
//                       <Footer />
//                     </>
//                   }
//                 />

//                 {/* Category Products */}
//                 <Route path="/category/:id" element={<CategoryProducts />} />

//                 {/* Product Details */}
//                 <Route path="/product/:id" element={<ProductDetails />} />

//                 {/* Cart */}
//                 <Route path="/cart" element={<CartPage />} />

//                 {/* Wishlist */}
//                 <Route path="/wishlist" element={<WishlistPage />} />

//                 {/* Checkout & Order Success */}
//                 <Route path="/checkout" element={<CheckoutPage />} />
//                 <Route path="/order-success/:orderId" element={<OrderSuccess />} />

//                 {/* Admin Pages */}
//                 <Route path="/admin/register" element={<AdminRegister />} />
//                 <Route path="/admin/login" element={<AdminLogin />} />
//               </Routes>
//             </div>
//           </Router>
//         </WishlistProvider>
//       </CartProvider>
//     </AuthProvider>
//   );
// };

// export default App;













// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Contexts
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./WishlistContext";
import { AuthProvider } from "./AuthContext"; // ✅ Added AuthProvider

// Components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Categories from "./Categories";
import CategoryProducts from "./components/CategoryProducts";
import ProductDetails from "./components/ProductDetails";

// Pages
import CartPage from "./components/CartPage/CartPage";
import WishlistPage from "./components/WishlistPage/WishlistPage";
import AdminRegister from "./pages/AdminRegister";
import AdminLogin from "./pages/AdminLogin";
import CheckoutPage from "./components/Checkout/CheckoutPage";
import OrderSuccess from "./components/Checkout/OrderSuccess";
import ProfilePage from "./pages/ProfilePage"; // ✅ Import ProfilePage

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <AuthProvider> {/* ✅ Wrap entire app with AuthProvider */}
      <CartProvider>
        <WishlistProvider>
          <Router>
            <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
              <Navbar />

              <Routes>
                {/* Home Page */}
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <Categories />
                      <Products />
                      <TopProducts />
                      <Banner />
                      <Subscribe />
                      <Testimonials />
                      <Footer />
                    </>
                  }
                />

                {/* Category Products */}
                <Route path="/category/:id" element={<CategoryProducts />} />

                {/* Product Details */}
                <Route path="/product/:id" element={<ProductDetails />} />

                {/* Cart */}
                <Route path="/cart" element={<CartPage />} />

                {/* Wishlist */}
                <Route path="/wishlist" element={<WishlistPage />} />

                {/* Checkout & Order Success */}
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/order-success/:orderId" element={<OrderSuccess />} />

                {/* Profile Page */}
                <Route path="/profile" element={<ProfilePage />} /> {/* ✅ Added ProfilePage */}

                {/* Admin Pages */}
                <Route path="/admin/register" element={<AdminRegister />} />
                <Route path="/admin/login" element={<AdminLogin />} />
              </Routes>
            </div>
          </Router>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
