import { Link } from "react-router-dom";
import { ProductItemLeft, ProductItemRight, ProductItemBottom } from "..";

const ProductItem = ({ prod, id }) => {
  const item = prod.find((item) => item.id === +id);
  const details = {
    title: item.title,
    image: item.photoUrl || item.image,
    description: item.description || "This item has no discription yet*",
    price: item.totalTime || item.id * item.ingredients.length * 7,
  };

  return (
    <section className="global-px py-10 relative">
      <nav className="text-buttonColor font-semibold">
        <Link
          to="/products"
          className="after:content-['>'] after:font-semibold after:text-gray-500 after:mx-1 text-gray-600 font-normal"
        >
          Favourite & Promo
        </Link>
        {details.title.split(" ").slice(0, 3).join(" ")}
      </nav>
      <div className="flex gap-16 flex-col md:flex-row justify-between my-10">
        <ProductItemLeft details={details} />
        <ProductItemRight details={details} item={item} />
      </div>
      <ProductItemBottom details={details} />
    </section>
  );
};

export default ProductItem;
