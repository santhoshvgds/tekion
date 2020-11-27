import React from "react";
import "./index.css";
import Slide from "./slide";

const index = () => {
  return (
    <div className="section-5">
      <div className="section-5-content">
        <div className="left">
          <h2>
            This is what true
            <br />
            partnership looks like.
          </h2>
          <a href="#">More Testimonials {" >"}</a>
        </div>
        <div className="right">
          <Slide />
        </div>
      </div>
    </div>
  );
};

export default index;
