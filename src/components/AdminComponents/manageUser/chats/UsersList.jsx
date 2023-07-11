import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import user from "../../../../assests/Ellipse 1490.png";

const UsersList = () => {
  return (
    <>
      <div className="h-full">
        <div className="bg-[white] rounded shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] border-0 h-full">
          <div className="border-b px-6 py-[26px] flex items-center">
            <h1 className="text-[#444444] text-[16px] leading-[24px]">
              Message
            </h1>
            <MdOutlineKeyboardArrowDown className="text-[20px] mx-2" />
            <div className="bg-[#FF8C00] rounded-full ">
              <h2 className="text-white text-[16px] leading-[24px] px-2 py-[2px] font-semibold">
                12
              </h2>
            </div>
          </div>
          <div className="p-3">
            <input
              type="text"
              placeholder="Search messages"
              className="focus:outline-none border border-[#A7AFB2] text-[16px] leading-[18px] rounded-lg px-3 py-3.5 w-full"
            />
            {Array(5)
              .fill(5)
              .map((_, i) => (
                <div className="pt-6  ">
                  <div className="flex justify-between px-1">
                    <div className="flex items-center">
                      <div className="h-[44px] w-[44px] rounded-full">
                        <img src={user} alt="user" className="object-cover" />
                      </div>
                      <div className="px-3">
                        <h2 className="text-[12px] leading-[18px] font-semibold text-[#444444] truncate  lg:sidebar-expanded:w-[50px] xl:sidebar-expanded:w-full">
                          Elmer Laverty
                        </h2>
                        <p className="text-[12px] text-[#898989] leading-[18px] truncate lg:sidebar-expanded:w-[50px] xl:sidebar-expanded:w-full ">
                          Haha oh man{" "}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-[#98A2B3] text-[14px]">12m</h2>
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

export default UsersList;
