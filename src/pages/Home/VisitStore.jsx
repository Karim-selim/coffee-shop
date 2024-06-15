import { Header2, Section, TextHolder } from "../../Ui";
import global from "../../assists/images/global.svg";

const VisitStore = () => {
  return (
    <Section>
      <TextHolder>
        <Header2>Visit Our Store in the Spot on the Map Below</Header2>
        <p className="text-textColor">
          See our store in every city on the spot and spen your good day there.
          See you soon!
        </p>
      </TextHolder>
      <img src={global} alt="" className="" />
    </Section>
  );
};

export default VisitStore;
