import React from "react";
import { useHistory } from "react-router-dom";

const CartHeader = () => {
  let history = useHistory();

  const goback = () => {
    history.goBack();
  };

  return (
    <>
      <header className="cart__header">
        <a id="backicon" onClick={goback}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="#3E4152"
              fillRule="evenodd"
              d="M20.25 11.25H5.555l6.977-6.976a.748.748 0 000-1.056.749.749 0 00-1.056 0L3.262 11.43A.745.745 0 003 12a.745.745 0 00.262.57l8.214 8.212a.75.75 0 001.056 0 .748.748 0 000-1.056L5.555 12.75H20.25a.75.75 0 000-1.5"
            ></path>
          </svg>
        </a>
        <div className="page-name">shopping bag</div>
        <a href="/">
          <div className="logo">
            <span>
              <b>SHOP</b>LANE
            </span>
          </div>
        </a>
        <div className="checkout-steps">
          <div className="step">bag</div>
          <div className="divider"></div>
          <div className="step">address</div>
          <div className="divider"></div>
          <div className="step">payment</div>
        </div>
        <div className="secure-container">
          <img src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" />
          <div className="secure-container-text"> 100% secure</div>
        </div>
        <div className="step-number">step 1/3</div>
      </header>
    </>
  );
};

export default CartHeader;
