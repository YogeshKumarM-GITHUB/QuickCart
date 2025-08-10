import { type Product, ProductData } from "../types/Products/Products";
import ProductCard from "./ProductCard";

const Products = () => {
    return (
        <div className="mt-16">
            <h1 className="font-bold">Popular products</h1>
            <div className="grid grid-cols-2 md:grid-cols-5 items-center gap-2 gap-y-10 mt-3">
                {
                    ProductData.slice(0, 10).map((prod: Product) => {
                        return (
                            <ProductCard key={prod.id} product={prod} />
                        )
                    })
                }
            </div>
            <div className="text-center mt-5">
                <button className="border border-gray-300 px-10 rounded-md py-2 text-gray-600">See more</button>
            </div>
        </div>
    )
}
export default Products;