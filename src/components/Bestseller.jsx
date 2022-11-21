import productDetails from "../data/product-details";
import Card from "../components/card";

const Bestseller = () => {
  return (
    <>
      <h1
        className="bestseller-heading"
        style={{ width: "50%", margin: "auto", paddingTop: "2.4rem" }}
      >
        BESTSELLERS
      </h1>
      <div className="bestsellers">
        {productDetails.map((product) => {
          // const {
          //   id,
          //   image,
          //   specialBadge,
          //   heading,
          //   category,
          //   price,
          //   originalPrice,
          //   type,
          //   description
          // } = products;

          if (product.type === "Best Seller") {
            return (
              <Card
                key={product.id}
                props={product}
                // imgsrc={image}
                // cardHeading={heading}
                // category={category}
                // discountPrice={price}
                // realPrice={originalPrice}
                // cardContent={description}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default Bestseller;
