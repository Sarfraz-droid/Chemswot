import React,{useState} from "react";
import atom from "../assets/atom.png"

function Section3() {



  return (
    <div className="section3">
      <h1>OFFERS BY CHEMSWOT</h1>

      <div className="container">
        <div className="section right">
          <div>Monthly Plan</div>
          <div>Get all by just 500</div>
          <button>Buy Now</button>
        </div>
        <img src={atom} />
        <div className="section left">
          <div>Yearly Plan</div>
          <div>Get all by just 5000</div>
          <button>Buy Now</button>
        </div>

      </div>
    </div>
  );
}

export default Section3;
