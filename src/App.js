import React from "react";
import Nav from "./components/nav";
import SectionOne from "./components/section_1";
import SectionThree from "./components/section_3";
import SectionFive from "./components/section_5";
import SectionSeven from "./components/section_7";

const App = () => {
  return (
    <div className="body">
      <Nav />
      <SectionOne />
      <SectionThree />
      <SectionFive />
      <SectionSeven />
    </div>
  );
};

export default App;
