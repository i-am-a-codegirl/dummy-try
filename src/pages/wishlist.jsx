import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { WishListCard } from "../components/wishlistCard";
import { useCart } from "../components/cart-context";
import Images from "../data/master-image";
import { ArrowBack } from "@material-ui/icons";
import { Link } from "react-router-dom";

export const Wishlist = () => {
  const { wishlist } = useCart();

  if (wishlist.length === 0) {
    return (
      <div>
        <div className="emptyNav">
          <Link to="/">
            <ArrowBack className="arrow" />{" "}
          </Link>{" "}
          <h2>Back To Shopping</h2>
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
          <img src={Images.emptyWishlist} alt="nothing" />

          <h2 style={{ fontStyle: "italic" }}>Its good to have wishes.</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <small>Let's together create your healthiest wishlist ever.</small>
            <button className="goToWishlist">Add items</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <h2 className="bestseller-heading max-width">
          {wishlist.reduce((acc, curr, index) => {
            return (acc += wishlist[index].qty);
          }, 0)}
        </h2>
        <div className="content-container">
          <div className="cart-card-container">
            {wishlist.map((product) => {
              return <WishListCard key={product.id} props={product} />;
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};
