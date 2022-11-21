import { useCart } from "../components/cart-context";
import { Link } from "react-router-dom";
import {
  AddToCart,
  RemoveFromCart,
  AddToWishList,
  RemoveFromWishList,
  OutOfStock
} from "./buttons";

import { Share } from "@material-ui/icons";

const Card = ({ props }) => {
  const { state, dispatch, wishlist, wishlistDispatch } = useCart();

  const product = state.findIndex((singleProductInCart) => {
    return singleProductInCart.id === props.id;
  });

  const wishlistProduct = wishlist.findIndex((singleProductInWishlist) => {
    return singleProductInWishlist.id === props.id;
  });

  const checkProduct = () => (product === -1 ? true : false);
  const checkProductWishlist = () => (wishlistProduct === -1 ? true : false);
  // console.log(props);

  return (
    <div className="bestsellers-card">
      <div className="card">
        <div className="image-div">
          <Link to={`/product/${props.id}`}>
            {" "}
            <img className="card-image" src={props.image} alt="error" />
          </Link>
        </div>
        <div className="card-content">
          <h2 className="card-heading">{props.name}</h2>
          <p className="author">{props.category}</p>{" "}
          <div
            className="cart-product-info"
            style={{ display: "flex", gap: "0.8rem" }}
          >
            <p
              className="price-tag"
              style={{
                paddingRight: "0rem",
                marginRight: "0rem",
                paddingLeft: "2.6rem"
              }}
            >
              Price :
            </p>
            <div className="exact-price">
              <p className="price discounted-price">{props.price}</p>
              <p
                className="price real-price"
                style={{
                  fontSize: "1.2rem",
                  margin: "auto",
                  marginBottom: "0.59rem",
                  paddingLeft: "0.6rem",
                  color: "gray"
                }}
              >
                {" "}
                Rs.{" "}
                <span className="price-before-discount">
                  {" "}
                  {props.originalPrice}{" "}
                </span>{" "}
              </p>
            </div>
          </div>
          {/* <p className="content">{props.description}</p> */}
        </div>
        <div>
          <div className="card-actions">
            <div>
              {" "}
              {props.inStock === true ? (
                checkProduct() ? (
                  <AddToCart
                    onClick={() => {
                      dispatch({ type: "add-to-cart", payload: props });
                    }}
                  />
                ) : (
                  <RemoveFromCart
                    onClick={() => {
                      dispatch({
                        type: "remove-from-cart",
                        payload: props //how to pass prpducts from bestseller in this...as if i put button there it toogles state for every button...so hoe to fetch products from bestseller here
                      });
                    }}
                  />
                )
              ) : (
                <OutOfStock />
              )}
            </div>
            <div>
              {" "}
              {checkProductWishlist() ? (
                <AddToWishList
                  onClick={() => {
                    wishlistDispatch({
                      type: "add-to-wishlist",
                      payload: props
                    });
                  }}
                />
              ) : (
                <RemoveFromWishList
                  onClick={() => {
                    wishlistDispatch({
                      type: "remove-from-wishlist",
                      payload: props //how to pass prpducts from bestseller in this...as if i put button there it toogles state for every button...so hoe to fetch products from bestseller here
                    });
                  }}
                />
              )}
            </div>
            <Share className="fas fa-share-alt" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
