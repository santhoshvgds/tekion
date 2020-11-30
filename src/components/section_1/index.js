import React from "react";
import "./index.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const index = () => {
  return (
    <div className="section-1">
      <div className="section-1-content">
        <h1>
          The future of automotive
          <br />
          retail is here
        </h1>
        <div className="section-1-button">
          <AnchorLink href="#section3">
            <h3>Discover Products</h3>
          </AnchorLink>
          {/* <a href="#section3"></a> */}
        </div>
      </div>
    </div>
  );
};

export default index;
