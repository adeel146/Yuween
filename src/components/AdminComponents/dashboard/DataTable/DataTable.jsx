import React from "react";
import { MdSearch } from "react-icons/md";
import DataList from "./DataList";
import FilterDropdown from "../../../../util/dropdowns/FilterDropdown";

const DataTable = ({ setDetail, setRentalUser }) => {
  return (
    <>
      <div className="flex  flex-wrap justify-between items-center  space-y-2 sm:space-y-0 ">
        <h2 className="text-[14.4px] leading-[20.16px] font-semibold text-[#444444]">
          New Vehicle Deposit Requests
        </h2>

        <div className="flex justify-between space-x-2 sm:space-x-0 ">
          <div className="bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-full border-0 flex items-center px-4 w-full h-[45px]">
            <MdSearch className="text-[25px] text-[#FF8C00]" />
            <input
              type="text"
              className="focus:outline-none mx-2 w-full font-medium placeholder:text-[#ACACAC] placeholder:text-[16px]"
              placeholder="Search..."
            />
          </div>
          <div className="w-max sm:w-full">
            <FilterDropdown />
          </div>
        </div>
      </div>
      <div>
        <DataList setDetail={setDetail} setRentalUser={setRentalUser} />
      </div>
    </>
  );
};

export default DataTable;
