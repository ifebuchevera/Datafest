// import React, { useState } from 'react';
// import Image from 'next/image';
// interface ImageSliderProps {
//   images: string[];
// }

// const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="relative border-2 border-pink-500 overflow ">
//       {/* <div className="flex transition-transform ease-in-out duration-300 transform translate-x-[-${currentIndex * 100}%] overflow-x-auto"> */}
//         <div className="flex w-1/4  overflow border-2 border-black">
//         {images.map((image, index) => (
//           <div key={index} className="w-auto">
//             <Image width="10" height="10" src={image} alt={`Slide ${index + 1}`} className="w-full" />
//           </div>
//         ))}
//       </div>
//       {/* <button className="absolute top-1/2 text-white left-2 transform -translate-y-1/2" onClick={goToPrev}>
//         &#9664;
//       </button>
//       <button className="absolute top-1/2 text-white right-2 transform -translate-y-1/2" onClick={goToNext}>
//         &#9654;
//       </button> */}
//     </div>
//   );
// };

// export default ImageSlider;




import React, { useRef, useState } from 'react';
import Image from 'next/image';

const ImageSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(1);

  const totalImages = 7; // Update with the total number of images

  const scrollSlider = (direction: 'left' | 'right') => {
    const step = 100; // adjust as needed
    const currentScroll = sliderRef.current?.scrollLeft || 0;

    if (direction === 'left' && currentImage > 1) {
      setCurrentImage((prev) => prev - 1);
      sliderRef.current?.scrollTo({
        left: currentScroll - step,
        behavior: 'smooth',
      });
    } else if (direction === 'right' && currentImage < totalImages) {
      setCurrentImage((prev) => prev + 1);
      sliderRef.current?.scrollTo({
        left: currentScroll + step,
        behavior: 'smooth',
      });
    }
  };


  return (
    <div className="">

    <div ref={sliderRef} className="flex mx-10 overflow-x-auto">
    <Image width="10" height="10" src="/img/sophia.svg" alt="image" className="w-auto mx-5 " />
  <Image width="10" height="10" src="/img/sophia.svg" alt="image" className="w-auto mx-5 " />
  <Image width="10" height="10" src="/img/godson.svg" alt="image" className="w-auto mx-5 " />
  <Image width="10" height="10" src="/img/godson.svg" alt="image" className="w-auto mx-5 " />
  <Image width="10" height="10" src="/img/godson.svg" alt="image" className="w-auto mx-5 " />
  <Image width="10" height="10" src="/img/godson.svg" alt="image" className="w-auto mx-5 " />
  <Image width="10" height="10" src="/img/godson.svg" alt="image" className="w-auto mx-5 " />
      {/* Add your other Image components here */}
    </div>
<div className="flex items-center flex-row justify-center">

      <button onClick={() => scrollSlider('left')}>
  <Image width="10" height="10" src="/img/right.svg" alt="image" className="w-auto " />
        
      </button>
      <p> 0{currentImage}/18</p>
      <button onClick={() => scrollSlider('right')}>  
      <Image width="10" height="10" src="/img/left.svg" alt="image" className="w-auto " />
</button>
</div>
    </div>
  );
};

export default ImageSlider;
