// // // import React, { useEffect } from 'react';
// // // import {
// // //   Routes,
// // //   Route,
// // //   useLocation
// // // } from 'react-router-dom';

// // // import './css/style.css';
// // // // import 'bootstrap/dist/css/bootstrap.min.css';


// // // import './charts/ChartjsConfig';

// // // // Import pages
// // // import Dashboard from './pages/Dashboard';
// // // import CreateForm from './components/CreateGrocery';

// // // function App() {

// // //   const location = useLocation();

// // //   useEffect(() => {
// // //     document.querySelector('html').style.scrollBehavior = 'auto'
// // //     window.scroll({ top: 0 })
// // //     document.querySelector('html').style.scrollBehavior = ''
// // //   }, [location.pathname]); // triggered on route change

// // //   return (
// // //     <>
// // //       <Routes>
// // //         <Route exact path="/" element={<Dashboard />} />
// // //        <Route path="/createForm" element={<CreateForm />} />
// // //       </Routes>
// // //     </>
// // //   );
// // // }

// // // export default App;

// // // import React, { useEffect } from 'react';
// // // import {
// // //   Routes,
// // //   Route,
// // //   useLocation
// // // } from 'react-router-dom';

// // // import './css/style.css';
// // // import './charts/ChartjsConfig';

// // // // Import pages
// // // import Dashboard from './pages/Dashboard';
// // // import CreateForm from './components/CreateGrocery';

// // // function App() {
// // //   const location = useLocation();

// // //   useEffect(() => {
// // //     document.querySelector('html').style.scrollBehavior = 'auto';
// // //     window.scroll({ top: 0 });
// // //     document.querySelector('html').style.scrollBehavior = '';
// // //   }, [location.pathname]); // triggered on route change

// // //   return (
// // //     <>
// // //       <Routes>
// // //         {/* Parent route */}
// // //         <Route path="/" element={<Dashboard />}>
// // //           {/* Child route */}
// // //           <Route path="createForm" element={<CreateForm />} />
// // //         </Route>
// // //       </Routes>
// // //     </>
// // //   );
// // // }

// // // export default App;














// // import React, { useEffect } from 'react';
// // import { Routes, Route, useLocation } from 'react-router-dom';

// // import './css/style.css';
// // import './charts/ChartjsConfig';

// // import Dashboard from './pages/Dashboard';
// // import CreateForm from './components/CreateGrocery';
// // import ProductForm from './components/CreateGrocery';

// // function App() {
// //   const location = useLocation();

// //   useEffect(() => {
// //     document.querySelector('html').style.scrollBehavior = 'auto';
// //     window.scroll({ top: 0 });
// //     document.querySelector('html').style.scrollBehavior = '';
// //   }, [location.pathname]);

// //   const handleCreate = (newProduct) => {
// //     console.log('Created product:', newProduct);
// //   };

// //   return (
// //     <Routes>
// //       <Route path="/" element={<Dashboard />}>
// //         <Route path="createForm" element={<CreateForm />} />
// //         <Route path="createProduct" element={<ProductForm onCreate={handleCreate} />} />
// //       </Route>
// //     </Routes>
// //   );
// // }

// // export default App;





















// // import React, { useEffect } from 'react';
// // import { Routes, Route, useLocation } from 'react-router-dom';

// // import './css/style.css';
// // import './charts/ChartjsConfig';

// // import Dashboard from './pages/Dashboard';
// // import ProductForm from './components/CreateGrocery'; // <-- only keep this

// // function App() {
// //   const location = useLocation();

// //   useEffect(() => {
// //     document.querySelector('html').style.scrollBehavior = 'auto';
// //     window.scroll({ top: 0 });
// //     document.querySelector('html').style.scrollBehavior = '';
// //   }, [location.pathname]);

// //   const handleCreate = (newProduct) => {
// //     console.log('Created product:', newProduct);
// //   };

// //   return (
// //     <Routes>
// //       <Route path="/" element={<Dashboard />}>
// //         {/* Single component will handle both create + view */}
// //           <Route path="/createForm" element={<ProductForm onCreate={handleCreate} />} />
// //         <Route path="products" element={<ProductForm onCreate={handleCreate} />} />
// //       </Route>
// //     </Routes>
// //   );
// // }

// // export default App;








// // import React, { useEffect } from 'react';
// // import { Routes, Route, useLocation } from 'react-router-dom';

// // import './css/style.css';
// // import './charts/ChartjsConfig';

// // import Dashboard from './pages/Dashboard';
// // import ProductForm from './components/CreateGrocery';
// // import ViewProducts from './components/ViewProducts'; // <-- new component

// // function App() {
// //   const location = useLocation();

// //   useEffect(() => {
// //     document.querySelector('html').style.scrollBehavior = 'auto';
// //     window.scroll({ top: 0 });
// //     document.querySelector('html').style.scrollBehavior = '';
// //   }, [location.pathname]);

// //   return (
// //     <Routes>
// //       <Route path="/" element={<Dashboard />}>
// //         <Route path="/createForm" element={<ProductForm />} />
// //         <Route path="/products" element={<ViewProducts />} /> {/* new route */}
// //       </Route>
// //     </Routes>
// //   );
// // }

// // export default App;

















// import React, { useEffect } from 'react';
// import { Routes, Route, useLocation, BrowserRouter } from 'react-router-dom';

// import Dashboard from './pages/Dashboard';
// import ProductForm from './components/CreateGrocery';
// import ViewProducts from './components/ViewProducts';
// import CreateCategory from './components/CreateCategory'; // ✅ import

// function App() {
//   const location = useLocation();

//   useEffect(() => {
//     document.querySelector('html').style.scrollBehavior = 'auto';
//     window.scroll({ top: 0 });
//     document.querySelector('html').style.scrollBehavior = '';
//   }, [location.pathname]);

//   return (

//     <Routes>
//       <Route path="/" element={<Dashboard />} />
//       <Route path="/createForm" element={<ProductForm />} />
//       <Route path="/products" element={<ViewProducts />} />
//       <Route path="/createCategory" element={<CreateCategory />} /> {/* ✅ new route */}
//     </Routes>
   
//   );
// }

// export default App;











// import React, { useEffect } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";

// import Layout from "./Layout"; // ✅ new layout wrapper
// import Dashboard from "./pages/Dashboard";
// import ProductForm from "./components/CreateGrocery";
// import ViewProducts from "./components/ViewProducts";
// import CreateCategory from "./components/CreateCategory";
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/style.css';

// function App() {
//   const location = useLocation();

//   useEffect(() => {
//     document.querySelector("html").style.scrollBehavior = "auto";
//     window.scroll({ top: 0 });
//     document.querySelector("html").style.scrollBehavior = "";
//   }, [location.pathname]);

//   return (
//     <Routes>
//       {/* Wrap all routes inside Layout */}
//       <Route element={<Layout />}>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/createForm" element={<ProductForm />} />
//         <Route path="/products" element={<ViewProducts />} />
//         <Route path="/createCategory" element={<CreateCategory />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;












import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Layout from "./Layout"; // ✅ new layout wrapper
import Dashboard from "./pages/Dashboard";
import ProductForm from "./components/CreateGrocery";
import ViewProducts from "./components/ViewProducts";
import CreateCategory from "./components/CreateCategory";
import CategoriesList from "./components/CategoriesList"; // ✅ new page for category list
import OrderList from "./components/OrderList"; // ✅ Import

// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);

  return (
    <Routes>
      {/* Wrap all routes inside Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/createForm" element={<ProductForm />} />
        <Route path="/products" element={<ViewProducts />} />
        <Route path="/createCategory" element={<CreateCategory />} />
        <Route path="/categories" element={<CategoriesList />} /> {/* ✅ categories list page */}
        <Route path="/orders" element={<OrderList />} /> ✅ Add inside Layout
      </Route>
    </Routes>
  );
}

export default App;
