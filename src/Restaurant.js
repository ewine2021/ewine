import React from "react";
import "./Restaurant.css";
import page1 from "./img/rp1.jpg";
import page3 from "./img/rp3.jpg";
import page4 from "./img/rp4.jpg";
import page2 from "./video/rp2.mp4";

function Restaurant() {
  return (
    <div className="restaurant">
      <h2>Notice: Due to COVID-19 Pandemic, restaurant is temporary closed.</h2>
      <div className="restaurant_wrapper">
        <div className="page1">
          <img src={page1} alt="Page1" />
        </div>
        <div className="page2">
          <video autoPlay muted id="video">
            <source src={page2} type="video/mp4" />
          </video>
        </div>
        <div className="page3">
          <img src={page3} alt="Page3" />
        </div>
        <div className="page4">
          <img src={page4} alt="Page4" />
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
