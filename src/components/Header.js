import React from "react";
import { useLocation } from "react-router-dom";
import DefaultHeader from "./DefaultHeader";
import CartHeader from "./CartHeader";
const Header = () => {
  const { pathname } = useLocation();
  const isCartPage = pathname == "/checkout/cart";
  return <div>{!isCartPage ? <DefaultHeader /> : <CartHeader />}</div>;
};

export default Header;
