import React from "react";
import "./graduates.css";

const data = [
  {
    source: "/assets/Harvard.svg",
    alt: "Harvard",
  },
  {
    source: "/assets/Oxford.svg",
    alt: "Oxford",
  },
  {
    source: "/assets/Standford.svg",
    alt: "Standford",
  },
  {
    source: "/assets/Cornell.svg",
    alt: "Cornell",
  },
  {
    source: "/assets/Oxford.svg",
    alt: "Cornell",
  },
];
function Graduates() {
  return (
    <div className="graduates-container">
      <span className="graduate-title">
        Our Communtiy Comprises Graduates from
      </span>
      <div className="graduates">
        {data.map((item, id) => {
          return (
            <div className="img-wrapper" key={id}>
              <img className="graduates-img" src={item.source} alt={item.alt} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Graduates;
