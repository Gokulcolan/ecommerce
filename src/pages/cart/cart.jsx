import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import PaymentDialog from "../../components/modal/paymentModal";

const ShoppingBag = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [productList, setProductList] = useState([]);
  const [QuantityNumber, setQuantityNumber] = useState(1);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState("");
  const [open, setOpen] = useState();

  const selectedProduct = location?.state?.i;

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

  const filteredProduct = productList?.filter(
    (val, index) => index === selectedProduct
  );
  console.log(filteredProduct, "filteredProduct");
  // sessionStorage.setItem(filteredProduct?.[0], "filteredProduct");

  const handleIncreament = () => {
    setQuantityNumber((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreament = () => {
    // Ensure quantity doesn't go below 1
    if (QuantityNumber > 1) {
      setQuantityNumber((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleGetValue = (e) => {
    const value = parseInt(e.target.value);
    // Ensure quantity doesn't go below 1
    if (!isNaN(value) && value > 0) {
      setQuantityNumber(value);
    }
  };

  const handleGetCoupon = (e) => {
    setCoupon(e.target.value);
  };

  const handleCoupon = () => {
    setCouponApplied(coupon);
  };

  const resetCoupon = () => {
    setCouponApplied("");
  };

  const shopMoreProduct = () => {
    navigate("/products");
  };

  const orderPlacing = () => {
    setOpen(true);
  };

  return (
    <div>
      <div className="cart">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Shopping Bag</h2>
            <div>
              <button className="shopBtn" onClick={shopMoreProduct}>
                + Shop More
              </button>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-lg-9">
              <div className="tableCard">
                <table>
                  <thead>
                    <tr>
                      <th>Product Img</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <br />
                  <br />
                  <tbody>
                    {filteredProduct?.length === 0 ? (
                      <div style={{ textAlign: "Center" }}>
                        <p>your cart is empty </p>
                      </div>
                    ) : (
                      filteredProduct?.map((val, i) => (
                        <tr key={i}>
                          <td>
                            <img
                              src={val.image}
                              alt=""
                              width={"100px"}
                              height={"100px"}
                            />
                          </td>
                          <td> {val.title}</td>
                          <td>
                            <b>₹</b>
                            {val.price}
                          </td>
                          <td>
                            <div style={{ display: "flex" }}>
                              <button
                                className="incBtn"
                                onClick={handleDecreament}
                              >
                                -
                              </button>
                              <input
                                type="number"
                                value={QuantityNumber}
                                onChange={handleGetValue}
                                readOnly
                                className="incInp"
                                style={{ width: "40px" }}
                              />
                              <button
                                className="incBtn"
                                onClick={handleIncreament}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td>
                            <b>₹</b>
                            {QuantityNumber * val.price}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              <div className="cartList"></div>
            </div>
            <div className="col-lg-3">
              <div className="shipCard">
                <div className="shippingDetails">
                  <h2>Shipping Address</h2>
                  <input type="text" placeholder="Country" />
                  <br />
                  <input type="text" placeholder="state" />
                  <br />
                  <input type="text" placeholder="PinCode" />
                  <br />
                  <br />
                  <div style={{ textAlign: "center" }}>
                    <button className="shipBtn">Update</button>
                  </div>
                  <br />
                </div>

                <div className="coupon">
                  <h2>Coupon Code</h2>
                  <p>Your Cart Items</p>
                  <input
                    type="text"
                    placeholder="Enter Coupon"
                    onChange={handleGetCoupon}
                  />

                  {couponApplied === "Welcome" ? (
                    <div style={{ position: "relative" }}>
                      <p
                        style={{
                          backgroundColor: "#b7dbb7",
                          padding: "10px",
                          fontSize: "12px",
                          color: "black",
                          borderRadius: "10px",
                        }}
                      >
                        Coupon Applied Successfully you get 10% Off on you total
                        bill amnt
                        <CloseIcon
                          onClick={resetCoupon}
                          style={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            cursor: "pointer",
                            fontSize: "12px",
                            backgroundColor: "red",
                            color: "white",
                          }}
                        />
                      </p>
                    </div>
                  ) : (
                    <p>
                      *Use Code{" "}
                      <span style={{ color: "#f7444e" }}>Welcome</span> to get
                      10% off
                    </p>
                  )}
                  <div style={{ textAlign: "center" }}>
                    <button className="shipBtn" onClick={handleCoupon}>
                      Apply
                    </button>
                  </div>
                </div>
                <br />
                <div className="cartTotal">
                  <h2>Cart Total</h2>
                  <div className="row">
                    <div className="col-lg-6">Cart Subtotal:</div>
                    <div className="col-lg-6">
                      {QuantityNumber * filteredProduct[0]?.price}
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-lg-6">Shipping Charges: </div>
                    <div className="col-lg-6">Free</div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-lg-6">Coupon Discounts:</div>
                    <div className="col-lg-6" style={{ color: "red" }}>
                      -
                      {couponApplied === "Welcome"
                        ? (
                            QuantityNumber *
                            filteredProduct[0]?.price *
                            0.1
                          ).toFixed(2)
                        : 0}
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-lg-6">Cart Total:</div>
                    <div className="col-lg-6">
                      {couponApplied === "Welcome"
                        ? QuantityNumber *
                          filteredProduct[0]?.price *
                          (0.9).toString()
                        : QuantityNumber * filteredProduct[0]?.price}
                    </div>
                  </div>
                  <br />
                  <button className="shipBtn" onClick={orderPlacing}>
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PaymentDialog setOpen={setOpen} open={open} />
    </div>
  );
};

export default ShoppingBag;
