import React from "react";
import "./Wine.css";
import p1 from "./img/p1.jpg";
import p2 from "./img/p2.jpg";
import Card from './Card'


function Wine() {
  return (
    <div className="wine">
      <h1>Our Wine</h1>
        <div className='wine_wrapper'>
      <div className="wine_top">
        
      </div>
      <div className="section1">
      <Card 
                    src={p1} alt="product1"
                    title="GROOT CONSTANTIA CHARDONNAY 2019"
                    description="THIS WINE HAS ALL THE GREAT CHARACTERS OF GRAND CRU CHARDONNAY"
                    price="$20"
                />
      </div>
      <div className="section2">
      <Card 
                    src={p2} alt="product2"
                    title="GROOT CONSTANTIA RIESLING 2018"
                    description="AN EXPRESSIVE, HIGHLY AROMATIC RIESLING."
                    price="$20"
                />
      </div>
      <div className="section3">

      </div>
    </div>
    </div>
  );
}

export default Wine;
