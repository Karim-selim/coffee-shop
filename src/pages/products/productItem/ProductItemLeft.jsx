import { useState } from "react";

const ProductItemLeft = ({ details }) => {
  const [deliveryToggle, setDeliveryToggle] = useState({
    first: false,
    second: false,
    third: false,
  });

  const [nowToggle, setNowToggle] = useState({ yes: false, no: false });

  return (
    <aside className="flex flex-col gap-10 w-full items-center">
      <img
        src={details.image}
        alt=""
        className="rounded-full aspect-square object-cover w-64"
      />
      <div className=" shadow-primary p-4 px-8 rounded-xl w-full gap-4 flex flex-col">
        <p className="font-bold text-left text-lg mb-4">Delivery and Time</p>
        <div className="top-boxes flex gap-2 font-bold w-full">
          <button
            onClick={() => {
              setDeliveryToggle({ first: true, second: false, third: false });
            }}
            className={`text-gray-500 bg-[#BABABA59] text-start rounded-lg break-words p-2 flex items-center ${
              deliveryToggle.first === true
                ? "bg-buttonColor text-white"
                : "hover:text-gray-600 hover:bg-gray-100"
            }`}
          >
            Dine In
          </button>
          <button
            onClick={() =>
              setDeliveryToggle({ first: false, second: true, third: false })
            }
            className={`text-gray-500 bg-[#BABABA59] text-start rounded-lg w-auto p-2 flex items-center ${
              deliveryToggle.second === true
                ? "bg-buttonColor text-white"
                : "hover:text-gray-600 hover:bg-gray-100"
            }`}
          >
            Door Delivery
          </button>
          <button
            onClick={() =>
              setDeliveryToggle({ first: false, second: false, third: true })
            }
            className={`text-gray-500 bg-[#BABABA59] text-start rounded-lg break-words p-2 flex items-center ${
              deliveryToggle.third === true
                ? "bg-buttonColor text-white"
                : "hover:text-gray-600 hover:bg-gray-100"
            }`}
          >
            Pickup
          </button>
        </div>
        <div className="flex my-4 items-center">
          <p className="mr-10">Now</p>
          <div className="buttons flex">
            <button
              onClick={() => setNowToggle({ yes: true, no: false })}
              className={`text-gray-500 bg-[#BABABA59] text-start rounded-lg break-words px-7 py-2  flex items-center mr-4  font-bold ${
                nowToggle.yes === true
                  ? "bg-buttonColor text-white"
                  : "hover:text-gray-600 hover:bg-gray-100"
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => setNowToggle({ yes: false, no: true })}
              className={`text-gray-500 bg-[#BABABA59] text-start rounded-lg break-words px-7 py-2  flex items-center font-bold ${
                nowToggle.no === true
                  ? "bg-buttonColor text-white"
                  : "hover:text-gray-600 hover:bg-gray-100"
              }`}
            >
              No
            </button>
          </div>
        </div>
        <div className="time">
          Set Time
          <input
            type="time"
            className="ml-4 mb-4 bg-[#BABABA59] px-8 rounded-lg font-bold py-2"
          />
        </div>
      </div>
    </aside>
  );
};

export default ProductItemLeft;
