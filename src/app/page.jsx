"use client";

import Button from "@/components/Button";

export default function Home() {
  return (
    <div class="container" id="main">
      <div class="sign-up">
        <form action="#">
          <h1>Create Account</h1>
          <div class="social-container">
            <a href="#" class="social">
              <i class="fab fa-facbook-f"></i>
            </a>
            <a href="#" class="social">
              <i class="fab fa-google-plus-g"></i>
            </a>
            <a href="#" class="social">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p>or use your email for registration</p>
          <input type="text" name="txt" placeholder="Name" required="" />
          <input type="email" name="email" placeholder="Email" required="" />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
          />
          <Button>Sign Up</Button>
        </form>
      </div>

      <div class="sign-in">
        <form action="#">
          <h1>Sign In</h1>
          <div class="social-container">
            <a href="#" class="social">
              <i class="fab fa-facbook-f"></i>
            </a>
            <a href="#" class="social">
              <i class="fab fa-google-plus-g"></i>
            </a>
            <a href="#" class="social">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p>or use your account</p>
          <input type="email" name="email" placeholder="Email" required="" />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
          />
          <a href="#"> Forget you Password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button id="signIn">Sign In</button>
          </div>
          <div class="overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal detials and start your journey with us</p>
            <button id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
