import { React, lazy, Suspense, useEffect, useState } from "react";
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
import OfflineToast from "./components/OfflineToast";
import "./sass/main.scss";
import OfflinePage from "./components/OfflinePage";
import OnlineToast from "./components/OnlineToast";

const MobileHome = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./components/Home")), 200);
    })
);

export default function App() {
  const isMobile = window.innerWidth <= 600;
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showToast, setShowToast] = useState(navigator.onLine ? false : true);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("./serviceWorker.js")
        .then((res) => console.warn("res", res))
        .catch((e) => console.log(e));
    }
    const onlineCallbackFn = ()=>{
      setIsOnline(true);
      setTimeout(()=>{
        setShowToast(false);
      },4000);
    }
    const offlineCallbackFn = ()=>{
      setShowToast(true);
      setIsOnline(false);
    }
    addEventListener("online", onlineCallbackFn)
    addEventListener("offline", offlineCallbackFn)

    return ()=>{
      removeEventListener("online", onlineCallbackFn);
      removeEventListener("offline", offlineCallbackFn)
    }
  }, []);

  return (
    <div className="App">
    {!isOnline && showToast ? <OfflineToast isOnline={isOnline}/> : isOnline && showToast ? <OnlineToast/>:null}
    {!isOnline ? <OfflinePage/> : 
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
    }
    </div>
  );
}
