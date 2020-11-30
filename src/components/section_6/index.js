import React, { useState, useEffect } from "react";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";
import icon5 from "../../assets/images/icon5.png";
import icon6 from "../../assets/images/icon6.png";
import "./index.css";

const AdditionalFeatures = () => {
  return (
    <section id="additionalfeatures">
      <div id="heading">Our platform. Your data.</div>
      <div id="description">
        Break barriers with true cloud-native technology. Our dealer partners
        can expect:
      </div>

      <div className="row features">
        <div className="col-lg-4 featurecards">
          <div>
            <img style={{ float: "left" }} src={icon2} alt="Not found" />
          </div>
          <div className="imagetext">Open APIs for any Integration Needs</div>
        </div>
        <div className="col-lg-4 featurecards">
          <img style={{ float: "left" }} src={icon1} alt="Not found" />
          <div className="imagetext">Highly Secure and Compliant</div>
        </div>
        <div className="col-lg-4 featurecards">
          <img style={{ float: "left" }} src={icon3} alt="Not found" />
          <div className="imagetext">The Latest Technology Stack Available</div>
        </div>
        <div className="col-lg-4 featurecards">
          <img style={{ float: "left" }} src={icon4} alt="Not found" />
          <div className="imagetext">30-Day Cancellation</div>
        </div>
        <div className="col-lg-4 featurecards">
          <img style={{ float: "left" }} src={icon5} alt="Not found" />
          <div className="imagetext">Zero Integration Fees</div>
        </div>
        <div className="col-lg-4 featurecards">
          <img style={{ float: "left" }} src={icon6} alt="Not found" />
          <div className="imagetext">
            Machine Learning and AI Algorithms for Better Experiences
          </div>
        </div>
      </div>

      <div id="demobutton">
        <button>Request Demo</button>
      </div>
    </section>
  );
};
export default AdditionalFeatures;
