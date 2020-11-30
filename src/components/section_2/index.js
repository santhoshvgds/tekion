import React, { useState, useEffect } from "react";
import "./index.css";
import ProgressBar from "react-animated-progress-bar";
import CountUp from "react-countup";

import "../modal/modal.css";
import Model from "../modal";

const Benefits = () => {
  const colorfirst = {
    backgroundImage:
      "linear-gradient(to left, rgb(85, 255, 222),rgb(36, 178, 236))",
  };
  const [modalStyle, setmodalStyle] = useState("modal");
  const [showModal, setshowModal] = useState("close");
  const handleModelToggle = () => {
    switch (showModal) {
      case "open":
        setshowModal("close");
        setmodalStyle("modal-active");
        break;
      case "close":
        console.log("object");
        setshowModal("open");
        setmodalStyle("modal modal-active");
        break;
    }
  };
  return (
    <React.Fragment>
      <div className={modalStyle}>
        <Model modalClose={handleModelToggle} />
      </div>
      <section id="benefits">
        <div className="row">
          <div className="col-lg-6">
            <div id="unlocktext">Unlock limitless opportunities</div>
            <div id="unlockdescription">
              Personalized machine learning algorithms give dealers an edge to
              sell more and provide the best experiences while saving money and
              improving customer loyalty
            </div>
            <div id="demobutton">
              <button onClick={handleModelToggle}>Request Demo</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div style={{ fontSize: "20px" }}>
              Dealers on our platform see the following benefits
            </div>
            <div className="row">
              <div className="col-lg-6" style={{ marginTop: "40px" }}>
                <div id="benefitstext">
                  ML generated revenue in up-selling/cross selling Service &
                  accessories
                </div>
                <div style={{ marginTop: "5px", marginBottom: "5px" }}>
                  <span id="productioncount">
                    $
                    <span id="numbercount">
                      <CountUp end={9297} duration={5} /> +
                    </span>
                    <span style={{ fontSize: "18px", marginLeft: "5px" }}>
                      monthly
                    </span>
                  </span>
                  <ProgressBar
                    defColor={{
                      excellent: "#55ffde",
                    }}
                    width="250px"
                    height="8px"
                    rect
                    percentage="100"
                    rectBorderRadius="20px"
                  />
                </div>
              </div>
              <div className="col-lg-6" style={{ marginTop: "40px" }}>
                <div id="benefitstext">
                  Savings on DMS + ancillary product spend up to
                </div>
                <div style={{ marginTop: "5px", marginBottom: "5px" }}>
                  <span id="productioncount">
                    $
                    <span id="numbercount">
                      <CountUp end={31900} duration={5} /> +
                    </span>
                    <span style={{ fontSize: "18px", marginLeft: "5px" }}>
                      monthly
                    </span>
                  </span>
                  <ProgressBar
                    defColor={{
                      excellent: "#2157f5",
                    }}
                    width="300px"
                    height="8px"
                    rect
                    percentage="100"
                    rectBorderRadius="20px"
                  />
                </div>
              </div>
              <div className="col-lg-6" style={{ marginTop: "40px" }}>
                <div id="benefitstext">
                  Savings on paper & toner spend up to
                </div>
                <div style={{ marginTop: "5px", marginBottom: "5px" }}>
                  <span id="productioncount">
                    $
                    <span id="numbercount">
                      <CountUp end={4000} duration={5} /> +
                    </span>
                    <span style={{ fontSize: "18px", marginLeft: "5px" }}>
                      monthly
                    </span>
                  </span>
                  <ProgressBar
                    defColor={{
                      excellent: "#f5736d",
                    }}
                    width="200px"
                    height="8px"
                    rect
                    percentage="100"
                    rectBorderRadius="20px"
                  />
                </div>
              </div>
              <div className="col-lg-6" style={{ marginTop: "40px" }}>
                <div id="benefitstext">
                  Savings by reducing service tech unapplied time
                </div>
                <div style={{ marginTop: "5px", marginBottom: "5px" }}>
                  <span id="productioncount">
                    $
                    <span id="numbercount">
                      <CountUp end={4500} duration={5} /> +
                    </span>
                    <span style={{ fontSize: "18px", marginLeft: "5px" }}>
                      monthly
                    </span>
                  </span>
                  <ProgressBar
                    defColor={{
                      excellent: "#8e3667",
                    }}
                    width="200px"
                    height="8px"
                    rect
                    percentage="100"
                    rectBorderRadius="20px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Benefits;
