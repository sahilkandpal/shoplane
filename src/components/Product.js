const Product = (props) => {
  return (
    <>
      <div className="product-card" key={props.item.id}>
        <div className="product-img">
          <img src={props.item.preview} alt=""></img>
        </div>
        <div className="product-details">
          <div className="product-brand">{props.item.brand}</div>
          <h4>{props.item.name}</h4>
          <div className="product-bottom-details">
            <div className="product-price">Rs.{props.item.price}</div>
            <div className="add" onClick={() => props.addToCart(props.item)}>
              {props.cartLoader === props.item.id
                ? "ADDING.........."
                : "ADD TO BAG"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
