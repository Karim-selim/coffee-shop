import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export const usePagination = (firstProd, lastProd) => {
  const loaderData = useLoaderData();
  const realProducts = loaderData.slice(
    firstProd || 0,
    lastProd || loaderData.length - 1
  );
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProducts = indexOfLastProduct - productsPerPage;
  const currentProducts = realProducts.slice(
    indexOfFirstProducts,
    indexOfLastProduct
  );

  const paginate = (pagenumber, lastPageNumber) => {
    setCurrentPage(pagenumber);
    if (lastPageNumber <= pagenumber) {
      setCurrentPage(lastPageNumber);
    }
    if (pagenumber === "0") {
      setCurrentPage(1);
    }
  };

  return {
    paginate,
    currentProducts,
    productsPerPage,
    setCurrentPage,
    currentPage,
    realProducts,
  };
};
