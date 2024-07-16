import React from "react";

const Map: React.FC = () => {
  return (
    <div className="relative bg-[#78350F] px-4 sm:px-8 md:px-[8rem] lg:px-[16rem] h-screen overflow-hidden">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-white font-bold md:font-extrabold text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[6rem] leading-none">
            11,658,467
          </h1>
          <h2 className="text-white font-bold md:font-extrabold text-[1rem] sm:text-[1.5rem] md:text-[2.5rem] lg:text-[3rem]">
            Shoes Collected
          </h2>
        </div>
      </div>

      <div className="relative w-full h-full">
        <img
          src="src/assets/map.png"
          alt="Map"
          className="w-full h-full lg:h-auto object-cover"
        />

        {/* Green circles representing locations */}
        <div className="absolute top-[35%] left-[45%] lg:top-[35%] lg:left-[20%] w-3 h-3 bg-[#84cc16] rounded-full"></div>
        <div className="absolute top-[65%] left-[55%] lg:top-[25%] lg:left-[30%] w-3 h-3 bg-[#84cc16] rounded-full"></div>
        <div className="absolute top-[50%] left-[65%] lg:top-[40%] lg:left-[50%] w-3 h-3 bg-[#84cc16] rounded-full"></div>
        <div className="absolute lg:top-[30%] lg:left-[50%] w-3 h-3 bg-[#84cc16] rounded-full"></div>
        <div className="absolute lg:top-[60%] lg:left-[85%] w-3 h-3 bg-[#84cc16] rounded-full"></div>
        {/* Add more circles as needed */}

        {/* Popup with shoe information */}
        <div className="absolute top-[4%] left-[15%] bg-white rounded-lg shadow-lg p-4 max-w-[200px]">
          <img
            src="src/assets/sneaker-4.jpg"
            alt="Cool Shoes"
            className="w-full h-auto rounded-md mb-2"
          />
          <p className="text-sm text-gray-800">
            Emma Simpson collected one pair of Cool Shoes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map;
