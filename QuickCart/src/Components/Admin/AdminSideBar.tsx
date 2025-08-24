import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";
const AdminSideBar = () => {
    return (
        <div className="md:w-64 border-r-2 h-screen overflow-y-auto">
            <div className="flex flex-col px-2 mt-4 gap-y-5">
                <NavLink to="" className={({ isActive }) =>
                    `flex items-center gap-2 p-2 rounded-md cursor-pointer 
             ${isActive ? "bg-blue-100 text-blue-700 font-bold" : "text-gray-800"}`
                }>
                    <img src={assets.add_icon} alt="addproduct" className="h-8" />
                    <p className="text-gray-800 font-semibold text-xl hidden md:block">Add Product</p>
                </NavLink>
                <NavLink to="" className={({ isActive }) =>
                    `flex items-center gap-2 p-2 rounded-md cursor-pointer 
             ${isActive ? "bg-blue-100 text-blue-700 font-bold" : "text-gray-800"}`
                }>
                    <img src={assets.product_list_icon} alt="addproduct" className="h-8" />
                    <p className="text-gray-800 font-semibold text-xl hidden md:block">Product List</p>
                </NavLink>
                <NavLink to="" className={({ isActive }) =>
                    `flex items-center gap-2 p-2 rounded-md cursor-pointer 
             ${isActive ? "bg-blue-100 text-blue-700 font-bold" : "text-gray-800"}`
                }>
                    <img src={assets.order_icon} alt="addproduct" className="h-8" />
                    <p className="text-gray-800 font-semibold text-xl hidden md:block">Orders</p>
                </NavLink>
            </div>
        </div>
    )
}
export default AdminSideBar;