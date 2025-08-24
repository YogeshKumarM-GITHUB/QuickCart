import { assets } from "../assets/assets";
import { NavLink } from 'react-router-dom'
import { navLinksData, type NavBarLinks } from '../types/navbar/navLinks'

const Footer = () => {
    return (
        <div className="mt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="w-auto md:max-w-[500px]">
                    <img src={assets.logo} alt="logo" />
                    <p className="mt-6 text-sm text-gray-700">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div>
                    <h1 className="font-bold mt-3">Company</h1>
                    <div className='md:flex flex-col items-start md:items-center gap-1  mt-4'>
                        {
                            navLinksData.map((nav: NavBarLinks) => {
                                return (
                                    <NavLink key={nav.path}
                                        to={nav.path}
                                        className={({ isActive }: { isActive: boolean }) => `flex  items-center gap-2' ${isActive ? "text-black font-bold" : "text-sm"}`}
                                    >
                                        {nav.text}
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="mt-4">
                    <h1 className="font-bold">Get in touch</h1>
                    <p className="text-sm text-gray-700">+1-234-567-890</p>
                    <p className="text-sm text-gray-700">yogeshkumarm105@gmail.com</p>
                </div>
            </div>
            <hr className="bg-gray-800 w-full h-0.8 mt-4"></hr>
            <p className="text-center">Copyright {new Date().getFullYear()} © yogeshkumarm.dev All Right Reserved.</p>
        </div>
    )
}
export default Footer;