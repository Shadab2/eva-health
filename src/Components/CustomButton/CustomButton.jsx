import React from "react";
import "./customButton.css";

function CustomButton({ inverted, title, onClick }) {
  return (
    <div
      className={`custom-button ${inverted ? "inverted" : "non-inverted"}`}
      onClick={onClick}
    >
      {title}
    </div>
  );
}

export default CustomButton;
