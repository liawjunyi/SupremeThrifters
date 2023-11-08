"use client"; // DO NOT TOUCH THIS

import React, { useState } from "react";
import "@/app/globals.css";
import Image from "next/image";
import register from "../../../public/register.svg";
import log from "../../../public/log.svg";
import logo from "../../../public/st_logo.svg";
import {
  setPersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  browserLocalPersistence,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../../../firebase";
import { useRouter } from "next/navigation";
import { doc, setDoc } from "firebase/firestore";
import Button from "@/components/Button";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { push } = useRouter();

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

        setDoc(doc(db, "users", user.uid), {
          username: username,
          name: "",
          profilePic: "",
          address: "",
          email: user.email,
          uid: user.uid,
        })
          .then(() => {
            setDoc(doc(db, `users/${user.uid}/reserved`, user.uid), {});
            setDoc(doc(db, `users/${user.uid}/liked`, user.uid), {});
          })
          .then(() => setIsSignUp(false));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signIn = (e) => {
    e.preventDefault(); //prevents the page from being reloaded

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
      .then(() => push("/"));
  };

  return (
    <div
      id="container"
      className={`before:content-[''] before:transition-all md:before:-translate-y-1/2 before:-translate-x-1/2 before:absolute md:before:w-[2000px] md:before:h-[2000px] before:w-[1500px] before:h-[1500px] md:before:-top-[10%] md:before:left-[initial]  before:left-[30%] before:bg-gradient-to-r before:from-primary before:to-primary before:duration-[1800ms] before:ease-in-out before:rounded-[50%] before:z-[6] relative w-full bg-white md:min-h-screen overflow-hidden min-h-[800px] h-screen ${
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
            <div className="justify-center items-center flex gap-5 mb-10 w-full ">
              <Image className="w-10 h-10 lg:w-10 lg:h-10" src={logo} />
              <span className="font-bold text-[20px] lg:text-[40px] text-gray-700">
                Supreme Thrifters
              </span>
            </div>

            <h2 className="text-4xl text-neutral-700 mb-2.5">Sign in</h2>
            <div className="input-field max-w-sm bg-gray-100 rounded-[55px] h-14 my-2.5 mx-0 flex items-center pl-5 px-1 py-0 relative">
              <i className="fas fa-user text-center leading-[55px] text-gray-400 transition duration-500 text-[1.1rem]"></i>
              <input
                type="text"
                placeholder="Email"
                className="pl-4 bg-transparent outline-none border-none leading-4 font-semibold text-[1.1rem] text-gray-700 placeholder-gray-300 font-medium"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field max-w-sm bg-gray-100 rounded-[55px] h-14 my-2.5 mx-0 flex items-center pl-5 px-1 py-0 relative">
              <i className="fas fa-lock text-center leading-[55px] text-gray-400 transition duration-500 text-[1.1rem]"></i>
              <input
                type="password"
                placeholder="Password"
                className="pl-4 bg-transparent outline-none border-none leading-4 font-semibold text-[1.1rem] text-gray-700 placeholder-gray-300 font-medium"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button size="xs" type="submit" className={"my-3"}>
              Sign In
            </Button>
          </form>
          <form
            className={`flex items-center justify-center flex-col py-0 px-20 transition-all delay-700 duration-200 overflow-hidden col-start-1 col-end-2 row-start-1 row-end-2  ${
              isSignUp ? "opacity-100 z-[2]" : "opacity-0 z-[1]"
            }`}
            onSubmit={signUp}
          >
            <div className="justify-center items-center flex gap-5 mb-10 w-full ">
              <Image className="w-10 h-10 lg:w-10 lg:h-10" src={logo} />
              <span className="font-bold text-[20px] lg:text-[40px] text-gray-700">
                Supreme Thrifters
              </span>
            </div>

            <h2 className="text-4xl text-neutral-700 mb-2.5">Sign up</h2>
            <div className="input-field max-w-sm bg-gray-100 rounded-[55px] h-14 my-2.5 mx-0 flex items-center pl-5 px-1 py-0 relative">
              <i className="fas fa-lock text-center leading-[55px] text-gray-400 transition duration-500 text-[1.1rem]"></i>
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
            <div className="input-field max-w-sm bg-gray-100 rounded-[55px] h-14 my-2.5 mx-0 flex items-center pl-5 px-1 py-0 relative">
              <i className="fas fa-envelope text-center leading-[55px] text-gray-400 transition duration-500 text-[1.1rem]"></i>
              <input
                type="email"
                placeholder="Email"
                className="pl-4 bg-transparent outline-none border-none leading-4 font-semibold text-[1.1rem] text-gray-700 placeholder-gray-300 font-medium"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field max-w-sm bg-gray-100 rounded-[55px] h-14 my-2.5 mx-0 flex items-center pl-5 px-1 py-0 relative">
              <i className="fas fa-lock text-center leading-[55px] text-gray-400 transition duration-500 text-[1.1rem]"></i>
              <input
                type="password"
                placeholder="Password"
                className="pl-4 bg-transparent outline-none border-none leading-4 font-semibold text-[1.1rem] text-gray-700 placeholder-gray-300 font-medium"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button size="xs" type="submit" className={"my-3"}>
              Sign Up
            </Button>
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
            <h3 className="text-2xl text-white">Welcome Back!</h3>
            <p className="text-white">Please login with your personal info.</p>

            <Button
              size="xs"
              className={"my-3 !bg-white !text-primary"}
              onClick={() => setIsSignUp((prev) => !prev)}
            >
              Sign Up
            </Button>
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
            <h3 className="text-2xl text-white">
              Welcome to Supreme Thrifters!
            </h3>
            <p className="text-white">
              Enter your personal details and sign up with us.
            </p>
            <Button
              size="xs"
              className={"my-3 !bg-white !text-primary"}
              onClick={() => setIsSignUp((prev) => !prev)}
            >
              Sign in
            </Button>
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
