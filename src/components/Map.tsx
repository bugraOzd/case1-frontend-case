import React from "react";

const Map: React.FC = () => {
  return (
    <div className="relative bg-[#78350F] px-4 sm:px-8 md:px-[8rem] lg:px-[16rem] h-screen">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-white font-bold md:font-extrabold text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[6rem]">
            11,658,467
          </h1>
          <h2 className="text-white font-bold md:font-extrabold text-[1rem] sm:text-[1.5rem] md:text-[2.5rem] lg:text-[3rem]">
            Shoes Collected
          </h2>
        </div>
      </div>
      <img src="src/assets/map.png" alt="Map" className="w-full h-auto" />
    </div>
  );
};

export default Map;
