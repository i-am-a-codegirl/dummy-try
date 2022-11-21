import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HorizontalCard } from "../components/horizontalCard";
import { PriceDetails } from "../components/priceDetails";
import { useCart } from "../components/cart-context";
import Images from "../data/master-image";
import { ArrowBack } from "@material-ui/icons";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { state } = useCart();

  if (state.length === 0) {
    return (
      <div>
        <div className="emptyNav">
          <Link to="/">
            <ArrowBack className="arrow" />{" "}
          </Link>{" "}
          <h2>Back To Shopping </h2>
          <h2>hy</h2>
          <div
            style={{
              flexGrow: "9",
              paddingTop: "1.6rem",
              marginLeft: "3.2rem",
              fontSize: "1.6rem"
            }}
          >
            0
          </div>
        </div>
        <div className="backToShopping">
          <img src={Images.emptyCart} alt="nothing" />

          <h2 style={{ fontStyle: "italic" }}>Feels so empty</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <small>
              There is nothing in your bag. Let's together add some health in
              your bag
            </small>
            <button className="goToWishlist">Add items from wishlist</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <h2 className="bestseller-heading max-width">
          {state.reduce((acc, curr, index) => {
            return (acc += state[index].qty);
          }, 0)}
        </h2>
        <div className="content-container">
          <div className="cart-card-container">
            {state.map((product) => {
              return <HorizontalCard key={product.id} props={product} />;
            })}
          </div>

          <PriceDetails />
        </div>
        <Footer />
      </div>
    );
  }
};
