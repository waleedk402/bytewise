import React from "react";

const Button = ({ color, text, onAdd }) => {
    
  return (
    <button className="btn" onClick={onAdd} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};

export default Button;
