import { useEffect, useState, React, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Menu from "./components/Menu";
import Header from "./components/Header";
import HomeLoader from "./components/HomeLoader";
import Home from "./components/Home";
import Productpage from "./components/Productpage";
import BuyPage from "./components/BuyPage";
import Footer from "./components/Footer";
import Errorpage from "./components/Errorpage";
import "./sass/main.scss";

const MobileHome = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./components/Home")), 200);
    })
);

export default function App() {
  const isMobile = window.innerWidth <= 600;
  const [cartLoader, setCartLoader] = useState(null);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [cacheData, setCacheData] = useState({});

  useEffect(() => {
    if (localStorage.getItem("cart-data")) {
      setCart(JSON.parse(localStorage.getItem("cart-data")));
    }
  }, []);

  const setproducts = (data) => {
    setProducts(data);
  };

  const setcachedata = (cachedata) => {
    setCacheData(cachedata);
  };

  const cartHandler = (item) => {
    let element = cart.find((elm) => elm.id === item.id);
    if (element) {
      updateCart(item);
    } else {
      addToCart(item);
    }
  };

  const addToCart = (item) => {
    setCartLoader(item.id);
    let tempcart = [{ ...item, qty: 1, totalPrice: item.price }, ...cart];
    localStorage.setItem("cart-data", JSON.stringify(tempcart));
    setCart(tempcart);
    setTimeout(() => setCartLoader(null), 200);
  };

  const updateCart = (item) => {
    setCartLoader(item.id);
    let tempcart = [];
    cart.map((elm) => {
      if (elm.id == item.id) {
        elm.qty = elm.qty + 1;
        elm.totalPrice = elm.qty * elm.price;
      }
      tempcart.push(elm);
    });
    localStorage.setItem("cart-data", JSON.stringify(tempcart));
    setCart(tempcart);
    setTimeout(() => setCartLoader(null), 200);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header cart={cart} cartLoader={cartLoader} />
        <Switch>
          <Route exact path="/">
            <Menu />

            {!isMobile ? (
              <>
                <Home />
                <Footer />
              </>
            ) : (
              <Suspense fallback={<HomeLoader />}>
                <MobileHome />
                <Footer />
              </Suspense>
            )}
          </Route>

          <Route strict exact sensitive path={["/sortModal/:name", "/:name"]}>
            <Productpage
              addToCart={cartHandler}
              cartLoader={cartLoader}
              setproducts={setproducts}
              products={products}
              cacheData={cacheData}
              setcachedata={setcachedata}
            />
          </Route>

          <Route path="/:name/:itembrand/:itemname/:id/buy">
            <BuyPage />
          </Route>

          <Route path="/checkout/cart">
            <Cart cart={cart} />
          </Route>

          <Route path="*">
            <Errorpage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
