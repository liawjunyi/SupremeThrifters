import React, { useState } from "react";
import Confetti from "react-confetti";

const Button = ({
  size,
  bold,
  type,
  handleChange,
  fontColor,
  className,
  children,
  animation,
  confetti,
  ...props
}) => {
  bold = bold ? "font-bold" : "font-normal";
  size =
    size == "xs"
      ? "px-sm py-xs"
      : size == "sm"
      ? "px-md py-sm"
      : size == "md"
      ? "px-md py-lg"
      : "px-lg py-xl";

  // State to control confetti visibility
  const [showConfetti, setShowConfetti] = useState(false);

  // Function to toggle confetti
  const toggleConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  };

  return (
    <button
      onClick={(e) => {
        handleChange(e);
        toggleConfetti(); // Toggle confetti when button is clicked
      }}
      type={type}
      className={`${bold} ${size} hover:${animation} hover:bg-secondary hover:text-white bg-primary ${fontColor} cursor-pointer uppercase rounded-md text-sm ${className}`}
      {...props}
    >
      {children}
      {confetti && showConfetti && <Confetti width={200} height={200} />}
    </button>
  );
};

Button.defaultProps = {
  size: "px-xs py-xs",
  bold: "false",
  type: "button",
  fontColor: "text-white",
  animation: "none",
  confetti: false,
};

export default Button;
