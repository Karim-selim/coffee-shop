import { Header2, Section, TextHolder } from "../../Ui";
import profile from "../../assists/images/placeholder-profile.jpg";
import star from "../../assists/icons/star.svg";

function Feedbacks() {
  return (
    <Section>
      <TextHolder>
        <Header2>Loved by Customer of Happy Customer</Header2>
        <p className="text-textColor">
          These are the stories of our customers who have visited us with great
          pleasure.
        </p>
      </TextHolder>
      <div className="cards grid grid-cols-1 lg:grid-cols-3 gap-5">
        <aside className="feedBackCard border-2  mx-auto space-y-4 border-gray-300 flex flex-col rounded-xl p-7 max-lg:max-w-[400px] hover:shadow-2xl hover:border-buttonColor duration-200 ease-in-out">
          <div className="person flex gap-2 items-center">
            <img src={profile} alt="profile" className="rounded-full w-14" />
            <div className="flex-1 text-left">
              <p className="font-semibold text-lg">Foo Barr</p>
              <p className="text-textColor text-sm">Warsaw, Poland</p>
            </div>
            <div className="rating flex gap-2">
              4.5
              <img src={star} alt="star" />
            </div>
          </div>
          <p className="text-left">
            “Wow... I am very happy to spend my whole day here. the Wi-fi is
            good, and the coffee and meals tho. I like it here!! Very
            recommended!
          </p>
        </aside>
        <aside className="feedBackCard border-2  mx-auto space-y-4 border-gray-300 flex flex-col rounded-xl p-7 max-lg:max-w-[400px] hover:shadow-2xl hover:border-buttonColor duration-200 ease-in-out">
          <div className="person flex gap-2 items-center">
            <img src={profile} alt="profile" className="rounded-full w-14" />
            <div className="flex-1 text-left">
              <p className="font-semibold text-lg">Yessica Christy</p>
              <p className="text-textColor text-sm">Warsaw, Poland</p>
            </div>
            <div className="rating flex gap-2">
              4.5
              <img src={star} alt="star" />
            </div>
          </div>
          <p className="text-left">
            “I like it because I like to travel far and still can make my day
            better just by drinking their Hazelnut Latte
          </p>
        </aside>
        <aside className="feedBackCard border-2  mx-auto space-y-4 border-gray-300 flex flex-col rounded-xl p-7 max-lg:max-w-[400px] hover:shadow-2xl hover:border-buttonColor duration-200 ease-in-out">
          <div className="person flex gap-2 items-center">
            <img src={profile} alt="profile" className="rounded-full w-14" />
            <div className="flex-1 text-left">
              <p className="font-semibold text-lg">Kim Young Jou</p>
              <p className="text-textColor text-sm">Warsaw, Poland</p>
            </div>
            <div className="rating flex gap-2">
              4.5
              <img src={star} alt="star" />
            </div>
          </div>
          <p className="text-left">
            “This is very unusual for my taste, I haven’t liked coffee before
            but their coffee is the best! and yup, you have to order the chicken
            wings, the best in town
          </p>
        </aside>
      </div>
    </Section>
  );
}

export default Feedbacks;
