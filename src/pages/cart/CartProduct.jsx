import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../setup/cart-slice";

const CartProduct = ({ image, price, quantity, title, id }) => {
  const dispatch = useDispatch();

  const prod = useSelector((state) => state.cart.items);
  const realProduct = prod.find(
    (item) => item.id === id && item.title === title
  );

  const addingHandler = () => {
    dispatch(cartActions.adding(realProduct));
  };

  const reducingHandler = () => {
    dispatch(cartActions.reducing({ id, title }));
  };

  const removingHandler = () => {
    dispatch(cartActions.removing(title));
  };

  return (
    <div className="flex gap-4 justify-between">
      <div className=" flex-1">
        <img
          src={image}
          alt=""
          className=" rounded-full object-cover h-auto aspect-square"
        />
      </div>
      <div className="flex flex-col gap-3 flex-[2_2_0]">
        <p className="font-semibold">
          {title.split(" ").slice(0, 3).join(" ")}
        </p>
        <div className="flex gap-4">
          <button
            className="w-8 aspect-square bg-buttonColor text-white flex justify-center items-center rounded-full font-extrabold text-lg"
            onClick={reducingHandler}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            className="w-8 aspect-square bg-buttonColor text-white flex justify-center items-center rounded-full font-extrabold text-lg"
            onClick={addingHandler}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-6 flex-1 items-end">
        <button
          className="w-8 aspect-square bg-buttonColor text-white flex justify-center items-center rounded-full font-extrabold text-lg"
          onClick={removingHandler}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <p>IDR {price * quantity}.000</p>
      </div>
    </div>
  );
};

export default CartProduct;
