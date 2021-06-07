import React, { useEffect, useState } from "react";
import { useLocation, Route, useParams } from "react-router-dom";
import Product from "./Product";
import Errorpage from "./Errorpage";
import Bottomoptions from "./Bottomoptions";
import Drawer from "./Drawer";
import Footer from "./Footer";
import ProductPageLoader from "./ProductPageLoader";
import { useSelector, useDispatch } from "react-redux";
import { cache } from "../store/actions/index";

const Productpage = (props) => {
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [options, setOptions] = useState(true);
  const [footer, setFooter] = useState(false);

  const { search } = useLocation();
  const { name } = useParams();

  const isMobile = window.innerWidth <= 700;

  const myState = useSelector((state) => state.cacheReducer);
  const dispatch = useDispatch();
  let pathCache = { name: name, search: search };

  useEffect(async () => {
    document.title = `${name} - Buy from the Latest Collection of ${name} Online at Best Price | Shoplane`;

    if (myState.pathCache.name != name || myState.pathCache.search != search) {
      setLoader(true);
      try {
        let res = await fetch(
          `${process.env.REACT_APP_API_URL}/${name}${search}`
        );
        let data = await res.json();
        dispatch(cache({ pathCache, data }));
        setLoader(false);
        setFooter(true);
      } catch (error) {
        setOptions(false);
        setError(true);
        console.log(error);
      }
    }
  }, [search]);

  return (
    <>
      {!error ? (
        <div className="product_page">
          <div className="products">
            {loader == false ? (
              myState.data.map((item) => (
                <Product
                  item={item}
                  addToCart={props.addToCart}
                  cartLoader={props.cartLoader}
                  key={item.id}
                />
              ))
            ) : error == false && !isMobile ? (
              <div className="loader-page">
                <div className="loader-container">
                  <div className="loader"></div>
                </div>
              </div>
            ) : (
              <ProductPageLoader />
            )}
          </div>
          {options == true ? (
            <>
              <Route path={`/sortModal/:name`}>
                <Drawer name={name} />
              </Route>
              <Route path={`/${name}`}>
                {!loader && <Bottomoptions name={name} search={search} />}
              </Route>
            </>
          ) : null}
        </div>
      ) : (
        <Errorpage />
      )}
      {footer && <Footer />}
    </>
  );
};

export default Productpage;
