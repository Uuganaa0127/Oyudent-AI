// pages/products.js

import { useState } from "react";
import { products } from "@/data/productsData";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const categories = ["All", "Gaming Chairs", "Office Chairs", "Recliners"];
const priceRanges = [
  { label: "Under $100", min: 0, max: 100 },
  { label: "$100 to $200", min: 100, max: 200 },
  { label: "$200 to $300", min: 200, max: 300 },
  { label: "Over $300", min: 300, max: Infinity },
];
const ratings = [4, 3, 2, 1];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);

  const filterProducts = () => {
    return products.filter((product) => {
      // Filter by category
      if (selectedCategory !== "All" && product.category !== selectedCategory) return false;

      // Filter by price range
      if (selectedPriceRange) {
        const { min, max } = selectedPriceRange;
        const price = parseFloat(product.price.replace("$", ""));
        if (price < min || price > max) return false;
      }

      // Filter by rating
      if (selectedRating && Math.floor(product.rating) < selectedRating) return false;

      return true;
    });
  };

  const filteredProducts = filterProducts();

  return (
    <div className="container mx-auto px-4 py-8 flex">
      {/* Filters Section */}
      <aside className="w-1/4 pr-6">
        <h2 className="text-xl font-bold mb-4">Filters</h2>

        {/* Category Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Category</h3>
          <ul>
            {categories.map((category) => (
              <li key={category} className="mb-2">
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`text-left ${
                    selectedCategory === category ? "font-bold text-blue-600" : "text-gray-700"
                  } hover:text-blue-600`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Range Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Price Range</h3>
          <ul>
            {priceRanges.map((range) => (
              <li key={range.label} className="mb-2">
                <button
                  onClick={() => setSelectedPriceRange(range)}
                  className={`text-left ${
                    selectedPriceRange === range ? "font-bold text-blue-600" : "text-gray-700"
                  } hover:text-blue-600`}
                >
                  {range.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Rating Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Customer Rating</h3>
          <ul>
            {ratings.map((rating) => (
              <li key={rating} className="mb-2">
                <button
                  onClick={() => setSelectedRating(rating)}
                  className={`flex items-center ${
                    selectedRating === rating ? "font-bold text-blue-600" : "text-gray-700"
                  } hover:text-blue-600`}
                >
                  {Array(5)
                    .fill()
                    .map((_, index) =>
                      index < rating ? (
                        <AiFillStar key={index} className="text-yellow-500" />
                      ) : (
                        <AiOutlineStar key={index} className="text-gray-400" />
                      )
                    )}
                  & Up
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Clear Filters Button */}
        <button
          onClick={() => {
            setSelectedCategory("All");
            setSelectedPriceRange(null);
            setSelectedRating(null);
          }}
          className="w-full bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400 transition"
        >
          Clear Filters
        </button>
      </aside>

      {/* Products Grid */}
      <div className="w-3/4">
        <h1 className="text-3xl font-bold mb-6">Products</h1>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white border rounded-md p-4 shadow hover:shadow-lg transition">
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
                <h2 className="text-lg font-semibold mb-2 line-clamp-2">{product.title}</h2>
                <p className="text-gray-700 mb-2">{product.price}</p>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500 mr-2">
                    {"★".repeat(Math.floor(product.rating))}
                    {"☆".repeat(5 - Math.floor(product.rating))}
                  </span>
                  <span className="text-gray-500 text-sm">{product.rating}</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
}
