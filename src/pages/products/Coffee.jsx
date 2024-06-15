import GetCoffee from "./mapping/MappedCoffee";
import Pagination from "./Pagination";
import { usePagination } from "../../hooks/use-pagination";

const Coffee = () => {
  const {
    currentProducts,
    paginate,
    productsPerPage,
    realProducts,
    currentPage,
    setCurrentPage,
  } = usePagination();

  return (
    <div>
      <GetCoffee products={currentProducts} />
      <Pagination
        paginate={paginate}
        ProductsPerPage={productsPerPage}
        totalProducts={realProducts.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <p className="text-buttonColor my-8">
        *the price has been cutted by discount appears
      </p>
    </div>
  );
};

export default Coffee;
