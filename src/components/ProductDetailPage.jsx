import React from "react";
import { useParams } from "react-router-dom";
import descartablesData from "./../json/descartablesData.json"; // Importa el archivo JSON de productos descartables
import podsData from "./../json/podsData.json"; // Importa el archivo JSON de pods

const ProductDetailPage = () => {
  const { id } = useParams();

  // Encuentra el producto correspondiente en la lista de productos
  const product =
    descartablesData.find((product) => product.id === id) ||
    podsData.find((product) => product.id === id);

  // Comprueba si se encontró el producto
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-center m-4">
        <div className="align-self-centers">
          <div className="card mb-3" style={{ maxWidth: "100%" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={product.image}
                  className="img-fluid rounded-start"
                  alt={product.productName}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{product.productName}</h5>
                  <p className="card-text">
                    {product.description}{" "}
                    {/* Mostrar la descripción del producto */}
                  </p>
                  <p className="card-text">
                    Precio: ${product.price}{" "}
                    {/* Mostrar el precio del producto */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
