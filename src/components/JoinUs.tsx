import { Check } from "lucide-react";
import Button from "./Button";
import ReactPlayer from "react-player/youtube";
import BrowserContainer from "./BrowserContainer";

const JoinUs = () => {
  return (
    <section className="py-16 px-4 sm:px-8 md:py-24 md:px-24">
      <div className="py-10 md:py-20 px-4 sm:px-8 md:px-14 flex flex-col md:flex-row justify-between items-center shadow-xl rounded-2xl gap-8 md:gap-0">
        <div className="flex flex-col gap-8 text-center md:text-start md:w-1/2">
          <h3 className="font-bold text-2xl md:text-4xl">Why join us</h3>

          <ul className="space-y-3">
            <li className="flex gap-3 items-center">
              <span className="text-green-700">
                <Check />
              </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-green-700">
                <Check />
              </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-green-700">
                <Check />
              </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </li>
          </ul>

          <div>
            <Button text="Sign up now" />
          </div>
        </div>

        <div className="relative flex justify-center items-center md:w-1/2">
          <svg
            className="absolute -z-10"
            width="713"
            height="627"
            viewBox="0 0 713 627"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <rect
              y="471.948"
              width="666.284"
              height="217.934"
              transform="rotate(-45 0 471.948)"
              fill="#FDE68A"
            />
            <rect
              opacity="0.75"
              x="458"
              y="454"
              width="74"
              height="74"
              rx="30"
              fill="#A21CAF"
            />
            <rect
              opacity="0.75"
              x="55"
              y="159"
              width="90"
              height="90"
              rx="30"
              fill="#B45309"
            />
            <rect
              opacity="0.75"
              x="513"
              y="46"
              width="59"
              height="60"
              rx="29.5"
              fill="#0369A1"
            />
            <rect
              opacity="0.75"
              x="495"
              y="375"
              width="218"
              height="218"
              rx="50"
              fill="#BE185D"
            />
          </svg>

          <BrowserContainer width="27rem" height="19rem">
            <ReactPlayer
              style={{ borderRadius: "20px" }}
              width="100%"
              height="100%"
              url="https://www.youtube.com/watch?v=edB-jhCiWZg&t=1s"
            />
          </BrowserContainer>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
