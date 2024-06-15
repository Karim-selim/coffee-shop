import React from "react";
import empty from "../../assists/images/empty.svg";

const Addons = () => {
  return (
    <>
      <main className="flex flex-col global-px items-center justify-center text-center w-full py-8 gap-5 mt-10">
        <div className="max-w-[13rem]">
          <img src={empty} alt="" />
        </div>
        <article className="p">
          <p>We're sorry, it seems our products have gone into hiding.</p>
          <p>We'll try to coax them out soon.</p>
        </article>
      </main>
      <p className="text-buttonColor my-8 left-0">
        *the price has been cutted by discount appears
      </p>
    </>
  );
};

export default Addons;
