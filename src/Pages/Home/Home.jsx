import React, { useState } from "react";
import TopBar from "../../Components/TobBar/TopBar";
import Graduates from "../../Components/Graduates/Graduates";
import "./home.css";
import CustomButton from "../../Components/CustomButton/CustomButton";
import Form from "../../Components/Form/Form";

function Home() {
  const [open, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="home">
      <TopBar />
      <div className="home-main">
        <div className="home-main-left">
          <span className="home-title">
            Building the <strong> community of Doctors</strong> for the future
          </span>
          <div className="home-buttons">
            <CustomButton title="Join the Community" onClick={handleModal} />
            <CustomButton title="Explore" inverted />
          </div>
        </div>
        <div className="home-main-right">
          <img
            className="doctor-right"
            src="/assets/doctor.png"
            alt="Our Doctors"
          />
        </div>
      </div>
      <Graduates />
      <Form handleModal={handleModal} open={open} />
    </div>
  );
}

export default Home;
