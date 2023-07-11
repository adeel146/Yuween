import React, { useState } from "react";
import Reviews from "./Reviews";
import VihicalManagement from "./VihicalManagement";
import BookingManagement from "./BookingMangement";
import PaymentManagement from "./PaymentManagement";

const ManagementIndex = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  let list = [
    "Vehicle Management",
    "Booking Management",
    "Payment Management",
    "Rating Reviews Management",
  ];
  return (
    <>
      <div className="flex lg:flex-nowrap  flex-wrap  items-center   mt-3">
        {list.map((list, i) => (
          <h1
            className={`text-center cursor-pointer text-[#ACACAC] py-2 lg:px-2.5 px-2.5 mr-5 truncate  ${
              i === 3 ? "w-[235px]" : "w-[190px]"
            } ${
              activeIndex === i &&
              "border-b-2 text-center text-[16px]   border-[#FF8C00] !text-[#444444] font-semibold"
            }`}
            onClick={() => setActiveIndex(i)}
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
