import React from "react";

const BrowserContainer = ({
  width,
  height,
  children,
}: {
  width: string;
  height: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      style={{
        height: height,
        width: width,
      }}
      className="relative border-4 border-t-[30px] rounded-xl shadow-2xl"
    >
      <div className="absolute -top-5 left-1 flex gap-1">
        <div className="w-2 h-2 rounded-full bg-red-600"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-600"></div>
        <div className="w-2 h-2 rounded-full bg-green-600"></div>
      </div>
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default BrowserContainer;
