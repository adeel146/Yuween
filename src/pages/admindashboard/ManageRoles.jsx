import React from "react";
import { MdSearch } from "react-icons/md";
import ManageRole from "../../components/AdminComponents/role/ManageRole";
import ManageRoleTable from "../../components/AdminComponents/role/ManageRoeTable";

const ManageRoles = () => {
  return (
    <>
      {/* Promo component */}
      <ManageRole />
      {/* table component */}
      <div className="mt-5 p-5 bg-white rounded-md shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]">
        <div className="flex  flex-wrap justify-between items-center">
          <h2 className="text-[20px] font-semibold leading-[20.16px]  text-[#FF8C00]">
            Roles List{" "}
          </h2>
          <div className="flex lg:py-0 py-2 ">
            <div className="bg-white rounded-full border-0 flex items-center px-4 h-[45px] sm:w-[380px] w-[320px] py-3 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]">
              <MdSearch className="text-[25px] text-[#FF8C00]" />
              <input
                type="text"
                className="focus:outline-none mx-2 w-full placeholder:text-[#ACACAC] placeholder:text-[16px]"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
        <ManageRoleTable />
      </div>
    </>
  );
};

export default ManageRoles;
