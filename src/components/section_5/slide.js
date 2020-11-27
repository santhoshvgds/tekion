import React, { useState } from "react";
import Image1 from "../../assets/images/e128821add45bdbd8531a0bbf77cb25c.png";
import Image2 from "../../assets/images/982b60a8dc22db6c9547bc4e85ebd781.png";
import Image3 from "../../assets/images/b9c7e8870fe0ac0401f06cbb1de85621.png";
import Image4 from "../../assets/images/c6050127568c5a14b921a24a8f87b1e3.png";
const slide = () => {
  const allSlide = [
    {
      img: Image1,
      content:
        "Having gone through multiple DMS changes over the last 27 years,the recent Tekion implementation was the smoothest I ve ever seen...and it was done 100% remotely!",
      name: "Katie Bowman Coleman",
      position: "President,Bowman Auto Group",
    },
    {
      img: Image2,
      content: "Tekion is not just evolutionary, it's revolutionary.",
      name: "Todd Ingersoll",
      position: "CEO/President,Ingersoll Auto Group",
    },
    {
      img: Image3,
      content:
        "Tekion is the Netflix to Blockbuster. Anyone who wants to fight the change, anyone who wants to do business in the Stone Age is going to be a dinosaur.",
      name: "Joe Castelino",
      position: "Service Director,Stevens Creek Volkswagen",
    },
    {
      img: Image4,
      content:
        "Tekion is a game changer and is the wave of the future in the automotive industry.",
      name: "Michael Winding",
      position: "General Manager,Gilroy Buick GMC",
    },
  ];
  const [currSlide, setcurrSlide] = useState(allSlide[0]);
  const [dot, setdot] = useState([
    {
      0: "active",
      1: "",
      2: "",
      3: "",
    },
  ]);
  const [i, seti] = useState(0);
  // setInterval(() => {
  //   if (i < 4) {
  //     seti(i + 1);
  //     setcurrSlide(allSlide[i]);
  //   } else {
  //     seti(0);
  //     setcurrSlide(allSlide[i]);
  //   }
  //   console.log(i);
  // }, 2000);
  const changeCurrSlide = (index) => {
    setcurrSlide(allSlide[index]);
  };
  return (
    <div>
      <div className="slide">
        <div className="slide-img">
          <img src={currSlide.img} />
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
            <em>{currSlide.content}</em>
          </h4>
          <p className="person-name">
            <b>{currSlide.name}</b>
          </p>
          <p className="person-position">{currSlide.position}</p>
        </div>
      </div>
      <div className="slide-dots">
        <ul>
          <li className={dot[0]} onClick={() => changeCurrSlide(0)}></li>
          <li className={dot[1]} onClick={() => changeCurrSlide(1)}></li>
          <li className={dot[2]} onClick={() => changeCurrSlide(2)}></li>
          <li className={dot[3]} onClick={() => changeCurrSlide(3)}></li>
        </ul>
      </div>
    </div>
  );
};

export default slide;
