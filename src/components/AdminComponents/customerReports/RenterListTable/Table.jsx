import React from "react";
import { MdSearch } from "react-icons/md";
import CustomerReportList from "./CustomerReportList";
// import { useLocation } from 'react-router-dom'
import FilterDropdown from "../../../../util/dropdowns/FilterDropdown";

const Table = ({ setDetail }) => {
  // const location = useLocation().pathname

  // let checkType = location === "/ticket" ? " Support Tickets" : "Reports"

  return (
    <>
      <div className="">
        <div className="flex lf:flex-nowrap flex-wrap justify-between items-center">
          <h2 className="text-[18px] font-semibold leading-[20.16px] mb-2  text-[#444444]">
            Vehicle Renters List
          </h2>
          <div className="flex tablet:justify-between tablet:w-full lg:py-0 py-2   xtra-small:block xxtra-small:block xtra-small:w-full xxtra-small:w-full">
            <div className="bg-white xtra-small:w-full flex border-0 lg:flex items-center px-4 h-[45px] w-[380px] xxtra-small:w-full xtra-sm:w-full py-3 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-full">
              <MdSearch className="text-[25px] text-[#FF8C00]" />
              <input
                type="text"
                className="focus:outline-none mx-2 w-full placeholder:text-[#ACACAC] placeholder:text-[16px]"
                placeholder="Search..."
              />
            </div>
            <div className="ml-2  xtra-small:ml-0 xxtra-small:ml-0 xxtra-small:mt-2 xtra-small:mt-2">
              <div className="text-center w-full flex justify-end xtra-small:justify-start xxtra-small:justify-start ">
                <div className="dropdown xxtra-small:w-full xtra-small:w-full relative">
                  <FilterDropdown
                    list={[
                      "Successful Transactions",
                      "Failed Transactions",
                      "Historical Transactions",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <CustomerReportList setDetail={setDetail} />
        </div>
      </div>
    </>
  );
};

export default Table;
