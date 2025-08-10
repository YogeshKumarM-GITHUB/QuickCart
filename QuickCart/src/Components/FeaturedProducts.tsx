import { assets } from "../assets/assets";

interface featuredProd {
    image: string,
    firstParagraphText: string,
    secondParagraphText: string
}

const details: featuredProd[] = [
    {
        image: assets.girl_with_headphone_image,
        firstParagraphText: "Unparalleled Sound",
        secondParagraphText: "Experience crystal-clear audio with premium headphones."
    },
    {
        image: assets.girl_with_earphone_image,
        firstParagraphText: "Stay Connected",
        secondParagraphText: "ECompact and stylish earphones for every occasion."
    },
    {
        image: assets.boy_with_laptop_image,
        firstParagraphText: "Power in Every Pixel",
        secondParagraphText: "Shop the latest laptops for work, gaming, and more."
    }
]

const FeaturedProducts = () => {
    return (
        <div>
            <div className="mt-6 flex flex-col items-center">
                <h1 className="text-3xl font-medium">Featured Products</h1>
                <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-2 gap-y-10">
                {details.map((fp:featuredProd, index)=> {
                    return (
                        <div key={index} className="relative">
                            <img src={fp.image} className="max-h-96 w-full md:w-[350px] object-cover transition-transform duration-500 ease-in-out  hover:scale-110" alt="girlwithearphone" />
                            <div className="cursor-pointer flex flex-col items-start gap-2 px-4 absolute bottom-0 text-white max-w-[300px]">
                                <p className="font-medium text-xl lg:text-2xl">{fp.firstParagraphText}</p>
                                <p>{fp.secondParagraphText}</p>
                                <button className="bg-orange-600 px-5 py-2 rounded-md cursor-pointer">Buy now</button>
                            </div>
                        </div>
                    )
                })

                }
            </div>
        </div>
    )
}
export default FeaturedProducts;