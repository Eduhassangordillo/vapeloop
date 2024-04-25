import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home_Page from "./pages/Home_Page";
import Product_Page from "./pages/Product_Page";
import Nav_bar from "./components/Nav_bar";

import "./css/App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="sticky-top">
        <Nav_bar />
      </div>
      <Routes>
        <Route path="/" element={<Home_Page />} />
        <Route path="product" element={<Product_Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
