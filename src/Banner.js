import React from "react";
import "./Banner.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import backgroundVideo from "./video/1.mp4";


function Banner() {
  const navigate = useNavigate();


  return (
    <div className="banner">
      <div className="banner_background">
        <video autoPlay muted id="video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
  
      <div className="banner_info">
        <h1>Welcome</h1>

        <h4>
         to visit our little piece of paradise in Cape Town, South Africa. 
        </h4>
        <Button href="http://13.229.49.161/" variant="contained" >
          E-Wine Hotel
        </Button>
      </div>
    </div>
  );
}

export default Banner;
