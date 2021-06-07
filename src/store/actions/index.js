export const cache = (data) => {
  return {
    type: "cache",
    payload: data,
  };
};

export const addToCart = (data) => {
  return {
    type: "ADD_TO_CART",
    payload: data,
  };
};

export const removeFromCart = (data) => {
  return {
    type: "REMOVE_fROM_CART",
    payload: data,
  };
};
