import React, { useEffect, useState } from "react";
import { useLocation, Route, useParams } from "react-router-dom";
import Product from "./Product";
import Errorpage from "./Errorpage";
import Bottomoptions from "./Bottomoptions";
import Drawer from "./Drawer";
import Footer from "./Footer";
import ProductPageLoader from "./ProductPageLoader";

const Productpage = (props) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [options, setOptions] = useState(true);
  const [footer, setFooter] = useState(false);

  const { search, pathname } = useLocation();
  const { name } = useParams();

  const isMobile = window.innerWidth <= 700;

  useEffect(() => {
    document.title = `${name} - Buy from the Latest Collection of ${name} Online at Best Price | Shoplane`;

    if (props.cacheData.name != name || props.cacheData.search != search) {
      setLoader(true);
      fetch(`${process.env.REACT_APP_API_URL}/${name}${search}`)
        .then((res) => {
          if (res.status >= 200 && res.status <= 299) {
            return res.json();
          } else {
            console.log(res);
            throw Error(res.statusText);
          }
        })
        .then((data) => {
          props.setcachedata({ name: name, search: search });
          props.setproducts(data);
          setData(data);
          setLoader(false);
          setFooter(true);
        })
        .catch((err) => {
          setOptions(false);
          setError(true);
          console.log(err);
        });
    }
  }, [search]);

  return (
    <>
      {!error ? (
        <div className="product_page">
          <div className="products">
            {loader == false ? (
              props.products.map((item) => (
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
