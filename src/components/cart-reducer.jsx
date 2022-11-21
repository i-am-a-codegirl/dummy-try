export const CartReducer = (state, action) => {
  switch (action.type) {
    case "add-to-cart":
      return [...state, action.payload];

    case "remove-from-cart":
      return state.filter((check) => check.id !== action.payload.id);

    case "increase-qty":
      const dummyState = [...state];
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      dummyState[index] = { ...state[index], qty: state[index].qty + 1 };
      return dummyState;

    case "decrease-qty":
      const dummyState2 = [...state];
      const indexTwo = state.findIndex(
        (product) => product.id === action.payload.id
      );
      dummyState2[indexTwo] = {
        ...state[indexTwo],
        qty: state[indexTwo].qty - 1
      };
      return dummyState2;

    default:
      return state;
  }
};
