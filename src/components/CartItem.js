import React from "react";
import { HashRouter, Route, Link, useHistory } from "react-router-dom";
import ModalPage from "./ModalPage";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/actions/index";

const CartItem = ({ item }) => {
  let dispatch = useDispatch();
  return (
    <HashRouter hashType="noslash">
      <li className="cart__list__item" key={item.id}>
        <div className="item__top">
          <img src={item.preview} width={40} alt=""></img>
          <div className="item__details">
            <div className="item-brand">{item.brand}</div>
            <div className="item-name">{item.name}</div>
            <div className="seller-name">Sold by: Flashstar Commerce</div>
            <div className="product-config">
              <Link to={{ pathname: "/modal", state: { modalType: "size" } }}>
                <div className="product-size">
                  Size: L
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="3"
                    viewBox="0 0 6 3"
                    className="dropDown"
                  >
                    <path fillRule="evenodd" d="M0 0h6L3 3z"></path>
                  </svg>
                </div>
              </Link>

              <Link
                to={{ pathname: "/modal", state: { modalType: "quantity" } }}
              >
                <div className="product-qty">
                  Qty: {item.qty}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="3"
                    viewBox="0 0 6 3"
                    className="dropDown"
                  >
                    <path fillRule="evenodd" d="M0 0h6L3 3z"></path>
                  </svg>
                </div>
              </Link>
            </div>
            <div className="item-price">₹ {item.price * item.qty}</div>
          </div>
        </div>
        <div className="product-actions">
          <div
            className="removebtn"
            onClick={() => dispatch(removeFromCart(item))}
          >
            REMOVE
          </div>
          <div className="wishlistbtn">MOVE TO WISHLIST</div>
        </div>

        <Route path="/modal">
          <ModalPage />
        </Route>
      </li>
    </HashRouter>
  );
};

export default CartItem;
