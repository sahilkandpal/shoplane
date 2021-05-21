import { useEffect, useState } from "react";
import CartItem from "./CartItem";
export default function Cart(props) {
  const [cartTotal, setCartTotal] = useState(0);

  document.title = "SHOPPING BAG";

  useEffect(() => {
    var tempprice;
    tempprice = 0;
    for (let i in props.cart) {
      tempprice = tempprice + props.cart[i].totalPrice;
    }
    setCartTotal(tempprice);
  }, [props.cart]);

  return (
    <div
      className="cart"
      style={{ background: cartTotal > 0 ? "#f4f4f5" : "#fff" }}
    >
      {props.cart.length > 0 ? (
        <>
          <div className="guideline">
            As per guidelines, we are only delivering essentials in
            govt-specified pincodes
          </div>
          <div className="trust">
            <svg
              width="32"
              height="42"
              viewBox="0 0 32 42"
              className="trustNSafety-base-trustIcon"
            >
              <g fillRule="nonzero" stroke="none" strokeWidth="1" fill="none">
                <g transform="translate(-43 -123) translate(0 115) translate(43 8) translate(13.546 18.161)">
                  <path
                    d="M13.293 19.619l-4.007-1.136a.677.677 0 00-.778.327L6.5 22.473a.2.2 0 01-.358-.018L4.34 18.128 0 7.713 3.214 0l2.732 1.148 2.735 6.564 4.85 11.637a.2.2 0 01-.238.27h0z"
                    stroke="#282C3F"
                    strokeWidth="1.057754"
                    fill="#FFC5D2"
                  ></path>
                  <path
                    fill="#FF3F6C"
                    d="M8.51634463 8.32498327L4.959992 18.2741111 0.689250371 7.90642162 3.20443637 0.376284585 5.92768063 1.52029325z"
                  ></path>
                </g>
                <path
                  d="M15.804.544c.683 0 1.365.23 1.924.69h0l2.45 2.02c.4.33.89.533 1.408.583h0l3.16.304c.72.07 1.366.39 1.849.872.482.483.802 1.128.871 1.849h0l.305 3.16c.05.517.253 1.008.583 1.408h0l2.02 2.45c.46.559.69 1.241.69 1.924 0 .683-.23 1.365-.69 1.924h0l-2.02 2.45c-.33.4-.533.89-.583 1.408h0l-.305 3.16a3.02 3.02 0 01-2.72 2.72h0l-3.16.305a2.607 2.607 0 00-1.409.583h0l-2.45 2.02c-.558.46-1.24.69-1.923.69s-1.365-.23-1.924-.69h0l-2.45-2.02c-.4-.33-.89-.533-1.408-.583h0l-3.16-.305a3.02 3.02 0 01-2.72-2.72h0l-.305-3.16a2.606 2.606 0 00-.583-1.409h0l-2.02-2.45a3.019 3.019 0 01-.69-1.923c0-.683.23-1.365.69-1.924h0l2.02-2.45c.33-.4.533-.89.583-1.408h0l.304-3.16c.07-.72.39-1.366.872-1.849a3.019 3.019 0 011.849-.872h0l3.16-.304a2.603 2.603 0 001.408-.583h0l2.45-2.02a3.019 3.019 0 011.924-.69z"
                  stroke="#282C40"
                  strokeWidth="0.417647"
                  fill="#282C3F"
                  transform="translate(-43 -123) translate(0 115) translate(43 8)"
                ></path>
                <path
                  d="M25.211 15.804a9.407 9.407 0 11-18.814 0 9.407 9.407 0 0118.814 0z"
                  fill="#FFEBF0"
                  transform="translate(-43 -123) translate(0 115) translate(43 8)"
                ></path>
                <path
                  d="M11.701 40.675l-1.44-2.614h0c-.298-.54-.921-.8-1.516-.633l-2.874.81a.127.127 0 01-.152-.172l4.318-10.307h0c.4.057.774.22 1.086.477l2.468 2.032a3.476 3.476 0 002.364.788l-4.025 9.607a.127.127 0 01-.229.012z"
                  stroke="#282C3F"
                  strokeWidth="1.057754"
                  fill="#FFC5D2"
                  transform="translate(-43 -123) translate(0 115) translate(43 8)"
                ></path>
                <path
                  d="M29.724 17.278l-2.034 2.465a3.458 3.458 0 00-.78 1.877l-.306 3.18a2.197 2.197 0 01-1.973 1.97l-2.797.27a.373.373 0 00-.033.003l-.354.034a3.469 3.469 0 00-1.88.778L17.1 29.886a2.2 2.2 0 01-2.792 0l-2.468-2.031a3.466 3.466 0 00-1.879-.778l-.356-.034a.442.442 0 00-.03-.003l-2.798-.27a2.197 2.197 0 01-1.973-1.97l-.307-3.18a3.458 3.458 0 00-.779-1.877l-2.034-2.465a2.193 2.193 0 010-2.788l2.034-2.465a3.458 3.458 0 00.78-1.877l.306-3.18c.1-1.041.93-1.87 1.973-1.97l3.184-.307a3.469 3.469 0 001.88-.777l2.467-2.032c.405-.333.9-.5 1.396-.5.495 0 .991.167 1.396.5l2.467 2.032a3.466 3.466 0 001.88.777l3.184.306c1.043.1 1.873.93 1.973 1.972l.307 3.18c.067.691.336 1.34.779 1.876l2.034 2.465c.666.808.666 1.98 0 2.788z"
                  fill="#FFEBF0"
                  transform="translate(-43 -123) translate(0 115) translate(43 8)"
                ></path>
                <path
                  d="M15.616 5.644c-.426 0-.855.027-1.276.081a.638.638 0 00.162 1.266c.367-.047.741-.07 1.114-.07 4.794 0 8.695 3.9 8.695 8.695s-3.901 8.695-8.695 8.695c-4.795 0-8.695-3.9-8.695-8.695a8.713 8.713 0 015.137-7.937.638.638 0 10-.523-1.164 9.99 9.99 0 00-5.89 9.1c0 5.5 4.473 9.972 9.97 9.972 5.5 0 9.972-4.473 9.972-9.971 0-5.499-4.473-9.972-9.971-9.972h0z"
                  stroke="#FFEBF0"
                  strokeWidth="0.2"
                  fill="#282C3F"
                  transform="translate(-43 -123) translate(0 115) translate(43 8)"
                ></path>
                <path
                  d="M15.367 6.945c2.087 1.143 5.067 4.541 5.067 8.54 0 4-2.557 7.773-6.019 8.73 5.678.996 10.304-4.106 10.055-8.73-.25-4.622-3.495-8.775-9.103-8.54z"
                  fill="#FFC5D2"
                  transform="translate(-43 -123) translate(0 115) translate(43 8)"
                ></path>
                <path
                  d="M13.567 20.32c-.353 0-.692-.138-.942-.383l-2.828-2.769a1.286 1.286 0 010-1.845c.52-.51 1.364-.51 1.885 0l1.885 1.846 5.23-5.122c.521-.51 1.365-.51 1.885 0s.52 1.336 0 1.845l-6.173 6.045c-.25.245-.588.382-.942.382z"
                  stroke="#282C3F"
                  strokeWidth="0.683423"
                  fill="#03A685"
                  transform="translate(-43 -123) translate(0 115) translate(43 8)"
                ></path>
              </g>
            </svg>
            <div className="trust-content">
              <div className="trust-content-heading">
                Shoplane Trust & Safety Promise
              </div>
              <div className="trust-content-text">
                Original Products | Safe Payment | Easy returns
              </div>
            </div>
          </div>

          <div className="cart__total">
            <div>{props.cart.length} ITEMS</div>
            <div className="cart__total__price">Total: ₹{cartTotal}</div>
          </div>

          <ul className="cart__list">
            {props.cart.map((item) => (
              <CartItem item={item} />
            ))}
          </ul>
        </>
      ) : (
        <p className="cart__empty" style={{ marginTop: 70 }}>
          <div className="sprite-img"></div>
          <h3>Hey, it feels so light!</h3>
          <p>There is nothing in your bag. Let's add some items.</p>
        </p>
      )}
    </div>
  );
}
