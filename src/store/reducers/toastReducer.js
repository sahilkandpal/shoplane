const initialState = { toast: { id: null, preview: null }, animate: false };

const toastReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      console.log({ ...state, ...action.payload, animate: true });
      return { ...state, ...action.payload, animate: true };

    case "REMOVE_TOAST":
      console.log({ toast: { id: null, preview: null }, animate: false });
      return { toast: { id: null, preview: null }, animate: false };
    default:
      return state;
  }
};

export default toastReducer;
