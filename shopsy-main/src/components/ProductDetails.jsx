










// src/components/ProductDetails/ProductDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../WishlistContext"; // ✅ Import Wishlist Context

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist(); // ✅ Add Wishlist function

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const [addingWishlist, setAddingWishlist] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://shopsy-jyse.onrender.com/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = async () => {
    if (!product) return;
    try {
      setAdding(true);
      await addToCart(product._id, 1);
      setAdding(false);
    } catch (err) {
      setAdding(false);
      console.error("Failed to add to cart", err);
    }
  };

  const handleAddToWishlist = async () => {
    if (!product) return;
    try {
      setAddingWishlist(true);
      await addToWishlist(product._id);
      setAddingWishlist(false);
    } catch (err) {
      setAddingWishlist(false);
      console.error("Failed to add to wishlist", err);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary border-gray-200"></div>
      </div>
    );

  if (!product)
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-500">
        Product not found
      </div>
    );

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 min-h-screen py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={product.image || "https://via.placeholder.com/400"}
            alt={product.title}
            className="rounded-xl shadow-xl w-full max-w-md object-cover border border-gray-200 dark:border-gray-700"
          />
        </div>

        {/* Content Section */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <FaStar className="text-yellow-400" />
            <span className="text-gray-600 dark:text-gray-300">
              {product.rating || "4.5"} / 5
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {product.description || "No description available."}
          </p>

          {/* Price */}
          <h2 className="text-3xl font-bold text-primary mb-3">₹ {product.price}</h2>

          {product.discount && (
            <p className="text-green-600 dark:text-green-400 font-semibold mb-4">
              🎉 {product.discount}% Discount Available!
            </p>
          )}

          {/* Buttons */}
          <div className="flex gap-4 mt-6 flex-wrap">
            <button
              onClick={handleAddToCart}
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition"
              disabled={adding}
            >
              {adding ? "Adding..." : "Add to Cart"}
            </button>

            <button
              onClick={handleAddToWishlist}
              className="border border-pink-500 text-pink-500 px-6 py-2 rounded-md hover:bg-pink-500 hover:text-white transition"
              disabled={addingWishlist}
            >
              {addingWishlist ? "Adding..." : "Add to Wishlist"}
            </button>

            <button className="border border-primary text-primary px-6 py-2 rounded-md hover:bg-primary hover:text-white transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
