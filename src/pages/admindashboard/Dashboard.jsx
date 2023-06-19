import React, { useEffect, useState } from "react";
import Weights from "../../components/AdminComponents/dashboard/Weights";
import DataTable from "../../components/AdminComponents/dashboard/DataTable/DataTable";
import DashboardChart from "../../components/AdminComponents/dashboard/SingleLineChart";
import { GetDashStatis } from "../../lib/Api/Vehical";
import RentalIndex from "../../components/AdminComponents/manageUser/vihicalRenterSteps/RentalIndex";
import CommonDropdown from "../../components/AdminComponents/commonDropdown";
const Dashboard = () => {
  const [Static, setStatic] = useState({});
  const [detail, setDetail] = useState(false);
  const [rentalUser, setRentalUser] = useState({});

  useEffect(() => {
    try {
      let fetchStatis = async () => {
        let { res } = await GetDashStatis();
        let Statis = Object.assign({}, ...res);
        setStatic(Statis);
      };
      fetchStatis();
    } catch (err) {}
  }, []);
  return (
    <>
      {detail === false ? (
        <>
          <h2 className="text-[#444444] font-semibold leading-[30px] text-[20px]">
            Overview
          </h2>
          <div className="grid lg:grid-cols-10 md:grid-cols-10 xxtra-small:grid-cols-1 xtra-small:grid-cols-1 gap-6 mt-[20px]">
            <div className="bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] border border-gray-100 rounded-md h-full px-3 pt-3 col-span-6 sm:col-span-4  ">
              <div className="flex justify-between items-center pb-3">
                <h2 className="text-[#444444] leading-[20.16px] text-[14.4px] font-medium">
                  Earnings
                </h2>
                <CommonDropdown />
              </div>
              <DashboardChart />
            </div>
            <div className="col-span-6">
              <Weights Static={Static} />
            </div>
          </div>

          <div className="bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] border-0 border-gray-100 rounded-md h-full p-4 mt-5">
            <DataTable setDetail={setDetail} setRentalUser={setRentalUser} />
          </div>
        </>
      ) : (
        <RentalIndex rentalUser={rentalUser} />
      )}
    </>
  );
};

export default Dashboard;
