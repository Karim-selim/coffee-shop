import { Footer } from "../components";

const History = () => {
  return (
    <>
      <section className="bg-history bg-cover bg-center pt-8">
        <article className="text-white flex py-6 md:py-12 font-medium flex-col justify-center items-center gap-8 global-px">
          <h2 className="text-3xl drop-shadow-[0_10px_10px_rgpa(0,0,0,0.6)] font-extrabold">
            Let′s see what you have bought!
          </h2>
          <p>Select items to see detail</p>
          <button className="rounded-lg bg-buttonColor text-white flex items-center justify-center px-5 hover:bg-[#553321] duration-300 ease-in-out text-sm uppercase h-12 mt-8">
            Page 1
          </button>
        </article>
      </section>
      <Footer />
    </>
  );
};

export default History;
