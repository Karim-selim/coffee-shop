import { Link } from "react-router-dom";
import { ProductsSection } from "../";

const GetCoffee = ({ products }) => {
  return (
    <ProductsSection>
      {products.map((prod) => {
        return (
          <Link
            to={`/products/1/${prod.id}`}
            className="flex flex-col shadow-lg hover:shadow-xl rounded-3xl w-36 bg-white p-5 duration-200"
            key={prod.id}
          >
            <img
              src={prod.image}
              alt=""
              className="rounded-full mt-[-50%] aspect-square mb-3 shadow-lg"
            />
            <article className="flex gap-5 flex-col text-center">
              <p className="text-lg font-black min-h-[102px]">{prod.title}</p>
              <p className="font-bold end text-buttonColor">
                {`IDR ${prod.ingredients.length * prod.id * 7}.000 `}
              </p>
            </article>
          </Link>
        );
      })}
    </ProductsSection>
  );
};

export default GetCoffee;
