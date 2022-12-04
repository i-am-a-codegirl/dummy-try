import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./components/cart-context";
import { ProductProvider } from "./components/productContext";
import { makeServer } from "./server";
import {UserDataProvider} from "./components/auth/userData"

makeServer();

ReactDOM.render(
  <StrictMode>
    <Router>
      <UserDataProvider>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
      </UserDataProvider>
    </Router>
  </StrictMode>,
    document.getElementById("root")
);
