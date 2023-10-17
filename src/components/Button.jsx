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
    size == "small"
      ? "px-md py-sm"
      : size == "medium"
      ? "px-md py-lg"
      : "px-lg py-xl";

  return (
    <button
      onClick={handleChange}
      type={type}
      className={`${bold} ${size} bg-button cursor-pointer uppercase rounded-md text-sm ${className}`}
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
