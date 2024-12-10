import { useState } from 'react';

export default function FilterBar({ filters, setFilters }) {
  const [priceRange, setPriceRange] = useState(100);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, category: value });
  };

  const handleBrandChange = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, brand: value });
  };

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
    setFilters({ ...filters, price: e.target.value });
  };

  return (
    <div className="w-64 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      {/* Price Range Slider */}
      <div className="mb-6">
        <label className="block font-semibold mb-2">Price Range: ${priceRange}</label>
        <input
          type="range"
          min="0"
          max="500"
          value={priceRange}
          onChange={handlePriceChange}
          className="w-full"
        />
      </div>

      {/* Category Checkboxes */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Category</h3>
        {['Dental Tools', 'Implants', 'Orthodontics'].map((category) => (
          <div key={category} className="flex items-center mb-2">
            <input
              type="checkbox"
              value={category}
              onChange={handleCategoryChange}
              className="mr-2"
            />
            <span>{category}</span>
          </div>
        ))}
      </div>

      {/* Brand Checkboxes */}
      <div>
        <h3 className="font-semibold mb-2">Brand</h3>
        {['Brand A', 'Brand B', 'Brand C'].map((brand) => (
          <div key={brand} className="flex items-center mb-2">
            <input
              type="checkbox"
              value={brand}
              onChange={handleBrandChange}
              className="mr-2"
            />
            <span>{brand}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
