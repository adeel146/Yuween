import React, { useState } from "react";
import rent from "../../../assests/rent.png";
import Refund from "./Refund";
import Popup from "../../../util/popup/Popup";
import ReactPaginate from "react-paginate";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
const TransactionList = () => {
  const [show, setShow] = useState(false);

  const items = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];
  const [itemOffset, setItemOffset] = useState(0);
  const [itemperPage, setItemPerPage] = useState(6);

  const endOffset = itemOffset + itemperPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemperPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemperPage) % items.length;
    setItemOffset(newOffset);
  };

  const openPopup = (e, mode) => {
    e.stopPropagation();
    setShow(true);
  };

  return (
    <>
      <Popup
        id="job-modal"
        modalOpen={show}
        data={<Refund setShow={(val) => setShow(val)} />}
        onClose={() => setShow(false)}
      />

      <div className=" bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-md">
        <div className="overflow-x-auto  mt-6 ">
          {
            // currentItems.length > 0 ?
            <>
              <table className="table-auto w-full ">
                {/* Table header */}
                <thead className="text-xs font-semibold bg-[#FFF8EF] border-0">
                  <tr className="text-[#626973]">
                    <th className="px-5 py-4 pr-[25px] whitespace-nowrap w-px">
                      <div className="font-semibold text-[14px] text-left">
                        ID{" "}
                      </div>
                    </th>
                    <th className="px-5 py-4 pr-[25px] whitespace-nowrap">
                      <div className="font-semibold text-[14px] text-left">
                        Vehicle
                      </div>
                    </th>
                    <th className="px-5 py-4 pr-[25px] whitespace-nowrap">
                      <div className="font-semibold text-[14px] text-left">
                        Date
                      </div>
                    </th>
                    <th className="px-5 py-4 pr-[25px] whitespace-nowrap">
                      <div className="font-semibold text-[14px] text-left">
                        Status{" "}
                      </div>
                    </th>
                    <th className="px-5 py-4 pr-[25px] whitespace-nowrap">
                      <div className="font-semibold text-[14px] text-left">
                        Renter{" "}
                      </div>
                    </th>
                    <th className="px-5 py-4 pr-[25px] whitespace-nowrap">
                      <div className="font-semibold text-[14px] text-left">
                        Amount
                      </div>
                    </th>

                    <th className="px-5 py-4 pr-[25px] whitespace-nowrap">
                      <div className="font-semibold text-[14px] text-center">
                        Action{" "}
                      </div>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-sm ">
                  {currentItems.map((_, i) => (
                    <tr className=" cursor-pointer  ">
                      <td className="px-5 py-4 pr-[25px] whitespace-nowrap">
                        <div className="text-left text-[14px] text-[#898989]">
                          1378
                        </div>
                      </td>
                      <td className="px-5 py-4 pr-[25px] whitespace-nowrap">
                        <div className="text-left text-[14px] text-[#898989]">
                          Renault twingo
                        </div>
                      </td>
                      <td className="px-5 py-4 pr-[25px] whitespace-nowrap">
                        <div className="text-left text-[14px] text-[#898989]">
                          12 sept 2023
                        </div>
                      </td>
                      <td className="px-5 py-4 pr-[25px] whitespace-nowrap">
                        <div className="flex justify-start">
                          <div className="text-center px-2.5 py-[3px] text-[12px] leading-[16px] text-[#8E3F3A]  rounded-full bg-[#F0DFD6]">
                            Pendding
                          </div>
                        </div>
                      </td>
                      <td className="flex items-center px-4 py-4 pr-[25px] whitespace-nowrap">
                        <div className="h-[28px] w-[28px] rounded-full">
                          <img
                            src={rent}
                            alt="rent_image"
                            className="object-cover"
                          />
                        </div>
                        <div className="text-left text-[14px] text-[#898989] px-2.5">
                          hell
                        </div>
                      </td>
                      <td className="px-5 py-4 pr-[25px] whitespace-nowrap">
                        <div className="text-left text-[14px] text-[#898989]">
                          <span className="text-[#FF8C00]">33 000 FCFA </span>
                        </div>
                      </td>

                      <td className="px-5 py-4 pr-[25px] whitespace-nowrap">
                        <div className="flex justify-center">
                          <button
                            onClick={(e) => openPopup(e)}
                            className={` text-[14px] font-semibold  px-[22px] h-[30px] rounded-md ${
                              i % 2 === 0
                                ? "bg-[#FF8C00] text-white"
                                : "bg-[#DCDCDC] text-[#C3C6CC] "
                            } `}
                          >
                            Refund
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
            // :
            // <div className='p-5 '>
            //     <h2>Record not found</h2>
            // </div>
          }
        </div>
        <div className="flex lg:flex-nowrap md:flex-nowrap flex-wrap justify-between items-center pt-6 px-5">
          <div className="flex items-center">
            <h2 className="text-[#333333] text-[12px]">Show</h2>
            <select
              value={itemperPage}
              onChange={(e) => setItemPerPage(e.target.value)}
              className="border focus:outline-none rounded-md px-3 py-2.5 mx-3 text-[12px]"
            >
              <option value="6">6</option>
              <option value="12">12</option>
              <option value="25">25</option>
              <option value="30">30</option>
            </select>
            <h2 className="text-[#333333] text-[12px]">
              entries of {items?.length}
            </h2>
          </div>
          <div className="lg:px-8 my-6 ">
            <ReactPaginate
              breakLabel="..."
              breakClassName=" bg-[#F3F3F3]"
              nextLabel={<MdOutlineKeyboardArrowRight />}
              onPageChange={handlePageClick}
              activeClassName="bg-[#FF8C00] text-white rounded"
              nextClassName="px-3  bg-[#F3F3F3] text-[20px] pt-[5px] rounded"
              previousClassName="px-3  bg-[#F3F3F3] text-[20px] pt-[5px] rounded"
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel={<MdOutlineKeyboardArrowLeft />}
              className=" flex justify-end"
              pageClassName=" w-[30px] h-[30px]  text-center mx-2 pt-[3px] rounded bg-[#F3F3F3] "
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionList;
