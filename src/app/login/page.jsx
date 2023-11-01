"use client"; // DO NOT TOUCH THIS

// OPTION 1 LOGIN (just comment out whichever option u not using)

import React, { useState } from "react";
import "@/app/globals.css";
import Image from "next/image";
import register from "../../../public/register.svg";
import log from "../../../public/log.svg";
import {
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  browserLocalPersistence,
  updateProfile,
} from "firebase/auth";

import { auth } from "../../../firebase";
import { redirect } from "next/navigation";
export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = auth.currentUser;
        // user.displayName = username;
        console.log("username is" + username);
        updateProfile(user, {
          displayName: username,
          photoURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Beetlejuice_onstage.jpg/640px-Beetlejuice_onstage.jpg",
        });
        console.log("DISPLAY NAME is " + user.displayName);
        console.log(userCredential);
        console.log("SIGN UP END ");
        setIsSignUp(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signIn = (e) => {
    e.preventDefault(); //prevents the page from being reloaded
    // signInWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {

    //     // console.log(userCredential);
    //     console.log(auth.currentUser + "LOGGED IN");

    //     console.log(userCredential);

    //     // setPersistence(auth, browserSessionPersistence); // setting authentication state persistent for SESSION only
    //     // setPersistence(auth, browserLocalPersistence); // setting authentication state persistent LOCALLY which means that user stays logged in even after the tab is closed

    // })
    // .catch((error) => {

    //     console.log(error);
    // })

    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        console.log("LOGGED IN + PERSISTENCE SET");
        return signInWithEmailAndPassword(auth, email, password);
      })
      .then(() => redirect("/test"));
  };
  return (
    <div
      id="container"
      className={`before:content-[''] before:transition-all md:before:-translate-y-1/2 before:-translate-x-1/2 before:absolute md:before:w-[2000px] md:before:h-[2000px] before:w-[1500px] before:h-[1500px] md:before:-top-[10%] md:before:left-[initial]  before:left-[30%] before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:duration-[1800ms] before:ease-in-out before:rounded-[50%] before:z-[6] relative w-full bg-white md:min-h-screen overflow-hidden min-h-[800px] h-screen ${
        isSignUp
          ? "md:before:right-[52%] md:before:translate-x-full before:translate-y-full before:bottom-[32%]"
          : "md:before:-right-[19%] before:bottom-[68%]"
      }`}
    >
      <div id="forms-container" className="absolute w-full h-full top-0 left-0">
        <div
          id="signin-signup"
          className={`absolute md:top-1/2 transition-all -translate-x-1/2 md:-translate-y-1/2  w-1/2 duration-1000 delay-700 ease-in-out grid grid-cols-1 z-[5] ${
            isSignUp
              ? "md:left-1/4 left-1/2 top-[5%]"
              : "md:left-3/4 left-1/2 top-[95%] -translate-y-full"
          }`}
        >
          <form
            className={`flex items-center justify-center flex-col py-0 px-20 transition delay-700 duration-200 overflow-hidden col-start-1 col-end-2 row-start-1 row-end-2 ${
              isSignUp ? "opacity-0 z-[1]" : "z-[2]"
            } `}
            onSubmit={signIn}
          >
            <h2 className="text-4xl text-neutral-700 mb-2.5">Sign in</h2>
            <div className="input-field max-w-sm bg-gray-100 rounded-[55px] h-14 my-2.5 mx-0 flex items-center grid grid-cols-[15] [85] px-1 py-0 relative">
              <i className="fas fa-user text-center leading-[55px] text-gray-400 transition duration-500 text-[1.1rem]"></i>
              <input
                type="text"
                placeholder="Username"
                className="pl-4 bg-transparent outline-none border-none leading-4 font-semibold text-[1.1rem] text-gray-700 placeholder-gray-300 font-medium"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field max-w-sm bg-gray-100 rounded-[55px] h-14 my-2.5 mx-0 flex items-center grid grid-cols-[15] [85] px-1 py-0 relative">
              <i className="fas fa-lock text-center leading-[55px] text-gray-400 transition duration-500 text-[1.1rem]"></i>
              <input
                type="password"
                placeholder="Password"
                className="pl-4 bg-transparent outline-none border-none leading-4 font-semibold text-[1.1rem] text-gray-700 placeholder-gray-300 font-medium"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            className={`flex items-center justify-center flex-col py-0 px-20 transition-all delay-700 duration-200 overflow-hidden col-start-1 col-end-2 row-start-1 row-end-2  ${
              isSignUp ? "opacity-100 z-[2]" : "opacity-0 z-[1]"
            }`}
            onSubmit={signUp}
          >
            <h2 className="text-4xl text-neutral-700 mb-2.5">Sign up</h2>
            <div className="input-field max-w-sm bg-gray-100 rounded-[55px] h-14 my-2.5 mx-0 flex items-center grid grid-cols-[15] [85] px-1 py-0 relative">
              <i className="fas fa-user text-center leading-[55px] text-gray-400 transition duration-500 text-[1.1rem]"></i>
              <input
                type="text"
                placeholder="Username"
                className="pl-4 bg-transparent outline-none border-none leading-4 font-semibold text-[1.1rem] text-gray-700 placeholder-gray-300 font-medium"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="input-field max-w-sm bg-gray-100 rounded-[55px] h-14 my-2.5 mx-0 flex items-center grid grid-cols-[15] [85] px-1 py-0 relative">
              <i className="fas fa-envelope text-center leading-[55px] text-gray-400 transition duration-500 text-[1.1rem]"></i>
              <input
                type="email"
                placeholder="Email"
                className="pl-4 bg-transparent outline-none border-none leading-4 font-semibold text-[1.1rem] text-gray-700 placeholder-gray-300 font-medium"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field max-w-sm bg-gray-100 rounded-[55px] h-14 my-2.5 mx-0 flex items-center grid grid-cols-[15] [85] px-1 py-0 relative">
              <i className="fas fa-lock text-center leading-[55px] text-gray-400 transition duration-500 text-[1.1rem]"></i>
              <input
                type="password"
                placeholder="Password"
                className="pl-4 bg-transparent outline-none border-none leading-4 font-semibold text-[1.1rem] text-gray-700 placeholder-gray-300 font-medium"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
      <div className="absolute h-full w-full top-0 left-0 grid md:grid-cols-2 max-md:grid-rows-[1fr_2fr_1fr] ">
        <div
          id="left-panel"
          className={`flex md:flex-col flex-row md:items-end items-center justify-around text-center z-[6] md:px-12 md:py-3 md:pl-[17%] md:pr-[17%] md:pb-2 px-10 py-[8%] md:row-start-auto md:row-end-auto row-start-1 row-end-2 ${
            isSignUp ? "pointer-events-none" : "pointer-events-all"
          }`}
        >
          <div
            id="content"
            className={`text-white transition ease-in-out duration-1000 delay-700 pr-[15%] ${
              isSignUp ? "md:-translate-x-[800px] -translate-y-[300px]" : ""
            }`}
          >
            <h3 className="text-2xl text-gray-700">New here ?</h3>
            <p className="text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              className="btn transparent bg-white text-gray-700 py-2 px-4 rounded-full mt-4 cursor-pointer"
              onClick={() => setIsSignUp((prev) => !prev)}
            >
              Sign up
            </button>
          </div>
          <Image
            src={log}
            width={50}
            height={50}
            className={`${
              isSignUp
                ? "md:-translate-x-[800px] -translate-y-[300px]"
                : "translate-x-[0%]"
            } md:w-full w-[200px] transition-transform md:duration-[1100ms] duration-[900ms] ease-in-out md:delay-400 delay-[600ms]`}
            alt=""
          />
        </div>
        <div
          id="right-panel"
          className={`flex md:flex-col flex-row md:items-end items-center justify-around text-center z-[6] md:px-12 md:py-3 md:pl-[17%] md:pr-[17%] md:pb-2 px-10 py-[8%] md:row-start-auto md:row-end-auto row-start-3 row-end-4 ${
            isSignUp ? "pointer-events-all" : "pointer-events-none"
          }`}
        >
          <div
            id="content"
            className={`text-white transition ease-in-out duration-1000 delay-700 pr-[15%] ${
              isSignUp
                ? "translate-x-[0%]"
                : "md:translate-x-[800px] translate-y-[300px]"
            }`}
          >
            <h3 className="text-2xl text-gray-700">One of us ?</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              className="btn transparent bg-white text-gray-700 py-2 px-4 rounded-full mt-4 cursor-pointer"
              onClick={() => setIsSignUp((prev) => !prev)}
            >
              Sign in
            </button>
          </div>
          <Image
            src={register}
            width={50}
            height={50}
            className={`${
              isSignUp
                ? "translate-x-[0%]"
                : "md:translate-x-[800px] translate-y-[300px]"
            } md:w-full w-[200px] transition-transform md:duration-[1100ms] duration-[900ms] ease-in-out md:delay-400 delay-[600ms]`}
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
