// components/FeaturedProducts.js

import { useState, useEffect, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "@/components/Card";

export default function FeaturedProducts({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const sliderRef = useRef(null);
  let isDragging = false;
  let startX, scrollLeft;

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  // Slide functions
  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 300;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 300;
    }
  };

  // Mouse drag functions
  const startDragging = (e) => {
    isDragging = true;
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const stopDragging = () => {
    isDragging = false;
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Increase multiplier for faster drag
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="mt-16 p-6 relative">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Products</h2>

      <div className="relative">
        <button
          onClick={slideLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900 z-10"
        >
          <AiOutlineLeft size={24} />
        </button>

        <div
          ref={sliderRef}
          className="flex overflow-x-auto scroll-smooth space-x-6 cursor-grab border-t border-b border-gray-300 py-4"
          style={{ scrollbarWidth: "none" }}
          onMouseDown={startDragging}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          onMouseMove={onDrag}
        >
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-72">
              <Card item={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>

        <button
          onClick={slideRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900 z-10"
        >
          <AiOutlineRight size={24} />
        </button>
      </div>
    </section>
  );
}
