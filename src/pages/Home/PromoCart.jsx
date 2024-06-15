import { Button, Section } from "../../Ui";

const PromoCart = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Section className="mb-6 md:mb-[-12rem]">
      <div className="shadow-primary w-full flex justify-between items-center text-center max-md:flex-col md:text-left py-10 md:py-14 px-8 md:px-16 rounded-xl bg-white">
        <aside className="flex flex-col flex-1 space-y-4">
          <p className="text-3xl font-semibold">Check our promo today!</p>
          <p className="text-textColor">Let's see the deals and pick yours</p>
        </aside>
        <div className="hidden lg:block lg:flex-1 md:w-[75%]"></div>
        <aside className="flex-1 w-full">
          <Button
            onClick={scrollToTop}
            to="/products"
            className="bg-firstColor text-buttonColor rounded-xl ml-auto w-full md:w-[75%] py-3 max-md:mt-4 font-bold"
          >
            See promo
          </Button>
        </aside>
      </div>
    </Section>
  );
};

export default PromoCart;
