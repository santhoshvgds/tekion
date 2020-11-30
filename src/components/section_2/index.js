import React, { useState, useEffect } from "react";
import "./index.css";

import "../modal/modal.css";
import Model from "../modal";

const Benefits = () => {
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
                    $<span id="numbercount">9,297</span>
                    <span style={{ fontSize: "18px", marginLeft: "5px" }}>
                      monthly
                    </span>
                  </span>
                  <div id="border"></div>
                </div>
              </div>
              <div className="col-lg-6" style={{ marginTop: "40px" }}>
                <div id="benefitstext">
                  Savings on DMS + ancillary product spend up to
                </div>
                <div style={{ marginTop: "5px", marginBottom: "5px" }}>
                  <span id="productioncount">
                    $<span id="numbercount">31,900</span>
                    <span style={{ fontSize: "18px", marginLeft: "5px" }}>
                      monthly
                    </span>
                  </span>
                  <div id="border"></div>
                </div>
              </div>
              <div className="col-lg-6" style={{ marginTop: "40px" }}>
                <div id="benefitstext">
                  Savings on paper & toner spend up to
                </div>
                <div style={{ marginTop: "5px", marginBottom: "5px" }}>
                  <span id="productioncount">
                    $<span id="numbercount">4,000</span>
                    <span style={{ fontSize: "18px", marginLeft: "5px" }}>
                      monthly
                    </span>
                  </span>
                  <div id="border"></div>
                </div>
              </div>
              <div className="col-lg-6" style={{ marginTop: "40px" }}>
                <div id="benefitstext">
                  Savings by reducing service tech unapplied time
                </div>
                <div style={{ marginTop: "5px", marginBottom: "5px" }}>
                  <span id="productioncount">
                    $<span id="numbercount">4,500</span>
                    <span style={{ fontSize: "18px", marginLeft: "5px" }}>
                      monthly
                    </span>
                  </span>
                  <div id="border"></div>
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
