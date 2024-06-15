import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = ({
  ProductsPerPage,
  totalProducts,
  paginate,
  setCurrentPage,
  currentPage,
}) => {
  const [inputPage, setInputPage] = useState(1);

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalProducts / ProductsPerPage); i++) {
    pageNumber.push(i);
  }

  const paginatorPress = (e) => {
    if (e.key === "Enter") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      e.target.value < parseInt(pageNumber.slice(-1))
        ? setInputPage(e.target.value)
        : setInputPage(parseInt(pageNumber.slice(-1)));
      setCurrentPage(inputPage);
      if (e.target.value <= 0) {
        setInputPage(1);
      }
      paginate(inputPage, parseInt(pageNumber.slice(-1)));
    }
  };

  const prevPress = () => {
    if (inputPage <= 1) {
      setInputPage(1);
      setCurrentPage(1);
    } else {
      setInputPage(+currentPage - 1);
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const nextPress = () => {
    if (inputPage >= parseInt(pageNumber.slice(-1))) {
      setInputPage(parseInt(pageNumber.slice(-1)));
      setCurrentPage(parseInt(pageNumber.slice(-1)));
    } else {
      setInputPage(+currentPage + 1);
      setCurrentPage(+currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex mt-8 justify-between xl:justify-center items-center relative">
      <div className="buttons flex">
        {currentPage > 1 && (
          <button
            onClick={prevPress}
            className="mr-2 group border border-firstColor text-firstColor px-4 py-2 rounded-lg font-bold hover:bg-hoveredColor hover:text-buttonColor duration-300 ease-in-out flex gap-2 items-center"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className=" text-lg group-hover:-translate-x-1 duration-100"
            />
            Previous
          </button>
        )}
        {currentPage < parseInt(pageNumber.slice(-1)) && (
          <button
            onClick={nextPress}
            className="rounded-xl px-5 py-2 bg-firstColor hover:bg-hoveredColor text-buttonColor font-bold flex items-center gap-2 duration-300 group"
          >
            Next
            <FontAwesomeIcon
              icon={faArrowRight}
              className="group-hover:translate-x-1 duration-100"
            />
          </button>
        )}
      </div>
      <div className="input hidden sm:flex right-0 absolute items-center justify-center text-sm">
        <label>Page</label>
        <div className="">
          <input
            onSubmit={paginate}
            className=" text-center border-gray-100 mx-2 w-8 h-6 outline-firstColor border"
            type="number"
            value={inputPage}
            onChange={(e) => setInputPage(e.target.value)}
            onKeyDown={paginatorPress}
            max={pageNumber[pageNumber.length - 1]}
            min={1}
          />
          of {parseInt(pageNumber.slice(-1))}
        </div>
        <div className="ml-3 flex">
          {currentPage > 1 && (
            <button
              className="px-2 py-1 bg-firstColor hover:bg-hoveredColor text-buttonColor flex duration-75"
              onClick={prevPress}
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
          )}

          {currentPage !== parseInt(pageNumber.slice(-1)) && (
            <button
              onClick={nextPress}
              className="px-2 py-1 bg-firstColor hover:bg-hoveredColor text-buttonColor flex duration-75"
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
