// components/Banner.js

import { useState, useEffect } from "react";

const Banner = () => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch images from Picsum Photos API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://picsum.photos/v2/list?page=1&limit=5"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Auto-slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [images]);

  // Function to handle dot click
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (loading) {
    return <div className="h-64 flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="h-64 flex items-center justify-center text-red-500">{error}</div>;
  }

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image.id || index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image.download_url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-4">
            <h2 className="text-white text-2xl md:text-4xl font-bold mb-4 text-center">
              {image.author || "Explore Our Medical Supplies"}
            </h2>
            <a
              href={image.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              View More
            </a>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
