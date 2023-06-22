import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import DataList from "./DataList";
import PaymentDetail from "./PaymentDetail";
import FilterDropdown from "../../../../../util/dropdowns/FilterDropdown";

const DataTable = () => {
  // const [active, setActive] = useState(0)
  const [detail, setDetail] = useState(false);
  return (
    <>
      {detail === false ? (
        <>
          <div className="flex  lg:flex-nowrap flex-wrap  justify-between items-center">
            <h2 className="text-[20px] leading-[20.16px] font-semibold text-[#444444]">
              Gateway Payment Management
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
          <div>
            <DataList setDetail={setDetail} />
          </div>
        </>
      ) : (
        <PaymentDetail />
      )}
    </>
  );
};

export default DataTable;
