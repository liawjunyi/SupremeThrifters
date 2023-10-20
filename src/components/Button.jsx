import React from "react";

const Button = ({
  size,
  bold,
  type,
  handleChange,
  className,
  children,
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

  return (
    <button
      onClick={handleChange}
      type={type}
      className={`${bold} ${size} hover:bg-secondary hover:text-white bg-primary text-white cursor-pointer uppercase rounded-md text-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: "px-xs py-xs",
  bold: "false",
  type: "button",
};
export default Button;
