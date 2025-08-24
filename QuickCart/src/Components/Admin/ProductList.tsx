export default function ProductList() {
  const products = [
    {
      id: 1,
      name: "Apple AirPods Pro 2nd gen",
      category: "Earphone",
      price: "$399.99",
      image: "https://via.placeholder.com/60x60.png?text=AirPods",
    }
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">All Product</h2>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-gray-700">Product</th>
              <th className="hidden md:block px-6 py-3 text-left font-semibold text-gray-700">Category</th>
              <th className="px-6 py-3 text-left font-semibold text-gray-700">Price</th>
              <th className="hidden md:block px-6 py-3 text-left font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                {/* Product Image + Name */}
                <td className="px-6 py-4 flex items-center space-x-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded-md object-cover"
                  />
                  <span className="font-medium text-gray-800">{product.name}</span>
                </td>

                {/* Category */}
                <td className="hidden md:block px-6 py-4 text-gray-600">{product.category}</td>

                {/* Price */}
                <td className="px-6 py-4 font-medium text-gray-800">{product.price}</td>

                {/* Action */}
                <td className="hidden md:block px-6 py-4">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-lg flex items-center space-x-1">
                    <span>Visit</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 3h7m0 0v7m0-7L10 14"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
