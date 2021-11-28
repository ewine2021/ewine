import React from "react";
import "./AboutUs.css";
import history from "./img/history.jpg";
import cellar from "./img/cellar.jpg";
import hotel from "./img/hotel.jpg";
import solar from "./img/solar.jpg";
import Map from "./Map";

function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="about_wrapper">
        <div className="top">

        </div>

        <div className="middle1">
          <text>
          <h1>About E-Wine</h1>
          <h3>
            E-Wine is a modern winery with a boutique hotel first estatblished
            at the heart of Cape Town, South Africa in 1981. In 2000, E-Wine had
            become the largest winery in South Africa.
          </h3>
          </text>
          <img src={cellar} alt="Cellar" />
        </div>

        <div className="middle2">
        <h3>To continue the success, E-Wine Hotel grand opening in 2011.
        </h3>
        <img src={hotel} alt="Hotel" />
        </div>
        <div className="middle3">
        <h3>To best combine technology, innovation and respect for the environment., E-Wine apply sustainable vineyard management in 2019.
        </h3>
        <img src={solar} alt="Solar" />
        </div>

        <div className="middle4">
          <img src={history} alt="History" />
        </div>

        <div className="bottom">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
