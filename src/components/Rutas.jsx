import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home_Page } from "./../pages/Home_Page";
import { Product_Page } from "./../pages/Product_Page";

export const Rutas = () => {
  return (
    <>
      <Switch>
        <Route path="/">
          <Home_Page />
        </Route>
        <Route path="/product">
          <Product_Page />
        </Route>
      </Switch>
    </>
  );
};

export default Rutas;
