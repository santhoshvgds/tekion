import React from "react";
import image1 from "../../assets/images/1image.png";
import image2 from "../../assets/images/2image.png";
import icon21 from "../../assets/images/2icon1.png";
import icon22 from "../../assets/images/2icon2.png";
import icon23 from "../../assets/images/2icon3.png";
import icon11 from "../../assets/images/1icon1.png";
import icon12 from "../../assets/images/1icon2.png";
import icon13 from "../../assets/images/1icon3.png";
import image3 from "../../assets/images/3image.png";
import icon31 from "../../assets/images/3icon1.png";
import icon32 from "../../assets/images/3icon2.png";
import icon33 from "../../assets/images/3icon2.png";
import image4 from "../../assets/images/4image.png";
import icon41 from "../../assets/images/4icon1.png";
import icon42 from "../../assets/images/4icon2.png";
import icon43 from "../../assets/images/4icon3.png";
import image5 from "../../assets/images/5image.png";
import icon51 from "../../assets/images/5icon1.png";
import icon52 from "../../assets/images/5icon2.png";
import icon53 from "../../assets/images/5icon3.png";
import image6 from "../../assets/images/6image.png";
import icon61 from "../../assets/images/6icon1.png";
import icon62 from "../../assets/images/6icon2.png";
import icon63 from "../../assets/images/6icon3.png";
import "./depSlide.css";

const Departments = () => {
  return (
    <section id="departments">
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div
          class="carousel-indicators"
          style={{ position: "absolute", top: "50px", height: "20px" }}
        >
          <li
            style={{ width: "150px" }}
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            class="active"
          ></li>
          <li
            style={{ width: "150px" }}
            data-target="#carouselExampleCaptions"
            data-slide-to="1"
          ></li>
          <li
            style={{ width: "150px" }}
            data-target="#carouselExampleCaptions"
            data-slide-to="2"
          ></li>
          <li
            style={{ width: "150px" }}
            data-target="#carouselExampleCaptions"
            data-slide-to="3"
          ></li>
          <li
            style={{ width: "150px" }}
            data-target="#carouselExampleCaptions"
            data-slide-to="4"
          ></li>
          <li
            style={{ width: "150px" }}
            data-target="#carouselExampleCaptions"
            data-slide-to="5"
          ></li>
        </div>
        <div className="customcarousel">
          <a
            class=""
            style={{ backgroundColor: "black" }}
            href="#carouselExampleFade"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>

          <a
            class=""
            style={{ backgroundColor: "black" }}
            href="#carouselExampleFade"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
        </div>
        <div
          style={{
            display: "flex",
            marginBottom: "150px",
            backgroundColor: "",
          }}
          className="carouseltext1"
        >
          <div
            style={{
              width: "130px",
              textAlign: "center",
              backgroundColor: "",
              marginLeft: "0px",
            }}
          >
            Sales/F&I
          </div>
          <div
            style={{
              width: "130px",
              textAlign: "center",
              backgroundColor: "",
              marginLeft: "15px",
            }}
          >
            Digital Retail
          </div>
          <div
            style={{
              width: "130px",
              textAlign: "center",
              backgroundColor: "",
              marginLeft: "15px",
            }}
          >
            Accounting
          </div>
          <div
            style={{
              width: "130px",
              textAlign: "center",
              backgroundColor: "",
              marginLeft: "15px",
            }}
          >
            Service
          </div>
          <div
            style={{
              width: "130px",
              textAlign: "center",
              backgroundColor: "",
              marginLeft: "15px",
            }}
          >
            Parts
          </div>
          <div
            style={{
              width: "130px",
              textAlign: "center",
              backgroundColor: "",
              marginLeft: "15px",
            }}
          >
            Analytics
          </div>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active" data-interval="8000">
            <div
              className="row"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="col-lg-6">
                <img
                  src={image1}
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <div>
                  <h2>Sales, Finance & Insurance</h2>
                </div>
                <div style={{ fontSize: "20px", marginTop: "20px" }}>
                  Automative Retail Cloud (ARC) facilitates the entire vehicle
                  sales cycle online. Streamline processes with expedited
                  workflows for dealer shop and customers.
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div style={{ marginTop: "30px" }}>
                      <img
                        src={icon11}
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>
                    <div style={{ marginTop: "20px", height: "120px" }}>
                      Mobile capable to conduct business on the move
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div style={{ marginTop: "30px" }}>
                      <img
                        src={icon12}
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>
                    <div style={{ marginTop: "20px", height: "120px" }}>
                      Complete an entire sale online via collaboration portal.
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div style={{ marginTop: "30px" }}>
                      <img
                        src={icon13}
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>
                    <div style={{ marginTop: "20px", height: "120px" }}>
                      Seamless integration to access all apps from one place.
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 options">
                    <span class="dot"></span>Zero contact sales
                  </div>
                  <div className="col-lg-6 options">
                    <span class="dot"></span>Digital Deal Jacket
                  </div>
                  <div className="col-lg-6 options">
                    <span class="dot"></span>Mobile Inventory
                  </div>
                  <div className="col-lg-6 options">
                    <span class="dot"></span>F&I Menus
                  </div>
                  <div className="col-lg-6 options">
                    <span class="dot"></span>Desking
                  </div>
                  <div className="col-lg-6 options">
                    <span class="dot"></span>iPad Signing
                  </div>
                  <div className="col-lg-6 options">
                    <span class="dot"></span>Integrated Credit Applications
                  </div>
                  <div className="col-lg-6 options">
                    <span class="dot"></span>Delievery Checklist and more..
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-interval="8000">
            <div
              className="row"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="col-lg-6">
                <img
                  src={image2}
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <div>
                  <h2>Digital</h2>
                </div>
                <div style={{ fontSize: "20px", marginTop: "20px" }}>
                  Finally, a Digital Retailing solution that is seamlessly
                  connected with your DMS. Create an unforgettable online retail
                  experience that's personalized to the Consumer
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div style={{ marginTop: "30px" }}>
                      <img
                        src={icon21}
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>
                    <div style={{ marginTop: "20px", height: "120px" }}>
                      An industry first budget based search feature
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div style={{ marginTop: "30px" }}>
                      <img
                        src={icon22}
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>
                    <div style={{ marginTop: "20px", height: "120px" }}>
                      Single view inverntory search for larger dealer groups
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div style={{ marginTop: "30px" }}>
                      <img
                        src={icon23}
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>
                    <div style={{ marginTop: "20px", height: "120px" }}>
                      Easy vehicle finder that guides shoppers to the right
                      vehicles
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 options">
                    <span class="dot"></span>Enterprise, Single-view Search
                  </div>
                  <div className="col-lg-6 options">
                    <span class="dot"></span>Two-Click Purchase
                  </div>
                  <div className="col-lg-6 options">
                    <span class="dot"></span>Budget-Based Retailing
                  </div>
                  <div className="col-lg-6 options">
                    <span class="dot"></span>Zero-Contact Delivery and more...
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-inteval="8000">
            <div
              className="row"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="col-lg-6">
                <img
                  src={image3}
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <div>
                  <h2>Accounting</h2>
                </div>
                <div style={{ fontSize: "20px", marginTop: "20px" }}>
                  Take control of your financials with configurable schedules,
                  instant check payments and real-time data.
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div style={{ marginTop: "30px" }}>
                      <img
                        src={icon31}
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>
                    <div style={{ marginTop: "20px", height: "120px" }}>
                      Unlimited cloud storage
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div style={{ marginTop: "30px" }}>
                      <img
                        src={icon32}
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>
                    <div style={{ marginTop: "20px", height: "120px" }}>
                      Fast and easy AP and AR reconciliations
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div style={{ marginTop: "30px" }}>
                      <img
                        src={icon33}
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>
                    <div style={{ marginTop: "20px", height: "120px" }}>
                      Work entirely remote with true cloud technology.
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 options">
                    <span class="dot"></span>Financial Statement
                  </div>
                  <div className="col-lg-6 options">
                    <span class="dot"></span>Bank Reconciliation
                  </div>
                  <div className="col-lg-6 options">
                    <span class="dot"></span>Transaction Posting
                  </div>
                  <div className="col-lg-6 options">
                    <span class="dot"></span>1099 and 8300 Tax Reporting
                  </div>
                  <div className="col-lg-6 options">
                    <span class="dot"></span>Configurable Schedules
                  </div>
                  <div className="col-lg-6 options">
                    <span class="dot"></span>Checks
                  </div>
                  <div className="col-lg-6 options">
                    <span class="dot"></span>Accounts Payable & Receivable
                  </div>
                  <div className="col-lg-6 options">
                    <span class="dot"></span>Custom GL Report Generator and
                    more...
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-inteval="8000">
            <div
              className="row"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="col-lg-6">
                <img
                  src={image4}
                  style={{ width: "60%", height: "60%" }}
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <div>
                  <h2>Service</h2>
                </div>
                <div style={{ fontSize: "20px", marginTop: "20px" }}>
                  Mobilize the entire service experience for increase
                  efficiency. Improve communication and reduce wait times for
                  best-in-class consumer experiences.
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div style={{ marginTop: "30px" }}>
                      <img
                        src={icon41}
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>
                    <div style={{ marginTop: "20px", height: "120px" }}>
                      ML/AI algorithms present relevant products and services
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div style={{ marginTop: "30px" }}>
                      <img
                        src={icon42}
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>
                    <div style={{ marginTop: "20px", height: "120px" }}>
                      eCommerce offerings personalized for each consumer
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div style={{ marginTop: "30px" }}>
                      <img
                        src={icon43}
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>
                    <div style={{ marginTop: "20px", height: "120px" }}>
                      Contactless service options unlike anything else on the
                      market.
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 options">
                    <span class="dot"></span>Zero-Contack Premium Concierge
                  </div>
                  <div className="col-lg-6 options">
                    <span class="dot"></span>Customer Portal
                  </div>
                  <div className="col-lg-6 options">
                    <span class="dot"></span>Zero-Contact Secure Key Lounge
                  </div>
                  <div className="col-lg-6 options">
                    <span class="dot"></span>
                  </div>
                  <div className="col-lg-6 options">
                    <span class="dot"></span>Desking
                  </div>
                  <div className="col-lg-6 options">
                    <span class="dot"></span>iPad Signing
                  </div>
                  <div className="col-lg-6 options">
                    <span class="dot"></span>Integrated Credit Applications
                  </div>
                  <div className="col-lg-6 options">
                    <span class="dot"></span>Delievery Checklist and more..
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-inteval="5000">
          <div
            className="row"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="col-lg-6">
              <img
                src={image5}
                style={{ width: "100%", height: "100%" }}
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <div>
                <h2>Sales, Finance & Insurance</h2>
              </div>
              <div style={{ fontSize: "20px", marginTop: "20px" }}>
                Automative Retail Cloud (ARC) facilitates the entire vehicle
                sales cycle online. Streamline processes with expedited
                workflows for dealer shop and customers.
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div style={{ marginTop: "30px" }}>
                    <img
                      src={icon51}
                      style={{ width: "60px", height: "60px" }}
                    />
                  </div>
                  <div style={{ marginTop: "20px", height: "120px" }}>
                    Mobile capable to conduct business on the move
                  </div>
                </div>
                <div className="col-lg-4">
                  <div style={{ marginTop: "30px" }}>
                    <img
                      src={icon52}
                      style={{ width: "60px", height: "60px" }}
                    />
                  </div>
                  <div style={{ marginTop: "20px", height: "120px" }}>
                    Complete an entire sale online via collaboration portal.
                  </div>
                </div>
                <div className="col-lg-4">
                  <div style={{ marginTop: "30px" }}>
                    <img
                      src={icon53}
                      style={{ width: "60px", height: "60px" }}
                    />
                  </div>
                  <div style={{ marginTop: "20px", height: "120px" }}>
                    Seamless integration to access all apps from one place.
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 options">
                  <span class="dot"></span>Zero contact sales
                </div>
                <div className="col-lg-6 options">
                  <span class="dot"></span>Digital Deal Jacket
                </div>
                <div className="col-lg-6 options">
                  <span class="dot"></span>Mobile Inventory
                </div>
                <div className="col-lg-6 options">
                  <span class="dot"></span>F&I Menus
                </div>
                <div className="col-lg-6 options">
                  <span class="dot"></span>Desking
                </div>
                <div className="col-lg-6 options">
                  <span class="dot"></span>iPad Signing
                </div>
                <div className="col-lg-6 options">
                  <span class="dot"></span>Integrated Credit Applications
                </div>
                <div className="col-lg-6 options">
                  <span class="dot"></span>Delievery Checklist and more..
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-inteval="5000">
          <div
            className="row"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="col-lg-6">
              <img
                src={image6}
                style={{ width: "100%", height: "100%" }}
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <div>
                <h2>Sales, Finance & Insurance</h2>
              </div>
              <div style={{ fontSize: "20px", marginTop: "20px" }}>
                Automative Retail Cloud (ARC) facilitates the entire vehicle
                sales cycle online. Streamline processes with expedited
                workflows for dealer shop and customers.
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div style={{ marginTop: "30px" }}>
                    <img
                      src={icon61}
                      style={{ width: "60px", height: "60px" }}
                    />
                  </div>
                  <div style={{ marginTop: "20px", height: "120px" }}>
                    Mobile capable to conduct business on the move
                  </div>
                </div>
                <div className="col-lg-4">
                  <div style={{ marginTop: "30px" }}>
                    <img
                      src={icon62}
                      style={{ width: "60px", height: "60px" }}
                    />
                  </div>
                  <div style={{ marginTop: "20px", height: "120px" }}>
                    Complete an entire sale online via collaboration portal.
                  </div>
                </div>
                <div className="col-lg-4">
                  <div style={{ marginTop: "30px" }}>
                    <img
                      src={icon63}
                      style={{ width: "60px", height: "60px" }}
                    />
                  </div>
                  <div style={{ marginTop: "20px", height: "120px" }}>
                    Seamless integration to access all apps from one place.
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 options">
                  <span class="dot"></span>Zero contact sales
                </div>
                <div className="col-lg-6 options">
                  <span class="dot"></span>Digital Deal Jacket
                </div>
                <div className="col-lg-6 options">
                  <span class="dot"></span>Mobile Inventory
                </div>
                <div className="col-lg-6 options">
                  <span class="dot"></span>F&I Menus
                </div>
                <div className="col-lg-6 options">
                  <span class="dot"></span>Desking
                </div>
                <div className="col-lg-6 options">
                  <span class="dot"></span>iPad Signing
                </div>
                <div className="col-lg-6 options">
                  <span class="dot"></span>Integrated Credit Applications
                </div>
                <div className="col-lg-6 options">
                  <span class="dot"></span>Delievery Checklist and more..
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;
