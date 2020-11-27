import React from "react";
import Image1 from "../../assets/images/e128821add45bdbd8531a0bbf77cb25c.png";

const slide = () => {
  const path = "../../assests/images/";
  return (
    <div>
      <div className="slide">
        <div className="slide-img">
          <img src={Image1} />
          <svg
            className="player"
            height="56"
            width="56"
            viewBox="0 0 56 56"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#007BFE"
              d="M28 56c15.464 0 28-12.536 28-28S43.464 0 28 0 0 12.536 0 28s12.536 28 28 28z"
            ></path>
            <path
              fill="#007BFE"
              stroke="#fff"
              fillRule="evenodd"
              strokeWidth="2"
              clipRule="evenodd"
              d="M24.547 36.512c-.665.436-1.547-.042-1.547-.836V19.953c0-.815.923-1.288 1.585-.811l11.434 8.24c.57.41.55 1.264-.037 1.648l-11.434 7.482z"
            ></path>
          </svg>
        </div>
        <div className="slidebar-content">
          <h4>
            <em>
              "Having gone through multiple DMS changes over the last 27 years,
              the recent Tekion implementation was the smoothest I've ever
              seen...and it was done 100% remotely!"
            </em>
          </h4>
          <p className="person-name">
            <b>Katie Bowman Coleman</b>
          </p>
          <p className="person-position">President,Bowman Auto Group</p>
        </div>
      </div>
      <div className="active">fg</div>
      <div className="active">re</div>
      <div className="active">fd</div>
      <div className="slide-dots">
        <ul>
          <li className="active"></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default slide;
