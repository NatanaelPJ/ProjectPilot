import React from "react";
import { Routes as Switch, Route } from "react-router-dom";

import Home from "./pages//Home"
import Menu from "./pages/Menu";
import Cart  from "./pages/Cart";

export default function Routes(){
  return(
    <>
      <Switch>
          <Route path="/" element={ <Home/> }></Route>
          <Route path="/menu" element={ <Menu/> }></Route>
          <Route path="/cart" element={ <Cart/> }></Route>
      </Switch>
    </>
  )
}