import { Favorite, FavoriteBorderOutlined } from "@material-ui/icons";

export const AddToCart = (props) => {
  return (
    <>
      <button className="card-btn" onClick={props.onClick}>
        Add To Cart
      </button>
    </>
  );
};

export const RemoveFromCart = (props) => {
  return (
    <>
      <button className="card-btn" onClick={props.onClick}>
        Remove From Cart
      </button>
    </>
  );
};

export const AddToWishList = (props) => {
  return (
    <>
      <button
        className="card-btn"
        onClick={props.onClick}
        style={{ color: "var(--pink)" }}
      >
        <FavoriteBorderOutlined />
      </button>
    </>
  );
};

export const RemoveFromWishList = (props) => {
  return (
    <>
      <button
        className="card-btn"
        onClick={props.onClick}
        style={{ color: "var(--pink)" }}
      >
        <Favorite />
      </button>
    </>
  );
};

export const OutOfStock = () => {
  return (
    <>
      <p className="out-of-stock">Out of Stock</p>
    </>
  );
};
