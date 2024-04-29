import React from "react";
import CardsProduct from "./../components/CardsProduct";
import foto1 from "./../img/jpg/descartables/Elfbar 5000.jpg";
import foto2 from "./../img/jpg/descartables/Elfbar TE5000.jpg";
import foto3 from "./../img/jpg/descartables/Geekbar b5000.jpg";
import foto4 from "./../img/jpg/descartables/Ignite V50.jpg";
import foto5 from "./../img/jpg/descartables/Uwell B6000.jpg";

// Agrega aquí la importación de las imágenes de la categoría "Pods"
import foto6 from "./../img/jpg/pods/IMG-20240413-WA0011.jpg";
import foto7 from "./../img/jpg/pods/IMG-20240414-WA0014.jpg";
import foto8 from "./../img/jpg/pods/IMG-20240414-WA0018.jpg";
import foto9 from "./../img/jpg/pods/IMG-20240414-WA0021.jpg";
import foto10 from "./../img/jpg/pods/IMG-20240414-WA0026.jpg";

const Product_Page = () => {
  // Array de imágenes de la categoría "Descartables"
  const descartables = [
    { image: foto1, productName: "Elfbar 5000" },
    { image: foto2, productName: "Elfbar TE5000" },
    { image: foto3, productName: "Geekbar b5000" },
    { image: foto4, productName: "Ignite V50" },
    { image: foto5, productName: "Uwell B6000" },
  ];
  // Array de imágenes de la categoría "Pods"
  const pods = [
    { image: foto6, productName: "Voopoo Vinci Q" },
    { image: foto7, productName: "Vaporesso Zero 2" },
    { image: foto8, productName: "Vaporesso Xros 3 mini" },
    { image: foto9, productName: "Voopoo Vinci (Royal Edition)" },
    { image: foto10, productName: "Vaporesso Xros Pro" },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Descartables</h1>
          <div className="d-flex flex-wrap justify-content-center">
            {descartables.map((product, index) => (
              <CardsProduct
                key={index}
                image={product.image}
                productName={product.productName}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h1>Pods</h1>
          <div className="d-flex flex-wrap justify-content-center">
            {pods.map((product, index) => (
              <CardsProduct
                key={index}
                image={product.image}
                productName={product.productName}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_Page;
