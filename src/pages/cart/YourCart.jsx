import { Footer } from "../../components";
import CartRight from "./CartRight";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

const YourCart = () => {
  const selector = useSelector((state) => state.cart.items);

  const totalPriceArray = selector.map((item) => {
    return { totalPrice: item.price * item.quantity };
  });

  const subtotal = totalPriceArray.map(Object.values).reduce((acc, cur) => {
    return +acc + +cur;
  }, 0);

  const prices = {
    tax: (subtotal * 0.1 || 0).toFixed(3),
    shipping: (subtotal * 0.05 || 0).toFixed(3),
  };

  return (
    <>
      <div className="bg-cover bg-center bg-cart">
        <section className="global-px space-y-3 py-10">
          <h2 className="text-white text-2xl md:text-3xl text-center md:text-left font-extrabold ">
            Checkout your item now!
          </h2>
          <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
            <aside className="flex flex-1 gap-5 w-full h-auto">
              <section className="rounded-lg bg-white p-5 lg:p-7 w-full flex-col">
                <header className="w-full text-center my-4 lg:my-6">
                  <h3 className="text-buttonColor font-bold text-lg lg:text-3xl">
                    Order Summary
                  </h3>
                </header>
                <div className="flex flex-col gap-6 mt-10 mb-6">
                  {selector.map((item) => {
                    return (
                      <CartProduct
                        id={item.id}
                        key={item.title}
                        totalPrice={item.totalPrice}
                        price={item.price}
                        image={item.image}
                        title={item.title}
                        quantity={item.quantity}
                      />
                    );
                  })}
                </div>
                <hr />
                <div className="flex flex-col w-full my-4">
                  <div className="products bg-red-700"></div>
                  <div className="flex uppercase lg:text-lg">
                    <p className="flex flex-[2_2_0]">subtotal</p>
                    <p className="flex flex-1 justify-end">
                      IDR {subtotal}.000
                    </p>
                  </div>
                  <div className="flex uppercase lg:text-lg">
                    <p className="flex flex-[2_2_0]">TAX & FEES</p>
                    <p className="flex flex-1 justify-end">{`IDR ${prices.tax}`}</p>
                  </div>
                  <div className="flex uppercase lg:text-lg">
                    <p className="flex flex-[2_2_0]">shipping</p>
                    <p className="flex flex-1 justify-end">{`IDR ${prices.shipping}`}</p>
                  </div>
                </div>
                <div className="flex uppercase lg:text-xl font-bold justify-between">
                  <p>Total</p>
                  <p>{`IDR ${(
                    subtotal +
                    +prices.shipping +
                    +prices.tax
                  ).toFixed(3)}`}</p>
                </div>
              </section>
            </aside>
            <CartRight />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default YourCart;
