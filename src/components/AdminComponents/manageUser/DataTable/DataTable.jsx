import React, { useState, useEffect } from "react";
// import { MdSearch } from 'react-icons/md'
import DataList from "./DataList";
import FilterDropdown from "../../../../util/dropdowns/FilterDropdown";
import { useLocation } from "react-router-dom";
import SearchBar from "../../../GenericComponents/SearchBar";
import { GetVihicals } from "../../../../lib/Api/Vehical";
import { MdSearch } from "react-icons/md";
const DataTable = ({ setDetail, setRentalUser }) => {
  const [vehicalData, setVehicalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [types, setTypes] = useState(true);
  const location = useLocation().pathname;
  const [vehicalList, setVehicalList] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      let { res } = await GetVihicals();
      setLoading(false);
      let vehicals = Object.assign({}, ...res);
      setVehicalList(vehicals?.vehicles);
    })();
  }, [types]);

  return (
    <>
      <div className="flex lg:flex-nowarp  flex-wrap justify-between items-center">
        <h2 className="text-[14.4px] leading-[20.16px] font-semibold text-[#444444]">
          {location === "/vehicalOwner"
            ? "Vehicle Owner's  List"
            : "Vehicle Renters List"}
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
                <FilterDropdown
                  setVehicalList={(val) => setVehicalList(val)}
                  setTypes={setTypes}
                  setLoading={setLoading}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <DataList
          setDetail={setDetail}
          setRentalUser={setRentalUser}
          vehicalList={vehicalList}
          setVehicalList={setVehicalList}
          loading={loading}
          setLoading={setLoading}
          setTypes={setTypes}
        />
      </div>
    </>
  );
};

export default DataTable;
