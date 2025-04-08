import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [filters, setFilters] = useState({
    brand: '',
    minPrice: '',
    maxPrice: '',
    fuelType: '',
    seatingCapacity: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFilters(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(filters)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={filters.brand}
          onChange={handleChange}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        />
        
        <div className="flex gap-2">
          <input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={handleChange}
            className="p-2 border rounded w-1/2 dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={handleChange}
            className="p-2 border rounded w-1/2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <select
          name="fuelType"
          value={filters.fuelType}
          onChange={handleChange}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="">Select Fuel Type</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
          <option value="Hybrid">Hybrid</option>
        </select>

        <select
          name="seatingCapacity"
          value={filters.seatingCapacity}
          onChange={handleChange}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="">Select Seating Capacity</option>
          {[2, 4, 5, 6, 7, 8].map(num => (
            <option key={num} value={num}>{num} Seats</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar