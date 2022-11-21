import { useCart } from "../components/cart-context";

export const HorizontalCard = ({ props }) => {
  const { dispatch, wishlistDispatch } = useCart();

  return (
    <div className="horizontal-card">
      <div className="main-content">
        <img src={props.image} alt="" className="horizontal-img" />

        <div className="content-horizontal">
          <h3>{props.name}</h3>
          <small>{props.category}</small>
          <p className=""></p>

          <div className="product-info">
            <div className="cart-product-info">
              <p className="price-tag">Price</p>

              <div className="exact-price">
                <p className="price discounted-price">{props.price}</p>
                <p className="price real-price">
                  {" "}
                  Rs.{" "}
                  <span className="price-before-discount">
                    {" "}
                    {props.originalPrice}{" "}
                  </span>{" "}
                </p>
              </div>
            </div>

            <div className="discount-percent">50% off</div>

            <div className="quantity-of-item">
              <div className="label-quantity">Quantity :</div>
              <button
                className="decrease-quantity"
                onClick={() => {
                  props.qty <= 1
                    ? dispatch({
                        type: "remove-from-cart",
                        payload: props
                      })
                    : dispatch({ type: "decrease-qty", payload: props });
                }}
                style={{ cursor: "pointer" }}
              >
                -
              </button>
              <div className="current-quantity">{props.qty}</div>
              <button
                className="increase-quantity"
                onClick={() =>
                  dispatch({ type: "increase-qty", payload: props })
                }
                style={{ cursor: "pointer" }}
              >
                +
              </button>
            </div>
          </div>

          <div className="cart-card-button">
            <button
              className="card-btn background"
              onClick={() => {
                dispatch({ type: "remove-from-cart", payload: props });
              }}
            >
              Remove from Cart
            </button>
            <button
              className="card-btn background-2"
              onClick={() => {
                dispatch({ type: "remove-from-cart", payload: props });
                wishlistDispatch({
                  type: "add-to-wishlist",
                  payload: props
                });
              }}
            >
              Move to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
