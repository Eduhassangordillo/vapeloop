import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardsProduct = ({ image, productName }) => {
  return (
    <div className="p-2">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{productName}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Ver más</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardsProduct;
