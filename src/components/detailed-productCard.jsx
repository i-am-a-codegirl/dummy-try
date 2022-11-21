import { useCart } from "./cart-context";
import { ArrowBack } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {
  AddToCart,
  RemoveFromCart,
  AddToWishList,
  RemoveFromWishList
} from "./buttons";

export const DetailedProductCard = ({ props }) => {
  const { state, dispatch, wishlist, wishlistDispatch } = useCart();

  const product = state.findIndex((singleProductInCart) => {
    return singleProductInCart.id === props.id;
  });

  const wishlistProduct = wishlist.findIndex((singleProductInWishlist) => {
    return singleProductInWishlist.id === props.id;
  });

  const checkProduct = () => (product === -1 ? true : false);
  const checkProductWishlist = () => (wishlistProduct === -1 ? true : false);

  return (
    <div className="content-container">
      <div
        className="horizontal-card"
        style={{ margin: "auto", flexDirection: "row" }}
      >
        <div style={{ height: "40rem", display: "flex" }}>
          <img
            src={props.image}
            alt=""
            className="horizontal-img"
            style={{ height: "96%", padding: "2px" }}
          />

          <div className="main-content22" style={{ padding: "2.4rem 2rem" }}>
            <h1>{props.name}</h1>
            <small style={{ paddingLeft: "16px", marginBottom: "2.4rem " }}>
              {props.category}
            </small>

            <div
              className="cart-product-info cart-product-info2"
              style={{ width: "24rem", paddingInlineStart: "4rem" }}
            >
              <p
                className="price-tag"
                style={{
                  paddingTop: "0.8rem",

                  width: "8rem",
                  fontSize: "1.2rem"
                }}
              >
                Price - {props.price}
              </p>

              <div
                className="discount-percent discount-percent2"
                style={{
                  paddingTop: "0.8rem",
                  paddingInlineStart: "0.8rem",

                  width: "12rem",
                  fontSize: "2ch"
                }}
              >
                50% off
              </div>
            </div>

            <p
              style={{
                width: "12 0%",
                padding: "0.2rem",
                margin: "auto",
                marginLeft: "-1.2rem",
                fontWeight: "400",
                fontSize: "1.2rem"
              }}
            >
              {" "}
              {props.description}
            </p>

            <ul>
              <li style={{ paddingLeft: "1.2rem" }}> less calories ⬆️</li>
              <li> more fiber ⬆️</li>
              <li> more love 🧡</li>
            </ul>

            <div className="cart-card-button cart-card-button2">
              {checkProductWishlist() ? (
                <button
                  className="card-btn background"
                  style={{ marginBottom: "0.4rem", padding: "0.4rem 0.28rem" }}
                  onClick={() => {
                    wishlistDispatch({
                      type: "add-to-wishlist",
                      payload: props
                    });
                  }}
                >
                  {" "}
                  Add to Wishlist
                </button>
              ) : (
                <button
                  className="card-btn background"
                  style={{ marginBottom: "0.4rem", padding: "0.4rem 0.28rem" }}
                  onClick={() => {
                    wishlistDispatch({
                      type: "remove-from-wishlist",
                      payload: props //how to pass prpducts from bestseller in this...as if i put button there it toogles state for every button...so hoe to fetch products from bestseller here
                    });
                  }}
                >
                  {" "}
                  Remove from Wishlist
                </button>
              )}
              {checkProduct() ? (
                <button
                  className="card-btn background-2"
                  onClick={() => {
                    dispatch({ type: "add-to-cart", payload: props });
                  }}
                >
                  {" "}
                  Add To Cart{" "}
                </button>
              ) : (
                <button
                  className="card-btn background-2"
                  onClick={() => {
                    dispatch({
                      type: "remove-from-cart",
                      payload: props //how to pass prpducts from bestseller in this...as if i put button there it toogles state for every button...so hoe to fetch products from bestseller here
                    });
                  }}
                >
                  {" "}
                  Remove From Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
