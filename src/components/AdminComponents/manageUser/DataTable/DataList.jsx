import React, { useEffect, useState } from "react";
// import rent from '../../../assests/rent.png'
import { BsEye, BsThreeDotsVertical, BsTrash } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
// import GenericDrodown from '../../../util/dropdowns/GenericDropdown';
import { BiRefresh } from "react-icons/bi";
import Popup from "../../../../util/popup/Popup";
import DeleteData from "../../marketing/DeleteData";
import {
  ChangeVehicalStatus,
  GetVihicalsBaseOnPages,
} from "../../../../lib/Api/Vehical";
import { Truncate } from "../../../../util/TrucateString";
import LoaderSpinner from "../../../../util/LoaderSpinner";
import EditData from "../EditData";
import { useLocation, useNavigate } from "react-router-dom";
import EyeIcon from "../../../../assests/EyeIcon";
import RefreshIcon from "../../../../assests/RefreshIcon";
import TrashIcon from "../../../../assests/TrashIcon";
const DataList = ({
  setDetail,
  setRentalUser,
  vehicalList,
  setVehicalList,
  loading,
  setLoading,
  setTypes,
}) => {
  const [show, setShow] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [loadReason, setLoadReason] = useState(false);
  const [type, setType] = useState("");
  const [vehicalStatus, setVehicalStatus] = useState(null);
  const [singleVehical, setSingleVehical] = useState({});
  // const [vehicalList, setVehicalList] = useState([])
  const location = useLocation().pathname;
  const navigate = useNavigate();

  // const items = [];
  // const [itemOffset, setItemOffset] = useState(0);
  const [itemperPage] = useState(10);

  // const endOffset = itemOffset + itemperPage;
  // const currentItems = Array(vehicalList?.total).slice(itemOffset, endOffset);
  const pageCount = Math.ceil(Array(vehicalList?.total).length / itemperPage);

  const handlePageClick = async (event) => {
    // const newOffset = (event.selected * itemperPage) % Array(vehicalList?.total).length;
    // setItemOffset(newOffset);
    //  let pageNo = event.selected === 0  ? 1  : event.selected
    setLoading(true);
    let { res } = await GetVihicalsBaseOnPages(event.selected + 1);
    let vehicals = Object.assign({}, ...res);
    setLoading(false);
    setVehicalList(vehicals?.vehicles);
  };

  let status = [
    { id: 2, Title: "Pending", color: "#9A534E", bgColor: "#F0DFD6" },
    { id: 4, Title: "Approved", color: "#6ABD8B", bgColor: "#ECFFEC" },
    { id: 5, Title: "Rejected", color: "#F04438", bgColor: "#FFE7E7" },
    { id: 1, Title: "Expired", color: "#4B3A8E", bgColor: "#F4F1FF" },
    { id: 3, Title: "Canceled", color: "#898989", bgColor: "#EBEBEB" },
  ];
  let statusOwner = [
    { id: 2, Title: "Pending", color: "#9A534E", bgColor: "#F0DFD6" },
    { id: 4, Title: "Approved", color: "#6ABD8B", bgColor: "#ECFFEC" },
    { id: 5, Title: "Rejected", color: "#F04438", bgColor: "#FFE7E7" },
  ];

  const handlePopup = (status, item) => {
    switch (status.Title) {
      case "Approved":
        setVehicalStatus("approved");
        setSingleVehical(item);
        handleTrigger();
        break;
      case "Rejected":
        setType("edit");
        setVehicalStatus("rejected");
        setSingleVehical(item);
        setShow(true);
        break;
      case "Expired":
        setType("edit");
        setVehicalStatus("Expired");
        setSingleVehical(item);
        setShow(true);
        break;
    }
    // let statusCheck = status?.Title === "Pendding" ? 'pendding' : status.Title === "Approved" ? 'approved' : status.Title === "Rejected" ? 'rejected' : status.Title === "Incompleted" ? 'incomplete' : 'idle'
    // if (status.Title === "Rejected" || status.Title === "Incompleted" || status.Title === "Idle") {
    //     setType('edit')
    //     setVehicalStatus(statusCheck)
    //     setSingleVehical(item)
    //     setShow(true)
    // }
    // else if (status?.Title === "Approved" ) {
    //     setType('edit')
    //     setVehicalStatus('approved')
    //     setSingleVehical(item)
    //     handleTrigger()
    // }
    // else {
    //     setType('delete')
    //     setShow(true)

    // }
  };

  const handleTrigger = async (reason) => {
    let payoad = {
      vehicle_id: `${singleVehical?.id}`,
      status: vehicalStatus,
      reason: reason,
    };
    setLoadReason(true);
    let { res } = await ChangeVehicalStatus(payoad);
    if (res) {
      debugger;
      setLoadReason(false);
      setTypes(true);
      setTimeout(() => {
        setTypes(false);
      }, 2000);
      setType("");
      setShow(false);
    }
  };

  // useEffect(() => {
  //     setVehicalList(vehicalData)
  // }, [vehicalData])

  return (
    <>
      {show && (
        <Popup
          modalOpen={show}
          data={
            type === "delete" ? (
              <DeleteData setShow={(val) => setShow(val)} />
            ) : (
              <EditData
                setShow={(val) => setShow(val)}
                callback={(val) => handleTrigger(val)}
                loadReason={loadReason}
              />
            )
          }
          onClose={() => setShow(false)}
        />
      )}
      <div>
        <div className="overflow-x-auto bg-white rounded-md mt-6 w-full">
          {vehicalList?.data?.length > 0 ? (
            <>
              <table className="table-auto w-full ">
                {/* Table header */}
                {location.includes("vehicalRenters") ? (
                  <thead className="text-xs font-[500] bg-[#FFF8EF] border-0">
                    <tr className="text-[#626973]">
                      <th className="px-4 py-4 pr-[25px] whitespace-nowrap w-px">
                        <div className="font-[600] text-[14px] text-left">
                          Vehicle Owner{" "}
                        </div>
                      </th>
                      <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[600] text-[14px] text-left">
                          Brand
                        </div>
                      </th>
                      <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[600] text-[14px] text-left">
                          Vehicle Type
                        </div>
                      </th>
                      <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[600] text-[14px] text-left">
                          Booking Date
                        </div>
                      </th>
                      <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[600] text-[14px] text-left">
                          Total Price
                        </div>
                      </th>
                      <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[600] text-[14px] text-left">
                          Driver
                        </div>
                      </th>
                      <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[600] text-[14px] text-left">
                          Status
                        </div>
                      </th>
                      <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[600] text-[14px] text-center">
                          Action{" "}
                        </div>
                      </th>
                    </tr>
                  </thead>
                ) : (
                  <thead className="text-xs font-[500] bg-[#FFF8EF] border-0">
                    <tr className="text-[#626973]">
                      <th className="px-4 py-4 pr-[25px] whitespace-nowrap w-px">
                        <div className="font-[600] text-[14px] text-left">
                          Vehicle Owner{" "}
                        </div>
                      </th>
                      <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[600] text-[14px] text-left">
                          Brand
                        </div>
                      </th>
                      <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[600] text-[14px] text-left">
                          Date
                        </div>
                      </th>
                      <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[600] text-[14px] text-left">
                          Vehicle Type
                        </div>
                      </th>
                      <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[600] text-[14px] text-left">
                          Greater Abidjan{" "}
                        </div>
                      </th>
                      <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[600] text-[14px] text-left">
                          Outside Abidjan
                        </div>
                      </th>
                      <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[600] text-[14px] text-left">
                          Driver{" "}
                        </div>
                      </th>
                      <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[600] text-[14px] text-left">
                          Status{" "}
                        </div>
                      </th>
                      <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                        <div className="font-[600] text-[14px] text-center">
                          Action{" "}
                        </div>
                      </th>
                    </tr>
                  </thead>
                )}
                {/* Table body */}
                <tbody className="text-sm ">
                  {!loading ? (
                    vehicalList?.data?.map((item, i) =>
                      location.includes("vehicalRenters") ? (
                        <tr className=" cursor-pointer  " key={i}>
                          <td className="px-2 first:pl-5 flex items-center last:pr-5 py-3 whitespace-nowrap">
                            <div className="object-cover w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                              <img
                                src={item?.user?.image}
                                alt="rent_image"
                                className="w-auto"
                              />
                            </div>
                            <div className="text-left  text-[14px] text-[#898989] px-1">
                              john
                            </div>
                          </td>
                          <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                            <div className="text-left text-[14px] text-[#898989] px-1">
                              Fortuner
                            </div>
                          </td>
                          <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                            <div className="text-left text-[14px] text-[#898989] px-1">
                              {item?.vehicle_category}
                            </div>
                          </td>
                          <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                            <div className="text-left text-[14px] text-[#898989] px-1">
                              02-16-2023
                            </div>
                          </td>
                          <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                            <div className="text-left text-[14px] text-[#898989] px-1">
                              <span className="text-[#FF8C00]">
                                {item?.price_in_abidjan}FCFA{" "}
                              </span>
                            </div>
                          </td>
                          <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                            <div className="text-left text-[14px] text-[#898989] px-1">
                              With
                            </div>
                          </td>
                          <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                            <div
                              style={{
                                color: `${item?.status_object?.text_color}`,
                                backgroundColor: `${item?.status_object?.background_color}`,
                              }}
                              className={`text-center py-[3px] w-fit px-2.5 text-[12px] leading-4 rounded-full `}
                            >
                              {item?.status_object?.text_en}
                            </div>
                          </td>
                          <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                            <div className="text-center flex justify-center  px-1">
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
                                      navigate(`/vehicalRenters/detail/${1}`);
                                      setRentalUser(item?.user);
                                    }}
                                    className="rounded-sm actions flex items-center px-2 py-2 mb-2 hover:bg-gray-100"
                                  >
                                    <EyeIcon className="text-[14px] text-[#98A2B3]" />
                                    <h2 className="ml-2">View details</h2>
                                  </li>

                                  <li className="rounded-sm actions relative px-2 py-2 mb-2 hover:bg-gray-100">
                                    <button className="w-full flex items-center outline-none focus:outline-none">
                                      <RefreshIcon className=" ml-auto text-[#98A2B3]" />
                                      <span className="pr-1 flex-1 text-left ml-2">
                                        Change Status
                                      </span>
                                      <span className="mr-auto">
                                        <svg
                                          className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                      </span>
                                    </button>
                                    <ul
                                      className="bg-white border border-gray-100 p-2 flex justify-center flex-col items-center rounded-md absolute top-0 right-10 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                                    >
                                      {status
                                        .filter(
                                          (f) =>
                                            f.Title !==
                                            item?.status_object?.text_en
                                        )
                                        .map((st, i) => (
                                          <li
                                            onClick={() =>
                                              handlePopup(st, item)
                                            }
                                            className="px-2 py-2 text-left mb-2"
                                            key={i}
                                          >
                                            <div
                                              style={{
                                                color: `${st.color}`,
                                                backgroundColor: `${st.bgColor}`,
                                              }}
                                              className={`text-center py-[3px] px-2.5 w-auto text-[12px] rounded-full`}
                                            >
                                              {st.Title}
                                            </div>
                                          </li>
                                        ))}
                                    </ul>
                                  </li>
                                  <li
                                    onClick={() => handlePopup("", "delete")}
                                    className="rounded-sm flex items-center px-2 py-2 hover:bg-gray-100"
                                  >
                                    <TrashIcon className="text-[14px] text-[#98A2B3]" />
                                    <h2 className="ml-2">Delete</h2>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        <tr className=" cursor-pointer  " key={i}>
                          <td className="px-2 first:pl-5 flex items-center last:pr-5 py-3 whitespace-nowrap">
                            <div className="object-cover w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                              <img
                                src={item?.user?.image}
                                alt="rent_image"
                                className="w-auto"
                              />
                            </div>
                            <div className="text-left  text-[14px] text-[#898989] px-1">
                              {Truncate(item?.user?.first_name, 10)}{" "}
                            </div>
                          </td>
                          <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                            <div className="text-left text-[14px] text-[#898989] px-1">
                              {item?.model}
                            </div>
                          </td>
                          <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                            <div className="text-left text-[14px] text-[#898989] px-1">
                              02-16-2023
                            </div>
                          </td>
                          <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                            <div className="text-left text-[14px] text-[#898989] px-1">
                              {item?.vehicle_category}
                            </div>
                          </td>
                          <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                            <div className="text-left text-[14px] text-[#898989] px-1">
                              <span className="text-[#FF8C00]">
                                33 000 FCFA
                              </span>
                              /day
                            </div>
                          </td>
                          <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                            <div className="text-left text-[14px] text-[#898989] px-1">
                              <span className="text-[#FF8C00]">
                                110 000 FCFA
                              </span>
                              /day
                            </div>
                          </td>
                          <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                            <div className="text-left text-[14px] text-[#898989] px-1">
                              With
                            </div>
                          </td>
                          <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                            <div
                              style={{
                                color: `${item?.status_object?.text_color}`,
                                backgroundColor: `${item?.status_object?.background_color}`,
                              }}
                              className={`text-center py-[3px] w-fit px-2.5 text-[12px] leading-4 rounded-full `}
                            >
                              {item?.status_object?.text_en}
                            </div>
                          </td>
                          <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                            <div className="text-center flex justify-center  px-1">
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
                                      navigate(`/vehicalOwner/detail/${1}`);
                                      setRentalUser(item?.user);
                                    }}
                                    className="rounded-sm actions flex items-center px-2 py-2 mb-2 hover:bg-gray-100"
                                  >
                                    <EyeIcon className="text-[14px] text-[#98A2B3]" />
                                    <h2 className="ml-2">View details</h2>
                                  </li>

                                  <li className="rounded-sm actions relative px-2 py-2 mb-2 hover:bg-gray-100">
                                    <button className="w-full flex items-center outline-none focus:outline-none">
                                      <RefreshIcon className=" ml-auto text-[#98A2B3]" />
                                      <span className="pr-1 flex-1 text-left ml-2">
                                        Change Status
                                      </span>
                                      <span className="mr-auto">
                                        <svg
                                          className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                      </span>
                                    </button>
                                    <ul
                                      className="bg-white border border-gray-100 p-2 flex justify-center flex-col items-center rounded-md absolute top-0 right-10 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                                    >
                                      {statusOwner
                                        .filter(
                                          (f) =>
                                            f.Title !==
                                            item?.status_object?.text_en
                                        )
                                        .map((st, i) => (
                                          <li
                                            onClick={() =>
                                              handlePopup(st, item)
                                            }
                                            className="px-2 py-2 text-left mb-2"
                                            key={i}
                                          >
                                            <div
                                              style={{
                                                color: `${st.color}`,
                                                backgroundColor: `${st.bgColor}`,
                                              }}
                                              className={`text-center py-[3px] px-2.5 w-auto text-[12px] rounded-full`}
                                            >
                                              {st.Title}
                                            </div>
                                          </li>
                                        ))}
                                    </ul>
                                  </li>
                                  <li
                                    onClick={() => handlePopup("", "delete")}
                                    className="rounded-sm flex items-center px-2 py-2 hover:bg-gray-100"
                                  >
                                    <TrashIcon className="text-[14px] text-[#98A2B3]" />
                                    <h2 className="ml-2">Delete</h2>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )
                    )
                  ) : (
                    <div className="pt-4">
                      <LoaderSpinner type="tableLoad" />
                    </div>
                  )}
                </tbody>
              </table>
            </>
          ) : (
            <div className="p-5 ">
              {loading ? (
                <LoaderSpinner type="tableLoad" />
              ) : (
                <h2>Record not found</h2>
              )}
            </div>
          )}
        </div>
        {vehicalList?.data?.length > 0 && (
          <div className="flex lg:flex-nowrap md:flex-nowrap flex-wrap justify-between items-center pt-6 ">
            {/* <div className='flex items-center w-full'>
                            <h2 className='text-[#333333] text-[14px]'>Show</h2>
                            <select className='border focus:outline-none rounded-md px-5 py-2 mx-3'>
                                <option value="6">6</option>
                                <option value="12">12</option>
                                <option value="25">25</option>
                                <option value="30">30</option>
                            </select>
                            <h2 className='text-[#333333] text-[14px]'>entries of </h2>
                        </div> */}
            <div className="px-8 xxtra-small:px-0 mt-4 mb-1 w-full flex justify-end xxtra-small: justify-start">
              {/* <div className='flex items-center'>
                            {
                                vehicalList?.links?.map((pag, i) => (

                                    <div key={i} className='border text-center px-2 rounded-md bg-[#F3F3F3]'>
                                        {pag?.label === '&laquo; Previous' && <MdOutlineKeyboardArrowLeft /> && pag.label === "Next &raquo;" ? <MdOutlineKeyboardArrowRight /> : pag?.label}
                                    </div>

                                ))
                            }
                        </div> */}

              <ReactPaginate
                breakLabel="..."
                breakClassName=" bg-[#F3F3F3]"
                nextLabel={<MdOutlineKeyboardArrowRight />}
                onPageChange={handlePageClick}
                activeClassName="bg-[#FF8C00] text-white rounded"
                nextClassName="px-3  bg-[#F3F3F3] text-[20px] pt-[5px] rounded xxtra-small:mb-4"
                previousClassName="px-3  bg-[#F3F3F3] text-[20px] pt-[5px] rounded xxtra-small:mb-4"
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<MdOutlineKeyboardArrowLeft />}
                className=" flex justify-end xtra-small:justify-start xxtra-small:w-full xxtra-small:justify-start xtra-small:justify-start xxtra-small:flex-wrap xtra-small:flex-wrap"
                pageClassName=" w-[30px] h-[30px]  text-center mx-2 pt-[3px] rounded bg-[#F3F3F3] xxtra-small:mb-4 xtra-small:mb-4"
                renderOnZeroPageCount={null}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DataList;
