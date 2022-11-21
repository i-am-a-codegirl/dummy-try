import { useProducts } from "./productContext";

export const Filters = () => {
  const {
    productState: {
      sort,
      byStock,
      priceRange,
      byBestseller,
      byProtienBars,
      byDesserts,
      byChips,
      byDelivery,
      searchQuery
    },
    productDispatch
  } = useProducts();

  return (
    <div className="filter">
      <h2> Filters </h2>
      <button> Clear Filters </button>
      <hr style={{ width: "80%" }} />
      <h3 style={{ marginRight: "4rem" }}>Categories</h3>
      <ul>
        <li>
          {" "}
          <label className="filter-label">
            <input
              type="checkbox"
              checked={byProtienBars}
              onChange={() =>
                productDispatch({ type: "filter-by-protien-bars" })
              }
            />{" "}
            Protien Bars
          </label>{" "}
        </li>
        <li>
          {" "}
          <label className="filter-label">
            <input
              type="checkbox"
              checked={byChips}
              onChange={() => productDispatch({ type: "filter-by-chips" })}
            />{" "}
            Chips
          </label>{" "}
        </li>
        <li>
          {" "}
          <label className="filter-label">
            <input
              type="checkbox"
              checked={byDesserts}
              onChange={() => productDispatch({ type: "filter-by-desserts" })}
            />{" "}
            Desserts
          </label>{" "}
        </li>
        <li>
          {" "}
          <label className="filter-label">
            <input
              type="checkbox"
              checked={byBestseller}
              onChange={() => productDispatch({ type: "filter-by-bestseller" })}
            />{" "}
            Bestseller
          </label>{" "}
        </li>
      </ul>

      <hr style={{ width: "80%" }} />
      <h3 style={{ marginRight: "7.2rem" }}>Price</h3>
      <input
        type="range"
        value={priceRange}
        min="0"
        max="1000"
        onChange={
          (e) =>
            productDispatch({
              type: "filter-by-price-range",
              priceValue: e.target.value
            }) //tracking input change with event.target.value
        }
      />

      <hr style={{ width: "80%" }} />
      <h3 style={{ marginRight: "5.6rem" }}>Sort By</h3>
      <ul>
        <li>
          {" "}
          <label className="filter-label">
            <input
              type="radio"
              name="sort"
              checked={sort === "high-to-low" ? true : false}
              onChange={() =>
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "high-to-low"
                })
              }
            />{" "}
            High to Low
          </label>{" "}
        </li>
        <li>
          {" "}
          <label className="filter-label">
            <input
              type="radio"
              name="sort"
              checked={sort === "low-to-high" ? true : false}
              onChange={() =>
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "low-to-high"
                })
              } //grouping radio buttons as to click one button at a time
            />{" "}
            Low To High
          </label>{" "}
        </li>
      </ul>

      <hr style={{ width: "80%" }} />
      <h3 style={{ marginRight: "6.2rem" }}>Others</h3>
      <ul>
        <li>
          {" "}
          <label className="filter-label">
            <input
              type="checkbox"
              checked={byStock}
              onChange={() => productDispatch({ type: "filter-by-stock" })}
            />{" "}
            Include out of stock
          </label>{" "}
        </li>
        <li>
          {" "}
          <label className="filter-label">
            <input
              type="checkbox"
              checked={byDelivery}
              onChange={() => productDispatch({ type: "filter-by-delivery" })}
            />{" "}
            Fast Delivery
          </label>{" "}
        </li>
      </ul>
    </div>
  );
};
