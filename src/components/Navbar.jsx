import { React } from "react";
import { NavLink } from "react-router-dom";
import { useProducts } from "./productContext";

const Navabar = () => {
  const { productDispatch } = useProducts();

  const getActiveLinkStyle = ({ isActive }) => ({
    margin: "0.4rem",
    color: isActive ? "yellow" : ""
  });

  return (
    <nav>
      <div className="brand-name">
        <h1 className="imp-text">Snack-IT!</h1>
        <small>Healthy Snacks Your Way!</small>
      </div>
      <ul style={{ top: "-2.25rem" }} className="main">
        <li>
          <NavLink style={getActiveLinkStyle} to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink style={getActiveLinkStyle} to="/all-product">
            All Products
          </NavLink>
        </li>
        <li>
          <a href="/">Shop by Category</a>
        </li>
        <li>
          <input
            onChange={(e) => {
              productDispatch({
                type: "filter-by-searchQuery",
                payload: e.target.value
              });
            }}
            className="search-input"
            placeholder="search for your cravings"
          />
        </li>
      </ul>

      <ul
        style={{
          bottom: "8rem"
        }}
        className="aside"
      >
        <li>
          <NavLink style={getActiveLinkStyle} to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink style={getActiveLinkStyle} to="/cart">
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink style={getActiveLinkStyle} to="/wishlist">
            Wishlist
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navabar;
