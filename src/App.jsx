import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoutes from "./routes/ProtectRoutes";

import Home_Page from "./pages/Home_Page";
import Admin_Page from "./pages/Admin_Page";
import Product_Page from "./pages/Product_Page";
import ProductDetailPage from "./components/ProductDetailPage";
import Nav_bar from "./components/Nav_bar";
import "./css/App.css";

// Importa los archivos JSON de productos
import descartablesData from "./json/descartablesData.json";
import podsData from "./json/podsData.json";

function App() {
  const [auth, setAuth] = useState(false);

  const logIn = () => {
    setAuth(true);
  };

  const logOut = () => {
    setAuth(false);
  };

  return (
    <BrowserRouter>
      <div className="sticky-top">
        <Nav_bar logIn={logIn} logOut={logOut} auth={auth} />
      </div>
      <Routes>
        <Route path="/" element={<Home_Page />} />
        <Route
          path="/product"
          element={
            <Product_Page descartables={descartablesData} pods={podsData} />
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProductDetailPage
              descartables={descartablesData}
              pods={podsData}
            />
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectRoutes auth={auth}>
              <Admin_Page />
            </ProtectRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
