"use client"; // DO NOT TOUCH THIS

// OPTION 1 LOGIN (just comment out whichever option u not using)

import React, { useState } from 'react';
import '@/app/globals.css';

export default function Login() {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleMode = () => {
      setIsSignUp(!isSignUp);
    };
  
    return (
        <div className={`container bg-white min-h-screen flex items-center justify-center ${isSignUp ? 'sign-up-mode' : ''}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form className={`sign-in-form ${isSignUp ? 'opacity-0' : 'opacity-100'}`}>
                        <h2 className="title text-3xl text-gray-700">Sign in</h2>
                        <div className="input-field max-w-lg bg-gray-200 rounded-full mt-4 px-4 flex items-center">
                            <i className="fas fa-user text-gray-600"></i>
                            <input type="text" placeholder="Username" className="pl-4 bg-transparent outline-none text-gray-600" />
                        </div>
                        <div className="input-field max-w-lg bg-gray-200 rounded-full mt-4 px-4 flex items-center">
                            <i className="fas fa-lock text-gray-600"></i>
                            <input type="password" placeholder="Password" className="pl-4 bg-transparent outline-none text-gray-600" />
                        </div>
                        <input type="submit" value="Login" className="btn solid bg-blue-500 text-white py-2 px-4 rounded-full mt-4 cursor-pointer" />
                        <p className="social-text mt-4 text-gray-600">Or Sign in with social platforms</p>
                        <div className="social-media flex">
                            <a href="#" className="social-icon p-2 border border-gray-600 rounded-full mr-2">
                            <i className="fab fa-facebook-f text-gray-600"></i>
                            </a>
                            <a href="#" className="social-icon p-2 border border-gray-600 rounded-full mr-2">
                            <i className="fab fa-twitter text-gray-600"></i>
                            </a>
                            <a href="#" className="social-icon p-2 border border-gray-600 rounded-full mr-2">
                            <i className="fab fa-google text-gray-600"></i>
                            </a>
                            <a href="#" className="social-icon p-2 border border-gray-600 rounded-full">
                            <i className="fab fa-linkedin-in text-gray-600"></i>
                            </a>
                        </div>
                    </form>
                    <form className={`sign-up-form ${isSignUp ? 'opacity-100' : 'opacity-0'}`}>
                        <h2 className="title text-3xl text-gray-700">Sign up</h2>
                        <div className="input-field max-w-lg bg-gray-200 rounded-full mt-4 px-4 flex items-center">
                            <i className="fas fa-user text-gray-600"></i>
                            <input type="text" placeholder="Username" className="pl-4 bg-transparent outline-none text-gray-600" />
                        </div>
                        <div className="input-field max-w-lg bg-gray-200 rounded-full mt-4 px-4 flex items-center">
                            <i className="fas fa-envelope text-gray-600"></i>
                            <input type="email" placeholder="Email" className="pl-4 bg-transparent outline-none text-gray-600" />
                        </div>
                        <div className="input-field max-w-lg bg-gray-200 rounded-full mt-4 px-4 flex items-center">
                            <i className="fas fa-lock text-gray-600"></i>
                            <input type="password" placeholder="Password" className="pl-4 bg-transparent outline-none text-gray-600" />
                        </div>
                        <input type="submit" className="btn bg-blue-500 text-white py-2 px-4 rounded-full mt-4 cursor-pointer" value="Sign up" />
                        <p className="social-text mt-4 text-gray-600">Or Sign up with social platforms</p>
                        <div className="social-media flex">
                            <a href="#" className="social-icon p-2 border border-gray-600 rounded-full mr-2">
                            <i className="fab fa-facebook-f text-gray-600"></i>
                            </a>
                            <a href="#" className="social-icon p-2 border border-gray-600 rounded-full mr-2">
                            <i className="fab fa-twitter text-gray-600"></i>
                            </a>
                            <a href="#" className="social-icon p-2 border border-gray-600 rounded-full mr-2">
                            <i className="fab fa-google text-gray-600"></i>
                            </a>
                            <a href="#" className="social-icon p-2 border border-gray-600 rounded-full">
                            <i className="fab fa-linkedin-in text-gray-600"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="panels-container">
                <div className={`panel left-panel ${isSignUp ? 'hidden' : ''}`}>
                    <div className="content">
                    <h3 className="text-2xl text-gray-700">New here ?</h3>
                    <p className="text-gray-600">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!
                    </p>
                    <button
                        className="btn transparent bg-white text-gray-700 py-2 px-4 rounded-full mt-4 cursor-pointer"
                        onClick={toggleMode}
                    >
                        Sign up
                    </button>
                    </div>
                    <img src="../../../public/log.svg" className="image" alt="" />
                </div>
                <div className={`panel right-panel ${isSignUp ? '' : 'hidden'}`}>
                    <div className="content">
                    <h3 className="text-2xl text-gray-700">One of us ?</h3>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.
                    </p>
                    <button
                        className="btn transparent bg-white text-gray-700 py-2 px-4 rounded-full mt-4 cursor-pointer"
                        onClick={toggleMode}
                    >
                        Sign in
                    </button>
                    </div>
                    <img src="../../../public/register.svg" className="image" alt="" />
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

