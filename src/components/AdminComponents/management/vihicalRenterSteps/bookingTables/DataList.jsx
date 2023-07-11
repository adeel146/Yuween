import React, { useState } from "react";
import { BsEye, BsThreeDotsVertical } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import close from "../../../../../assests/clos.png";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Popup from "../../../../../util/popup/Popup";
import CancelBooking from "./CancelBooking";
import EyeIcon from "../../../../../assests/EyeIcon";
const DataList = ({ setDetail }) => {
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

  const [show, setShow] = useState(false);

  const openPopup = (e) => {
    e.stopPropagation();
    setShow(true);
  };

  return (
    <>
      <Popup
        id="job-modal"
        modalOpen={show}
        data={<CancelBooking setShow={(val) => setShow(val)} />}
      />
      <div className="bg-white rounded-md shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]">
        <div className="overflow-x-auto  mt-6">
          {
            // currentItems.length > 0 ?
            <>
              <table className="table-auto w-full ">
                {/* Table header */}
                <thead className="text-xs font-semibold bg-[#FFF8EF] border-0">
                  <tr className="text-[#626973]">
                    <th className="px-4 py-4 pr-[25px] whitespace-nowrap w-px">
                      <div className="font-semibold text-[14px] text-left">
                        ID{" "}
                      </div>
                    </th>
                    <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                      <div className="font-semibold text-[14px] text-left">
                        Vehicle Name
                      </div>
                    </th>
                    <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                      <div className="font-semibold text-[14px] text-center">
                        Booking Status
                      </div>
                    </th>
                    <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                      <div className="font-semibold text-[14px] text-left">
                        City
                      </div>
                    </th>
                    <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                      <div className="font-semibold text-[14px] text-left">
                        Owner Email
                      </div>
                    </th>
                    <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                      <div className="font-semibold text-[14px] text-left">
                        Payout{" "}
                      </div>
                    </th>
                    <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                      <div className="font-semibold text-[14px] text-left">
                        Total Amount{" "}
                      </div>
                    </th>
                    <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
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
                      <td className="px-4 py-4 pr-[25px] whitespace-nowrap">
                        <div className="text-left text-[14px] text-[#898989]">
                          1347
                        </div>
                      </td>
                      <td className="px-4 py-4 pr-[25px] whitespace-nowrap">
                        <div className="text-left text-[14px] text-[#898989]">
                          Commercial
                        </div>
                      </td>
                      <td className="px-4 py-4 pr-[25px] whitespace-nowrap text-center">
                        <div className="text-center inline-block py-[3px] w-fit px-2.5 text-[12px] leading-4 text-[#FF8C00] rounded-full bg-[#FFECD6]">
                          Ongoing
                        </div>
                      </td>
                      <td className="px-4 py-4 pr-[25px] whitespace-nowrap">
                        <div className="text-left text-[14px] text-[#898989]">
                          Abidjan
                        </div>
                      </td>
                      <td className="px-4 py-4 pr-[25px] whitespace-nowrap">
                        <div className="text-left text-[14px] text-[#898989]">
                          abc@example.com
                        </div>
                      </td>
                      <td className="px-4 py-4 pr-[25px] whitespace-nowrap">
                        <div className="text-left text-[14px] text-[#898989]">
                          Done
                        </div>
                      </td>

                      <td className="px-4 py-4 pr-[25px] whitespace-nowrap">
                        <div className="text-left text-[14px] text-[#898989]">
                          50 000 FCFA
                        </div>
                      </td>
                      <td className="px-4 py-4 pr-[25px] whitespace-nowrap">
                        <div className="text-center flex justify-center">
                          {/* <BsThreeDotsVertical className='text-[20px] text-[#898989]' /> */}
                          {/* <GenericDrodown /> */}

                          <div className="group inline-block">
                            <button className="outline-none focus:outline-none  px-3 py-1 bg-white rounded-sm flex items-center">
                              <BsThreeDotsVertical className="text-[20px] text-[#898989]" />
                            </button>
                            <ul
                              className="bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] border-0 rounded-md p-4 transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out right-7 origin-top xl:w-[15%]  "
                            >
                              <li
                                onClick={() => {
                                  setDetail(true);
                                }}
                                className="rounded-sm actions flex items-center px-2 py-2 mb-2 hover:bg-gray-100"
                              >
                                <EyeIcon className="text-[14px] text-[#98A2B3]" />
                                <h2 className="ml-2">View details</h2>
                              </li>
                              <li
                                onClick={(e) => openPopup(e)}
                                className="rounded-sm actions flex items-center px-2 py-2 mb-2 hover:bg-gray-100"
                              >
                                <img
                                  src={close}
                                  alt="close"
                                  className="object-cover"
                                />
                                <h2 className="ml-2">Cancel Booking</h2>
                              </li>
                            </ul>
                          </div>
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
        <div className="flex flex-wrap justify-between items-center pt-6 px-5">
          <div className="flex items-center">
            <h2 className="text-[#333333] text-[12px]">Show</h2>
            <div className="select-wrapper px-4 mx-2 ">
              <select
                value={itemperPage}
                onChange={(e) => setItemPerPage(e.target.value)}
                className="  focus:outline-none  p-1 "
              >
                <option value="6">6</option>
                <option value="12">12</option>
                <option value="25">25</option>
                <option value="30">30</option>
              </select>
            </div>

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

export default DataList;
