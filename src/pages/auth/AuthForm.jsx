import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "../../Ui/Button";
import PasswordContent from "./PasswordContent";
import jokopi from "../../assists/jokopi.svg";
import { useUserAuth } from "../../setup/context/user-auth-context";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [markCheckbox, setMarkCheckbox] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwodError, setPasswordError] = useState("");

  const navigate = useNavigate();
  const { signup, login, signinWithGoogle } = useUserAuth();

  const signUp = async (e) => {
    try {
      await signup(email, password);
      console.log("submit");
    } catch (err) {
      if (err.message === "Firebase: Error (auth/missing-password).") {
        setPasswordError("Please enter a valid password");
      } else if (err.message === "Firebase: Error (auth/invalid-email).") {
        setEmailError("Please enter a valid email");
      } else {
        setEmailError("Please make sure that the Email is right");
        setPasswordError("Please make sure that the password is right");
      }
      console.log(err.message);
    }
  };
  const logIn = async (e) => {
    try {
      await login(email, password);
      navigate("/products");
      console.log("login");
    } catch (err) {
      if (err.message === "Firebase: Error (auth/missing-password).") {
        setPasswordError("Please enter a valid password");
      } else if (err.message === "Firebase: Error (auth/invalid-email).") {
        setEmailError("Please enter a valid email");
      } else {
        setEmailError("Please make sure that the Email is right");
        setPasswordError("Please make sure that the password is right");
      }
      console.log(err.message);
    }
  };

  const loginWithGoogleHanlder = async () => {
    try {
      await signinWithGoogle();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  const registreHandler = () => {
    location.pathname.includes("register") && signUp();
    location.pathname.includes("login") && logIn();
  };

  const markCheckboxHandler = () => {
    setMarkCheckbox(!markCheckbox);
  };

  const location = useLocation();

  return location.pathname.includes("forgotPassword") ? (
    <PasswordContent />
  ) : (
    <>
      <header className="logo flex items-center font-bold ml-2 text-xl justify-between mb-10">
        <Link
          to="/"
          className="logo flex items-center gap-4 border-none outline-none"
        >
          <img src={jokopi} alt="logo" className="w-8" />
          Karim
        </Link>
        <p className="text-buttonColor font-semibold">
          {location.pathname.includes("register") ? "Signup" : "Login"}
        </p>
      </header>
      <form>
        <div
          action="login"
          className="mt-16 flex flex-col space-y-3 md:space-y-4 gap-5"
        >
          <div>
            <label className="text-footerTextColor font-bold">
              Email address :
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              type="text"
              className={`w-full border-2 border-gray-400 rounded-2xl p-3 mt-2 ${
                emailError && "border-red-500"
              }`}
              placeholder="Enter your email address"
            />
            <p className="text-red-500">{emailError}</p>
          </div>
          <div className="my-4">
            <label className="text-footerTextColor font-bold">Password :</label>
            <input
              onChange={(e) => {
                setPasswordError("");
                setPassword(e.target.value);
              }}
              type="text"
              className={`w-full border-2 border-gray-400 rounded-2xl p-3 mt-2 ${
                passwodError && "border-red-500"
              }`}
              placeholder="Enter your password"
            />
            <p className="text-red-500">{passwodError}</p>
          </div>
          {location.pathname.includes("register") && (
            <div className="my-4">
              <label className="text-footerTextColor font-bold">
                Phone Number (Optional) :
              </label>
              <input
                type="text"
                className="w-full border-2 border-gray-400 rounded-2xl p-3 mt-2"
                placeholder="Enter your phone number"
              />
            </div>
          )}
        </div>
        <div
          className={`mb-4 flex justify-between ${
            location.pathname.includes("register") ? "mt-4" : "mt-8"
          }`}
        >
          {!location.pathname.includes("register") && (
            <>
              <div
                onClick={markCheckboxHandler}
                className="flex gap-2 items-center text-sm"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={markCheckbox}
                  readOnly
                />
                <label className="text-gray-300">Remember me</label>
              </div>
              <Link
                to="/auth/forgotPassword"
                className="hover:underline font-medium text-sm"
              >
                Forgot password?
              </Link>
            </>
          )}
        </div>
        <Button
          onClick={registreHandler}
          to=""
          className="bg-firstColor text-lg hover:bg-hoveredColor font-bold text-buttonColor mt-5 rounded-2xl py-2 mb-4 shadow-xl"
        >
          {location.pathname.includes("register") ? "Signup" : "Login"}
        </Button>
        <Button
          onClick={loginWithGoogleHanlder}
          to="/auth/login"
          className="font-bold text-lg text-buttonColor rounded-2xl py-2 my-4 shadow-xl gap-2"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt=""
          />
          {location.pathname.includes("register")
            ? "Signup with Google"
            : "Login with google"}
        </Button>
      </form>
      <div className="flex items-center justify-center relative w-full">
        <hr className="w-full h-px dark:bg-gray-700 my-6 border-0" />
        <span className="absolute bg-white -translate-x-1/2 left-1/2 px-3 w-max">
          {location.pathname.includes("register")
            ? "Already have an account?"
            : "Don’t have an account?"}
        </span>
      </div>
      <Button
        to={
          location.pathname.includes("register")
            ? "/auth/login"
            : "/auth/register"
        }
        className="bg-buttonColor text-lg font-bold text-white rounded-2xl py-2 mb-4 shadow-xl"
      >
        {location.pathname.includes("register") ? "Login here" : "Signup"}
      </Button>
    </>
  );
};

export default AuthForm;
