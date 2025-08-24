import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { navLinksData,type NavBarLinks } from '../types/navbar/navLinks'
import { useNavigate } from 'react-router-dom'


const Navbar: React.FC = () => {
  const navigate=useNavigate();
  return (
    <nav className='flex flex-row items-center justify-between gap-2 mt-1 px-5'>
      <div>
        <img src={assets.logo} alt="logo" />
      </div>
      <div className='hidden md:flex items-center gap-4'>
        {
          navLinksData.map((nav:NavBarLinks) => {
            return (
              <NavLink key={nav.path}
                to={nav.path}
                className={({ isActive }:{isActive:boolean}) => `flex  items-center gap-2' ${isActive ? "text-black font-bold" : "text-gray-700"}`}
              >
                {nav.text}
              </NavLink>
            )
          })
        }
        <button onClick={()=>navigate('/seller/addproduct')} className='border border-gray-300 px-2 py-1 rounded-full'>Seller Dashboard</button>
      </div>
      <div className='flex flex-row items-center gap-2'>
        <img src={assets.search_icon} alt="search" />
        <img src={assets.user_icon} alt="user" className='cursor-pointer' />
        <p>Account</p>
      </div>
    </nav>
  )
}
export default Navbar;