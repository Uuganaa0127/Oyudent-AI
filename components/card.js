// components/Card.js
import { useCart } from "@/context/CartContext";

export default function Card({ item, buttonText = "Add to Cart", onAddToCart }) {
    const { addToCart } = useCart();
    if (!item) {
      return <div className="text-red-500">Product data is missing</div>;
    }
  
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
        <div className="h-64 w-full overflow-hidden relative">
          <img
            src={item.image}
            alt={item.title || "Product Image"}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-bold mb-4 line-clamp-1">{item.title || "No Title"}</h3>
          <button
            onClick={() => addToCart(item)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            {buttonText}
          </button>
        </div>
      </div>
    );
  }
  