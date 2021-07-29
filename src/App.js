import { React, lazy, Suspense } from "react";
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
import ConfirmPage from "./components/ConfirmPage";
import "./sass/main.scss";

const MobileHome = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./components/Home")), 200);
    })
);

export default function App() {
  const isMobile = window.innerWidth <= 600;

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
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
            <Productpage />
          </Route>

          <Route path="/:name/:itembrand/:itemname/:id/buy">
            <BuyPage />
          </Route>

          <Route path="/checkout/cart">
            <Cart />
          </Route>

          <Route path="/checkout/order">
            <ConfirmPage />
          </Route>

          <Route path="*">
            <Errorpage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
