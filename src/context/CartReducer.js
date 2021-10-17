import { toastMessage, TYPE_SUCCESS } from "../components/toast";

var item = [];
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: [...action.payload],
      };
    case "ADD_TO_CART":
      item.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(item));
      toastMessage(`Proctuct ${action.payload.id} added to cart`, TYPE_SUCCESS);
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      toastMessage(
        `Proctuct ${action.payload.id} Removed from cart`,
        TYPE_SUCCESS
      );
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "FETCH_CART":
      return { ...state, cart: [...state.cart, ...action.payload] };
    default:
      return state;
  }
};
