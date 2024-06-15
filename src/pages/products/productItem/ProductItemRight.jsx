import { useState } from "react";
import { Button } from "../../../Ui";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../setup/cart-slice";

const ProductItemRight = ({ details, item }) => {
  const [inputvalue, setInputValue] = useState(1);

  const dispatch = useDispatch();

  const setQuantatyHandler = () => {
    dispatch(cartActions.setQuantatiy(inputvalue));
    setInputValue(1);
  };

  const fixQunatity = () => {
    dispatch(cartActions.setQuantatiy(1));
  };

  const addtoCartHandler = () => {
    dispatch(cartActions.adding(item));
  };

  const minusHandler = () => {
    if (inputvalue === 1) {
      return;
    }
    setInputValue(inputvalue - 1);
  };

  return (
    <aside className="flex flex-col gap-5 justify-between w-full">
      <p className="font-black text-5xl uppercase w-full text-center mb-4">
        {details.title}
      </p>
      <p className="text-justify text-buttonColor text-lg md:min-h-[200px]">
        {details.description}
      </p>
      <p className="text-buttonColor text-lg mb-8">
        Delivery only on <span className="font-bold">Monday to friday</span>at
        <span className="font-bold"> 1 - 7 pm</span>
      </p>
      <div className="flex justify-between w-full">
        <div className="buttons flex border-2 border-gray-400 rounded-md w-32 h-10 font-bold justify-evenly">
          <button onClick={minusHandler}>-</button>
          <input
            type="number"
            value={inputvalue}
            readOnly
            className=" outline-none border-l-2 border-r-2 border-gray-400 text-center w-16"
          />
          <button
            onClick={() => setInputValue(inputvalue + 1)}
            className="flex justify-center items-center"
          >
            +
          </button>
        </div>
        <p className="font-bold text-xl">{`IDR ${details.price}.000`}</p>
      </div>
      <div>
        <Button
          onClick={() => {
            setQuantatyHandler();
            addtoCartHandler();
            fixQunatity();
          }}
          to=""
          className="bg-buttonColor w-full text-white text-lg font-bold py-3 rounded-xl"
        >
          Add To Cart
        </Button>
        <button
          to=""
          disabled
          className="bg-firstColor disabled:bg-gray-300 text-buttonColor w-full text-lg font-bold py-3 rounded-xl cursor-not-allowed flex justify-center leading-loose px-4 duration-200 ease-in-out mt-4"
        >
          Ask a Stuff
        </button>
      </div>
    </aside>
  );
};

export default ProductItemRight;
