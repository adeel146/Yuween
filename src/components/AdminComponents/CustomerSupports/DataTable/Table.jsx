import React from "react";
import TicketsList from "./CustomerList";
import { MdSearch } from "react-icons/md";
// import { useLocation } from 'react-router-dom'

const Table = ({ setDetail }) => {
  // const location = useLocation().pathname

  // let checkType = location === "/ticket" ? " Support Tickets" : "Reports"

  return (
    <>
      <div className="flex  flex-wrap justify-between items-center">
        <h2 className="text-[20px] font-semibold leading-[20.16px]  text-[#444444]">
          Support Tickets
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

      {/* <div className='flex justify-between items-center'>
                <h2 className='text-[20px] font-semibold leading-[20.16px]  text-[#444444]'>Support Tickets</h2>
                <div className='flex '>
                    <div className='bg-white shadow-sm rounded-full border flex items-center px-2 w-[380px] py-2'>
                        <MdSearch className='text-[25px] text-[#FF8C00]' />
                        <input type="text" className='focus:outline-none mx-2 w-full placeholder:text-[#ACACAC] placeholder:text-[16px]' placeholder='Search...' />
                    </div>

                </div>
            </div> */}
      <div>
        <TicketsList setDetail={setDetail} />
      </div>
    </>
  );
};

export default Table;
