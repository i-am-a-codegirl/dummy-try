//approach to be implmented project as we have to use state value
export const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    //sort m ya toh low-to high hoga ha high to low hoha

    case "filter-by-delivery":
      return { ...state, byDelivery: !state.byDelivery };

    case "filter-by-price-range":
      return { ...state, priceRange: action.priceValue };

    case "filter-by-protien-bars":
      return { ...state, byProtienBars: !state.byProtienBars };

    case "filter-by-desserts":
      return { ...state, byDesserts: !state.byDesserts };

    case "filter-by-chips":
      return { ...state, byChips: !state.byChips };

    case "filter-by-bestseller":
      return { ...state, byBestseller: !state.byBestseller };

    case "filter-by-stock":
      return { ...state, byStock: !state.byStock };

    case "filter-by-searchQuery":
      return { ...state, searchQuery: action.payload };

    case "clear-filters":
      return {
        byStock: false,
        priceRange: 1000,
        byBestseller: false,
        byProtienBars: false,
        byDesserts: false,
        byChips: false,
        searchQuery: ""
      };

    //setting to initial values

    default:
      return state;
  }
};
