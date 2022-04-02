import React from "react";
import "./customButton.css";

function CustomButton({ inverted, title }) {
  return (
    <div className={`custom-button ${inverted ? "inverted" : "non-inverted"}`}>
      {title}
    </div>
  );
}

export default CustomButton;
