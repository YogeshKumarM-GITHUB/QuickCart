import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";

const MainLayout=()=>{
    return(
        <div className='container mx-auto max-w-screen-xl'>
            <Navbar />
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default MainLayout;