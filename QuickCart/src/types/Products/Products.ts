import { products } from "../../assets/productData"

export interface Product{
    id: number;
    name: string;
    description: string;
    rating: number;
    price: string;
    imgSrc: string;
}

export const ProductData:Product[]=products as Product[];


