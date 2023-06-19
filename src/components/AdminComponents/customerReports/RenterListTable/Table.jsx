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
          <h2 className="text-[20px] font-semibold leading-[20.16px]  text-[#444444]">
            Vehicle Renters List
          </h2>
          <div className="flex lg:py-0 py-2">
            <div className="bg-white shadow-sm rounded-full border flex items-center border-0 lg:flex items-center px-4 h-[45px] w-[380px] py-3 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]">
              <MdSearch className="text-[25px] text-[#FF8C00]" />
              <input
                type="text"
                className="focus:outline-none mx-2 w-full placeholder:text-[#ACACAC] placeholder:text-[16px]"
                placeholder="Search..."
              />
            </div>
            <div className="ml-4">
              <div className="text-center w-full flex justify-end">
                <div className="dropdown relative">
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
