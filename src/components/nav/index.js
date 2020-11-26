import React, { useState } from "react";
import SlideNav from "../slideNav";
import "./index.css";

const index = () => {
  const [menuStatus, setMenuStatus] = useState("open");
  const [style, setStyle] = useState("menu active");
  const handleClickSildeBar = () => {
    switch (menuStatus) {
      case "open":
        setMenuStatus("close");
        setStyle("menu active");
        break;
      case "close":
        setMenuStatus("open");
        setStyle("menu");
        break;
    }
  };
  return (
    <React.Fragment>
      <div className={style}>
        <SlideNav sildeBar={handleClickSildeBar} />
      </div>
      <div className="nav">
        <div className="nav-content">
          <div className="nav-right">
            <svg
              className="nav-menu"
              height="14"
              width="26"
              viewBox="0 0 26 14"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleClickSildeBar}
            >
              <path
                fill="#d2d2d2"
                d="M0 1a1 1 0 011-1h24a1 1 0 010 2H1a1 1 0 01-1-1zm0 6a1 1 0 011-1h24a1 1 0 010 2H1a1 1 0 01-1-1zm1 5a1 1 0 000 2h17a1 1 0 000-2H1z"
              ></path>
            </svg>
            <svg
              className="brand-name"
              height="16"
              width="134.85714285714286"
              viewBox="0 0 118 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#01BFA5"
                d="M114.894.395a1.32 1.32 0 00-.389.96V6.92c0 .678-.037 1.196-.111 1.554-.075.358-.251.537-.529.537-.148 0-.339-.062-.571-.184a26.93 26.93 0 01-.876-.494L99.675.423a2.684 2.684 0 00-.682-.31A2.615 2.615 0 0098.228 0c-.76 0-1.396.264-1.906.79-.51.528-.765 1.178-.765 1.95v8.22c0 .376.13.696.39.96.259.263.574.395.945.395s.687-.132.946-.395c.26-.264.39-.584.39-.96V5.394c0-.678.037-1.196.111-1.554.074-.357.25-.536.529-.536.148 0 .339.06.57.184.232.122.524.287.877.494l12.743 7.909c.204.131.431.235.682.31.25.076.505.113.765.113.76 0 1.396-.263 1.906-.79.51-.528.765-1.178.765-1.95v-8.22c0-.376-.13-.696-.39-.96-.259-.263-.575-.395-.946-.395s-.686.132-.946.395zM75.283 0c-.798 0-1.512.188-2.143.565a5.572 5.572 0 00-1.613 1.455 6.617 6.617 0 00-1.016 1.977 7.056 7.056 0 00-.348 2.16c0 .697.112 1.404.334 2.12.223.714.543 1.364.96 1.948a5.61 5.61 0 001.516 1.455 4.016 4.016 0 002.032.635h12.687c.798 0 1.512-.188 2.143-.565a5.585 5.585 0 001.614-1.454 6.65 6.65 0 001.015-1.977 7.067 7.067 0 00.348-2.161c0-.697-.111-1.403-.334-2.119a6.801 6.801 0 00-.96-1.949A5.59 5.59 0 0090.002.636C89.408.249 88.732.037 87.97 0H75.283zm-.987 9.25a2.922 2.922 0 01-.946-.86 3.05 3.05 0 01-.473-1.116 5.522 5.522 0 01-.125-1.116c0-.34.041-.711.125-1.116.083-.405.241-.777.473-1.116.232-.339.547-.626.946-.861.399-.236.923-.353 1.572-.353h11.24c.632 0 1.15.117 1.559.353.408.235.728.522.96.861.232.34.39.711.473 1.116.083.405.125.777.125 1.116 0 .339-.042.71-.125 1.116a3.056 3.056 0 01-.473 1.115c-.232.34-.552.626-.96.862-.408.235-.927.353-1.558.353H75.868c-.65 0-1.173-.118-1.572-.353zM64.819.396c-.26.264-.39.584-.39.96v9.604c0 .377.13.697.39.96.26.264.575.396.946.396.37 0 .686-.132.946-.395.26-.264.39-.584.39-.96V1.356c0-.377-.13-.697-.39-.96C66.45.131 66.136 0 65.765 0s-.687.132-.946.395zm-6.298 0a50.587 50.587 0 01-2.323 1.61c-.807.528-1.651.998-2.532 1.413-.881.414-1.785.748-2.713 1.003a10.69 10.69 0 01-2.838.38h-1.368V1.357c0-.377-.13-.697-.39-.96a1.278 1.278 0 00-.946-.396 1.25 1.25 0 00-.918.395c-.26.264-.39.584-.39.96v9.604c0 .377.13.697.39.96.26.264.575.396.946.396.352 0 .658-.132.918-.395.26-.264.39-.584.39-.96V7.513h1.368c.965 0 1.91.123 2.838.368.928.244 1.827.574 2.7.988.871.415 1.71.885 2.517 1.413.807.527 1.59 1.073 2.351 1.638.316.263.631.395.946.395.371 0 .687-.132.946-.395.26-.264.39-.584.39-.96 0-.264-.074-.495-.223-.692a2.518 2.518 0 00-.528-.523c-.483-.377-.946-.73-1.392-1.06-.445-.329-.89-.635-1.335-.917a27.938 27.938 0 00-1.377-.82 32.465 32.465 0 00-1.517-.79 33.436 33.436 0 001.517-.791c.473-.264.932-.537 1.377-.82.445-.282.89-.588 1.335-.917.446-.33.91-.683 1.392-1.06.204-.15.38-.324.528-.522a1.12 1.12 0 00.223-.692c0-.377-.13-.697-.39-.96A1.278 1.278 0 0059.467 0c-.315 0-.63.132-.946.395zM28.446 0c-.798 0-1.512.188-2.143.565a5.588 5.588 0 00-1.614 1.455 6.637 6.637 0 00-1.015 1.977 7.056 7.056 0 00-.348 2.16c0 .697.111 1.413.334 2.147.223.735.542 1.399.96 1.992a5.334 5.334 0 001.516 1.454c.594.377 1.27.565 2.031.565H39.33c.37 0 .686-.132.946-.395.26-.264.39-.584.39-.96 0-.377-.13-.698-.39-.96a1.274 1.274 0 00-.946-.396H29.058c-.65 0-1.174-.118-1.572-.353a2.907 2.907 0 01-1.419-1.977 5.53 5.53 0 01-.125-1.116c0-.34.041-.711.125-1.116a2.903 2.903 0 011.419-1.977c.398-.236.922-.353 1.572-.353H39.33c.37 0 .686-.132.946-.396.26-.263.39-.584.39-.96 0-.377-.13-.697-.39-.96A1.276 1.276 0 0039.33 0H28.446zM.39.396C.13.66 0 .98 0 1.356c0 .377.13.697.39.96.26.265.575.396.946.396H9.57v8.416c0 .33.13.61.39.841.26.231.575.347.946.347s.686-.116.946-.347c.26-.23.39-.511.39-.841V2.712h8.347c.334-.037.621-.183.862-.437.241-.255.362-.56.362-.918 0-.377-.13-.697-.39-.96A1.268 1.268 0 0020.48 0H1.335C.965 0 .649.133.39.396zm28.895 4.406c-.35 0-.646.132-.89.395a1.36 1.36 0 00-.368.96c0 .377.122.697.367.961s.542.396.892.396h9.082c.35 0 .646-.132.89-.396.246-.264.368-.584.368-.96 0-.377-.122-.697-.367-.96a1.17 1.17 0 00-.891-.396h-9.083z"
              ></path>
            </svg>
          </div>
          <div className="nav-list">
            <ul>
              <a href="">
                <li className="active">Products</li>
              </a>
              <a href="">
                <li>Testimonials</li>
              </a>
              <a href="">
                <li>About Us</li>
              </a>
              <a href="">
                <li>News & Blog</li>
              </a>
              <a href="">
                <li>Open APIs</li>
              </a>
            </ul>
          </div>
          <div className="nav-left">
            <div className="request-demo">
              <h4>Request Demo</h4>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default index;
