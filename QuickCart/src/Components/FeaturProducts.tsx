import { type Product, ProductData } from "../types/Products/Products";
import ProductCard from "./ProductCard";

const FeaturProducts = () => {
    return (
        <div className="mt-16 p-4">
            <h1 className="text-3xl font-medium text-center">Featured <span className="font-medium text-orange-600">products</span></h1>
            <div className="grid grid-cols-2 md:grid-cols-5 items-center gap-2 gap-y-10 mt-5">
                {
                    ProductData.slice(0, 5).map((prod: Product) => {
                        return (
                            <ProductCard key={prod.id} product={prod} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default FeaturProducts;