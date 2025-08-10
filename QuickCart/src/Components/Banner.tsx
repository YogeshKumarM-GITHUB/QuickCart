import { assets } from "../assets/assets";
const Banner = () => {
    return (
        <div className="mt-10 bg-[#E6E9F2] w-full rounded-md p-">
            <div className="flex flex-col md:flex-row items-center justify-between gap-y-20">
                <div>
                    <img src={assets.jbl_soundbox_image} alt="JBL" className="max-h-72" />
                </div>
                <div className="flex flex-col items-center justify-center max-w-[350px] gap-4">
                    <p className="text-2xl md:text-3xl font-semibold text-center">Level Up Your Gaming Experience</p>
                    <p className="font-medium text-gray-800/60 text-center">From immersive sound to precise controls—everything you need to win</p>
                    <button className="group flex items-center justify-center gap-1 px-12 py-2.5 bg-orange-600 rounded text-white">Buy Now</button>
                </div>
                <div>
                    <img src={assets.md_controller_image} alt="JBL" className="max-h-72 object-cover rounded-md" />
                </div>
            </div>
        </div>
    )
}
export default Banner;
