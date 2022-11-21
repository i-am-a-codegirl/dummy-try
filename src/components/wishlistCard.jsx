import { useCart } from "./cart-context";

export const WishListCard = ({ props }) => {
  const { wishlistDispatch, dispatch } = useCart();

  return (
    <div className="horizontal-card">
      <div className="main-content main-content2">
        <img
          src={props.image}
          alt=""
          className="horizontal-img"
          style={{ height: "96%", padding: "2px" }}
        />

        <div className="content-horizontal">
          <h3>{props.name}</h3>
          <small style={{ paddingLeft: "4px", marginBottom: "2.4rem " }}>
            {props.category}
          </small>

          <div className="cart-product-info cart-product-info2">
            <p className="price-tag" style={{ paddingTop: "0.8rem" }}>
              Price - {props.price}
            </p>

            <div
              className="discount-percent discount-percent2"
              style={{ paddingTop: "1rem", paddingInlineStart: "0.8rem" }}
            >
              50% off
            </div>
          </div>
        </div>

        <div className="cart-card-button cart-card-button2">
          <button
            className="card-btn background"
            style={{ marginBottom: "0.4rem", padding: "0.4rem 0.28rem" }}
            onClick={() => {
              wishlistDispatch({
                type: "remove-from-wishlist",
                payload: props
              });
            }}
          >
            Remove from Wishlist
          </button>
          <button
            className="card-btn background-2"
            onClick={() => {
              wishlistDispatch({
                type: "remove-from-wishlist",
                payload: props
              });

              dispatch({ type: "add-to-cart", payload: props });
            }}
          >
            Move to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
