import "./styles.css";
import Home from "./pages/home";
import { Cart } from "./pages/cart";
import { Wishlist } from "./pages/wishlist";
import { AllProduct } from "./pages/all-product";
import { Login } from "./pages/login";
import { SignUp } from "./pages/sign-up";
import { NotFound } from "./pages/404";
import { DetailedProduct } from "./components/detailedProduct";
import { Routes, Route } from "react-router-dom";
import MockmanEs from "mockman-js";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/all-product" element={<AllProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mockbee" element={<MockmanEs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="product/:productId" element={<DetailedProduct />} />
      </Routes>
    </div>
  );
}
