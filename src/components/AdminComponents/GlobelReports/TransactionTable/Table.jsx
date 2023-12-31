import React from "react";
import { MdSearch } from "react-icons/md";
import { useLocation } from "react-router-dom";
import FilterDropdown from "../../../../util/dropdowns/FilterDropdown";
import TransactionList from "./TransactionList";

const TransactionTable = ({ setDetail, title }) => {
  const location = useLocation().pathname;

  // let checkType = location === "/ticket" ? " Support Tickets" : "Reports"

  return (
    <>
      <div className="">
        {title === "Transaction" ? (
          <div className="flex lg:flex-nowrap flex-wrap justify-between items-center pb-5">
            <h2 className="text-[20px] font-semibold leading-[20.16px]  text-[#444444]">
              Transaction
            </h2>
            <div className="flex tablet:justify-between tablet:w-full lg:py-0 py-2  xtra-small:block xxtra-small:block xtra-small:w-full xxtra-small:w-full">
              <div className="bg-white xtra-small:w-full flex border-0 lg:flex items-center px-4 h-[45px] w-[380px] xxtra-small:w-full xtra-sm:w-full py-3 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-full">
                <MdSearch className="text-[25px] text-[#FF8C00]" />
                <input
                  type="text"
                  className="focus:outline-none mx-2 w-full placeholder:text-[#ACACAC] placeholder:text-[16px]"
                  placeholder="Search..."
                />
              </div>
              <div className="ml-4 xtra-small:ml-0 xxtra-small:ml-0 xxtra-small:mt-2 xtra-small:mt-2">
                <div className="text-center w-full flex justify-end xtra-small:justify-start xxtra-small:justify-start ">
                  <div className="dropdown xxtra-small:w-full xtra-small:w-full relative">
                    <FilterDropdown />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h2 className="text-[20px] font-semibold leading-[20.16px] p-5 text-[#FF8C00]">
            {location === "/globelRenter"
              ? "Top Highly Ranked  Renters"
              : "Top Highly Ranked Owners"}
          </h2>
        )}
        <div>
          <TransactionList setDetail={setDetail} title={title} />
        </div>
      </div>
    </>
  );
};

export default TransactionTable;
