import { Link, useLocation } from "react-router-dom";

const Product = (props) => {
  const { pathname } = useLocation();
  const isMobile = window.innerWidth <= 700;

  const remSpace = (val) => {
    let changedValue = val.replace(/ /g, "-");
    return changedValue;
  };

  let customProps = {};

  if (!isMobile) {
    customProps.target = "_blank";
  }

  return (
    <>
      <Link
        to={`${pathname}/${remSpace(props.item.brand)}/${remSpace(
          props.item.name
        )}/${props.item.id}/buy`}
        {...customProps}
      >
        <div className="product-card" key={props.item.id}>
          <div className="product-img">
            <img src={props.item.preview} alt=""></img>
          </div>
          <div className="product-details">
            <div className="product-brand">{props.item.brand}</div>
            <h4>{props.item.name}</h4>
            <div className="product-bottom-details">
              <div className="product-price">Rs.{props.item.price}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
