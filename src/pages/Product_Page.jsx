import React from "react";
import { Link } from "react-router-dom";
import CardsProduct from "./../components/CardsProduct";
import descartablesData from "./../json/descartablesData.json";
import podsData from "./../json/podsData.json";

const Product_Page = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Descartables</h1>
          <div className="d-flex flex-wrap justify-content-center">
            {descartablesData.map((product) => (
              <Link
                key={product.id}
                to={`/product/${encodeURIComponent(product.id)}`}
                className="text-decoration-none"
              >
                <CardsProduct
                  image={product.image}
                  productName={product.productName}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h1>Pods</h1>
          <div className="d-flex flex-wrap justify-content-center">
            {podsData.map((product) => (
              <Link
                key={product.id}
                to={`/product/${encodeURIComponent(product.id)}`}
                className="text-decoration-none"
              >
                <CardsProduct
                  image={product.image}
                  productName={product.productName}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_Page;
