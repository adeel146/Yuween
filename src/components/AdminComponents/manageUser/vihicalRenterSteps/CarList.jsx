import React, { useEffect, useState } from "react";
import review from "../../../../assests/Rectangle 1278.png";
import reason from "../../../../assests/Rectangle 34624142.png";
import star from "../../../../assests/svg/star.svg";
import car from "../../../../assests/carlist.png";
import { BsEye, BsPencil, BsThreeDotsVertical } from "react-icons/bs";
import locationIcon from "../../../../assests/svg/location-icon.svg";
import CarlistDetail from "../carlistDetail/CarlistDetail";
import { BiRefresh } from "react-icons/bi";
import del from "../../../../assests/del.png";
import Popup from "../../../../util/popup/Popup";
import EditData from "../EditData";
import { GetOwnerVehicalByUser } from "../../../../lib/Api/RentalAppApi";
import LoaderSpinner from "../../../../util/LoaderSpinner";
import EyeIcon from "../../../../assests/EyeIcon";
import RefreshIcon from "../../../../assests/RefreshIcon";
import EditIcon from "../../../../assests/EditIcon";
import TrashIcon from "../../../../assests/TrashIcon";
const CarList = ({ rentalUser }) => {
  const [detail, setDetail] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [carList, setCarList] = useState([]);

  const [type, setType] = useState("");

  const openPopup = (e, mode, data) => {
    e.stopPropagation();
    setShow(true);
    setType(mode);
  };

  let status = [
    { id: 4, Title: "Approved", color: "#6ABD8B", bgColor: "#ECFFEC" },
    { id: 5, Title: "Rejected", color: "#F04438", bgColor: "#FFE7E7" },
    { id: 1, Title: "Incompleted", color: "#4B3A8E", bgColor: "#F4F1FF" },
  ];

  useEffect(() => {
    let fetchUserVehical = async () => {
      setLoading(true);
      let { res } = await GetOwnerVehicalByUser(rentalUser?.id);
      let UserData = Object.assign({}, ...res);
      setCarList(UserData?.vehicles);
      if (res !== undefined) {
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    fetchUserVehical();
  }, []);

  return (
    <>
      <Popup
        id="job-modal"
        modalOpen={show}
        data={type === "Edit" && <EditData setShow={(val) => setShow(val)} />}
        onClose={() => setShow(false)}
      />
      {detail === false ? (
        <>
          {!loading ? (
            carList?.map((item, i) => (
              <div
                className="bg-white rounded-md shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] h-full border-0 px-5 py-5 mt-5"
                key={i}
              >
                <div className="flex lg:flex-nowrap flex-wrap md:flex-nowrap items-center">
                  <div className="flex  justify-center items-center h-[153px] max-w-[153px] w-full">
                    <img src={car} alt="review_img" className="object-cover" />
                  </div>
                  <div className="w-full ml-3 lg:py-0 md:py-0 py-5">
                    <div className="flex justify-between">
                      <div>
                        <h2 className="text-[21px] font-semibold text-[#444444]">
                          {item?.model}
                        </h2>
                        <div className="flex items-center">
                          {Array(5)
                            .fill(5)
                            .map((_, i) => (
                              <img
                                src={star}
                                alt="star"
                                className="object-cover"
                              />
                            ))}

                          <span className="text-[#B8B8B8] text-[14px] px-1.5">
                            (15)
                          </span>
                        </div>
                      </div>
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
                                {status
                                  .filter(
                                    (f) =>
                                      f.Title !== item?.status_object?.text_en
                                  )
                                  .map((st, i) => (
                                    <li
                                      // onClick={() => handlePopup(st, item)}
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
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex  justify-between items-center pt-2">
                      <h2 className="text-[#ACACAC] text-[16px]">
                        {item?.make}
                      </h2>
                      <div
                        className={`bg-[#FFF0DE] text-[16px] xxtra-small:text-[12px] leading-[26px] text-[#FFAC46] rounded-full text-center py-[3px] px-2.5 ml-auto`}
                      >
                        <h2>
                          {item?.with_driver === "1"
                            ? "Avec chauffeur"
                            : "other"}
                        </h2>
                      </div>
                    </div>
                    <div className="flex lg:flex-nowrap md:flex-nowrap flex-wrap  justify-between ">
                      <div className="grid grid-cols-2 gap-5 lg:py-0 md:py-0 py-4">
                        <div>
                          <p className="text-[#98A2B3] text-[14px]">
                            Grand Abidjan
                          </p>
                          <p className="text-[#FF8C00] text-[16px]">
                            {item?.price_in_abidjan} FCFA{" "}
                            <span className="text-[#ACACAC] text-[15px]">
                              /jour
                            </span>
                          </p>
                        </div>
                        <div>
                          <p className="text-[#98A2B3] text-[14px]">
                            Grand Abidjan
                          </p>
                          <p className="text-[#FF8C00] text-[16px]">
                            {item?.price_out_abidjan} FCFA{" "}
                            <span className="text-[#ACACAC] text-[15px]">
                              /jour
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center items-center pt-3 ">
                        <img src={locationIcon} alt="" />
                        <h2 className="ml-2 text-[#444444]">
                          {item?.locations?.address}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                {item.reason && (
                  <div className="pt-4">
                    <div className="flex justify-between items-center">
                      <h1 className="text-[#444444] text-[20px]">Reason:</h1>
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
                              onClick={(e) => openPopup(e, "Edit")}
                              class="rounded-sm actions flex items-center px-2 py-2 mb-2 hover:bg-gray-100"
                            >
                              <EditIcon className=" text-[#98A2B3]" />
                              <h2 className="ml-2">Edit</h2>
                            </li>

                            <li
                              onClick={(e) => openPopup(e, "Delete")}
                              class="rounded-sm flex items-center px-2 py-2 hover:bg-gray-100"
                            >
                              <TrashIcon className=" text-[#98A2B3]" />
                              <h2 className="ml-2">Delete</h2>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#898989] text-[16px] leading-[24px]">
                      {item?.reason}
                    </p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center mt-[5rem]">
              <LoaderSpinner type="tableLoad" />
            </div>
          )}
        </>
      ) : (
        <CarlistDetail />
      )}
    </>
  );
};

export default CarList;
