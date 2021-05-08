export default function cartbtn(props) {
  return (
    <div className="cart_btn">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="#3E4152"
          fillRule="evenodd"
          d="M4.012 20.718L5.246 7.314H7.27v1.763a.733.733 0 101.466 0V7.314h6.528v1.763a.733.733 0 001.466 0V7.314h2.024l1.234 13.404H4.012zM12 3.282c1.56 0 2.865 1.1 3.187 2.565H8.813A3.268 3.268 0 0112 3.282zm8.15 3.228a.733.733 0 00-.73-.663h-2.747A4.734 4.734 0 0012 1.816a4.734 4.734 0 00-4.673 4.03H4.58a.733.733 0 00-.73.664L2.475 21.38a.734.734 0 00.73.804h17.59a.733.733 0 00.73-.803L20.15 6.51z"
        ></path>
      </svg>
      <div className="badge2" id="lblCartCount">
        {props.cart ? (
          <span
            style={{
              display: props.cartLoader ? "none" : "inline",
            }}
          >
            {props.cart.length}
          </span>
        ) : (
          <span>0</span>
        )}
        <img
          className="loading"
          src="https://i.gifer.com/ZZ5H.gif"
          alt=""
          width={15}
          style={{
            display: props.cartLoader ? "inline" : "none",
          }}
        ></img>
      </div>
    </div>
  );
}
