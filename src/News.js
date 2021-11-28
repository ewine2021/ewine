import React from "react";
import "./News.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FiberNewIcon from '@mui/icons-material/FiberNew';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function News() {
  return (
    <div className="news">
      
      <div className="news_wrapper">
        <h1>News</h1>
      </div>
      <div className="box1">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={7}>
              <Item>
                <FiberNewIcon />
                <h1>
                  SND: Treasury Wine Estates Buys Frank Family Vineyards,
                  Expanding Napa Holdings
                </h1>
                <h2>
                  The $315 million deal further shifts the Aussie wine giant
                  into premium brands
                </h2>
                <h4>Nov 18, 2021</h4>
              </Item>
            </Grid>
            <Grid item xs={5}>
              <Item><h1>
              Chef Christopher Kostow’s Charter Oak Comes to Cabo
                </h1>
                <h2>
                The Napa restaurant will host a two-night dinner series with wine pairings at a Mexican resort. Plus, chef Michael Mina’s Bungalow Kitchen opens in the Bay Area, and New York’s Gotham Bar & Grill is back again
                </h2>
                <h4>Nov 18, 2021</h4></Item>
            </Grid>
            <Grid item xs={5}>
              <Item><h1>
              Can a Glass of Wine Lead to Increased Consciousness?
                </h1>
                <h2>
                A team of researchers surveyed wine bar guests and explored how a glass of red wine may increase awareness and pleasure
                </h2>
                <h4>Nov 16, 2021</h4></Item>
            </Grid>
            <Grid item xs={7}>
              <Item><h1>
              Million-Dollar Wine Bottle Helps Boost Carnivale du Vin to a Record-Breaking $3.75 Million for Charity
                </h1>
                <h2>
                Chef Emeril Lagasse's 17th annual New Orleans event raised its highest total ever, thanks to a $1 million wine lot
                </h2>
                <h4>Nov 12, 2021</h4></Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
