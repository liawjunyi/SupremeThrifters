"use client";
import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Card2 from "@/components/Card2";
import menu from "../../public/menu.svg";
import close from "../../public/close.svg";
import aboutus from "../../public/aboutus_pic.jpg";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Sidemenu from "@/components/Sidemenu";
import { db } from "../../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import shirt from "../../public/clothing.avif";
import like from "../../public/like.svg";
import { getAuth } from "firebase/auth";
import Modal from "@/components/Modal";

export default function Home() {
  const auth = getAuth();
  const user = auth.currentUser;
  const [menuActive, setMenuActive] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [all_listing, setAllListings] = useState([]);
  const [selected, setSelected] = useState(null);
  const allListings = async () => {
    const listing = [];
    const querySnapshot = await getDocs(collection(db, "listings"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      listing.push(doc.data());
    });
    console.log(listing);
    setAllListings(listing);
  };

  const handleLiked = async (product) => {
    if (user != null) {
      await setDoc(doc(db, `users/${user.uid}/liked`, product.product_name), {
        product,
      });
      alert(`you liked ${product.product_name}`);
    } else {
      router.push("/login");
    }
  };

  const handleReserved = async (product) => {
    if (user != null) {
      await setDoc(
        doc(db, `users/${user.uid}/reserved`, product.product_name),
        {
          product,
        }
      );
      alert(`you reserved ${product.product_name}`);
    } else {
      router.push("/login");
    }
  };

  const observeElement = () => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      // Callback function when intersection occurs
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Do something when the target element is in the viewport
          // entry.target.style.visibility = 'visible';
          entry.target.style.opacity = 1;

          console.log("Element is in the viewport!");
        } else {
          entry.target.style.opacity = 0;
        }
      });
    }, options);

    const target = document.getElementById("about-us"); // Replace with your target element's ID
    if (target) {
      observer.observe(target);
    }
    return observer;
  };

  useEffect(() => {
    const observer = observeElement();
    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array to run the effect only once

  //const handleReserved = async (product) => {
  // if(user != null){
  //   await setDoc(doc(db, users/${user.uid}/reserved, product.product_name), {
  //     product,
  //   });
  // }

  // else{
  //   push("/login")
  // }
  // };

  useEffect(() => {
    allListings();
  }, []);

  const router = useRouter();
  const handleNavigation = (item) => {
    // router.push(`browse?product_id=${item}`);
    console.log(`browse?product_id=${item}`);
  };
  const [isVisibleNewListings, setIsVisibleNewListings] = useState(false);
  const [isVisibleProduct, setIsVisibleProduct] = useState(
    Array(8).fill(false)
  );
  const [isVisibleTrending, setIsVisibleTrending] = useState(false);
  const [isVisibleTrendingProduct, setIsVisibleTrendingProduct] = useState(
    Array(8).fill(false)
  );

  useEffect(() => {
    const handleScroll = () => {
      const newListingElement = document.getElementById("new-listings-section");
      const trendingElement = document.getElementById("trending-section");
      const productElements = document.querySelectorAll(".product-item");
      const trendingProductElements = document.querySelectorAll(
        ".trending-product-item"
      );

      if (newListingElement) {
        const rect = newListingElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isScrolled = rect.top < windowHeight;

        if (isScrolled) {
          setIsVisibleNewListings(true);
          productElements.forEach((element, index) => {
            setTimeout(() => {
              setIsVisibleProduct((prev) => {
                const updatedVisibility = [...prev];
                updatedVisibility[index] = true;
                return updatedVisibility;
              });
            }, 300 * (index + 1)); // Adjust the delay time as needed for staggered animations
          });
        }
      }

      if (trendingElement) {
        const rect = trendingElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isScrolled = rect.top < windowHeight;

        if (isScrolled) {
          setIsVisibleTrending(true);
          trendingProductElements.forEach((element, index) => {
            setTimeout(() => {
              setIsVisibleTrendingProduct((prev) => {
                const updatedVisibility = [...prev];
                updatedVisibility[index] = true;
                return updatedVisibility;
              });
            }, 300 * (index + 1)); // Adjust the delay time as needed for staggered animations
          });

          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //  useEffect(() => {
  //     const updateMediaQuery = (e) => {
  //       if (e.matches) {
  //         setShowSideMenu(true);
  //       } else {
  //         setShowSideMenu(false);
  //       }
  //     };

  //     const mediaQuery = window.matchMedia("(max-width: 992px)"); //smaller than 992px replace with SideMenu
  //     mediaQuery.addEventListener("change", updateMediaQuery);

  //     return () => {
  //       mediaQuery.removeEventListener("change", updateMediaQuery);
  //     };
  //  }, []);

  const [showMyModal, setShowMyModal] = useState(false);

  const handleOnClose = () => setShowMyModal(false);

  return (
    <div
      className={`max-w-full ${menuActive ? "h-screen overflow-hidden" : ""}`}
    >
      <Sidemenu
        className={`transition-opacity duration-500 ${
          menuActive ? "opacity-100 ease-in z-20" : "opacity-0 ease-out z-0"
        }`}
        onClick={() => setMenuActive((prev) => !prev)}
      />
      <Navbar menuActive={menuActive} setMenuActive={setMenuActive} />

      <div className="max-w-full ">
        <div className="mt-20"></div>
        <Carousel />

        {/* New Listings section */}
        <div
          id="new-listings-section"
          className="text-center items-center mt-6 mb-6 mx-11"
        >
          <h1
            className={`text-[40px] font-semibold ${
              isVisibleNewListings
                ? "opacity-100 animate-fade-in-left duration-3000"
                : "opacity-0"
            }`}
          >
            New Listings
          </h1>
          <hr
            className={`w-52 h-1.5 bg-primary mx-auto ${
              isVisibleNewListings
                ? "opacity-100 animate-fade-in-left duration-3000"
                : "opacity-0"
            }`}
          />
        </div>
        <div className="mt-6 mb-6 mx-11 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {all_listing.slice(0, 8).map((product, index) => (
            <div
              key={product.id}
              className={`product-item group relative justify-evenly flex transition-all transform ${
                isVisibleProduct[index]
                  ? "opacity-100 animate-fade-in-left duration-3000"
                  : "opacity-0"
              }`}
            >
              <div
                onClick={() => {
                  handleNavigation(product.product_id);
                }}
              >
                <Card className="aspect-h-1 aspect-w-1 w-[300px] overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-90">
                  <img
                    src={product.product_img_url}
                    className="h-[300px] w-full object-cover object-center lg:h-[300px] lg:w-full"
                    // onClick={}
                  />
                  <div className="mt-4 flex">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.product_name}
                        </a>
                      </h3>
                      <p className=" mt-1 text-sm text-gray-500">
                        {product.username}
                      </p>
                    </div>
                    <p className="absolute pl-[240px] text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                  {/* <div className="mt-4">
                    <div className="flex">
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.product_name}
                        </a>
                      </h3>
                      <p className="text-right ml-auto text-sm font-medium text-gray-900">
                        {product.price}
                      </p>
                    </div>
                    <p className=" mt-1 text-sm text-gray-500">
                      {product.username}
                    </p>
                  </div> */}
                </Card>
                <div className="flex justify-between">
                  <Button
                    className="z-0"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReserved(product);
                      console.log("reserved");
                    }}
                    animation="animate-bounce"
                  >
                    Reserve
                  </Button>
                  <Button
                    className="z-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLiked(product);
                      console.log("liked");
                    }}
                    size="sm"
                    bold={true}
                    animation="animate-bounce"
                  >
                    <Image src={like} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* New Listings section */}
        <div
          id="trending-section"
          className="text-center items-center mt-6 mb-6 mx-11"
        >
          <h1
            className={`text-[40px] font-semibold ${
              isVisibleTrending
                ? "opacity-100 animate-fade-in-left duration-3000"
                : "opacity-0"
            }`}
          >
            Trending
          </h1>
          <hr
            className={`w-52 h-1.5 bg-primary mx-auto ${
              isVisibleTrending
                ? "opacity-100 animate-fade-in-left duration-3000"
                : "opacity-0"
            }`}
          />
        </div>
        <div className="mt-6 mb-6 mx-11 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {all_listing.slice(9, 17).map((product, index) => (
            <div
              key={product.id}
              className={`trending-product-item group relative justify-evenly flex transition-all transform ${
                isVisibleTrendingProduct[index]
                  ? "opacity-100 animate-fade-in-left duration-3000"
                  : "opacity-0"
              }`}
            >
              <div
                onClick={() => {
                  handleNavigation(product.product_id);
                }}
              >
                <Card className="aspect-h-1 aspect-w-1 w-[300px] overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-90">
                  <img
                    src={product.product_img_url}
                    className="h-[300px] w-full object-cover object-center lg:h-[300px] lg:w-full"
                  />
                  <div className="mt-4 flex">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.product_name}
                        </a>
                      </h3>
                      <p className=" mt-1 text-sm text-gray-500">
                        {product.username}
                      </p>
                    </div>
                    <p className="absolute pl-[240px] text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </Card>
                <div className="flex justify-between">
                  <Button
                    className="z-0"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReserved(product);
                      console.log("reserved");
                    }}
                    animation="animate-bounce"
                  >
                    Reserve
                  </Button>
                  <Button
                    className="z-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLiked(product);
                      console.log("liked");
                    }}
                    size="sm"
                    bold={true}
                    animation="animate-bounce"
                  >
                    <Image src={like} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* About Us Section */}

        <div
          className="m-4 mx-8 mb-10 opacity-0 transition-opacity duration-1000 ease-linear"
          id="about-us"
        >

          <div>
          <Modal onClose={handleOnClose} visible={showMyModal}></Modal>
          <Card2 image={shirt} title="About us" img_width="md:w-1/4">
            <p class="mb-6 text-neutral-300 dark:text-neutral-200 text-lg">
              Supreme Thrifter is created to promote thrifting among youths by
              making it accessible and convenient for all. Here you can explore
              and purchase beloved second-hand clothings that is nearest to you
              rather than having to locate a thrift store which can be very out
              of the way.
            </p>
            <p class="mb-4 text-neutral-300 dark:text-neutral-200 text-xl font-bold">
              Did you Know?
            </p>
            <p className="text-neutral-300 dark:text-neutral-200">
              The fashion industry contributes:
            </p>
            <ul className="text-neutral-300 dark:text-neutral-200 list-disc pl-8 mb-3">
              <li>
                <span className="font-bold text-white text-lg">8-10%</span> of
                global greenhouse gas emissions.
              </li>
              <li>
                an estimated{" "}
                <span className="font-bold text-white text-lg">
                  92 million tons
                </span>{" "}
                of textile waste created annually.
              </li>
            </ul>

            <a
              onClick={() => setShowMyModal(true)}
              className="mb-0 whitespace-normal hidden lg:block text-neutral-300 dark:text-neutral-200 list-disc "
            >
              Click here to find out how thrifting aligns with the UN
              sustainability goals!
            </a>
          </Card2>
          </div>
        </div>
      </div>

      <footer className="bg-primary text-center dark:bg-secondary w-full">
        <div className="text-center text-neutral-300 dark:text-neutral-200">
          © 2023 Copyright: Supreme Thrifters
        </div>
      </footer>
    </div>
  );
}

// export default Home;

// "use client"
// import React, { useState, useEffect } from "react";
// import "@reach/combobox/styles.css";
// import SideMenu from "@/components/SideMenu";
// import Navbar from "@/components/Navbar";

// const Home = () => {
//  const [showSideMenu, setShowSideMenu] = useState(false);

//   useEffect(() => {
//     const updateMediaQuery = (e) => {
//       if (e.matches) {
//         setShowSideMenu(true);
//       } else {
//         setShowSideMenu(false);
//       }
//     };

//     const mediaQuery = window.matchMedia("(max-width: 992px)");
//     mediaQuery.addEventListener("change", updateMediaQuery);

//     return () => {
//       mediaQuery.removeEventListener("change", updateMediaQuery);
//     };
//  }, []);

//  return (
// <>
//   {showSideMenu ? <SideMenu /> : <Navbar />}
// </>
//  );
// };

// export default Home;
