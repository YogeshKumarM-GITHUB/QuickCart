import { useEffect, useState } from "react";
import { type sliderImageContentProperties, SliderImageContent } from "../types/slider/useSlider";

export default function Slider() {
  const [sliderContent, setSliderContent] = useState<sliderImageContentProperties[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Load slider data
  useEffect(() => {
    setTimeout(() => {
      setSliderContent(SliderImageContent);
    }, 1000);
  }, []);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (sliderContent.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === sliderContent.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [sliderContent]);

  if (sliderContent.length === 0) {
    return <div className="h-64 flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="relative w-full overflow-hidden rounded-md bg-[#E6E9F2] mt-6 p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Text */}
        <div>
          <p className="text-orange-600 md:text-lg pb-2">
            {sliderContent[currentIndex].firstText}
          </p>
          <h1 className="max-w-lg md:text-[40px] md:leading-[48px] text-2xl font-semibold pb-4">
            {sliderContent[currentIndex].secondText}
          </h1>
          <div className="flex gap-4">
            <button className="md:px-10 px-7 md:py-2.5 py-2 bg-orange-600 rounded-full text-white font-medium">
              {sliderContent[currentIndex].shopButtonText}
            </button>
            <button className="group flex items-center gap-2 px-6 py-2.5 font-medium">
              {sliderContent[currentIndex].exploreButtonText}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center">
          <img
            src={sliderContent[currentIndex].image}
            alt={sliderContent[currentIndex].firstText}
            className="max-h-72 object-contain"
          />
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {sliderContent.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
              index === currentIndex ? "bg-orange-500" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
