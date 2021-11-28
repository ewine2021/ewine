import React from "react";
import "./WineTasting.css";
import back from "./video/taste.mp4";
import Button from '@mui/material/Button';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function WineTasting() {
  return (
    <div className="wineTasting">
      <div className="taste_wrapper"></div>
        <div className="back">
          <video autoPlay loop muted id="video">
            <source src={back} type="video/mp4" />
          </video>
        </div>
        <div className="taste_top">
          <h1>Wine Tasting Class</h1>
          <h3>
            Due to the Social Distancing Compliance under COVID-19 pandemic, our
            winery is temporary not open for visit. E-Wine now provide online wine tasting class. 
            Our classes run five days a week, from Moday
            to Friday 8:00 to 16:45.
          </h3>
        </div>
        <div className="taste_bottom">
          <h3> All tours can be booked online:</h3>
          <Button href="https://ewine.simplybook.asia/v2/#book" variant="contained" endIcon={<CalendarTodayIcon /> }>
            Book Now
          </Button>
    </div>
    </div>
  );
}

export default WineTasting;
