import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const Section1 = () => {
  const [tripType, setTripType] = useState("oneWay");
  return (
   <section>
     <div className="container mx-auto my-10">
      <div className="bg-white p-4 rounded-lg shadow-[0px_2px_13px_rgba(0,0,0,0.5)]">
        <div className="flex items-center space-x-4 ">
          <input className="w-6 h-6 text-red-500" type="radio" name="way" id="onway" />
          <label className="text-[15px] " htmlFor="">One Way</label>
          <input className="w-6 h-6 text-red-500" type="radio" name="way" id="Round Way" />
          <label className="text-[15px] " htmlFor="">Round Way</label>

          
        </div>
        <div>
          <form action="">
              <div className="flex flex-col md:flex-row gap-5 mt-5 ">

              <div className="flex gap-2 items-center border-[1px] border-gray-400 rounded-xl px-2 py-2">
              <FaLocationArrow />
                <input className=" outline-none text-xl" type="text" name="" id=""  placeholder="Form"/>
              </div>
              <div className="flex gap-2 items-center border-[1px] border-gray-400 rounded-xl px-2 py-2">
              <FaLocationPin />

                <input className=" outline-none text-xl" type="text" name="" id=""  placeholder="To"/>
              </div>
              <div className="flex justify-between gap-2 items-center border-[1px] border-gray-400 rounded-xl px-2 py-2">
                <div>
                    <p className="text-xs text-green-400 ">jourrney Date</p>
                    <input className="outline-none" type="date" placeholder="Pick a date"/>
                </div>
                <div>
                <p className="text-xs text-green-400 ">Return Date</p>
                <input className="outline-none" type="date" placeholder="Pick a date" />
                </div>
              </div>
              <button className="w-full  text-2xl py-2 rounded-xl bg-green-300 " type="submit">Search</button>
              </div>
          </form>
        </div>
      </div>
    </div>
   </section>
  );
};

export default Section1;
