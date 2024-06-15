import ProductsNav from "./ProductsNav";
import { Outlet } from "react-router-dom";

const ProductsLayout = () => {
  return (
    <>
      <ProductsNav />
      <section className="global-px">
        <Outlet />
      </section>
    </>
  );
};

export default ProductsLayout;
