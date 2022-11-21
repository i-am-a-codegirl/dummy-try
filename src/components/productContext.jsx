import { createContext, useContext, useReducer } from "react";
import { ProductReducer } from "./ProductReducer";
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(ProductReducer, {
    byStock: false,
    priceRange: 1000,
    byBestseller: false,
    byProtienBars: false,
    byDesserts: false,
    byChips: false,
    byDelivery: false,
    searchQuery: ""
  });

  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };
