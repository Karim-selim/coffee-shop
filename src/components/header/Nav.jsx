import { NavLink } from "react-router-dom";

const Nav = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <nav className="flex py-5 md:py-6 text-textColor max-lg:hidden">
      <NavLink
        onClick={scrollToTop}
        to="/"
        className={({ isActive }) =>
          isActive ? "mx-4 font-bold text-buttonColor" : "mx-4"
        }
        end
      >
        Home
      </NavLink>
      <NavLink
        onClick={scrollToTop}
        to="/products"
        className={({ isActive }) =>
          isActive ? "mx-4 font-bold text-buttonColor" : "mx-4"
        }
      >
        Products
      </NavLink>
      <NavLink
        onClick={scrollToTop}
        to="yourCart"
        className={({ isActive }) =>
          isActive ? "mx-4 font-bold text-buttonColor" : "mx-4"
        }
      >
        Your cart
      </NavLink>
      <NavLink
        onClick={scrollToTop}
        to="history"
        className={({ isActive }) =>
          isActive ? "mx-4 font-bold text-buttonColor" : "mx-4"
        }
      >
        History
      </NavLink>
    </nav>
  );
};

export default Nav;
