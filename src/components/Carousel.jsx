import React, { useState, useEffect } from "react";
import "@reach/combobox/styles.css";

const Carousel = () => {
  let carousel_slides = [
    {
      Description: "Recommended for You",
      link: "https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png?_i=AA",
    },
    {
      Description: "Recommended for You",
      link: "https://cdn.pixabay.com/photo/2015/03/10/17/23/youtube-667451_1280.png",
    },
    {
      Description: "Recommended for You",
      link: "https://dcblog.b-cdn.net/wp-content/uploads/2021/02/Full-form-of-URL-1-1024x824.jpg",
    },
    {
      Description: "Recommended for You",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtfeR2gr_Z2U5rNiTKieMXMM9ZY96GbKUQQg&usqp=CAU",
    },
    {
      Description: "Recommended for You",
      link: "data:image/jpeg;base64,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",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % carousel_slides.length;
      setCurrentIndex(newIndex);
    }, 5000); // Adjust the interval time (in milliseconds) as per your requirement

    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? carousel_slides.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === carousel_slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="max-w-[1000px] h-[680px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{
          backgroundImage: `url(${carousel_slides[currentIndex].link})`,
        }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20text-white cursor-pointer">
        <i
          class="fa-solid fa-circle-arrow-left"
          onClick={prevSlide}
          size={30}
        />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20text-white cursor-pointer">
        <i
          class="fa-solid fa-circle-arrow-right"
          onClick={nextSlide}
          size={30}
        />
      </div>
    </div>
  );
};
export default Carousel;
