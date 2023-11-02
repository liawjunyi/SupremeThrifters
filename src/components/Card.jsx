import React from "react";

const Card = ({ className, children }) => {
  return (
    <div className={`p-sm bg-white rounded-sm ${className}`}>{children}</div>
    
  );
};

export default Card;
