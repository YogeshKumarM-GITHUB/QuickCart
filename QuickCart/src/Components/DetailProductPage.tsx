import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { type Product, ProductData } from "../types/Products/Products";
import { assets } from "../assets/assets"
import FeaturProducts from "./FeaturProducts";
const DetailProductPage = () => {
    const { id } = useParams<{ id: string }>();
    const convertID: Number = Number(id);
    const [product, setProduct] = useState<Product>();


    useEffect(() => {
        if (convertID) {
            const productList = ProductData as Product[];
            const filteredData = productList.find((prod) => prod.id == convertID);
            setProduct(filteredData);
        }
    }, [id])

    console.log(product);

    return (
        <div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-10 mt-10  ">
                <div className="rounded-lg overflow-hidden bg-gray-500/10 md:h-[450px] md:w-[400px] w-auto h-auto">
                    <img src={product?.imgSrc} alt={product?.description} className="w-full h-full object-contain" />
                </div>

                <div className="flex flex-col items-start gap-4">
                    <h1 className="font-bold text-4xl">{product?.name}</h1>
                    <p className="flex items-center gap-1 text-xl font-bold ">{product?.rating}{Array.from({ length: 5 }).map((_, index) => {
                        return (
                            <span key={index}>
                                {index < Math.floor(product?.rating) ?
                                    (<img src={assets.star_icon} alt="filled start" />)
                                    :
                                    (<img src={assets.star_dull_icon} alt="dull icon" />)
                                }
                            </span>
                        )
                    })}</p>
                    <p className="text-3xl text-gray-800">{product?.description}</p>
                    <p className="font-bold text-3xl">{product?.price}</p>
                    <div className="flex flex-col md:flex-row justify-between gap-2 w-full">
                         <button className="w-full py-3.5 bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition">Add to cart</button>
                         <button className="w-full py-3.5 bg-orange-500 text-white hover:bg-orange-600 transition">Buy now</button>
                    </div>
                </div>
            </div>
            <FeaturProducts/>
        </div>
    )
}
export default DetailProductPage;