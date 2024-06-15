import { Button, Icon } from "../../Ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="w-full bg-landing bg-cover bg-center text-white py-20">
        <div className="global-px">
          <article className="flex flex-col gap-6 w-[75%] lg:w-[50%]">
            <h2 className="font-bold text-4xl">
              Start Your Day with Coofee and Good Meals
            </h2>
            <p className="font-semibold leading-5">
              We provide high quality beans, good taste, and healthy meals made
              by love just for you. Start your day with us for a bigger smile!
            </p>
            <Button
              onClick={scrollToTop}
              to="/products"
              className=" text-buttonColor bg-firstColor w-32 hover:bg-hoveredColor text-sm font-bold py-3 rounded-xl"
            >
              get started
            </Button>
          </article>
          <section className="bg-white flex rounded-xl items-center justify-center text-center mt-20 -mb-[9rem] py-2 md:py-6 shadow-xl">
            <aside className="flex justify-center items-center gap-3 md:gap-8 py-2 md:py-6 flex-col md:flex-row border-r-2 border-slate-200 flex-1">
              <Icon>
                <FontAwesomeIcon icon={faUser} />
              </Icon>
              <article className=" text-black flex flex-col items-center justify-center md:items-start">
                <p className="font-bold text-md lg:text-xl">90+</p>
                <p className=" text-textColor">Staff</p>
              </article>
            </aside>
            <aside className="flex justify-center items-center gap-3 md:gap-8 py-2 md:py-6 flex-col md:flex-row border-r-2 border-slate-200 flex-1">
              <Icon>
                <FontAwesomeIcon icon={faUser} />
              </Icon>
              <div className=" text-black flex flex-col items-center justify-center text-center md:text-left md:items-start">
                <p className="font-bold text-md lg:text-xl">800+</p>
                <p className=" text-textColor">Customers</p>
              </div>
            </aside>
            <aside className="flex justify-center items-center gap-3 md:gap-8 py-2 md:py-6 flex-col md:flex-row flex-1">
              <Icon>
                <FontAwesomeIcon icon={faUser} />
              </Icon>
              <div className=" text-black flex flex-col items-center justify-center md:items-start">
                <p className="font-bold text-md lg:text-xl text-center md:text-left">
                  30+
                </p>
                <p className=" text-textColor">Stores</p>
              </div>
            </aside>
          </section>
        </div>
      </section>
      <div className="mb-20"></div>
    </>
  );
};

export default LandingPage;
