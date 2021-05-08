import React, { useEffect, useState } from "react";
import { useLocation, Route, useParams, useHistory } from "react-router-dom";
import Product from "./Product";
import Errorpage from "./Errorpage";
import Bottomoptions from "./Bottomoptions";
import Drawer from "./Drawer";
const Productpage = (props) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true);
  const [options, setOptions] = useState(false);

  const { search } = useLocation();
  const { name } = useParams();

  useEffect(() => {
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
        setData(data);
        setLoader(false);
        setOptions(true);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, [search]);

  return (
    <div className="product_page">
      <div className="products">
        {loader == false ? (
          data.map((item) => (
            <Product
              item={item}
              addToCart={props.addToCart}
              cartLoader={props.cartLoader}
              key={item.id}
            />
          ))
        ) : error == false ? (
          <div className="loader-page">
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          </div>
        ) : (
          <Errorpage />
        )}
      </div>
      {options == true ? (
        <>
          <Route path={`/sortModal/${name}`}>
            <Drawer name={name} />
          </Route>
          <Route path={`/${name}`}>
            <Bottomoptions name={name} search={search} />
          </Route>
        </>
      ) : null}
    </div>
  );
};

export default Productpage;
