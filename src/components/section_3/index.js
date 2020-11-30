import React, { useState } from "react";
import "./index.css";
import Model from "../modal";
import DepSlide from "./depSlide";
import "../modal/modal.css";
const index = () => {
  const [modalStyle, setmodalStyle] = useState("modal");
  const [showModal, setshowModal] = useState("open");
  const handleModelToggle = () => {
    console.log("dd");
    switch (showModal) {
      case "open":
        setshowModal("close");
        setmodalStyle("modal-active");
        break;
      case "close":
        console.log("object");
        setshowModal("open");
        setmodalStyle("modal modal-active");
        console.log(modalStyle);
        break;
    }
  };
  return (
    <React.Fragment>
      <div className={modalStyle}>
        <Model modalClose={handleModelToggle} />
      </div>
      <div id="section3"></div>
      <div className="section-3">
        <div className="row-1">
          <h1>
            One platform that seamlessly
            <br />
            connects your entire business
          </h1>
          <div className="section-3-button">
            <h3 onClick={handleModelToggle}>Contact Us</h3>
          </div>
        </div>
        <div className="row-2">
          <DepSlide />
        </div>
      </div>
    </React.Fragment>
  );
};

export default index;
