import ProductItem from "./productItem/ProductItem";
import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../../components/Footer";

const ProductsDetails = () => {
  const loaderData = useLoaderData();
  const { id } = useParams();
  return (
    <>
      <ProductItem prod={loaderData} id={id} />
      <Footer />
    </>
  );
};

export default ProductsDetails;
