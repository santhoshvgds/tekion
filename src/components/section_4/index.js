import React, { useState, useEffect } from "react";
import "./index.css";
import feature1 from "../../assets/images/feature1.jpg";
import feature2 from "../../assets/images/feature1.png";
import feature3 from "../../assets/images/feature3.jpg";
import feature4 from "../../assets/images/feature4.jpg";

const TekionFeatures = () => {
  return (
    <section id="tekionfeatures">
      <div id="heading">Tekion changes the game</div>
      <div id="description">
        Automotive Retail Cloud breaks the technology limitations dealers have
        dealt with for decades, gives them an edge and levels the playing field
        to compete and win.
      </div>

      <div className="row contentboxhead">
        <div className="col-lg-6 col-sm-5 contentbox">
          <img src={feature2} alt="Image not found" />
          <div id="topservice">
            <div id="digitalservicehead">
              Zero Contact digital and sales service
            </div>
            <div id="digitalservicecontent">
              Sell and service vehicles in the new norm: contact-free, virtual
              or remote
            </div>
            <div id="learnmore">
              <a href="#">Learnmore</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 contentbox">
          <img src={feature1} alt="Image not found" />
          <div id="bottomservice">
            <div id="digitalservicehead">Advanced Analytics</div>
            <div id="digitalservicecontent">
              Gain critical business insights that lead to intelligent
              operational decisions
            </div>
            <div id="learnmore">
              <a href="#">Learnmore</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 contentbox">
          <img src={feature4} alt="Image not found" />
          <div id="bottomservice">
            <div id="digitalservicehead">Fair Pricing Model</div>
            <div id="digitalservicecontent">
              30-day cancellation notices and zero integration fees
            </div>
            <div id="learnmore">
              <a href="#">Contact Sales</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 contentbox">
          <img src={feature3} alt="Image not found" />
          <div id="topservice">
            <div id="digitalservicehead">Support</div>
            <div id="digitalservicecontent">
              Tekionites are available 24/7 to help via text, phone & email
            </div>
            <div id="learnmore">
              <a href="#">Contact Support</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TekionFeatures;
