import { NavLink } from "react-router-dom";
import { useUserAuth } from "../../setup/context/user-auth-context";
import LoggedInIcons from "./LoggedInIcons";

const SignIn = () => {
  const { user } = useUserAuth();

  return user ? (
    <div className="max-lg:hidden">{<LoggedInIcons />}</div>
  ) : (
    <div className="sign-in py-5 md:py-8 max-lg:hidden">
      <NavLink to="auth/login" className="capitalize m-2 font-semibold">
        Login
      </NavLink>
      <NavLink
        to="auth/register"
        className="capitalize ml-8 py-2 px-10 rounded-3xl bg-firstColor duration-200 ease-in-out text-buttonColor font-semibold hover:bg-hoveredColor"
      >
        Sign up
      </NavLink>
    </div>
  );
};

export default SignIn;
