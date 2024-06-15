import { useState } from "react";
import placeholder from "../../../assists/images/placeholder-image.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const ProductItemBottom = ({ details }) => {
  const [sizeToggle, setSizeToggle] = useState({
    r: false,
    l: false,
    xl: false,
  });

  return (
    <>
      <footer className="flex md:flex-row flex-col gap-8">
        <aside className=" shadow-primary px-5 py-8 space-y-4 text-xl flex-1 rounded-xl w-full gap-4 flex flex-col text-center font-bold">
          <p>Choose a size</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => {
                setSizeToggle({ r: true, l: false, xl: false });
              }}
              className={`aspect-square w-12 p-2 text-center rounded-full  ${
                sizeToggle.r === true ? "bg-firstColor" : "bg-gray-400"
              }`}
            >
              R
            </button>
            <button
              onClick={() => {
                setSizeToggle({ r: false, l: true, xl: false });
              }}
              className={`aspect-square w-12 p-2 text-center rounded-full  ${
                sizeToggle.l === true ? "bg-firstColor" : "bg-gray-400"
              }`}
            >
              L
            </button>
            <button
              onClick={() => {
                setSizeToggle({ r: false, l: false, xl: true });
              }}
              className={`aspect-square w-12 p-2 text-center rounded-full ${
                sizeToggle.xl === true ? "bg-firstColor" : "bg-gray-400"
              }`}
            >
              XL
            </button>
          </div>
        </aside>
        <aside className="flex flex-[3_3_0] rounded-xl shadow-primary px-8 md:px-14 py-8 gap-4 items-center">
          <div>
            <img
              src={placeholder}
              alt=""
              className="h-24 aspect-square rounded-full object-cover"
            />
          </div>
          <header className="flex flex-[4_4_0]">
            <h3 className="font-black text-xl text-center md:text-left uppercase">
              {details.title}
            </h3>
          </header>
          <button className="flex bg-firstColor rounded-full aspect-square h-14 items-center justify-center text-buttonColor">
            <FontAwesomeIcon icon={faArrowRight} className="text-4xl" />
          </button>
        </aside>
      </footer>
    </>
  );
};

export default ProductItemBottom;
