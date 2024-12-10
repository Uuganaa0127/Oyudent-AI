// components/TopBar.js

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "@/context/CartContext";

export default function TopBar() {
  const { cart } = useCart();
  const [showCart, setShowCart] = useState(false);
  const cartRef = useRef();

  // Close the popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setShowCart(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-blue-600 text-white py-3 px-6 flex justify-between items-center relative">
      <h2 className="text-lg font-bold">
        <Link href="/">Medical Store</Link>
      </h2>
      <div className="flex items-center space-x-6">
        <Link href="/products" className="hover:underline">
         Products
        </Link>
        <Link href="/blog" className="hover:underline">
          Blog
        </Link>
        <div className="relative" ref={cartRef}>
          <button onClick={() => setShowCart(!showCart)} className="relative">
            <AiOutlineShoppingCart size={28} className="cursor-pointer" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-2">
                {cart.length}
              </span>
            )}
          </button>

          {/* Mini Cart Popup */}
          {showCart && (
            <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-4">Cart Summary</h3>
                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center">Your cart is empty.</p>
                ) : (
                  <div className="max-h-60 overflow-y-auto">
                    {cart.map((item, index) => (
                      <div key={index} className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-12 h-12 object-cover rounded mr-3"
                          />
                          <div>
                            <p className="text-sm font-medium line-clamp-2">{item.title}</p>
                            <p className="text-gray-600 text-sm">{item.price}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-4">
                  <Link
                    href="/cart"
                    className="block text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    View Cart
                  </Link>
                  <button className="w-full mt-2 text-center bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">
          Login
        </button>
      </div>
    </div>
  );
}
