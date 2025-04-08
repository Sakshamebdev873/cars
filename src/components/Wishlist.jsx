function Wishlist({ wishlist, toggleWishlist }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">Your wishlist is empty</p>
      ) : (
        <div className="space-y-4">
          {wishlist.map(car => (
            <div
              key={car.id}
              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded"
            >
              <div>
                <h3 className="font-medium">{car.brand} {car.model}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">${car.price.toLocaleString()}</p>
              </div>
              <button
                onClick={() => toggleWishlist(car)}
                className="text-red-500 hover:text-red-600"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Wishlist