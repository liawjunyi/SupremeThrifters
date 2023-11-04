import React, { useState, useEffect } from "react";
import "@reach/combobox/styles.css";

const Carousel = () => {
  let carousel_slides = [
    {
      Description: "Recommended for You",
      // link: "https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png?_i=AA",
      link: "https://uploads-ssl.webflow.com/5fd1a52fdf8681ee27754a96/5fe1c9cff8c105d72339938f_sKwEvt7LBUUm0DTjsvCw5yEDOCD1qZmEijukhigwqvmf3lQm60jtqKCCDG26M74Wl68_UcoZyPim7c6Tb2EM6sQv8zQ3K-yn8VMXnfQqcGEDRO4b03Woobx3tR6apNU8sbITTSFe.png",
    },
    {
      Description: "Recommended for You",
      // link: "https://cdn.pixabay.com/photo/2015/03/10/17/23/youtube-667451_1280.png",
      link: "https://media.herworld.com/public/2022/01/local-brands-to-keep-on-your-radar-featured-image-scaled-e1642593125109.jpg?compress=true&quality=80&w=320&dpr=2.6",
    },
    {
      Description: "Recommended for You",
      // link: "https://dcblog.b-cdn.net/wp-content/uploads/2021/02/Full-form-of-URL-1-1024x824.jpg",
      link: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhv2OnU3ojdoHhoFlG2PpKb0Dl-Hbdd98blluwL5rxnwiguNl23aZcXnpdGRzbbiv0wtE1TKDbxUG-aVHN41TIwkcTVyZ-xwld5k2UQUIaQwxtDNp8aaLFy5Ic7sgisENuFWHHlSLVBbZGobKMZQx1VZYcJikSUzoyo05kqRLVPv5Hpe9_UJNveM3U-/s1600/This%20community%20flea%20market%20is%20a%20thrift%20geek%20haven%20-%20metroscene%20mag_.png",
    },
    {
      Description: "Recommended for You",
      // link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtfeR2gr_Z2U5rNiTKieMXMM9ZY96GbKUQQg&usqp=CAU",
      link: "https://www.thisishype.ph/wp-content/uploads/2021/11/0D81E8B5-E042-4DA8-8DA2-9F791A0A68C3-44573-00001F9260D1335F.jpg",
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
