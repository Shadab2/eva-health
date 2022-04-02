import React from "react";
import TopBar from "../../Components/TobBar/TopBar";
import Graduates from "../../Components/Graduates/Graduates";
import "./home.css";
import CustomButton from "../../Components/CustomButton/CustomButton";

function Home() {
  return (
    <div className="home">
      <TopBar />
      <div className="home-main">
        <div className="home-main-left">
          <span className="home-title">
            Building the <strong> community of Doctors</strong> for the future
          </span>
          <div className="home-buttons">
            <CustomButton title="Join the Community" />
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
    </div>
  );
}

export default Home;
