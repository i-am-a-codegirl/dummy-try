import Navbar from "../components/Navbar";
import { useProducts } from "../components/productContext";
import Footer from "../components/Footer";
import Card from "../components/card";
import productDetails from "../data/product-details";
import { Filters } from "../components/Filters";

export const AllProduct = () => {
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
    }
  } = useProducts();

  const transformedProducts = () => {
    let sortedProducts = productDetails.map((product) => {
      return product;
    });

    if (priceRange > 0) {
      sortedProducts = sortedProducts.filter(
        (product) => product.price < priceRange
      );
    }

    if (byDelivery) {
      sortedProducts = sortedProducts.filter(
        (product) => product.fastDelivery === true
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter(
        (product) => product.inStock === true
      );
      // if (byDesserts) {
      //   sortedProducts = sortedProducts.filter(
      //     (product) => product.category === "Desserts"
      //   );
      // }
      // if (byProtienBars) {
      //   sortedProducts = sortedProducts.filter(
      //     (product) => product.category === "Protien bars"
      //   );
      // }

      // if (byChips) {
      //   sortedProducts = sortedProducts.filter(
      //     (product) => product.category === "Chips & Snacks"
      //   );
      // }

      // if (byBestseller) {
      //   sortedProducts = sortedProducts.filter(
      //     (product) => product.type === "Best Seller"
      //   );
      // }

      //updated version of filters this helps in using multiple filters together

      //if any one of the filter is true
      //then check which one was true and return
      //otherwise false -> this is applicaple for WHEN USING MULTIPLE FILTERS UNDER 1 CATEGORY

      if (byDesserts || byProtienBars || byChips || byBestseller) {
        sortedProducts = sortedProducts.filter((product) => {
          return (
            (byDesserts ? product.category === "Desserts" : false) ||
            (byProtienBars ? product.category === "Protien bars" : false) ||
            (byChips ? product.category === "Chips & Snacks" : false) ||
            (byBestseller ? product.type === "Best seller" : false)
          );
        });
      }

      if (sort) {
        sortedProducts = sortedProducts.sort((a, b) =>
          sort === "low-to-high" ? a.price - b.price : b.price - a.price
        );
      }

      if (searchQuery) {
        sortedProducts = sortedProducts.filter((product) =>
          product.name.toLowerCase().includes(searchQuery)
        );
      }
    }

    return sortedProducts;
  };

  return (
    <div className="container">
      <Navbar />
      <div className="product-div">
        <div className="filter-div">
          <Filters />
        </div>

        <div className="products">
          <h1
            className="products-heading"
            style={{ width: "50%", paddingTop: "2.4rem" }}
          >
            All Products
          </h1>
          <div className="productDiv">
            {transformedProducts().map((product) => {
              return <Card className="product-child" props={product} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
