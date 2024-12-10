// components/FilterBar.js

export default function FilterBar({ filters, setFilters }) {
    return (
      <div className="w-64 p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
  
        {['Category', 'Brand', 'Price', 'Rating', 'Availability'].map((filterType) => (
          <div className="mb-4" key={filterType}>
            <label className="block font-semibold mb-2">{filterType}</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              placeholder={`Enter ${filterType}`}
              onChange={(e) => setFilters({ ...filters, [filterType.toLowerCase()]: e.target.value })}
            />
          </div>
        ))}
      </div>
    );
  }
  