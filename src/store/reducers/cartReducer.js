const initialState = JSON.parse(localStorage.getItem("cart-data")) || {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { product, quantity } = action.payload;
      let check = state.products.find((item) => item.id === product.id);

      if (check) {
        let tempState = state.products.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + quantity } : item
        );
        let TQuantity = state.totalQuantity + quantity;
        let TPrice = state.totalPrice + product.price * quantity;
        let finalCart = {
          products: tempState,
          totalQuantity: TQuantity,
          totalPrice: TPrice,
        };
        localStorage.setItem("cart-data", JSON.stringify(finalCart));
        return finalCart;
      } else {
        product.qty = quantity;
        let TQuantity = state.totalQuantity + quantity;
        let TPrice = state.totalPrice + product.price * quantity;
        let finalCart = {
          products: [product, ...state.products],
          totalQuantity: TQuantity,
          totalPrice: TPrice,
        };
        localStorage.setItem("cart-data", JSON.stringify(finalCart));
        return finalCart;
      }

    case "REMOVE_fROM_CART":
      let qty, price;
      let tempState = state.products.filter((item) => {
        if (item.id != action.payload.id) {
          return true;
        } else {
          qty = state.totalQuantity - item.qty;
          price = state.totalPrice - item.price * item.qty;
          return false;
        }
      });

      let finalCart = {
        products: tempState,
        totalQuantity: qty,
        totalPrice: price,
      };

      localStorage.setItem("cart-data", JSON.stringify(finalCart));
      return finalCart;

    default:
      return state;
  }
};

export default cartReducer;
