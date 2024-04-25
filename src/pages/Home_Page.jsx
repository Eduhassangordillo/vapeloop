import React from "react";
import Carrusel from "../components/Carrusel";

const Home_Page = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Home Page</h1>
          <div>
            <Carrusel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_Page;
