import React, { useState } from "react";

const Input = ({
  handleChange,
  ref,
  value,
  size,
  type,
  placeholder,
  label,
  className,
  ...props
}) => {
  const [focus, setfocus] = useState("border-2 border-primary");

  return (
    <>
      {label}
      <input
        onFocus={() => setfocus("border-2 border-button")}
        onBlur={() => setfocus("border-2 border-primary")}
        ref={ref}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`flex ${focus} w-full cursor-text rounded-md  ${size} ${className}`}
        {...props}
      />
    </>
  );
};

Input.defaultProps = {
  size: "px-xs py-xxs",
  bold: "false",
};

export default Input;
