"use client"; // DO NOT TOUCH THIS

// OPTION 1 LOGIN (just comment out whichever option u not using)

import React, { useState } from "react";
import "@/app/globals.css";
import Image from "next/image";
import register from "../../../public/register.svg";
import log from "../../../public/log.svg";
export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div
      className={`container relative w-full bg-white min-h-screen overflow-hidden before:content-[''] before:absolute  before:w-[2000px] before:top-[-10%] before:right-[48%] before:transform before:-translate-y-1/2 before:bg-gradient-to-tl before:from-blue-500 before:via-transparent before:to-blue-300 before:transition before:duration-1800 before:ease-in-out before:rounded-full before:z-[6] flex items-center justify-center ${
        isSignUp ? "sign-up-mode" : ""
      }`}
    >
      <div className="forms-container absolute w-full h-full top-0 left-0">
        <div className="signin-signup absolute top-2/4 -translate-x-2/4 -translate-y-2/4 left-3/4 w-2/4 transition duration-700 ease-in-out grid grid-cols-1 z-[5]">
          <form
            className={`sign-in-form ${
              isSignUp ? "opacity-0" : "opacity-100"
            } flex items-center justify-center flex-col py-0 px-20 transition-all duration-700 overflow-hidden col-start-1 col-end-2 row-start-1 row-end-2 z-[2]`}
          >
            <h2 className="text-4xl text-neutral-700 mb-2.5">Sign in</h2>
            <div className="input-field max-w-sm bg-gray-100 rounded-[55px] h-14 my-2.5 mx-0 flex items-center grid grid-cols-[15] [85] px-1 py-0 relative">
              <i className="fas fa-user text-center leading-[55px] text-gray-400 transition duration-500 text-[1.1rem]"></i>
              <input
                type="text"
                placeholder="Username"
                className="pl-4 bg-transparent outline-none border-none leading-4 font-semibold text-[1.1rem] text-gray-700 placeholder-gray-300 font-medium"
              />
            </div>
            <div className="input-field max-w-sm bg-gray-100 rounded-[55px] h-14 my-2.5 mx-0 flex items-center grid grid-cols-[15] [85] px-1 py-0 relative">
              <i className="fas fa-lock text-center leading-[55px] text-gray-400 transition duration-500 text-[1.1rem]"></i>
              <input
                type="password"
                placeholder="Password"
                className="pl-4 bg-transparent outline-none border-none leading-4 font-semibold text-[1.1rem] text-gray-700 placeholder-gray-300 font-medium"
              />
            </div>
            <input
              type="submit"
              value="Login"
              className="btn solid w-[150px] bg-blue-500 border-none outline-none h-12 rounded-3xl text-white uppercase font-semibold my-2.5 mx-0 cursor-pointer transition duration-500 btn hover:bg-blue-500"
            />
            <p className="social-text px-0 py-7 text-base">
              Or Sign in with social platforms
            </p>
            <div className="social-media flex justify-center">
              <a
                href="#"
                className="social-icon h-[46px] w-[46px] flex justify-center items-center mx-1.5 my-0 text-gray-700 rounded-full border border-solid border-gray-700 no-underline leading-4 transition duration-300 hover:text-blue-500 hover:border-blue-500"
              >
                <i className="fab fa-facebook-f text-gray-600"></i>
              </a>
              <a
                href="#"
                className="social-icon h-[46px] w-[46px] flex justify-center items-center mx-1.5 my-0 text-gray-700 rounded-full border border-solid border-gray-700 no-underline leading-4 transition duration-300 hover:text-blue-500 hover:border-blue-500"
              >
                <i className="fab fa-twitter text-gray-600"></i>
              </a>
              <a
                href="#"
                className="social-icon h-[46px] w-[46px] flex justify-center items-center mx-1.5 my-0 text-gray-700 rounded-full border border-solid border-gray-700 no-underline leading-4 transition duration-300 hover:text-blue-500 hover:border-blue-500"
              >
                <i className="fab fa-google text-gray-600"></i>
              </a>
              <a
                href="#"
                className="social-icon p-2 border border-gray-600 rounded-full"
              >
                <i className="fab fa-linkedin-in text-gray-600"></i>
              </a>
            </div>
          </form>
          <form
            className={`sign-up-form ${
              isSignUp ? "opacity-100" : "opacity-0"
            } opacity-0 z-[1]`}
          >
            <h2 className="text-4xl text-neutral-700 mb-2.5">Sign up</h2>
            <div className="input-field max-w-sm bg-gray-100 rounded-[55px] h-14 my-2.5 mx-0 flex items-center grid grid-cols-[15] [85] px-1 py-0 relative">
              <i className="fas fa-user text-center leading-[55px] text-gray-400 transition duration-500 text-[1.1rem]"></i>
              <input
                type="text"
                placeholder="Username"
                className="pl-4 bg-transparent outline-none border-none leading-4 font-semibold text-[1.1rem] text-gray-700 placeholder-gray-300 font-medium"
              />
            </div>
            <div className="input-field max-w-sm bg-gray-100 rounded-[55px] h-14 my-2.5 mx-0 flex items-center grid grid-cols-[15] [85] px-1 py-0 relative">
              <i className="fas fa-envelope text-center leading-[55px] text-gray-400 transition duration-500 text-[1.1rem]"></i>
              <input
                type="email"
                placeholder="Email"
                className="pl-4 bg-transparent outline-none border-none leading-4 font-semibold text-[1.1rem] text-gray-700 placeholder-gray-300 font-medium"
              />
            </div>
            <div className="input-field max-w-sm bg-gray-100 rounded-[55px] h-14 my-2.5 mx-0 flex items-center grid grid-cols-[15] [85] px-1 py-0 relative">
              <i className="fas fa-lock text-center leading-[55px] text-gray-400 transition duration-500 text-[1.1rem]"></i>
              <input
                type="password"
                placeholder="Password"
                className="pl-4 bg-transparent outline-none border-none leading-4 font-semibold text-[1.1rem] text-gray-700 placeholder-gray-300 font-medium"
              />
            </div>
            <input
              type="submit"
              className="btn solid w-[150px] bg-blue-500 border-none outline-none h-12 rounded-3xl text-white uppercase font-semibold my-2.5 mx-0 cursor-pointer transition duration-500 btn hover:bg-blue-500"
              value="Sign up"
            />
            <p className="social-text px-0 py-7 text-base">
              Or Sign up with social platforms
            </p>
            <div className="social-media flex justify-center">
              <a
                href="#"
                className="social-icon h-[46px] w-[46px] flex justify-center items-center mx-1.5 my-0 text-gray-700 rounded-full border border-solid border-gray-700 no-underline leading-4 transition duration-300 hover:text-blue-500 hover:border-blue-500"
              >
                <i className="fab fa-facebook-f text-gray-600"></i>
              </a>
              <a
                href="#"
                className="social-icon h-[46px] w-[46px] flex justify-center items-center mx-1.5 my-0 text-gray-700 rounded-full border border-solid border-gray-700 no-underline leading-4 transition duration-300 hover:text-blue-500 hover:border-blue-500"
              >
                <i className="fab fa-twitter text-gray-600"></i>
              </a>
              <a
                href="#"
                className="social-icon h-[46px] w-[46px] flex justify-center items-center mx-1.5 my-0 text-gray-700 rounded-full border border-solid border-gray-700 no-underline leading-4 transition duration-300 hover:text-blue-500 hover:border-blue-500"
              >
                <i className="fab fa-google text-gray-600"></i>
              </a>
              <a
                href="#"
                className="social-icon p-2 border border-gray-600 rounded-full"
              >
                <i className="fab fa-linkedin-in text-gray-600"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container absolute h-full w-full top-0 left-0 grid grid-cols-2">
        <div
          className={`panel left-panel flex flex-col items-end justify-around text-center z=[6] pointer-events-all px-12 py-3 pl-[17%] pr-[17%] pb-2 ${
            isSignUp ? "hidden" : ""
          }`}
        >
          <div className="content">
            <h3 className="text-2xl text-gray-700">New here ?</h3>
            <p className="text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              className="btn transparent bg-white text-gray-700 py-2 px-4 rounded-full mt-4 cursor-pointer"
              onClick={toggleMode}
            >
              Sign up
            </button>
          </div>
          <Image
            src={log}
            width={50}
            height={50}
            className="image w-full transition-transform duration-1100 ease-in-out delay-400"
            alt=""
          />
        </div>
        <div
          className={`panel right-panel flex flex-col items-end justify-around text-center z=[6] pointer-events-none px-12 py-3 pl-[17%] pr-[17%] pb-2 ${
            isSignUp ? "" : "hidden"
          }`}
        >
          <div className="content">
            <h3 className="text-2xl text-gray-700">One of us ?</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              className="btn transparent bg-white text-gray-700 py-2 px-4 rounded-full mt-4 cursor-pointer"
              onClick={toggleMode}
            >
              Sign in
            </button>
          </div>
          <Image
            src={register}
            width={50}
            height={50}
            className="image w-full transition-transform duration-1100 ease-in-out delay-400"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

// Option 2 LOGIN (just comment out whichever option u not using)

// import React, { useState } from 'react';

// export default function Login() {
//     const [isSignUpMode, setIsSignUpMode] = useState(false);

//     const handleModeToggle = () => {
//       setIsSignUpMode((prevMode) => !prevMode);
//     };

//   return (
//     <div className="Login bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 min-h-screen flex items-center justify-center">
//         <div className={`container mx-auto p-4 ${isSignUpMode ? 'sign-up-mode' : ''}`}>
//             <div className="panels-container min-h-screen flex">
//                 <div className={`panel left-panel ${isSignUpMode ? 'hidden' : ''}`}>
//                     <div className="content text-white text-right">
//                         <h3 className="text-2xl">New here ?</h3>
//                         <p className="mt-2">
//                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!
//                         </p>
//                         <button
//                         className="btn transparent text-white mt-4"
//                         onClick={handleModeToggle}
//                         >
//                         Sign up
//                         </button>
//                     </div>
//                     <img
//                         src="../../../public/log.svg"
//                         alt="Sign up"
//                         className="image absolute w-1/2 right-0 transform translate-x-1/2"
//                     />
//                 </div>
//                 <div className={`panel right-panel ${isSignUpMode ? '' : 'hidden'}`}>
//                     <div className="content text-white text-left">
//                         <h3 className="text-2xl">One of us ?</h3>
//                         <p className="mt-2">
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.
//                         </p>
//                         <button
//                         className="btn transparent text-white mt-4"
//                         onClick={handleModeToggle}
//                         >
//                         Sign in
//                         </button>
//                     </div>
//                     <img
//                         src="../../../public/register.svg"
//                         alt="Sign in"
//                         className="image absolute w-1/2 left-0 transform -translate-x-1/2"
//                     />
//                 </div>
//             </div>

//             <div className="forms-container bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto mt-8">
//                 <div className="signin-signup">
//                     <form action="#" className={`auth-form ${isSignUpMode ? 'sign-up' : 'sign-in'}`}>
//                         <h2 className="text-2xl text-gray-700 mb-4">
//                         {isSignUpMode ? 'Sign up' : 'Sign in'}
//                         </h2>
//                         <div className="input-field mb-4">
//                             <i className="fas fa-user mr-2"></i>
//                             <input type="text" placeholder="Username" className="w-full bg-gray-200 p-2 rounded" />
//                         </div>
//                         {isSignUpMode && (
//                         <div className="input-field mb-4">
//                             <i className="fas fa-envelope mr-2"></i>
//                             <input type="email" placeholder="Email" className="w-full bg-gray-200 p-2 rounded" />
//                         </div>
//                         )}
//                         <div className="input-field mb-4">
//                             <i className="fas fa-lock mr-2"></i>
//                             <input
//                                 type="password"
//                                 placeholder="Password"
//                                 className="w-full bg-gray-200 p-2 rounded"
//                             />
//                         </div>
//                         <input
//                         type="submit"
//                         value={isSignUpMode ? 'Sign up' : 'Login'}
//                         className="btn bg-blue-500 text-white font-semibold py-2 px-4 rounded cursor-pointer"
//                         />
//                         <p className="social-text text-gray-500 mt-2">
//                         Or {isSignUpMode ? 'Sign up' : 'Sign in'} with social platforms
//                         </p>
//                         <div className="social-media mt-2">
//                             <a href="#" className="social-icon bg-gray-200 p-2 rounded text-gray-500 mr-2">
//                                 <i className="fab fa-facebook-f"></i>
//                             </a>
//                             <a href="#" className="social-icon bg-gray-200 p-2 rounded text-gray-500 mr-2">
//                                 <i className="fab fa-twitter"></i>
//                             </a>
//                             <a href="#" className="social-icon bg-gray-200 p-2 rounded text-gray-500 mr-2">
//                                 <i className="fab fa-google"></i>
//                             </a>
//                             <a href="#" className="social-icon bg-gray-200 p-2 rounded text-gray-500">
//                                 <i className="fab fa-linkedin-in"></i>
//                             </a>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </div>
//   );
// }
