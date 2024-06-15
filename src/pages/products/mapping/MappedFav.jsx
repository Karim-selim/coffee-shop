import { Link } from "react-router-dom";
import { ProductsSection } from "../";
import { FetchFav } from "./Api";

const GetProducts = ({ products }) => {
  return (
    <ProductsSection>
      {products.map((prod) => {
        return (
          <Link
            to={`/products/details/${prod.id}`}
            className="flex flex-col shadow-lg hover:shadow-xl rounded-3xl w-36 bg-white p-5 duration-200 break-words justify-between"
            key={prod.id}
          >
            <img
              src={prod.photoUrl}
              alt="d"
              className="rounded-full mt-[-50%] aspect-square mb-3 shadow-lg"
            />
            <article className="flex gap-5 flex-col text-center">
              <p className="text-lg font-black min-h-[102px]">
                {prod.title.split(" ").slice(0, 3).join(" ")}
              </p>
              <p className="font-bold end text-buttonColor mt-auto">
                {`IDR ${prod.totalTime}.000`}
              </p>
            </article>
          </Link>
        );
      })}
    </ProductsSection>
  );
};

export default GetProducts;
export const loader = () => {
  return FetchFav;
};
