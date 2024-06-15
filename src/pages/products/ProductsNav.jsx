import { NavLink } from "react-router-dom";

const ProductsNav = () => {
  return (
    <nav className="flex gap-5 flex-wrap justify-between items-center h-fit w-[-webkit-fill-available]">
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive
            ? `font-bold text-buttonColor relative after:h-[2px] after:absolute after:w-full after:bg-buttonColor after:-bottom-2 after:left-0`
            : null
        }
        end
      >
        Favorite & Promo
      </NavLink>
      <NavLink
        to="/products/1"
        className={({ isActive }) =>
          isActive
            ? `font-bold text-buttonColor relative after:h-[2px] after:absolute after:w-full after:bg-buttonColor after:-bottom-2 after:left-0`
            : null
        }
      >
        Coffee
      </NavLink>
      <NavLink
        to="2"
        className={({ isActive }) =>
          isActive
            ? `font-bold text-buttonColor relative after:h-[2px] after:absolute after:w-full after:bg-buttonColor after:-bottom-2 after:left-0`
            : null
        }
      >
        Iced
      </NavLink>
      <NavLink
        to="3"
        className={({ isActive }) =>
          isActive
            ? `font-bold text-buttonColor relative after:h-[2px] after:absolute after:w-full after:bg-buttonColor after:-bottom-2 after:left-0`
            : null
        }
      >
        Foods
      </NavLink>
      <NavLink
        to="4"
        className={({ isActive }) =>
          isActive
            ? `font-bold text-buttonColor relative after:h-[2px] after:absolute after:w-full after:bg-buttonColor after:-bottom-2 after:left-0`
            : null
        }
      >
        Add-on
      </NavLink>
    </nav>
  );
};

export default ProductsNav;
