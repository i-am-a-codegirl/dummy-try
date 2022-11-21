import Images from "../data/master-image";
import { ArrowBack } from "@material-ui/icons";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <div>
        <div className="emptyNav">
          <Link to="/">
            <ArrowBack className="arrow" />{" "}
          </Link>{" "}
          <h2>Back To Shopping</h2>
        </div>
        <div className="backToShopping">
          <img src={Images.emptyCart} alt="nothing" />

          <h2 style={{ fontStyle: "italic" }}>Feels so empty</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <small>
              There is nothing in your bag. Let's together add some health in
              your bag
            </small>
            <Link to="all-product">
              <button className="goToWishlist">
                Add items come on its fun
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
