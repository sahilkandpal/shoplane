const initialState = { pathCache: {}, data: [] };

const cacheReducer = (state = initialState, action) => {
  switch (action.type) {
    case "cache":
      return action.payload;
    default:
      return state;
  }
};

export default cacheReducer;
