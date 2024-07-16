import { features } from "../shared/features";
import FeatureList from "./FeatureList";
import { CirclePlay } from "lucide-react";
import "./Hero.css";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-0"></div>
      <div className="triangle relative z-10">
        <section
          id="hero"
          className="py-24 px-24 flex flex-wrap md:flex-nowrap gap-10"
        >
          <div className="flex flex-col gap-10">
            <h1 className="font-extrabold text-[4.2rem]">
              Collectible Sneakers
            </h1>
            <p className="text-wrap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex gap-5">
              <Button text="Sign up now" />
              <button>
                <span className="flex gap-2 text-col-primary">
                  <CirclePlay />
                  Watch Demo
                </span>
              </button>
            </div>
          </div>

          <div className="relative w-[20rem] h-[20rem] bg-[#FBBF24] rounded-[50px]">
            <div className="absolute w-[35rem] h-[35rem] inset-0 flex items-center justify-center">
              <img
                src="src/assets/sneaker-2.png"
                alt="Nike shoe"
                className="w-[60rem] h-auto transform rotate-1 -translate-x-24 -translate-y-32"
              />
            </div>
          </div>
        </section>

        <section id="features">
          <FeatureList features={features}></FeatureList>
        </section>
      </div>
    </div>
  );
};

export default Hero;
