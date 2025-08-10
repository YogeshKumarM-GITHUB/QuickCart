import { useState, useEffect } from "react";
import { assets } from "../../assets/assets";

export const useSlider = (
  images: string[] = [],
  autoPlay: boolean = true,
  interval: number = 3000
) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasImages = Array.isArray(images) && images.length > 0;

  const nextSlide = () => {
    if (!hasImages) return;
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (!hasImages) return;
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!hasImages || !autoPlay) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [images, hasImages, autoPlay, interval]);

  return {
    currentIndex,
    nextSlide,
    prevSlide,
    hasImages
  };
};


export interface sliderImageContentProperties{
  firstText:string,
  secondText:string,
  shopButtonText:string,
  exploreButtonText:string,
  image:string
}

export const SliderImageContent:sliderImageContentProperties[]=[
  {
   firstText:"Limited Time Offer 30% Off",
   secondText:"Experience Pure Sound - Your Perfect Headphones Awaits!",
   shopButtonText:"Buy Now",
   exploreButtonText:"Find More",
   image:assets.bose_headphone_image
  },
  {
   firstText:"Hurry up only few lefts!",
   secondText:"Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
   shopButtonText:"Buy Now",
   exploreButtonText:"Find More",
   image:assets.playstation_image
  },
  {
   firstText:"Limited Time Offer 30% Off",
   secondText:"Experience Pure Sound - Your Perfect Headphones Awaits!",
   shopButtonText:"Buy Now",
   exploreButtonText:"Find More",
   image:assets.macbook_image
  }
]
