import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import Transition from "react-transition-group/Transition";
import { useRef, useState } from "react";
import burger from "../../assists/icons/burger.svg";
import { Button } from "../../Ui";
import profile from "../../../src/assists/images/placeholder-profile.jpg";
import LoggedInIcons from "./LoggedInIcons";
import { useUserAuth } from "../../setup/context/user-auth-context";

const SideNav = () => {
  const [isNavShown, setIsNavShown] = useState(false);

  const { user } = useUserAuth();

  const transitionRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isNavShowHandler = () => {
    setIsNavShown(true);
  };

  const isNavHideHandler = () => {
    setIsNavShown(false);
  };

  return (
    <div className="altNav lg:hidden flex">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={`w-6 text-textColor cursor-pointer text-2xl ${
          user && " mr-6"
        }`}
      />

      {user && <LoggedInIcons />}

      {isNavShown && (
        <div
          className="fixed w-screen h-screen top-0 -left-4 bg-black/30 transition-all ease-in-out duration-300"
          onClick={isNavHideHandler}
        ></div>
      )}

      <img
        src={burger}
        alt=""
        className="text-textColor text-2xl ml-6 cursor-pointer w-8"
        onClick={isNavShowHandler}
      />
      <Transition
        nodeRef={transitionRef}
        in={isNavShown}
        timeout={50}
        mountOnEnter
        unmountOnExit
      >
        {(state) => (
          <div
            className="sideBar h-screen absolute top-0 right-[-15px] w-80 p-5 bg-white border-l-2 border-gray-100 flex flex-col ease-in-out transition-all duration-300"
            style={{
              right: state === "entered" ? 0 : -400,
            }}
          >
            <div className="top flex justify-between pb-9">
              <div className="user flex items-center">
                <img src={profile} alt="" className="w-10 rounded-md mr-2" />
                Guest
              </div>
              <FontAwesomeIcon
                icon={faXmark}
                size="xs"
                className="cursor-pointer text-unactiveText hover:text-textColor text-2xl font-light"
                onClick={isNavHideHandler}
              />
            </div>
            <div className="side-main">
              <ul>
                <li>
                  <Link
                    to="/"
                    className=" p-4 text-unactiveText font-semibold hover:bg-btHovered rounded-md hover:text-buttonColor w-full flex text-sm"
                    onClick={() => {
                      isNavHideHandler();
                      scrollToTop();
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="products"
                    className=" p-4 text-unactiveText font-semibold hover:bg-btHovered rounded-md hover:text-buttonColor w-full flex text-sm"
                    onClick={() => {
                      isNavHideHandler();
                      scrollToTop();
                    }}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="yourCart"
                    className=" p-4 text-unactiveText font-semibold hover:bg-btHovered rounded-md hover:text-buttonColor w-full flex text-sm"
                    onClick={() => {
                      isNavHideHandler();
                      scrollToTop();
                    }}
                  >
                    Your Cart
                  </Link>
                </li>
                <li>
                  <Link
                    to="history"
                    className=" p-4 text-unactiveText font-semibold hover:bg-btHovered rounded-md hover:text-buttonColor w-full flex text-sm"
                    onClick={() => {
                      isNavHideHandler();
                      scrollToTop();
                    }}
                  >
                    History
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sideFooter mt-auto">
              <Button
                className=" hover:bg-hoveredGreyBtn bg-greyBtn font-semibold text-xs w-full rounded-xl py-3 mb-4 shadow-md"
                to="auth/login"
                onClick={() => {
                  isNavHideHandler();
                  scrollToTop();
                }}
              >
                Login
              </Button>
              <Button
                to="auth/register"
                className="bg-firstColor hover:bg-hoveredColor font-semibold text-xs w-full rounded-xl py-3 mb-4 shadow-md"
                onClick={() => {
                  isNavHideHandler();
                  scrollToTop();
                }}
              >
                Signup
              </Button>
              <p className="my-4 text-xs text-center text-gray-400">
                <span>Copyright © 2023</span>
              </p>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default SideNav;
