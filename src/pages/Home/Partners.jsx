import { Header2, Section, TextHolder } from "../../Ui";
import netfelix from "../../assists/images/partners/netflix.svg";
import reddit from "../../assists/images/partners/reddit.svg";
import amazon from "../../assists/images/partners/amazon.svg";
import discord from "../../assists/images/partners/discord.svg";
import spotify from "../../assists/images/partners/spotify.svg";

const Partners = () => {
  return (
    <Section>
      <TextHolder>
        <Header2>Our Partner</Header2>
      </TextHolder>
      <div className="flex gap-4 md:gap-12 items-center justify-center flex-wrap">
        <img
          src={netfelix}
          alt=""
          className="w-24 lg:w-[15%] grayscale opacity-20 hover:opacity-100 hover:grayscale-0 duration-300 ease-in-out"
        />
        <img
          src={reddit}
          alt=""
          className="w-24 lg:w-[15%] grayscale opacity-20 hover:opacity-100 hover:grayscale-0 duration-300 ease-in-out"
        />
        <img
          src={amazon}
          alt=""
          className="w-24 lg:w-[15%] grayscale opacity-20 hover:opacity-100 hover:grayscale-0 duration-300 ease-in-out"
        />
        <img
          src={discord}
          alt=""
          className="w-24 lg:w-[15%] grayscale opacity-20 hover:opacity-100 hover:grayscale-0 duration-300 ease-in-out"
        />
        <img
          src={spotify}
          alt=""
          className="w-24 lg:w-[15%] grayscale opacity-20 hover:opacity-100 hover:grayscale-0 duration-300 ease-in-out"
        />
      </div>
    </Section>
  );
};

export default Partners;
