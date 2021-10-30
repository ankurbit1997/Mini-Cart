// import { toastMessage, TYPE_SUCCESS } from "../components/toast";

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_PRODUCT":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "SORT_LOW_TO_HIGH":
      return {
        ...state,
        sort: action.payload,
      };
    case "SORT_HIGH_TO_LOW":
      return {
        ...state,
        sort: action.payload,
      };
    case "MENS_CLOTHING":
      return {
        ...state,
        mensClothing: !action.payload,
      };
    case "WOMENS_CLOTHING":
      return {
        ...state,
        womensClothing: !action.payload,
      };
    case "ELECTRONICS":
      return {
        ...state,
        electronics: !action.payload,
      };
    case "JEWELERY":
      return {
        ...state,
        jewelery: !action.payload,
      };
    case "RATING":
      localStorage.setItem("rating", JSON.stringify(action.payload));
      return {
        ...state,
        byRating: action.payload,
      };
    case "CLEAR_FILTERS":
      localStorage.setItem("rating", 0);

      return {
        byRating: 0,
        searchQuery: "",
        mensClothing: false,
        womensClothing: false,
        electronics: false,
        jewelery: false,
      };
    default:
      return state;
  }
};
