import { type Product, ProductData } from "../types/Products/Products";
import ProductCard from "./ProductCard";
const AllProducts = () => {
    return (
        <div>
             <div className="mt-6 flex flex-col items-center">
                <h1 className="text-3xl font-medium">All products</h1>
                <div className="w-40 h-0.5 bg-orange-600 text-end"></div>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-2 md:grid-cols-5 items-center gap-2 gap-y-10 mt-3">
                    {
                        ProductData.map((prod: Product) => {
                            return (
                                <ProductCard key={prod.id} product={prod} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default AllProducts;