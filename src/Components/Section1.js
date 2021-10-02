import React from "react";
import Logo from "../assets/Logo.png";
import img from "../assets/Section1.png"
function Section1() {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div className="banner">
        <div className="banner-left">
          <div>Welcome to IB chemistry</div>
          <div>Structured Complete Course In Ib Chemistry</div>
          <div>Learn from the best having 20+ Years experience</div>
          <button>Buy Now</button>
        </div>
        <div className="banner-right">
            <img src={img} alt="img"/>
        </div>
      </div>
    </div>
  );
}

export default Section1;
