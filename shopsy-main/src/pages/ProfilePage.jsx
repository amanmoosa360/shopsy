// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { AuthContext } from "../AuthContext";

// const ProfilePage = () => {
//   const { user, sessionId, logout } = useContext(AuthContext);
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       if (!sessionId) return;
//       try {
//         const { data } = await axios.get(`http://localhost:3001/api/orders/user/${sessionId}`);
//         setOrders(data);
//       } catch (err) {
//         console.error("Failed to fetch orders:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [sessionId]);

//   if (!user) {
//     return <p className="p-4">Please login to view your profile.</p>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">My Profile</h1>

//       <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-6">
//         <h2 className="text-xl font-semibold mb-2">User Details</h2>
//         <p><strong>Name:</strong> {user.name}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//       </div>

//       <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
//         <h2 className="text-xl font-semibold mb-2">My Orders</h2>
//         {loading ? (
//           <p>Loading orders...</p>
//         ) : orders.length === 0 ? (
//           <p>No orders found.</p>
//         ) : (
//           <ul>
//             {orders.map((order) => (
//               <li key={order._id} className="border-b border-gray-200 py-2">
//                 <p><strong>Order ID:</strong> {order._id}</p>
//                 <p><strong>Status:</strong> {order.status}</p>
//                 <p><strong>Total:</strong> ${order.total}</p>
//                 <div className="mt-1">
//                   <strong>Items:</strong>
//                   <ul className="ml-4">
//                     {order.items.map((item, idx) => (
//                       <li key={idx}>
//                         {item.title} x {item.quantity} (${item.price})
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <button
//         onClick={logout}
//         className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default ProfilePage;














// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { AuthContext } from "../AuthContext";

// const ProfilePage = () => {
//   const { isLogged, user, sessionId, logout } = useContext(AuthContext);
//   console.log(isLogged);
//   console.log(user);
  
  
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       if (!isLogged || !sessionId) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const { data } = await axios.get(
//           `http://localhost:3001/api/orders/user/${sessionId}`
//         );
//         setOrders(data);
//       } catch (err) {
//         console.error("Failed to fetch orders:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [isLogged, sessionId]);

//   if (!isLogged || !user) {
//     return <p className="p-4">Please login to view your profile.</p>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">My Profile</h1>

//       <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-6">
//         <h2 className="text-xl font-semibold mb-2">User Details</h2>
//         <p><strong>Name:</strong> {user.name}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//       </div>

//       <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
//         <h2 className="text-xl font-semibold mb-2">My Orders</h2>
//         {loading ? (
//           <p>Loading orders...</p>
//         ) : orders.length === 0 ? (
//           <p>No orders found.</p>
//         ) : (
//           <ul>
//             {orders.map((order) => (
//               <li key={order._id} className="border-b border-gray-200 py-2">
//                 <p><strong>Order ID:</strong> {order._id}</p>
//                 <p><strong>Status:</strong> {order.status}</p>
//                 <p><strong>Total:</strong> ${order.total}</p>
//                 <div className="mt-1">
//                   <strong>Items:</strong>
//                   <ul className="ml-4">
//                     {order.items.map((item, idx) => (
//                       <li key={idx}>
//                         {item.title} x {item.quantity} (${item.price})
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <button
//         onClick={logout}
//         className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default ProfilePage;




















import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";

const ProfilePage = () => {
  const { isLogged, user, sessionId, logout } = useContext(AuthContext);
  console.log(sessionId);
  
  
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      if (!isLogged || !sessionId) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await axios.get(
          `https://shopsy-jyse.onrender.com/api/orders/user/${sessionId}`
        );
console.log(data);

        // API returns an array of orders
        setOrders(data);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
        setError(
          err.response?.data?.message || "Failed to fetch your orders."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [isLogged, sessionId]);

  if (!isLogged || !user) {
    return <p className="p-4">Please login to view your profile.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>

      {/* User Details */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">User Details</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      {/* Orders */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">My Orders</h2>
        {loading ? (
          <p>Loading orders...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <ul>
            {orders.map((order) => (
              <li key={order._id} className="border-b border-gray-200 py-2">
                <p><strong>Order ID:</strong> {order._id}</p>
                <p><strong>Status:</strong> {order.status}</p>
                <p><strong>Total:</strong> ${order.total}</p>
                <div className="mt-1">
                  <strong>Items:</strong>
                  <ul className="ml-4">
                    {order.items.map((item, idx) => (
                      <li key={idx}>
                        {item.title} x {item.quantity} (${item.price})
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Logout Button */}
      <button
        onClick={logout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
