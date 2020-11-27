import React from "react";
import "./index.css";
import ReactModal from "react-modal";
import Model from "../modal";
const customStyles = {
  content: {
    transform: "translate(-0%, -293%)",
    border: "none",
    backgroundColor: "white",
    zIndex: "150",
    position: "fixed",
    width: "213vh",
    overflow: "hidden",
  },
};

const index = () => {
  const [showModal, setshowModal] = React.useState(false);
  const handleOpenModal = () => {
    setshowModal(true);
  };
  const handleCloseModal = () => {
    setshowModal(false);
  };
  return (
    <div className="section-3">
      <ReactModal
        appElement={document.getElementById("body")}
        isOpen={showModal}
        contentLabel="onRequestClose Example"
        onRequestClose={handleCloseModal}
        style={customStyles}
        className="Modal"
        overlayClassName="Overlay"
      >
        <Model modalClose={handleCloseModal} />
      </ReactModal>
      <div className="row-1">
        <h1>
          One platform that seamlessly
          <br />
          connects your entire business
        </h1>
        <div className="section-3-button">
          <h3 onClick={handleOpenModal}>Contact Us</h3>
        </div>
      </div>
      <div className="row-2"></div>
      <div>
        <li></li>
        <li></li>
        <li></li>
      </div>
    </div>
  );
};

export default index;
