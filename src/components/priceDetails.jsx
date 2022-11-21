import { useCart } from "../components/cart-context";

export const PriceDetails = () => {
  const { state } = useCart();

  let discount = state.reduce(
    (acc, curr, index) => (acc += state[index].qty * curr.savedPrice()),
    0
  );

  return (
    <div className="card" style={{ width: "40%", height: "20%" }}>
      <div className="card-content">
        <h2 className="card-heading">Price Details</h2>
        <hr />

        <div className="card-content">
          <div className="text-price">
            <div>
              <p> Original Price </p>
              {state.length === 1 ? (
                <p>1 item in cart</p>
              ) : (
                <p>
                  {state.reduce((acc, curr, index) => {
                    return (acc += state[index].qty);
                  }, 0)}{" "}
                  items in cart
                </p>
              )}
            </div>
            <p>
              Rs.{" "}
              {state.reduce((acc, curr, index) => {
                return (acc += state[index].qty * curr.originalPrice);
              }, 0)}
            </p>
          </div>

          <div className="text-price">
            <p>Discount applied</p>
            <p>Rs. {discount}</p>
          </div>

          <div className="text-price">
            <p>Delivery Charges</p>
            <p>Rs. 100</p>
          </div>

          <hr />

          <div className="text-price">
            <p className="total-amount">Total Amount</p>
            <p className="total-amount">
              Rs.{" "}
              {state.reduce(
                (acc, curr, index) => (acc += state[index].qty * curr.price),
                0
              )}
            </p>
          </div>
        </div>

        <hr />

        <p className="savings-msge">
          {" "}
          Wohho! you will save Rs. {discount} on this order 🥳{" "}
        </p>
      </div>
    </div>
  );
};
