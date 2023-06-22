import React, { useState } from "react";
import RenterDetail from "./RenterDetail";
import Reviews from "./Reviews";
import CarRequest from "./CarRequest";
import ChatWithOwner from "./ChatWithOwner";
import CustomerSupport from "./CustomerSupport";
import Transaction from "./Transaction";
import { useLocation } from "react-router-dom";
import CarList from "./CarList";

const RentalIndex = ({ rentalUser }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  let location = useLocation().pathname;

  let list = [
    "Renter Detail",
    "Reviews",
    "Car requests",
    "Chat with Owner",
    "Customer Support",
    "Transaction",
  ];
  let listOwner = [
    "Car Owner Detail",
    "Reviews",
    "Car list",
    "Chat with Renter",
    "Customer Support",
    "Transaction",
  ];

  const handlClick = (index) => {
    setActiveIndex(Number(index));
  };
  return (
    <>
      <h2 className="text-[#444444] font-semibold text-[20px] leading-[30px]">
        {location === "/vehicalOwner" ? "Vehicle Owner" : "Vehicle Renters"}
      </h2>
      {location === "/vehicalOwner" ? (
        <>
          <div className="select-wrapper px-4 mx-2 border-0 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-md bg-white xl:hidden md:hidden w-full py-2 focus:outline-none mt-2 " onChange={(e) => handlClick(e.target.value)}>
            <select className=" w-[98%]  focus:outline-none  p-1 ">
              <option value="">Please Select</option>
              {listOwner.map((list, i) => (
                <option value={i} key={i}>
                  {list}
                </option>
              ))}
            </select>
          </div>
          <div className="xl:flex md:flex hidden justify-between items-center border-b-2  mt-3">
            {listOwner.map((list, i) => (
              <h1
                className={`lg:w-[170px] text-center cursor-pointer text-[#ACACAC] px-3 py-2 text-[16px] ${
                  activeIndex === i &&
                  "border-b-2  text-center border-[#FF8C00] !text-[#444444] font-semibold"
                }`}
                onClick={() => setActiveIndex(i)}
                key={i}
              >
                {" "}
                {list}
              </h1>
            ))}
          </div>
        </>
      ) : (
        <>
          <select
            className="border-0 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-md bg-white px-2 xl:hidden md:hidden w-full py-2 focus:outline-none mt-2"
            onChange={(e) => handlClick(e.target.value)}
          >
            <option value="">Please Select</option>
            {list.map((list, i) => (
              <option value={i} key={i}>
                {list}
              </option>
            ))}
          </select>
          <div className="xl:flex md:flex hidden justify-between items-center border-b-2  mt-3">
            {list.map((list, i) => (
              <h1
                className={`xl:w-[170px] md:w-auto w-[165px] text-center cursor-pointer text-[#ACACAC] px-3 py-2 text-[16px] leading-[21px] ${
                  activeIndex === i &&
                  "border-b-2  text-center  border-[#FF8C00] !text-[#444444] font-semibold"
                }`}
                onClick={() => setActiveIndex(i)}
                key={i}
              >
                {" "}
                {list}
              </h1>
            ))}
          </div>
        </>
      )}

      <div className="mt-5">
        {activeIndex === 0 && <RenterDetail rentalUser={rentalUser} />}
        {activeIndex === 1 && <Reviews />}
        {activeIndex === 2 && location === "/vehicalOwner" ? (
          <CarList rentalUser={rentalUser} />
        ) : activeIndex === 2 && location === "/vehicalRenters" ? (
          <CarRequest />
        ) : (
          ""
        )}
        {activeIndex === 3 && <ChatWithOwner />}
        {activeIndex === 4 && <CustomerSupport />}
        {activeIndex === 5 && <Transaction />}
      </div>
    </>
  );
};

export default RentalIndex;
