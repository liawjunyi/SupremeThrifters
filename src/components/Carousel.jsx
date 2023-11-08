import React, { useState, useEffect } from "react";

const Carousel = () => {
  let carousel_slides = [
    {
      Description: "Reduce,Reuse,Recycle",
      // link: "https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png?_i=AA",
      link: "https://i.pinimg.com/originals/d1/c1/e2/d1c1e2a9b76c5661895564d3f3e15aa1.jpg",
    },
    {
      Description: "Thrift Shop",
      // link: "https://cdn.pixabay.com/photo/2015/03/10/17/23/youtube-667451_1280.png",
      link: "https://i.pinimg.com/originals/64/23/d5/6423d541462039805e8ec7db5fef04fb.jpg",
    },
    {
      Description: "Thrift Shop",
      // link: "https://dcblog.b-cdn.net/wp-content/uploads/2021/02/Full-form-of-URL-1-1024x824.jpg",
      link: "https://i.pinimg.com/originals/b7/1c/84/b71c845b24b983ae359feff5c9455727.jpg",
    },
    {
      Description: "Thrift Shop",
      // link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtfeR2gr_Z2U5rNiTKieMXMM9ZY96GbKUQQg&usqp=CAU",
      link: "https://i.pinimg.com/originals/37/81/80/37818060ae92c0da020fe7626f80f80d.jpg",
    },
    {
      Description: "Recommended for You",
      link: "https://i.pinimg.com/originals/28/a5/5d/28a55d757683ab73fecb4b9ef7168e15.jpg",
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
    <div className="max-w-[1350px] h-[650px] w-full m-auto py-8 px-4 relative group">
      <div
        style={{
          backgroundImage: `url(${carousel_slides[currentIndex].link})`,
        }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-[20px] lg:text-[50px] font-bold font-serif text-white  text-center ">
            Fast fashion does not go <br /> well with my outfit.
            <br />
            <br />
            Thrift Now.
          </p>
        </div>
      </div>
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
