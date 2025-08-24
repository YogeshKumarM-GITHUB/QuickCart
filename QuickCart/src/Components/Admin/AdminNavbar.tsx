import { assets } from "../../assets/assets"

const AdminNavbar=()=>{
    return(
        <div>
            <div className="flex items-center px-4 md:px-8 py-3 justify-between border-b">
               <img src={assets.logo} alt="Logo"/>
               <button className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">Log out</button>
            </div>
        </div>
    )
}
export default AdminNavbar