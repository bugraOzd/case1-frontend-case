import { Check } from "lucide-react";
import SignUpButton from "./SignUpButton";
import ReactPlayer from "react-player/youtube";

const JoinUs = () => {
  return (
    <section className="py-[6rem] px-24">
      <div className="py-20 px-14 flex justify-between flex-wrap md:flex-nowrap items-center shadow-xl rounded-2xl">
        <div className="flex flex-col gap-8">
          <h3 className="font-bold text-4xl">Why join us</h3>

          <ul>
            <li className="flex gap-3 mb-3">
              <span className="text-green-700">
                <Check />
              </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </li>
            <li className="flex gap-3 mb-3">
              <span className="text-green-700">
                <Check />
              </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </li>
            <li className="flex gap-3">
              <span className="text-green-700">
                <Check />
              </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </li>
          </ul>

          <div>
            <SignUpButton />
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <svg
            className="absolute -z-10"
            width="713"
            height="627"
            viewBox="0 0 713 627"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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

          <ReactPlayer
            style={{ borderRadius: "20px" }}
            width="430px"
            height="260px"
            url="https://www.youtube.com/watch?v=edB-jhCiWZg&t=1s"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
