import React, { useState } from "react";
import rent from "../../../../assests/rent.png";
import { BsEye, BsThreeDotsVertical, BsTrash } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { BiRefresh } from "react-icons/bi";
import Popup from "../../../../util/popup/Popup";
import DeleteData from "../../marketing/DeleteData";
import { useLocation } from "react-router-dom";
import EyeIcon from "../../../../assests/EyeIcon";
import RefreshIcon from "../../../../assests/RefreshIcon";
import TrashIcon from "../../../../assests/TrashIcon";
const CustomerReportList = ({ setDetail }) => {
  const [show, setShow] = useState(false);
  const items = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];
  const [itemOffset, setItemOffset] = useState(0);
  const [itemperPage, setItemPerPage] = useState(6);
  const location = useLocation().pathname;

  const endOffset = itemOffset + itemperPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemperPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemperPage) % items.length;
    setItemOffset(newOffset);
  };

  let status = [
    { id: 2, Title: "Pending", color: "#9A534E", bgColor: "#F0DFD6" },
    { id: 4, Title: "Approved", color: "#6ABD8B", bgColor: "#ECFFEC" },
    { id: 5, Title: "Rejected", color: "#F04438", bgColor: "#FFE7E7" },
  ];

  return (
    <>
      {show && (
        <Popup
          modalOpen={show}
          data={<DeleteData setShow={(val) => setShow(val)} />}
          onClose={() => setShow(false)}
        />
      )}

      <div className="bg-white rounded-md">
        <div className="overflow-x-auto  mt-6">
          {
            // currentItems.length > 0 ?
            <>
              <table className="table-auto w-full ">
                {/* Table header */}

                {location === "/customerRenter" ? (
                  <thead className="text-xs font-[500] bg-[#FFF8EF] border-0">
                    <tr className="text-[#626973]">
                      <th className="px-4 font-semibold py-4 pr-[25px] whitespace-nowrap w-px">
                        <div className="font-[500] text-[14px] text-left">
                          Vehicle Renter{" "}
                        </div>
                      </th>
                      <th className="px-4 font-semibold py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[500] text-[14px] text-left">
                          Brand
                        </div>
                      </th>
                      <th className="px-4 font-semibold py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[500] text-[14px] text-left">
                          Vehicle Type
                        </div>
                      </th>
                      <th className="px-4 font-semibold py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[500] text-[14px] text-left">
                          Booking Date
                        </div>
                      </th>
                      <th className="px-4 font-semibold py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[500] text-[14px] text-left">
                          Total Price
                        </div>
                      </th>
                      <th className="px-4 font-semibold py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[500] text-[14px] text-left">
                          Driver{" "}
                        </div>
                      </th>
                      <th className="px-4 font-semibold py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[500] text-[14px] text-left">
                          Status{" "}
                        </div>
                      </th>
                      <th className="px-4 font-semibold py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[500] text-[14px] text-center">
                          Action{" "}
                        </div>
                      </th>
                    </tr>
                  </thead>
                ) : (
                  <thead className="text-xs font-[500] bg-[#FFF8EF] border-0">
                    <tr className="text-[#626973]">
                      <th className="px-4 font-semibold py-4 pr-[25px] whitespace-nowrap w-px">
                        <div className="font-[500] text-[14px] text-left">
                          Vehicle Owner{" "}
                        </div>
                      </th>
                      <th className="px-4 font-semibold py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[500] text-[14px] text-left">
                          Brand
                        </div>
                      </th>
                      <th className="px-4 font-semibold py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[500] text-[14px] text-left">
                          Date
                        </div>
                      </th>
                      <th className="px-4 font-semibold py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[500] text-[14px] text-left">
                          Vehicle Type
                        </div>
                      </th>
                      <th className="px-4 font-semibold py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[500] text-[14px] text-left">
                          Greater Abidjan{" "}
                        </div>
                      </th>
                      <th className="px-4 font-semibold py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[500] text-[14px] text-left">
                          Driver{" "}
                        </div>
                      </th>
                      <th className="px-4 font-semibold py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[500] text-[14px] text-left">
                          Status{" "}
                        </div>
                      </th>
                      <th className="px-4 font-semibold py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[500] text-[14px] text-center">
                          Action{" "}
                        </div>
                      </th>
                    </tr>
                  </thead>
                )}

                {/* Table body */}
                <tbody className="text-sm ">
                  {currentItems.map((_, i) =>
                    location === "/customerRenter" ? (
                      <tr className=" cursor-pointer  ">
                        <td className="px-2 first:pl-5 flex items-center last:pr-5 py-3 whitespace-nowrap">
                          <div className="object-cover w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                            <img
                              src={rent}
                              alt="rent_image"
                              className="w-auto"
                            />
                          </div>
                          <div className="text-left text-[14px] text-[#898989] px-1">
                            John
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="text-left text-[14px] text-[#898989] px-1">
                            Fortuner
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="text-left text-[14px] text-[#898989] px-1">
                            Commercial
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="text-left text-[14px] text-[#898989] px-1">
                            28-30 Janv.
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="text-left text-[14px] text-[#898989] px-1">
                            <span className="text-[#FF8C00]">50 000 FCFA </span>
                            /day
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="text-left text-[14px] text-[#898989] px-1">
                            With
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="text-center py-[3px] w-fit px-2.5 text-[12px] leading-4 rounded-full text-[#8E3F3A] bg-[#F0DFD6]">
                            Pendding
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="text-center flex justify-center  px-1">
                            {/* <BsThreeDotsVertical className='text-[20px] text-[#898989]' /> */}
                            {/* <GenericDrodown /> */}

                            <div class="group inline-block">
                              <button class="outline-none focus:outline-none  px-3 py-1 bg-white rounded-sm flex items-center">
                                <BsThreeDotsVertical className="text-[20px] text-[#898989]" />
                              </button>
                              <ul
                                class="bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] border-0 rounded-md p-4 transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out right-7 origin-top xl:w-[15%]  "
                              >
                                <li
                                  onClick={() => setDetail(true)}
                                  class="rounded-sm actions flex items-center px-2 py-2 mb-2 hover:bg-gray-100"
                                >
                                  <EyeIcon className=" text-[#98A2B3]" />
                                  <h2 className="ml-2">View details</h2>
                                </li>

                                <li class="rounded-sm actions relative px-2 py-2 mb-2 hover:bg-gray-100">
                                  <button class="w-full flex items-center outline-none focus:outline-none">
                                    <RefreshIcon className=" ml-auto text-[#98A2B3]" />
                                    <span class="pr-1 flex-1 text-left ml-2">
                                      Change Status
                                    </span>
                                    <span class="mr-auto">
                                      <svg
                                        class="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                      >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                      </svg>
                                    </span>
                                  </button>
                                  <ul
                                    class="bg-white border-0 p-2 flex justify-center flex-col items-start rounded-md absolute top-0 right-10 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                                  >
                                    {status.map((st, i) => (
                                      <li
                                        class="px-2 py-2 text-left mb-2"
                                        key={i}
                                      >
                                        <div
                                          style={{
                                            color: `${st.color}`,
                                            backgroundColor: `${st.bgColor}`,
                                          }}
                                          className={`text-center py-[3px] px-2.5 w-auto text-[12px] font-medium rounded-full`}
                                        >
                                          {st.Title}
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                                <li
                                  onClick={() => setShow(true)}
                                  class="rounded-sm flex items-center px-2 py-2 hover:bg-gray-100"
                                >
                                  <TrashIcon className=" text-[#98A2B3]" />
                                  <h2 className="ml-2">Delete</h2>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      <tr className=" cursor-pointer  ">
                        <td className="px-2 first:pl-5 flex items-center last:pr-5 py-3 whitespace-nowrap">
                          <div className="object-cover w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                            <img
                              src={rent}
                              alt="rent_image"
                              className="w-auto"
                            />
                          </div>
                          <div className="text-left text-[14px] text-[#898989] px-1">
                            hell
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="text-left text-[14px] text-[#898989] px-1">
                            Fortuner
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="text-left text-[14px] text-[#898989] px-1">
                            02-16-2023
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="text-left text-[14px] text-[#898989] px-1">
                            Commercial
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="text-left text-[14px] text-[#898989] px-1">
                            <span className="text-[#FF8C00]">33 000 FCFA </span>
                            /day
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="text-left text-[14px] text-[#898989] px-1">
                            <span className="text-[#FF8C00]">110 000 FCFA</span>
                            /day
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="text-center py-[3px] w-fit px-2.5 text-[12px] leading-4 rounded-full text-[#8E3F3A] bg-[#F0DFD6]">
                            Pendding
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="text-center flex justify-center  px-1">
                            {/* <BsThreeDotsVertical className='text-[20px] text-[#898989]' /> */}
                            {/* <GenericDrodown /> */}
                            <div class="group inline-block">
                              <button class="outline-none focus:outline-none  px-3 py-1 bg-white rounded-sm flex items-center">
                                <BsThreeDotsVertical className="text-[20px] text-[#898989]" />
                              </button>
                              <ul
                                class="bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] border-0 rounded-md p-4 transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out right-7 origin-top xl:w-[15%]  "
                              >
                                <li
                                  onClick={() => setDetail(true)}
                                  class="rounded-sm actions flex items-center px-2 py-2 mb-2 hover:bg-gray-100"
                                >
                                  <EyeIcon className=" text-[#98A2B3]" />
                                  <h2 className="ml-2">View details</h2>
                                </li>

                                <li class="rounded-sm actions relative px-2 py-2 mb-2 hover:bg-gray-100">
                                  <button class="w-full flex items-center outline-none focus:outline-none">
                                    <RefreshIcon className=" ml-auto text-[#98A2B3]" />
                                    <span class="pr-1 flex-1 text-left ml-2">
                                      Change Status
                                    </span>
                                    <span class="mr-auto">
                                      <svg
                                        class="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                      >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                      </svg>
                                    </span>
                                  </button>
                                  <ul
                                    class="bg-white border-0 p-2 flex justify-center flex-col items-start rounded-md absolute top-0 right-10 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                                  >
                                    {status.map((st, i) => (
                                      <li
                                        class="px-2 py-2 text-left mb-2"
                                        key={i}
                                      >
                                        <div
                                          style={{
                                            color: `${st.color}`,
                                            backgroundColor: `${st.bgColor}`,
                                          }}
                                          className={`text-center py-[3px] px-2.5 w-auto text-[12px] font-medium rounded-full`}
                                        >
                                          {st.Title}
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                                <li
                                  onClick={() => setShow(true)}
                                  class="rounded-sm flex items-center px-2 py-2 hover:bg-gray-100"
                                >
                                  <TrashIcon className=" text-[#98A2B3]" />
                                  <h2 className="ml-2">Delete</h2>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </>
            // :
            // <div className='p-5 '>
            //     <h2>Record not found</h2>
            // </div>
          }
        </div>
        <div className="flex flex-wrap justify-between items-center pt-6">
          {/* <div className='flex items-center'>
                        <h2 className='text-[#333333] text-[14px]'>Show</h2>
                        <select value={itemperPage} onChange={(e) => setItemPerPage(e.target.value)} className='border focus:outline-none rounded-md px-5 py-2 mx-3'>
                            <option value="6">6</option>
                            <option value="12">12</option>
                            <option value="25">25</option>
                            <option value="30">30</option>
                        </select>
                        <h2 className='text-[#333333] text-[14px]'>entries of {items?.length}</h2>
                    </div> */}
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

export default CustomerReportList;
