import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="titleCard">
          <h2>Contact Us</h2>
        </div>
        <br />
        <br />

        <div className="container">
          <div className="row">
            <div style={{ textAlign: "center" }}>
              <input type="text" placeholder="Enter your Name" />
              <input type="text" placeholder="Enter your Email" />
              <input type="text" placeholder="Enter subject" />
              <br />
              <br />
              <textarea rows="4" cols="86"></textarea>
              <br />
              <button className="sbtBtn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
