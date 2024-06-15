import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link
      onClick={props.onClick}
      to={`${props.to}`}
      className={`capitalize flex justify-center leading-loose px-4 duration-200 ease-in-out ${props.className}`}
    >
      {props.children}
    </Link>
  );
};

export default Button;
