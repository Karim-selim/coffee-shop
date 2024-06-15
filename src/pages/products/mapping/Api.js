import axios from "axios";

export const FetchCoffee = async () => {
  const res = await axios.get("https://api.sampleapis.com/coffee/hot");
  return res.data;
};

export const FetchFav = async () => {
  const res = await axios.get("https://api.sampleapis.com/recipes/recipes");
  return res.data;
};

export const FetchIced = async () => {
  const res = await axios("https://api.sampleapis.com/coffee/iced");
  return res.data;
};

export const FetchFood = async () => {
  const res = await axios("https://api.sampleapis.com/recipes/recipes");
  return res.data;
};
