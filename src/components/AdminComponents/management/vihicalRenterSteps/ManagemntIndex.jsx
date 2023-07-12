import React, { useState } from "react";
import Reviews from "./Reviews";
import VihicalManagement from "./VihicalManagement";
import BookingManagement from "./BookingMangement";
import PaymentManagement from "./PaymentManagement";
import { useDispatch, useSelector } from "react-redux";
import { UpdateManagementIndex } from "../../../../Redux/UserAuthSlice/UserAuthSlice";

const ManagementIndex = () => {
  let list = [
    "Vehicle Management",
    "Booking Management",
    "Payment Management",
    "Rating Reviews Management",
  ];
  const dispatch = useDispatch();
  const activeIndex = useSelector(
    (state) => state.userAuth.managementSelectedIndex
  );
  return (
    <>
      <select
        className="border-0 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-md bg-white px-2 xl:hidden md:hidden w-full py-2 focus:outline-none mt-2"
        onChange={(e, s) => {
          dispatch(UpdateManagementIndex(+e.target.value));
        }}
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
            className={`text-center cursor-pointer text-[#ACACAC] py-2 lg:px-2.5 px-2.5 mr-5 truncate  ${
              i === 3 ? "w-[235px]" : "w-[190px]"
            } ${
              activeIndex === i &&
              "border-b-2 text-center text-[16px]   border-[#FF8C00] !text-[#444444] font-semibold"
            }`}
            onClick={() => dispatch(UpdateManagementIndex(i))}
            key={i}
          >
            {" "}
            {list}
          </h1>
        ))}
      </div>

      <div className="mt-5">
        {activeIndex === 0 && <VihicalManagement />}
        {activeIndex === 1 && <BookingManagement />}
        {activeIndex === 2 && <PaymentManagement />}
        {activeIndex === 3 && <Reviews />}
      </div>
    </>
  );
};

export default ManagementIndex;
