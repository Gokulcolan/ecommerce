import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
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

  const addProductToCart = (i) => {
    navigate("/cart", { state: { i } });
  };

  return (
    <div>
      <div className="titleCard">
        <h2>Product List</h2>
      </div>
      <div className="container">
        <div className="row">
          {productList?.map((val, i) => (
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
                      onClick={() => {
                        addProductToCart(i);
                      }}
                      className="cartBtn"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="col-lg-6">
                    <button
                      onClick={() => {
                        addProductToCart(i);
                      }}
                      className="buyBtn"
                    >
                      Buy now
                    </button>
                  </div>
                </div>
                {/* Add more information about the product here if needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
