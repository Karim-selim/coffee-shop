import React from "react";
import GetIced from "./mapping/MappedIced";
import { FetchIced } from "./mapping/Api";
import { useLoaderData } from "react-router-dom";

const Iced = () => {
  const loaderData = useLoaderData();
  return (
    <>
      <GetIced products={loaderData} />
      <p className="text-buttonColor my-8">
        *the price has been cutted by discount appears
      </p>
    </>
  );
};

export default Iced;
export const router = () => {
  return FetchIced();
};
