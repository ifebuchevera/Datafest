import React, { useState } from 'react';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative ">
      <div className={`flex transition-transform ease-in-out duration-300 transform translate-x-[-${currentIndex * 100}%]`}>
        {images.map((image, index) => (
          <div key={index} className="w-full aspect-w-16 aspect-h-9">
            <img src={image} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
      <button className="absolute top-1/2 text-white left-2 transform -translate-y-1/2" onClick={goToPrev}>
        &#9664;
      </button>
      <button className="absolute top-1/2 text-white right-2 transform -translate-y-1/2" onClick={goToNext}>
        &#9654;
      </button>
    </div>
  );
};

export default ImageSlider;
