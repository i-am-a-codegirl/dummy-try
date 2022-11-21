import productDetails from "../data/product-details";
import { DetailedProductCard } from "./detailed-productCard";
import { useParams } from "react-router-dom";
import Navabar from "./Navbar";
import Footer from "./Footer";

export const DetailedProduct = () => {
  const { productId } = useParams();

  const getProductDetails = (productDetails, productId) => {
    return productDetails.find((product) => {
      //agr braces hatakr krwana h toh return bhi hata do
      console.log(product.id, productId);
      return product.id === productId;
    });
  };

  //beacuse ye h bhai aroow function or agr isme default value return krwani h toh
  //single kam hona chahiye or sirf ek akelka dunction h jo ki ek value rreturn
  //krwa rha h toh vo kya h bhai single LINE hi hua
  //the function getProductDetails does notrequire {} as find is acting as a single line funtion

  const product = getProductDetails(productDetails, productId);
  // console.log(getProductDetails(productDetails, productId));
  console.log(productId, product);

  return (
    <div>
      <Navabar />
      <DetailedProductCard props={product} />
      <Footer />
    </div>
  );
};
