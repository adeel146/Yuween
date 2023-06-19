import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GetVihicalsByFilter } from "../../../lib/Api/Vehical";
import Transition from "../../../util/Transition/Transition";

function CommonDropdown({ setVehicalList, setLoading, setTypes, list }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filterList, setFilterList] = useState("January");
  const [List, setList] = useState(list || ["select"]);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  const GetFilterVehical = async (item) => {
    if (item === "all") {
      setFilterList(item);
      setTypes(true);
      setTimeout(() => {
        setTypes(false);
      }, 1000);
    } else {
      setFilterList(item);
      setLoading(true);
      let { res } = await GetVihicalsByFilter(item);
      let vehicals = Object.assign({}, ...res);
      setLoading(false);
      setVehicalList(vehicals?.vehicles);
      setDropdownOpen(false);
    }
  };

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative inline-flex xtra-small:w-full xxtra-small:w-full">
      <button
        ref={trigger}
        className={` flex  text-sm items-center w-full border border-[#E0E7ED] px-3 py-[5px] justify-between bg-white  transition duration-150 rounded-full ${
          dropdownOpen && "bg-slate-200"
        } `}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <h2 className="font-medium text-[#444]"> {filterList} </h2>
        <MdOutlineKeyboardArrowDown className="text-[20px] ml-2 font-normal fill-gray-400 " />
      </button>

      <Transition
        className={`origin-top-center   rounded-md z-10 absolute top-full w-full  bg-white border-0 py-2 px-2 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] overflow-hidden`}
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <ul>
            {List.map((item, i) => (
              <li key={i} className={`hover:bg-gray-200 hover:text-white`}>
                <Link
                  className="text-[#444444] text-[14px] font-medium  flex items-center py-1 px-3"
                  to="#0"
                  onClick={() => GetFilterVehical(item)}
                >
                  <span>{item}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default CommonDropdown;
