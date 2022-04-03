import React, { useState } from "react";
import "./inputEducation.css";

function InputEducation({ reference, removeBlock }) {
  const [focus, setFocus] = useState(false);
  return (
    <div className="inputEducation">
      <input
        className="ip-edu"
        type="text"
        name="education"
        required
        ref={reference}
      />
      <img
        src="/assets/dustbin.png"
        className="dustbin"
        onClick={removeBlock}
      />
    </div>
  );
}

export default InputEducation;
