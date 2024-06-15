import team from "../../assists/images/team-work.webp";
import check from "../../assists/icons/check-circle.svg";
import { Header2 } from "../../Ui";

const Benifits = () => {
  return (
    <div className="py-8 md:py-20 global-px flex flex-col lg:flex-row lg:gap-32">
      <aside className="flex-1 img">
        <img src={team} alt="pic" />
      </aside>
      <aside className="flex flex-col flex-1 gap-8">
        <Header2> We Provide Good Coffee and Healthy Meals</Header2>
        <p className="text-textColor">
          You can explore the menu that we provide with fun and have their own
          taste and make your day better.
        </p>
        <ul className="flex flex-col gap-8 text-textColor">
          <li className="flex gap-4">
            <img src={check} alt="" />
            <p>High quality beans</p>
          </li>
          <li className="flex gap-4">
            <img src={check} alt="" />
            <p>Healthy meals, you can request the ingredients</p>
          </li>
          <li className="flex gap-4">
            <img src={check} alt="" />
            <p>Chat with our staff to get better experience for ordering</p>
          </li>
          <li className="flex gap-4">
            <img src={check} alt="" />
            <p>Free member card with a minimum purchase of IDR 200.000.</p>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Benifits;
