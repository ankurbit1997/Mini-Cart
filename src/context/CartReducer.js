import { toastMessage, TYPE_SUCCESS } from "../components/toast";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: [...action.payload],
      };
    case "ADD_PRODUCT":
      console.log("added product", action.payload);
      toastMessage(`Proctuct ${action.payload.id} added to cart`, TYPE_SUCCESS);
      return {
        ...state,
      };

    default:
      return state;
  }
};
