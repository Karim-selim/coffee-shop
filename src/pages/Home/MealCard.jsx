import product from "../../assists/images/product-1.webp";
import check from "../../assists/icons/check.svg";
import { Button } from "../../Ui";

const MealCard = (props) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="card flex flex-col border border-gray-400 rounded-xl px-5 py-5 md:py-12 items-center gap-5 flex-1">
      <img src={product} alt="img" className="rounded-full w-36 mb-7" />
      <h3 className="text-lg font-medium">Hazelnut Latte</h3>
      <ul className="mb-8 md:mb-20 flex flex-col gap-5 text-left">
        <li className="flex gap-4">
          <img src={check} alt="" />
          <p>Hazelnut Syrup</p>
        </li>
        <li className="flex gap-4">
          <img src={check} alt="" />
          <p>Wanilla Whipped Cream</p>
        </li>
        <li className="flex gap-4">
          <img src={check} alt="" />
          <p>Ice / Hot</p>
        </li>
        <li className="flex gap-4 ">
          <img src={check} alt="" />
          <p>Sliced Banana on Top</p>
        </li>
      </ul>
      <p className="price font-medium text-2xl">IDR 25.000</p>
      <Button
        onClick={scrollToTop}
        to="/products"
        className="text-buttonColor bg-firstColor w-40 rounded-[120rem] py-2 font-bold"
      >
        Order Now
      </Button>
    </div>
  );
};

export default MealCard;
