import React from "react";
import Slider from "../Components/Slider";
import Products from "../Components/Products";
import FeaturedProducts from "../Components/FeaturedProducts";
import Banner from "../Components/Banner";
import NewsLetter from "../Components/NewsLetter";
const Home:React.FC=()=>{
    return(
        <div>
            <Slider/>
            <Products/>
            <FeaturedProducts/>
            <Banner/>
            <NewsLetter/>
        </div>
    )
}
export default Home; 