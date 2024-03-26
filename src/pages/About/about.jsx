import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import StarsIcon from "@mui/icons-material/Stars";

const AboutUs = () => {
  return (
    <div>
      <div className="titleCard">
        <h2>About Us</h2>
      </div>
      <div className="shopUs">
        <div className="container">
          <h2>Why Shop With Us</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <LocalShippingIcon className="cardIcon" />
                <br />
                <h4>Fast Shipping</h4>
                <p>variations of passages of Lorem Ipsum available</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <AcUnitIcon className="cardIcon" />
                <br />
                <h4>Free Shipping</h4>
                <p>variations of passages of Lorem Ipsum available</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <StarsIcon className="cardIcon" />
                <br />
                <h4>Best Quality</h4>
                <p>variations of passages of Lorem Ipsum available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 3rd container */}
      <div className="newArrivals bg-2Img">
        <div className="container">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <div className="newArrival">
                <h2 className="landingSecondHead">New Arrival</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
                  itaque quam, obcaecati dolorum magnam facere inventore eaque
                  tenetur totam earum animi corrupti, facilis illo omnis
                  laboriosam nulla quia laudantium neque.
                </p>
                <button className="btn btnBox">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
