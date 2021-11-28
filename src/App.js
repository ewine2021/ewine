import React from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import Restaurant from "./Restaurant";
import Wine from './Wine';
import WineTasting from "./WineTasting";
import Tour from "./Tour";
import News from "./News";



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
        <Route exact path="/restaurant" element={<Restaurant />} />
        <Route exact path="/wine" element={<Wine />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/tour" element={<Tour />} />
        <Route exact path="/winetasting" element={<WineTasting />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
