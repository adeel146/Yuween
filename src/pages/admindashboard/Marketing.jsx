import React from "react";
import Promo from "../../components/AdminComponents/marketing/Promo";
import { MdSearch } from "react-icons/md";
import PromoTable from "../../components/AdminComponents/marketing/PromoTable";

const Marketing = () => {
  return (
    <>
      {/* Promo component */}
      <div className="px-5">
        <Promo />
      </div>
      {/* table component */}
      <div className="pt-10">
        <div className="flex  flex-wrap justify-between items-center">
          <h2 className="text-[20px] font-semibold leading-[20.16px]  text-[#444444]">
            Promo Codes Raw Data
          </h2>
          <div className="flex lg:py-0 py-2 ">
            <div className="bg-white rounded-full border-0 flex items-center px-4 h-[45px] w-[380px] py-3 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]">
              <MdSearch className="text-[25px] text-[#FF8C00]" />
              <input
                type="text"
                className="focus:outline-none mx-2 w-full placeholder:text-[#ACACAC] placeholder:text-[16px]"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
        <PromoTable />
      </div>
    </>
  );
};

export default Marketing;
