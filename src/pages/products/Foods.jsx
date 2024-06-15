import GetFood from "./mapping/MapedFood";
import Pagination from "./Pagination";
import { usePagination } from "../../hooks/use-pagination";

const Foods = () => {
  const {
    currentProducts,
    paginate,
    productsPerPage,
    realProducts,
    currentPage,
    setCurrentPage,
  } = usePagination(24, 35);

  return (
    <>
      <GetFood products={currentProducts} />
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
    </>
  );
};

export default Foods;
