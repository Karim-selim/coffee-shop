import { Fragment } from "react";
import {
  LandingPage,
  Benifits,
  Favourite,
  VisitStore,
  Partners,
  Feedbacks,
  PromoCart,
  Footer,
} from "./";

const Home = () => {
  return (
    <Fragment>
      <LandingPage />
      <Benifits />
      <Favourite />
      <VisitStore />
      <Partners />
      <Feedbacks />
      <PromoCart />
      <Footer className="pt-20" />
    </Fragment>
  );
};

export default Home;
