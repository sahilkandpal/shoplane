import { useEffect, useState, React, lazy, Suspense } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Menu from "./components/Menu";
import Header from "./components/Header";
import HomeLoader from "./components/HomeLoader";
import ProductPageLoader from "./components/ProductPageLoader";
import Home from "./components/Home";
const MobileHome = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./components/Home")), 1000);
    })
);
import Productpage from "./components/Productpage";
const MobileProductpage = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./components/Productpage")), 1000);
    })
);
import Footer from "./components/Footer";
import Errorpage from "./components/Errorpage";
import "./sass/main.scss";
import Product from "./components/Product";

export default function App() {
  const isMobile = window.innerWidth <= 600;

  const [data, setData] = useState([]);
  const [cartLoader, setCartLoader] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cart-data")) {
      setCart(JSON.parse(localStorage.getItem("cart-data")));
    }
  }, []);

  const addToCart = (item) => {
    setCartLoader(item.id);
    let tempcart = [item, ...cart];
    localStorage.setItem("cart-data", JSON.stringify(tempcart));
    setCart(tempcart);
    setTimeout(() => setCartLoader(null), 1000);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header cart={cart} cartLoader={cartLoader} icon={"bar"} />
            <Menu />

            {!isMobile ? (
              <Home />
            ) : (
              <Suspense fallback={<HomeLoader />}>
                <MobileHome />
              </Suspense>
            )}
          </Route>
          <Route strict exact sensitive path={["/sortModal/:name", "/:name"]}>
            <Header cart={cart} cartLoader={cartLoader} icon={"back"} />

            {!isMobile ? (
              <Productpage addToCart={addToCart} cartLoader={cartLoader} />
            ) : (
              <Suspense fallback={<ProductPageLoader />}>
                <MobileProductpage
                  addToCart={addToCart}
                  cartLoader={cartLoader}
                />
              </Suspense>
            )}
          </Route>
          <Route path="/checkout/cart">
            <Header cart={cart} cartLoader={cartLoader} icon={"back"} />
            <Cart cart={cart} />
          </Route>
          <Route path="*">
            <Header cart={cart} cartLoader={cartLoader} icon={"back"} />
            <Errorpage />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
