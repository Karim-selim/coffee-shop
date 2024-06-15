import { Section, Header2, TextHolder } from "../../Ui";
import MealCard from "./MealCard";

function Favourite() {
  return (
    <Section>
      <TextHolder>
        <Header2 className="mb-12 md:mb-0">Here is People's Favorite</Header2>
        <p className="text-textColor">
          Let's choose and have a bit taste of poeple's favorite. It might be
          yours too!
        </p>
      </TextHolder>
      <div className="cards flex flex-wrap gap-12">
        <MealCard />
        <MealCard />
        <MealCard />
      </div>
    </Section>
  );
}

export default Favourite;
