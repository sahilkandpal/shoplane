import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
export default function Cart() {
  let myState = useSelector((state) => state.cartReducer);
  const isMobile = window.innerWidth <= 600;

  useEffect(() => {
    document.title = "SHOPPING BAG";
  }, []);

  return (
    <div
      className="cart"
      style={{
        backgroundColor: myState.totalQuantity == 0 && "#fff",
      }}
    >
      {myState.totalQuantity > 0 ? (
        <>
          <div className="guideline">
            As per guidelines, we are only delivering essentials in
            govt-specified pincodes
          </div>
          <div className="base-block">
            <div className="left-block">
              {isMobile && (
                <div className="trust">
                  <svg
                    width="32"
                    height="42"
                    viewBox="0 0 32 42"
                    className="trustNSafety-base-trustIcon"
                  >
                    <g
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                    >
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
              )}
              <div className="address-block">
                <div className="address-block-text">
                  Check delivery time & services
                </div>
                <div className="address-block-btn">enter pin code</div>
              </div>

              <div className="offer-block">
                <div className="offer-block-header">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    className="discount-svg"
                  >
                    <g fill="#000" fillRule="evenodd">
                      <path d="M15.292 10.687v.001c-.198.742.076 1.454.296 2.026l.045.12-.137.021c-.602.094-1.352.211-1.892.75-.538.54-.655 1.288-.748 1.89l-.022.138a22.096 22.096 0 0 1-.12-.045c-.443-.171-.946-.364-1.49-.364-.185 0-.366.023-.536.068-.728.194-1.198.78-1.577 1.249-.032.04-.07.088-.111.137l-.112-.138c-.378-.47-.848-1.054-1.575-1.248a2.092 2.092 0 0 0-.537-.068c-.543 0-1.046.193-1.49.364l-.12.045-.022-.138c-.093-.602-.21-1.35-.749-1.89-.539-.539-1.289-.656-1.891-.75l-.137-.022a15 15 0 0 1 .045-.118c.22-.573.494-1.286.296-2.027-.194-.728-.78-1.199-1.25-1.577L1.323 9l.137-.11c.47-.38 1.055-.85 1.249-1.577.198-.742-.076-1.455-.296-2.028l-.045-.118.137-.022c.602-.094 1.352-.211 1.891-.75.54-.539.656-1.289.75-1.891l.022-.137.119.045c.443.171.947.365 1.49.365.186 0 .367-.024.537-.07.727-.193 1.198-.778 1.576-1.248L9 1.322l.111.137c.379.47.85 1.055 1.576 1.249.17.045.352.069.537.069.544 0 1.047-.194 1.491-.365l.119-.045.022.137c.094.602.21 1.353.75 1.891.538.539 1.288.656 1.89.75l.138.022-.046.119c-.22.572-.494 1.285-.295 2.026.194.728.778 1.199 1.248 1.577.04.033.088.07.137.111l-.137.11c-.47.38-1.054.85-1.249 1.577M18 9c0-.744-1.459-1.286-1.642-1.972-.19-.71.797-1.907.437-2.529-.364-.63-1.898-.372-2.41-.884-.511-.511-.253-2.045-.883-2.41a.647.647 0 0 0-.33-.08c-.585 0-1.403.542-1.998.542a.778.778 0 0 1-.201-.025C10.286 1.46 9.743 0 9 0c-.744 0-1.286 1.459-1.972 1.642a.78.78 0 0 1-.2.025c-.596 0-1.414-.542-2-.542a.647.647 0 0 0-.33.08c-.63.365-.37 1.898-.883 2.41-.512.512-2.046.254-2.41.884-.36.62.627 1.819.437 2.529C1.46 7.714 0 8.256 0 9s1.459 1.286 1.642 1.972c.19.71-.797 1.908-.437 2.53.364.63 1.898.371 2.41.883.511.512.253 2.045.884 2.41.097.056.208.08.33.08.585 0 1.403-.542 1.998-.542a.78.78 0 0 1 .201.025C7.714 16.54 8.256 18 9 18s1.286-1.46 1.973-1.642a.774.774 0 0 1 .2-.025c.595 0 1.413.542 1.998.542a.647.647 0 0 0 .33-.08c.631-.365.373-1.898.884-2.41.512-.512 2.046-.254 2.41-.884.36-.62-.627-1.819-.437-2.529C16.54 10.286 18 9.744 18 9"></path>
                      <path d="M10.897 6.34l-4.553 4.562a.536.536 0 0 0 .76.758l4.552-4.562a.536.536 0 0 0-.76-.758M6.75 7.875a1.126 1.126 0 0 0 0-2.25 1.126 1.126 0 0 0 0 2.25M11.25 10.125a1.126 1.126 0 0 0 0 2.25 1.126 1.126 0 0 0 0-2.25"></path>
                    </g>
                  </svg>
                  <div className="offer-heading">Available Offers</div>
                </div>
                <div className="offer-block-text">
                  10% Instant Discount on ICICI Bank Credit and Debit Cards on a
                  min spend of Rs 3,000. TCA
                </div>
                <div className="offer-block-more">
                  Show More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    className="arrow-svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.797 5.529a.824.824 0 0 0-.042-.036L1.19.193a.724.724 0 0 0-.986 0 .643.643 0 0 0 0 .94L5.316 6 .203 10.868a.643.643 0 0 0 0 .938.724.724 0 0 0 .986 0l5.566-5.299a.644.644 0 0 0 .041-.978"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="cart__total">
                {isMobile ? (
                  <>
                    <div>{myState.products.length} ITEMS</div>
                    <div>Total: ₹{myState.totalPrice}</div>
                  </>
                ) : (
                  <>
                    <div>My Shopping Bag ({myState.products.length} Item)</div>
                    <div>Total: ₹{myState.totalPrice}</div>
                  </>
                )}
              </div>

              <ul className="cart__list">
                {myState.products.map((item) => (
                  <CartItem item={item} key={item.id} />
                ))}
              </ul>
            </div>
            <div className="right-block">
              <div className="coupon-block">
                <div className="coupon-block-heading">COUPONS</div>
                <div className="coupon-block-main">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    className="coupons-base-icon"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      transform="rotate(45 6.086 5.293)"
                    >
                      <path
                        stroke="#000"
                        d="M17.5 10V1a1 1 0 0 0-1-1H5.495a1 1 0 0 0-.737.323l-4.136 4.5a1 1 0 0 0 0 1.354l4.136 4.5a1 1 0 0 0 .737.323H16.5a1 1 0 0 0 1-1z"
                      ></path>
                      <circle
                        cx="5.35"
                        cy="5.35"
                        r="1.35"
                        fill="#000"
                        fillRule="nonzero"
                      ></circle>
                    </g>
                  </svg>
                  <div className="coupon-block-main-title">Apply Coupon</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    className="coupons-base-arrowIcon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.797 5.529a.824.824 0 0 0-.042-.036L1.19.193a.724.724 0 0 0-.986 0 .643.643 0 0 0 0 .94L5.316 6 .203 10.868a.643.643 0 0 0 0 .938.724.724 0 0 0 .986 0l5.566-5.299a.644.644 0 0 0 .041-.978"
                    ></path>
                  </svg>
                </div>
                <div className="coupon-block-login">
                  Login to see best coupons for you
                </div>
              </div>
              {!isMobile && (
                <div className="trust">
                  <svg
                    width="32"
                    height="42"
                    viewBox="0 0 32 42"
                    className="trustNSafety-base-trustIcon"
                  >
                    <g
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                    >
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
              )}
              <div className="price-block">
                <div className="price-block-heading">
                  PRICE DETAILS ({myState.products.length} Item)
                </div>
                <div className="price-block-row">
                  <span>Total MRP</span>
                  <span>₹{myState.totalPrice}</span>
                </div>
                <div className="price-block-row">
                  <span>Discount on MRP</span>
                  <span>-₹0</span>
                </div>
                <div className="price-block-row">
                  <span>Coupon Discount</span>
                  <span style={{ color: "#ff3f6c" }}>Apply Coupon</span>
                </div>
                <div className="price-block-row">
                  <span>Convenience Fee</span>
                  <span>
                    <s>₹99</s> FREE
                  </span>
                </div>
                <div className="price-block-total">
                  <span>Total Amount</span>
                  <span>₹{myState.totalPrice}</span>
                </div>
              </div>
              <div className="order-btn">
                <div className="order-text">place order</div>
              </div>
            </div>
          </div>
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
