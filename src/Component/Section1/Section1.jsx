import React, { useState } from "react";

const Section1 = () => {
  const [tripType, setTripType] = useState("oneWay");
  return (
    <div className="">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center space-x-4 ">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="tripType"
              value="oneWay"
              checked={tripType === "oneWay"}
              onChange={() => setTripType("oneWay")}
              className="hidden"
            />
            <span
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                tripType === "oneWay" ? "border-black" : "border-gray-400"
              }`}
            >
              {tripType === "oneWay" && (
                <span className="w-3 h-3 bg-black rounded-full"></span>
              )}
            </span>
            <span
              className={`text-lg ${
                tripType === "oneWay"
                  ? "text-black font-semibold"
                  : "text-gray-400"
              }`}
            >
              One Way
            </span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="tripType"
              value="roundWay"
              onChange={() => setTripType("roundWay")}
              className="hidden"
            />
            <span
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                tripType === "roundWay" ? "border-black" : "border-gray-400"
              }`}
            >
              {tripType === "roundWay" && (
                <span className="w-3 h-3 bg-black rounded-full"></span>
              )}
            </span>
            <span
              className={`text-lg ${
                tripType === "roundWay"
                  ? "text-black font-semibold"
                  : "text-gray-400"
              }`}
            >
              Round Way
            </span>
          </label>
        </div>
        <div>
          <form action="">
              <div></div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Section1;
