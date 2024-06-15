import { Link } from "react-router-dom";
import jokopi from "../../assists/jokopi.svg";

const Logo = () => {
  return (
    <div className="logo flex items-center py-5 md:py-8 font-bold ml-2 text-xl">
      <Link to="/" className="logo flex items-center gap-4 border-none">
        <img src={jokopi} alt="logo" className="w-8" />
        Karim
      </Link>
    </div>
  );
};

export default Logo;
