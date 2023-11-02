"use client";

import logo from "../../public/st_logo.svg";
import Image from "next/image";
import Link from "next/link";
import "@reach/combobox/styles.css";
import React, { useState, useEffect } from "react";
import {  signOut, onAuthStateChanged} from "firebase/auth";
import {auth} from "../../firebase"

import { data } from "autoprefixer";

const Navbar = () => {
  
  
  const [loggedin, setLoggedin] = useState(true);

  const currentuser = auth.currentUser;
  console.log("CURRENT USER IS " + currentuser);

  



  onAuthStateChanged(auth, async (user)=>{
    if(user){
        
        // setLoggedin(true);
        console.log("signedin status: " + loggedin)
    }else{

        setLoggedin(false);
        console.log("Signed out");
        // console.log(loggedin);

    }
})



  return (
    <div className="w-full fixed top-0 left-0 bg-primary z-1">
      <div className=" py-5 px-20 lg:flex items-center ">
        {/* {logo} */}

        <div className="flex text-2xl cursor-pointer justify-center items-center gap-2">
          <Image className="w-10 h-10 " src={logo} />
          <Link className="hover:text-neon hover:text-shadow-neon font-bold text-gray-400" href="/">Supreme Thrifters</Link>
        </div>

        {/* {Navlinks here} */}
        <ul className="hidden  justify-end ml-auto w-fit  lg:flex pl-9 md:pl-0">
          <Link
            className="font-semibold my-7 text-lg md:my-0 md:ml-8 text-gray-400 hover:text-neon hover:text-shadow-neon"
            href="/"
          >
            Home
          </Link>


          <Link
            className="font-semibold my-7 text-lg md:my-0 md:ml-8 text-gray-400 hover:text-neon hover:text-shadow-neon"
            href="/browse"
          >
            Browse
          </Link>

          <Link
            className="font-semibold my-7 text-lg md:my-0 md:ml-8 text-gray-400 hover:text-neon hover:text-shadow-neon"
            href="/reserved_likes"
          >
            Reserved
          </Link>

        
          <Link
            className="font-semibold my-7 text-lg md:my-0 md:ml-8 text-gray-400 hover:text-neon hover:text-shadow-neon"
            href="/profile"
          >
            Profile
          </Link>

          {loggedin?(<Link
          className="font-semibold text-lg my-7 md:my-0 md:ml-8 text-gray-400 hover:text-neon hover:text-shadow-neon"
          onClick={() => {signOut(auth)
            setLoggedin(false)
            console.log("signin status" + loggedin)
          }}
          href="/"
          >
           Sign Out  
          </Link>
          )
          :(<Link
            className="font-semibold text-lg my-7 md:my-0 md:ml-8 text-gray-400 hover:text-neon hover:text-shadow-neon"
            href="/login"
          >
            Login
          </Link>
            )}
        </ul>
      </div>
    </div>
  );
};


export default Navbar;
