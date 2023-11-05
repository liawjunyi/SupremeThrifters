import React, { useState, useEffect } from "react";
import "@reach/combobox/styles.css";

const Carousel = () => {
  let carousel_slides = [
    {
      Description: "Reduce,Reuse,Recycle",
      link: "https://msgt.com.sg/wp-content/uploads/2022/12/8f3be47a-f568-4784-a933-d28a902f9d68.sized-1000x1000-1.jpg",
    },
    {
      Description: "Thrift Shop",
      link: "https://i2f9m2t2.rocketcdn.me/wp-content/uploads/2019/08/where-to-go-thrift-shopping-in-singapore-national-thrift-shop-day-2019-loop-garms.jpg",
    },
    {
      Description: "Thrift Shop",
      link: "https://www.epos.com.sg/wp-content/uploads/2022/12/Nonmainstream-Opt-1-1024x683.webp",
    },
    {
      Description: "Thrift Shop",
      link: "https://www.thisishype.ph/wp-content/uploads/2021/11/0D81E8B5-E042-4DA8-8DA2-9F791A0A68C3-44573-00001F9260D1335F.jpg",

    },
    {
      Description: "Thrift Shop",
      link: "https://www.wealthmastery.sg/wp-content/uploads/2021/01/Screenshot-2021-01-07-at-10.16.08-PM-1024x686.png",

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
    <div className="max-w-[1000px] h-[650px] w-full m-auto py-8 px-4 relative group">
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
