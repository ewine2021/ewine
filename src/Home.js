import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import about from "./img/about.jpg";
import cellar from "./img/cellar.jpg";
import restaurant from "./img/restaurant.jpg";
import { Link } from "react-router-dom";
import news from "./img/news.jpg";
import tour from "./img/tour.jpg";
import tasting from "./img/tasting.jpg";


function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home_section">
        <Link to="/AboutUs">
          <Card src={about} alt="about" title="About E-Wine" description="" />
        </Link>
        <Link to="/Wine">
          <Card src={cellar} alt="cellar" title="Wines" description="" />
        </Link>
        <Link to="/Restaurant">
          <Card
            src={restaurant}
            alt="restaurant"
            title="E-Wine Hotel Restaurant"
            description=""
          />
        </Link>
      </div>
      <div className="home_section1">
        <Link to="/News">
          <Card src={news} alt="news" title="News" description="" price="" />
        </Link>
        <Link to="/Tour">
          <Card
            src={tour}
            alt="tour"
            title="Our Tour"
            description=""
            price=""
          />
        </Link>
        <Link to="/WineTasting">
          <Card
            src={tasting}
            alt="tasting"
            title="Wine Tasting Class"
            description=""
            price=""
          />
        </Link>
 
      </div>
    </div>
  );
}

export default Home;
