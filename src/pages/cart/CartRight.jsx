import { useState } from "react";
import PaymentMethods from "./PaymentMethods";

const CartRight = () => {
  const [buttonToggle, setButtonToggle] = useState(false);

  const buttonToggleHandler = () => {
    setButtonToggle(!buttonToggle);
  };

  return (
    <aside className="flex-1 flex gap-5 flex-col">
      <section className="flex gap-5 flex-col w-full">
        <header className="text-white flex text-xl lg:text-2xl font-extrabold text-center md:text-left items-center relative">
          <h3>Address details</h3>
          <button
            onClick={buttonToggleHandler}
            className="hover:underline absolute max-sm:right-4 right-0 bottom-0"
          >
            {!buttonToggle ? "edit" : "save"}
          </button>
        </header>
        <form className="rounded-xl bg-white p-5 lg:p-7 overflow-hidden">
          <div className="flex gap-1 mb-2 overflow-hidden">
            <label>
              <b>Delivery</b> to
            </label>
            <input
              type="text"
              placeholder="adress..."
              className="bg-gray-50 outline-none flex-1"
              readOnly={!buttonToggle}
            />
          </div>
          <hr />
          <div className="flex my-2">
            <input
              type="text"
              placeholder="notes..."
              className="bg-gray-50 outline-none flex-1"
              readOnly={!buttonToggle}
            />
          </div>
          <hr />
          <div>
            <input
              type="text"
              className="bg-gray-50 outline-none flex-1 w-[-webkit-fill-available]"
              value={123456789}
              readOnly
            />
          </div>
        </form>
      </section>
      <PaymentMethods />
    </aside>
  );
};

export default CartRight;
