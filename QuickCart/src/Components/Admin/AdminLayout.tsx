import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminSideBar from "./AdminSideBar";

const AdminLayout = () => {
    return (
        <div>
            <AdminNavbar />
            <div className="flex flex-1">
                <AdminSideBar />
                <main className="flex-1">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
export default AdminLayout;