// import React from "react";
// import Sidebar from "./partials/Sidebar";
// import Header from "./partials/Header";
// import { Outlet } from "react-router-dom";

// export default function Layout() {
//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <Sidebar />

//       <div className="flex-1">
//         {/* Header */}
//         <Header />

//         {/* Page content */}
//         <main className="p-4">
//           <Outlet /> {/* This renders the child route */}
//         </main>
//       </div>
//     </div>
//   );
// }














import React from "react";
import Sidebar from "./partials/Sidebar";
import Header from "./partials/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1">
        {/* Header */}
        <Header />

        {/* Page content */}
        <main className="p-4">
          <Outlet /> {/* This renders the child route */}
        </main>
      </div>
    </div>
  );
}
