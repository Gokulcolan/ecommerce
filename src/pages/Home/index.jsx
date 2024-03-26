import React, { useEffect, useState } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import StarsIcon from "@mui/icons-material/Stars";
import Slider from "../../components/swiper/testimonial";
import logo from "../../assets/beep.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProductList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleProductRedirect = () => {
    navigate("/products", { state: { productList } });
  };

  const addProductToCart = (i) => {
   
    navigate("/cart", { state: { i } });
  };

  const handleRedirect = () => {
    navigate("/products");
  };

  return (
    <div>
      <div>
        {/* 1st container */}
        <div className="container-fluid bg-Img">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-sm-5">
                <div className="landingPage">
                  <h2 className="landingHead">Sale 20% Off</h2>
                  <h2 className="landingSecondHead">On Everything</h2>
                  <p className="Para">
                    Explicabo esse amet tempora quibusdam laudantium, laborum
                    eaque magnam fugiat hic? Esse dicta aliquid error
                    repudiandae earum suscipit fugiat molestias, veniam, vel
                    architecto veritatis delectus repellat modi impedit sequi.
                  </p>
                  <button className="btn btnBox" onClick={handleRedirect}>
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ## 2nd container */}
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Rem, itaque quam, obcaecati dolorum magnam facere inventore
                    eaque tenetur totam earum animi corrupti, facilis illo omnis
                    laboriosam nulla quia laudantium neque.
                  </p>
                  <button className="btn btnBox" onClick={handleRedirect}>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="productCard">
          <h2>
            Our <span>Products</span>
          </h2>
          <div className="container">
            <div className="row">
              {productList?.slice(0, 6).map((val, i) => (
                <div key={i} className="col-lg-4">
                  <div className="productList">
                    <img
                      src={val.image}
                      alt="Product"
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "contain",
                      }}
                    />
                    <p style={{ marginTop: "1rem" }}>{val.title}</p>
                    <p>₹{val.price}</p>
                    <div className="row" style={{ textAlign: "center" }}>
                      <div className="col-lg-6">
                        <button
                          className="cartBtn"
                          onClick={() => {
                            addProductToCart(i);
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="col-lg-6">
                        <button
                          className="buyBtn"
                          onClick={() => {
                            addProductToCart(i);
                          }}
                        >
                          Buy now
                        </button>
                      </div>
                    </div>
                    {/* Add more information about the product here if needed */}
                  </div>
                </div>
              ))}
              <div style={{ textAlign: "center" }}>
                <button className="prodBtn" onClick={handleProductRedirect}>
                  View All Products
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* 4th container */}
        <div className="subscribe">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <br />
                <h3 className="subscribeHead">
                  Subscribe To Get Discount Offers
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
                <br />
                <input
                  className="inp"
                  type="text"
                  placeholder="Enter Your Email"
                />
                <br />
                <br />
                <br />
                <button className="subBtn">SUBSCRIBE</button>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Slider />
        </div>
        <br />
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="footLogo">
                  <img
                    src={logo}
                    alt="#"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <p>
                    <span>Address:</span> F1 ,A Block,ABC Plaza,Chennai{" "}
                  </p>
                  <p>
                    <span>Email:</span> gokulcolan@gmail.com
                  </p>
                  <p>
                    <span>Phone Number:</span> +91 8489143453
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="footMenu">
                  <h5>MENU</h5>
                  <ul className="no-dots">
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="footAcc">
                  <h5>ACCOUNT</h5>
                  <ul className="no-dots">
                    <li>Account</li>
                    <li>Checkout</li>
                    <li>Login</li>
                    <li>Register</li>
                    <li>Shopping</li>
                    <li>Widget</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="footNews">
                  <h5>NEWSLETTER</h5>
                  <p>Subscribe by our newsletter and get update protidin.</p>
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    className="footInp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyRights">
          <div className="container">
            <div className="row">
              <p>
                © 2024 All Rights Reserved By{" "}
                <span style={{ color: "#f7444e" }}>React FrontEnd Team</span>
              </p>

              <br />
              <p>
                Distriubuted By
                <span style={{ color: "#f7444e" }}> Gokul</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
