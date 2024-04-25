import React from "react";
import CardsProduct from "../components/CardsProduct";

const Product_Page = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Product Page</h1>
          <div className="d-flex flex-wrap justify-content-center">
            <CardsProduct />
            <CardsProduct />
            <CardsProduct />
            <CardsProduct />
            <CardsProduct />
            <CardsProduct />
            <CardsProduct />
            <CardsProduct />
            <CardsProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_Page;
