"use client";

import { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { tiltneon } from "../font";

export default function Home() {
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(false);

  const [isSignUp, setIsSignUp] = useState(false);

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div class="flex flex-col justify-center items-center m-1/10 h-full">
      <div
        id="container"
        class={
          "relative xl:w-4/6 md:w-3/4 sm:w-full h-[480px] rounded-sm shadow-preset"
        }
      >
        <div
          id="sign-up"
          class={`absolute top-0 left-0 h-full w-1/2 opacity-0 z-1 transition-all duration-500 ease-in-out ${
            active ? "translate-x-full opacity-100 z-5" : null
          }`}
        >
          <form
            class="flex items-center justify-center flex-col h-full bg-white p-[40px]"
            action="#"
          >
            <span class={`${tiltneon.className} text-xxl font-bold`}>
              Create Account
            </span>
            <div class="my-[20px] mx-[0px]">
              <a
                href="#"
                class="inline-flex justify-center items-center border-2 rounded-md mx-[5px] h-[40px] w-[40px]"
              >
                <i
                  class="fa-brands fa-facebook-f"
                  style={{ color: "#000000" }}
                ></i>
              </a>
              <a
                href="#"
                class="inline-flex justify-center items-center border-2 rounded-md mx-[5px] h-[40px] w-[40px]"
              >
                <i class="fa-brands fa-google" style={{ color: "#000000" }}></i>
              </a>
              <a
                href="#"
                class="inline-flex justify-center items-center border-2 rounded-md mx-[5px] h-[40px] w-[40px]"
              >
                <i
                  class="fa-brands fa-linkedin-in"
                  style={{ color: "#000000" }}
                ></i>
              </a>
            </div>
            <span className={`${tiltneon.className} mb-3`}>
              or use your email for registration
            </span>
            <Input placeholder="Name" className="mb-3 mx-3" />
            <Input placeholder="Email" className="mb-3 mx-3" />
            <Input
              placeholder="Password"
              className="mb-3 mx-3"
              value={password}
              handleChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button color="white" size="sm" bold={true} className="mt-3">
              <span className={`${tiltneon.className} text-white`}>
                Sign Up
              </span>
            </Button>
          </form>
        </div>

        <div
          id="sign-in"
          class={`absolute top-0 left-0 h-full w-1/2 z-2 transition-all duration-500 ease-in-out ${
            active ? "translate-x-full " : null
          }`}
        >
          <form
            class="flex items-center justify-center flex-col h-full p-[40px]"
            action="#"
          >
            <span class={`${tiltneon.className} text-xxl font-bold`}>
              Sign In
            </span>
            <div class="my-[20px] mx-[0px]">
              <a
                href="#"
                class="inline-flex justify-center items-center border-2 rounded-md mx-[5px] h-[40px] w-[40px]"
              >
                <i
                  class="fa-brands fa-facebook-f"
                  style={{ color: "#000000" }}
                ></i>
              </a>
              <a
                href="#"
                class="inline-flex justify-center items-center border-2 rounded-md mx-[5px] h-[40px] w-[40px]"
              >
                <i class="fa-brands fa-google" style={{ color: "#000000" }}></i>
              </a>
              <a
                href="#"
                class="inline-flex justify-center items-center border-2 rounded-md mx-[5px] h-[40px] w-[40px]"
              >
                <i
                  class="fa-brands fa-linkedin-in"
                  style={{ color: "#000000" }}
                ></i>
              </a>
            </div>
            <span class={`${tiltneon.className} mb-3`}>
              or use your account
            </span>

            <Input placeholder="Email" className="mb-3 mx-3" />
            <Input
              placeholder="Password"
              className="mb-3 mx-3"
              value={password}
              handleChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <a class="text-button text-sm no-underline mt-[15px]" href="#">
              Forget your Password?
            </a>
            <Button color="white" size="sm" bold={true} className="mt-3">
              <span className={`${tiltneon.className} text-white`}>
                Sign In
              </span>
            </Button>
          </form>
        </div>
        <div
          id="overlay-container"
          class={`absolute top-0 left-1/2 w-1/2 h-full z-100 overflow-hidden  transition-transform duration-500 ease-in-out ${
            active ? "-translate-x-full" : null
          }`}
        >
          <div
            id="overlay"
            class={`-left-full h-full w-[200%] relative translate-x-0 bg-stone-300 transition-transform duration-500 ease-in-out ${
              active ? "translate-x-1/2" : null
            }`}
          >
            <div
              id="overlay-left"
              class={`absolute flex items-center flex-col justify-center px-[40px] top-0 h-full w-1/2  transition-transform duration-500 ease-in-out ${
                active ? "translate-x-0" : "-translate-x-1/4"
              }`}
            >
              <span class={`${tiltneon.className} text-xxl font-bold`}>
                Welcome Back!
              </span>
              <span class={`${tiltneon.className}`}>
                To keep connected with us please login with your personal info
              </span>
              <Button
                color="white"
                size="sm"
                bold={true}
                className="mt-3"
                handleChange={() => setActive(false)}
              >
                <span className={`${tiltneon.className} text-white`}>
                  Sign In
                </span>
              </Button>
            </div>
            <div
              id="overlay-right"
              class={`absolute flex items-center flex-col justify-center px-[40px] top-0 right-0 h-full w-1/2 translate-x-0 ${
                active ? "translate-x-1/4" : null
              }`}
            >
              <span class={`${tiltneon.className} text-xxl font-bold`}>
                Hello, Friend!
              </span>
              <span class={`${tiltneon.className}`}>
                Enter your personal details and start your journey with us
              </span>
              <Button
                color="white"
                size="sm"
                bold={true}
                className="mt-3"
                handleChange={() => setActive(true)}
              >
                <span className={`${tiltneon.className} text-white`}>
                  Sign Up
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
