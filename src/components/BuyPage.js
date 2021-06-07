import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/actions/index";

const BuyPage = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [modalVal, setModalVal] = useState(null);
  const { id, name } = useParams();
  let dispatch = useDispatch();

  const list = ["S", "M", "L", "XL", "XXL"];

  const myState = useSelector((state) => state.cacheReducer);

  useEffect(() => {
    let check = myState.data.find((item) => item.id == id);
    if (check) {
      setData([check]);
    } else {
      setLoader(true);
      fetch(
        `https://6055954e91ea2900170d2dd0.mockapi.io/${name}?id=${id}&limit=1&page=1`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoader(false);
        });
    }

    window.scrollTo(0, 0);
  }, []);

  const addtocart = (data) => {
    dispatch(addToCart({ product: data, quantity: 1 }));
  };

  return (
    <>
      {data.length > 0 && !loader ? (
        <div className="buy__page__wrapper">
          <div className="image__block">
            <div className="image__container__1">
              <img src={data[0].preview} />
            </div>
            <div className="image__container__2">
              <img src={data[0].preview} />
            </div>
          </div>
          <div className="details__block">
            <div className="brand__block">{data[0].brand}</div>
            <div className="name__block">{data[0].name}</div>
            <div className="review__block">
              <div className="review__box">
                <svg x="0px" y="0px" viewBox="0 0 24 24" height="25">
                  <path
                    d="M9.6 13.3H11c.2 0 .4-.2.4-.4v-1.8c0-.2-.2-.4-.4-.4h-.4v-.6c0-.4.1-.7.2-.9.1-.1.3-.3.4-.3.1-.1.2-.2.2-.3v-.7c0-.2-.2-.4-.4-.4h-.1c-.5.2-.9.5-1.2.8-.3.5-.6 1.1-.6 1.9v2.6c0 .3.2.5.5.5zm8.7 1.5h-1.9c-.1 0-.3.1-.4.2-.1.1-.2.3-.2.4v1L14.6 15c-.1-.1-.3-.2-.5-.2H5.6V6.1h12.7v8.7zm.6-9.9H5c-.3 0-.6.3-.6.6v9.9c-.1.3.2.6.6.6h8.9l2.1 2.4c.1.1.3.2.5.2.1 0 .1 0 .2-.1.2-.1.4-.3.4-.6V16H19c.3 0 .6-.3.6-.6V5.5c-.1-.4-.3-.6-.7-.6zm-6.2 8.4h1.4c.2 0 .4-.2.4-.4v-1.8c0-.2-.2-.4-.4-.4h-.3v-.6c0-.4.1-.7.2-.9l.4-.4c.1-.1.2-.2.2-.3v-.6c0-.2-.2-.4-.4-.4h-.1c-.4.2-.8.5-1.1.8-.3.5-.6 1-.6 1.8v2.6c-.2.4 0 .6.3.6z"
                    fill="#7e818c"
                    transform="translate(-288 -464) translate(274 457) translate(14 7)"
                  ></path>
                </svg>
                <div className="reviews__count">144 Reviews</div>
              </div>
            </div>
            <div className="price__block">Rs.{data[0].price}</div>
            <div className="vat__info">inclusive of all taxes</div>
            <div className="size__block">
              <div className="size__header">Select Size</div>
              <div className="size__row">
                {list.map((val, index) => (
                  <div
                    key={index}
                    id={index + 1}
                    className={`size-list-item ${
                      modalVal == val ? "selected" : ""
                    }`}
                    onClick={() => {
                      setModalVal(val);
                    }}
                  >
                    <div className="size-number">{val}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="actions__block">
              <div className="add__btn" onClick={() => addtocart(...data)}>
                <div className="white-bag-sprite"></div>
                <div className="text">add to bag</div>
              </div>
              <div className="wishlist__btn">
                <div className="wishlist-icon-sprite"></div>
                <div className="text">wishlist</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="product_page">
          <div className="products">
            <div className="loader-page">
              <div className="loader-container">
                <div className="loader"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BuyPage;
