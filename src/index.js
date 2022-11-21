import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./components/cart-context";
import { ProductProvider } from "./components/productContext";
import { makeServer } from "./server";
import {UserDataProvider} from "./components/auth/userData"

makeServer();
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
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
  </StrictMode>
);
