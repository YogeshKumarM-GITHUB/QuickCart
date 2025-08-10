
import { products } from "../assets/productData"
import { type Product } from "../types/Products/Products"
import { assets } from "../assets/assets"


interface ProductProps {
    product: Product
}

const ProductCard = ({ product }: ProductProps) => {
    return (
        <div className="relative  md:max-w-[200px]">
            <div className="bg-gray-500/10  rounded-lg  cursor-pointer">
                <img src={product.imgSrc} alt={product.name} className="transition-transform duration-500 ease-in-out hover:scale-110" />
                <div className="absolute cursor-pointer top-1 right-1 bg-white w-8 h-8 rounded-full flex items-center justify-center">
                    <img src={assets.heart_icon} alt="favourite" className="h-4"/>
                </div>
            </div>
            <div className="flex flex-col items-start gap-1">
                <p className="md:text-base font-medium pt-2 w-full truncate">{product.name}</p>
                <p className="w-full text-xs text-gray-500/70 max-sm:hidden truncate">{product.description}</p>
                <p className="flex items-center gap-1 text-xs">{product.rating}{Array.from({ length: 5 }).map((_, index) => {
                    return (
                        <span key={index}>
                            {index < Math.floor(product.rating) ?
                                (<img src={assets.star_icon} alt="filled start" />)
                                :
                                (<img src={assets.star_dull_icon} alt="dull icon" />)
                            }
                        </span>
                    )
                })}</p>
                <div className="flex flex-row items-start  justify-between w-full">
                    <p className="text-base font-medium">{product.price}</p>
                    <button className=" max-sm:hidden px-4 py-1.5 text-gray-500 border border-gray-500/20 rounded-full text-xs hover:bg-slate-50 transition">Buy now</button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard