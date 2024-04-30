import React from "react";

const CardsProduct = ({ image, productName }) => {
  return (
    <div className="p-2">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={image} alt={productName} />
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardsProduct;
