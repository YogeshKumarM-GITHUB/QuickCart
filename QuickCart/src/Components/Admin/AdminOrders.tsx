const AdminOrders = () => {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-xl font-semibold mb-6">Order Page</h1>
            <div className="flex flex-col gap-6">
                <div

                    className="bg-white shadow border rounded p-4 flex flex-col md:flex-row justify-between gap-4"
                >
                    {/* Left Side */}
                    <div className="flex gap-4">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/679/679720.png"
                            alt="package"
                            className="w-10 h-10 object-contain"
                        />
                        <p className="font-bold">OrderId: 1004</p>
                        <div>
                            <div className="font-medium">
                                jhhjhj
                            </div>
                            <div className="text-sm mt-2">
                                <strong>Yogesh</strong>
                                <br />
                                Chokkasandra
                                <br />Bengaluru
                                <br />Karnataka
                                <br />560057
                                <br />India
                                <br />9945026789
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="text-sm text-right md:w-64 flex flex-col justify-between gap-2">
                        <div>
                            Items: 4
                            <br />

                            <br />
                            Payment: Cash
                            <br />
                            Date: 24-08-2025
                        </div>
                        <div className="text-lg font-semibold">$4500</div>
                        <select
                            className="border px-2 py-1 rounded text-sm"
                        >
                            <option>Order Placed</option>
                            <option>Processing</option>
                            <option>Shipped</option>
                            <option>Delivered</option>
                            <option>Cancelled</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminOrders;