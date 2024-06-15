import { Link } from "react-router-dom";
import jokopi from "../assists/jokopi.svg";
import faceBook from "../assists/icons/facebook.svg";
import twitter from "../assists/icons/twitter.svg";
import instagram from "../assists/icons/instagram.svg";

const Footer = ({ className }) => {
  return (
    <footer className={`bg-footerColor ${className}`}>
      <div className="flex flex-col md:flex-row gap-12 justify-between global-px pt-8 md:pt-20 text-center pb-8">
        <div className="flex flex-col text-left gap-4">
          <div className="logo">
            <Link className="border-none flex gap-2 font-bold text-2xl">
              <img src={jokopi} alt="" className="w-[30px]" />
              karim
            </Link>
          </div>
          <div className="text-textColor md:w-96">
            jokopi is a store that sells some good meals, and especially coffee.
            We provide high quality beans
          </div>
          <div className="icons flex items-center gap-5">
            <Link className="icon bg-buttonColor rounded-full items-center justify-center">
              <img src={faceBook} alt="" className="z-10 w-9" />
            </Link>
            <Link className="icon bg-buttonColor rounded-full items-center justify-center">
              <img src={instagram} alt="" className="z-10 w-9" />
            </Link>
            <Link className="icon bg-buttonColor rounded-full items-center justify-center">
              <img src={twitter} alt="" className="z-10 w-9" />
            </Link>
          </div>
          <p className="text-textColor">(c) 2023 karim-selim</p>
        </div>
        <div className="flex gap-32">
          <div className="right flex flex-col gap-2 text-left">
            <h4 className="font-bold text-footerTextColor mb-2">product</h4>
            <a href="/" className="text-footerTextColor">
              Download
            </a>
            <a href="/" className="text-footerTextColor">
              Pricing
            </a>
            <a href="/" className="text-footerTextColor">
              Locations
            </a>
            <a href="/" className="text-footerTextColor">
              Countries
            </a>
            <a href="/" className="text-footerTextColor">
              Blog
            </a>
          </div>
          <div className="left flex flex-col gap-2 text-left">
            <h4 className="font-bold text-footerTextColor mb-2">Engage</h4>
            <a href="/" className="text-footerTextColor">
              Coffee Shop ?
            </a>
            <a href="/" className="text-footerTextColor">
              FAQ
            </a>
            <a href="/" className="text-footerTextColor">
              About Us
            </a>
            <a href="/" className="text-footerTextColor">
              Privacy Policy
            </a>
            <a href="/" className="text-footerTextColor">
              Terms of Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
