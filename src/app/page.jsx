"use client";
import "@reach/combobox/styles.css";
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
import shirt from "../../public/shirt1.jpg";
import like from "../../public/like.svg";
import { getAuth } from "firebase/auth";
import Modal from "@/components/Modal";

export default function Home() {
  const auth = getAuth();
  const user = auth.currentUser;
  const [menuActive, setMenuActive] = useState(false);
  const [all_listing, setAllListings] = useState([]);

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
      router.push("/login")
    };
  };

  const handleReserved = async (product) => {
    if (user != null) {
      await setDoc(doc(db, `users/${user.uid}/reserved`, product.product_name), {
        product,
      });
      alert(`you reserved ${product.product_name}`);
    } else {
      router.push("/login")
    }
  };

  const observeElement = () => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin
      threshold: 0.5, // Trigger when 50% of the element is visible
    };
    
    const observer = new IntersectionObserver((entries) => {
      // Callback function when intersection occurs
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Do something when the target element is in the viewport
          // entry.target.style.visibility = 'visible';
          entry.target.style.opacity = 1;
          
          console.log('Element is in the viewport!');
        } else {
          entry.target.style.opacity = 0;
        }
      });
    }, options);

    const target = document.getElementById('about-us'); // Replace with your target element's ID
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
    router.push(`browse?product_id=${item}`);
    console.log(`browse?product_id=${item}`);
  };
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

  const [showMyModal, setShowMyModal] = useState(false)

  const handleOnClose = () => setShowMyModal(false);

  return (
    <div className={`w-full ${menuActive ? "h-screen overflow-hidden" : ""}`}>
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
        <div className="text-center items-center">
          <h1 className="text-[40px] font-semibold">New Listings</h1>
          <hr className="w-52 h-1.5 bg-primary mx-auto" />
        </div>
        <div className="mt-6 mb-6 mx-11 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {all_listing.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className="group relative justify-evenly flex"
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
        <div className="text-center items-center">
          <h1 className="text-[40px] font-semibold">Trendings</h1>
          <hr className="w-52 h-1.5 bg-primary mx-auto" />
        </div>
        <div className="mt-6 mb-6 mx-11 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
          {all_listing.slice(9, 17).map((product) => (
            <div
              key={product.id}
              className="group relative justify-evenly flex"
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
                      animation="animate-bounce"
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
          {/* <Button onClick={() => setShowMyModal(true)}>
            Click here
          </Button> */}
          <Modal onClose={handleOnClose} visible={showMyModal}>

          </Modal>
          <Card2 image={shirt} title="About us">
            <p class="mb-6 text-neutral-300 dark:text-neutral-200 text-lg">
              Supreme Thrifter is created to promote thirfting among youths by
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
            <ul className="text-neutral-300 dark:text-neutral-200 list-disc pl-8">
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

            <p class="text-xs text-neutral-500 dark:text-neutral-300">
              Last updated 3 mins ago
            </p>
            <a
              onClick={() => setShowMyModal(true)}
              className="whitespace-nowrap"
            >
              Click here to find out how thrifting aligns with the UN sustainability goals!
            </a>
            {/* <a onClick={() => setShowMyModal(true)}>
              here
            </a> */}
          </Card2>
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
