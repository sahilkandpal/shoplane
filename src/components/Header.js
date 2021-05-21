import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Cartbtn from "./Cartbtn";

const Header = ({ cart, showcart, cartLoader }) => {
  let history = useHistory();
  let { pathname } = useLocation();

  const goback = () => {
    console.log("back called");
    history.goBack();
  };

  useEffect(() => {
    var menuicon = document.getElementById("menuicon");
    if (menuicon != null) {
      menuicon.addEventListener("click", () => {
        var check = document.getElementById("check");
        var show = document.getElementById("show");
        show.classList.add("show");
        check.classList.add("animate");
        document.body.classList.add("no-scroll-background");
      });
    }
  }, [pathname]);

  return (
    <header>
      {pathname == "/" ? (
        <div className="menu-icon" id="menuicon" style={{ display: "none" }}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M3.444 5.422a.733.733 0 110-1.466h17.047a.733.733 0 110 1.466H3.444zm0 7.111a.733.733 0 110-1.466h17.047a.733.733 0 110 1.466H3.444zm0 7.111a.733.733 0 110-1.466h17.047a.733.733 0 110 1.466H3.444z"
              fill="#3E4152"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      ) : (
        <a id="backicon" onClick={goback}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="#3E4152"
              fillRule="evenodd"
              d="M20.25 11.25H5.555l6.977-6.976a.748.748 0 000-1.056.749.749 0 00-1.056 0L3.262 11.43A.745.745 0 003 12a.745.745 0 00.262.57l8.214 8.212a.75.75 0 001.056 0 .748.748 0 000-1.056L5.555 12.75H20.25a.75.75 0 000-1.5"
            ></path>
          </svg>
        </a>
      )}

      {pathname == "/" ? (
        <a href="/">
          <div className="logo">
            <span>
              <b>SHOP</b>LANE
            </span>
          </div>
        </a>
      ) : (
        <div className="page-name">shopping bag</div>
      )}

      <ul>
        <a href="/shirts">
          <li>Shirts</li>
        </a>
        <a href="/t-shirt">
          <li>T-shirts</li>
        </a>
        <a href="/dresses">
          <li>Dresses</li>
        </a>
        <a href="/watches">
          <li>Watches</li>
        </a>
      </ul>

      {pathname == "/checkout/cart" ? (
        <div className="step-number">step 1/3</div>
      ) : (
        <a href="/checkout/cart" className="cart-link">
          <Cartbtn cart={cart} showcart={showcart} cartLoader={cartLoader} />
        </a>
      )}
    </header>
  );
};

export default Header;
