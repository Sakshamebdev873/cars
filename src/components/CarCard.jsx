function CarCard({ car, isWishlisted, onWishlistToggle }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={car.image}
        alt={`${car.brand} ${car.model}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold">{car.brand} {car.model}</h3>
            <p className="text-gray-600 dark:text-gray-400">${car.price.toLocaleString()}</p>
          </div>
          <button
            onClick={onWishlistToggle}
            className={`p-2 rounded-full ${
              isWishlisted
                ? 'text-red-500 hover:text-red-600'
                : 'text-gray-400 hover:text-gray-500'
            }`}
          >
            ❤️
          </button>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-1">
            <span className="font-medium">Fuel:</span>
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium">Seats:</span>
            <span>{car.seatingCapacity}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium">Year:</span>
            <span>{car.year}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium">Mileage:</span>
            <span>{car.mileage} km/l</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarCard