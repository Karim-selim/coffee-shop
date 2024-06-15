import GetProudcts from "./mapping/MappedFav";
import Pagination from "./Pagination";
import { usePagination } from "../../hooks/use-pagination";

const FavPromo = () => {
  const {
    currentProducts,
    paginate,
    productsPerPage,
    realProducts,
    currentPage,
    setCurrentPage,
  } = usePagination(0, 22);

  return (
    <div>
      <GetProudcts products={currentProducts} />
      <Pagination
        paginate={paginate}
        ProductsPerPage={productsPerPage}
        totalProducts={realProducts.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Pagination>
      <p className="text-buttonColor my-8">
        *the price has been cutted by discount appears
      </p>
    </div>
  );
};

export default FavPromo;
