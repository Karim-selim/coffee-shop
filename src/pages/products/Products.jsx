import illustration from "../../assists/illustrations/mobile-search-undraw.png";
import Footer from "../../components/Footer";
import ProductsLayout from "./ProductsLayout";

const Products = () => {
  return (
    <>
      <section className="flex flex-row-reverse max-md:flex-col global-px">
        <aside className="flex flex-[2_2_0%] py-5 md:pl-16 flex-col">
          <ProductsLayout />
        </aside>
        <aside className="flex flex-1 flex-col global-px py-8 text-center left items-center gap-4 border-r-2 border-gray-100 max-md:border-0">
          <h2 className="font-bold text-2xl">Promo Today</h2>
          <p className="text-center">
            Coupons will be updated every weeks.
            <br /> Check them out!
          </p>
          <div className="promos">
            <img src={illustration} alt="" className="w-52" />
            <p className="text-buttonColor font-semibold">No promo today</p>
            <p className="font-medium text-sm">Dont worry, check tommorow</p>
          </div>
        </aside>
      </section>
      <Footer />
    </>
  );
};

export default Products;
