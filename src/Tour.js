import React from "react";
import "./Tour.css";
import back from "./video/3.mp4";
import Button from '@mui/material/Button';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


function Tour() {
  return (
    <div className="tour">
      <div className="tour_wrapper">
        <div className="back">
          <video autoPlay loop muted id="video">
            <source src={back} type="video/mp4" />
          </video>
        </div>
        <div className="tour_top">
          <h1>Our Tour</h1>
          <h3>
            Due to the Social Distancing Compliance under COVID-19 pandemic, our
            winery is temporary not open for visit. E-Wine now provide online
            virtual winery tour for all wine lovers. Just sit back relax and
            enjoy the tour with us. Our Tours run five days a week, from Moday
            to Friday 8:00 to 16:45.
          </h3>
        </div>
        <div className="tour_bottom">
          <h3> All tours can be booked online:</h3>
          <Button href="https://ewine.simplybook.asia/v2/#book" variant="contained" endIcon={<CalendarTodayIcon /> }>
            Book Now
          </Button>
          
          

        </div>
      </div>
    </div>
  );
}

export default Tour;
