// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const OrderList = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const res = await axios.get("http://localhost:3001/api/orders");
//       setOrders(res.data);
//     } catch (err) {
//       console.error("Failed to fetch orders:", err);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">All Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         <table className="table-auto w-full border">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2">Order ID</th>
//               <th className="p-2">User</th>
//               <th className="p-2">Total</th>
//               <th className="p-2">Status</th>
//               <th className="p-2">Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order._id} className="border">
//                 <td className="p-2">{order._id}</td>
//                 <td className="p-2">{order.user?.name}</td>
//                 <td className="p-2">₹{order.total}</td>
//                 <td className="p-2">{order.status}</td>
//                 <td className="p-2">{new Date(order.createdAt).toLocaleString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default OrderList;










// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const OrderList = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const res = await axios.get("http://localhost:3001/api/orders");
//       setOrders(res.data);
//     } catch (err) {
//       console.error("Failed to fetch orders:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 max-w-7xl mx-auto bg-white rounded-2xl shadow">
//       <h2 className="text-2xl font-semibold mb-4">📦 All Orders</h2>

//       {loading ? (
//         <p>Loading...</p>
//       ) : orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border p-3 text-left">Order ID</th>
//                 <th className="border p-3 text-left">Customer</th>
//                 <th className="border p-3 text-left">Total Amount</th>
//                 <th className="border p-3 text-left">Payment Status</th>
//                 <th className="border p-3 text-left">Placed On</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order) => (
//                 <tr key={order._id} className="hover:bg-gray-50">
//                   <td className="border p-3">{order._id}</td>
//                   <td className="border p-3">{order.user?.name || "—"}</td>
//                   <td className="border p-3 font-medium">₹{order.total}</td>
//                   <td
//                     className={`border p-3 font-medium ${
//                       order.status === "Completed"
//                         ? "text-green-600"
//                         : order.status === "Pending"
//                         ? "text-yellow-600"
//                         : "text-red-600"
//                     }`}
//                   >
//                     {order.status}
//                   </td>
//                   <td className="border p-3">
//                     {new Date(order.createdAt).toLocaleString()}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderList;
//oggggggggggggggggggggggggggggggggggggggggg














import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const statusOptions = ["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"];

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/orders");
      setOrders(res.data);
    } catch (err) {
      console.error("Failed to fetch orders:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await axios.patch(`http://localhost:3001/api/orders/${orderId}/status`, { status: newStatus });
      setOrders((prev) =>
        prev.map((order) =>
          order._id === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (err) {
      console.error("Failed to update status", err);
      alert("Failed to update status. Try again.");
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">📦 All Orders</h2>

      {loading ? (
        <p>Loading...</p>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-3 text-left">Order ID</th>
                <th className="border p-3 text-left">Customer</th>
                <th className="border p-3 text-left">Total Amount</th>
                <th className="border p-3 text-left">Payment Status</th>
                <th className="border p-3 text-left">Placed On</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-50">
                  <td className="border p-3">{order._id}</td>
                  <td className="border p-3">{order.user?.name || "—"}</td>
                  <td className="border p-3 font-medium">₹{order.total}</td>
                  <td className="border p-3">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order._id, e.target.value)}
                      className="border px-2 py-1 rounded"
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="border p-3">
                    {new Date(order.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderList;
