import React, { useState } from "react";
import "./form-input.css";

function FormInput({ label, error, half, name, ...inputProps }) {
  const [focus, setFocus] = useState(false);
  return (
    <div className={`form-input ${half ? "half-width" : ""}`}>
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input
        className="ip"
        name={name}
        {...inputProps}
        onBlur={() => setFocus((prev) => !prev)}
        focus={focus.toString()}
      />
      <span
        style={{
          display: "none",
          color: "red",
          fontSize: "12px",
          fontWeight: "500",
        }}
      >
        {error}
      </span>
    </div>
  );
}

export default FormInput;
