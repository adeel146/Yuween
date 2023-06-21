import React from "react";
import file from "../../../../../assests/svg/file-icon.svg";
import { MdDelete } from "react-icons/md";
import { useLocation } from "react-router-dom";
const Drivinglicence = ({ isEdit }) => {
  const location = useLocation().pathname;
  return (
    <>
      <div className="mt-7">
        <div className="bg-white border-0 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-md p-5">
          <h1 className="text-[#FF8C00] text-[20px] leading-[30px] font-semibold">
            Driving License Details
          </h1>
          <div className="flex lg:flex-nowrap flex-wrap md:flex-nowrap justify-between items-center pt-5">
            <div className="">
              <h2 className="text-[#444444] text-[18px] leading-[20px] xxtra-small:text-[16px] xxtra-small:leading-[18px]">
                Issue Date:
              </h2>
              <p className="text-[14px] text-[#898989] leading-[22px] pt-5 xxtra-small:text-[12px] xxtra-small:leading-[16px] xxtra-small:pt-3">
                15 Sep, 2023
              </p>
            </div>
            <div className="">
              <h2 className="text-[#444444] text-[18px] leading-[20px] xxtra-small:text-[16px] xxtra-small:leading-[18px]">
                Due Date:
              </h2>
              <p className="text-[14px] text-[#898989] leading-[22px] pt-5 xxtra-small:text-[12px] xxtra-small:leading-[16px] xxtra-small:pt-3">
                15 Sep, 2023
              </p>
            </div>
            <div className="">
              <h2 className="text-[#444444] text-[18px] leading-[20px] xxtra-small:text-[16px] xxtra-small:leading-[18px]">
                License Status
              </h2>
              <p className="text-[14px] text-[#898989] leading-[22px] pt-5 xxtra-small:text-[12px] xxtra-small:leading-[16px] xxtra-small:pt-3">
                15 Sep, 2023
              </p>
            </div>
          </div>
          <div className="pt-6">
            <h1 className="text-[#444444] text-[18px] leading-[20px] mb-4 xxtra-small:text-[16px] xxtra-small:leading-[18px]">
              Resources
            </h1>
            {Array(2)
              .fill(2)
              .map((_, i) => (
                <div
                  key={i}
                  className="border border-[#ACACAC] rounded-md mt-2.5 px-6"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        src={file}
                        alt="file_image"
                        className="object-cover"
                      />
                      <div className="px-3.5 py-2.5">
                        <p className="text-[12px] text-[#444444] leading-[12px]">
                          license front.PNG
                        </p>
                        <span className="text-[12px] text-[#898989]">
                          13 dec 2022, 5.7MB
                        </span>
                      </div>
                    </div>
                    <h2 className="underline text-[#397DED] text-[12px]">
                      Preview
                    </h2>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-white border-0 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-md p-5 mt-5">
          <h1 className="text-[#FF8C00] text-[20px] leading-[30px] font-semibold">
            Driving License Details
          </h1>
          <div className="flex justify-between items-center pt-5">
            <div className="">
              <h2 className="text-[#444444] text-[18px] leading-[20px] xxtra-small:text-[16px] xxtra-small:leading-[18px]">
                ID Card
              </h2>
              <p className="text-[14px] text-[#898989] leading-[22px] pt-5 xxtra-small:text-[12px] xxtra-small:leading-[16px] xxtra-small:pt-3">
                15 Sep, 2023
              </p>
            </div>
            <div className="">
              <h2 className="text-[#444444] text-[18px] leading-[20px] xxtra-small:text-[16px] xxtra-small:leading-[18px]">
                Passport
              </h2>
              <p className="text-[14px] text-[#898989] leading-[22px] pt-5 xxtra-small:text-[12px] xxtra-small:leading-[16px] xxtra-small:pt-3">
                15 Sep, 2023
              </p>
            </div>
            <div className="">
              <h2 className="text-[#444444] text-[18px] leading-[20px] xxtra-small:text-[16px] xxtra-small:leading-[18px]">
                {" "}
                Status
              </h2>
              {location !== "/vehicalOwner" && isEdit === false ? (
                <p className="text-[16px] text-[#2BA676] bg-[#E0F3EC] rounded-full px-2.5 py-1 leading-[22px] mt-5 xxtra-small:mt-3 xxtra-small:text-[12px] xxtra-small:leading-[16px]">
                  Valid
                </p>
              ) : (
                // <div className="select-wrapper px-4 mx-2 ">
                //   <select className="border p-1 rounded-md xxtra-small:mt-2 mt-5 xxtra-small:text-[12px] text-[18px]">
                //     <option>Select Status</option>
                //     <option>
                //       <p className="text-[16px] text-[#2BA676] bg-[#E0F3EC] rounded-full px-2.5 py-1 leading-[22px] xxtra-small:mt-3 xxtra-small:text-[12px] xxtra-small:leading-[16px]">
                //         Valid
                //       </p>
                //     </option>
                //     <option>
                //       <p className="text-[16px] text-[#2BA676] bg-[#E0F3EC] rounded-full px-2.5 py-1 leading-[22px] xxtra-small:mt-3 xxtra-small:text-[12px] xxtra-small:leading-[16px]">
                //         InValid
                //       </p>
                //     </option>
                //   </select>
                // </div>
                <div className="select-wrapper px-4 xxtra-small:mt-2 mt-3 xxtra-small:text-[12px] text-[16px]">
                  <select className="  focus:outline-none  p-1 ">
                    <option>Select Status</option>
                    <option>
                      <p className="text-[16px] text-[#2BA676] bg-[#E0F3EC] rounded-full px-2.5 py-1 leading-[22px] xxtra-small:mt-3 xxtra-small:text-[12px] xxtra-small:leading-[16px]">
                        Valid
                      </p>
                    </option>
                    <option>
                      <p className="text-[16px] text-[#2BA676] bg-[#E0F3EC] rounded-full px-2.5 py-1 leading-[22px] xxtra-small:mt-3 xxtra-small:text-[12px] xxtra-small:leading-[16px]">
                        InValid
                      </p>
                    </option>
                  </select>
                </div>
              )}
            </div>
          </div>
          <div className="pt-5">
            <h1 className="text-[#444444] text-[18px] leading-[20px] mb-4 xxtra-small:text-[16px] xxtra-small:leading-[18px]">
              Resources
            </h1>
            {Array(4)
              .fill(4)
              .map((_, i) => (
                <div
                  key={i}
                  className="border border-[#ACACAC] rounded-md mt-2.5 px-6"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        src={file}
                        alt="file_image"
                        className="object-cover"
                      />
                      <div className="px-3.5 py-2.5">
                        <p className="text-[12px] text-[#444444] leading-[12px]">
                          license front.PNG
                        </p>
                        <span className="text-[12px] text-[#898989]">
                          13 dec 2022, 5.7MB
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <h2 className="underline text-[#397DED] text-[12px]">
                        Preview
                      </h2>
                      {isEdit && <MdDelete className="text-[#F04438] " />}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Drivinglicence;
