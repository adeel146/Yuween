import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useLocation } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["red", "blue", "yellow", "pink", "orange"],
  datasets: [
    {
      data: [12, 10, 22, 18],
      backgroundColor: ["#58D764", "#EF7BE3", "#FBE947", "#52ACFF"],
      borderColor: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  const location = useLocation().pathname;
  return (
    <>
      <div className="flex lg:flex-nowrap lg:flex-col xl:flex-row justify-center   xl:justify-between items-center flex-wrap  ">
        <div className="flex pt-[2rem] ">
          {location === "/customerRenter" ? (
            <ul>
              <li className="justify-between flex items-center">
                <div className="flex items-center ">
                  <div className="border w-[13px] h-[13px] bg-[#58D764]" />
                  <h2 className="pl-1 text-[15px] text-[#444444]">
                    Spend  Over Time
                  </h2>
                </div>
                <h2 className="pl-5 text-[15px] text-[#444444]">20</h2>
              </li>
              <li className="justify-between flex items-center py-2">
                <div className="flex items-center ">
                  <div className="border w-[13px] h-[13px] bg-[#FF903E]" />
                  <h2 className="pl-1 text-[15px] text-[#444444]">
                    Refund  Over time
                  </h2>
                </div>
                <h2 className="pl-5 text-[15px] text-[#444444]">20</h2>
              </li>
              <li className="justify-between flex items-center">
                <div className="flex items-center ">
                  <div className="border w-[13px] h-[13px] bg-[#EF7BE3] " />
                  <h2 className="pl-1 text-[15px] text-[#444444]">
                  Expired Requests
                  </h2>
                </div>
                <h2 className="pl-5 text-[15px] text-[#444444]">20</h2>
              </li>
              <li className="justify-between flex items-center py-2">
                <div className="flex items-center ">
                  <div className="border w-[13px] h-[13px] bg-[#FBE947]" />
                  <h2 className="pl-1 text-[15px] text-[#444444]">
                    Total Paid Services
                  </h2>
                </div>
                <h2 className="pl-5 text-[15px] text-[#444444]">20</h2>
              </li>
            </ul>
          ) : (
            <ul>
              <li className="justify-between flex items-center">
                <div className="flex items-center ">
                  <div className="border w-[13px] h-[13px] bg-[#58D764]" />
                  <h2 className="pl-1 text-[15px] text-[#444444]">
                    Rejected Requests
                  </h2>
                </div>
                <h2 className="pl-5 text-[15px] text-[#444444]">20</h2>
              </li>
              <li className="justify-between flex items-center py-2">
                <div className="flex items-center ">
                  <div className="border w-[13px] h-[13px] bg-[#FF903E]" />
                  <h2 className="pl-1 text-[15px] text-[#444444]">
                    Cancelled Requests
                  </h2>
                </div>
                <h2 className="pl-5 text-[15px] text-[#444444]">20</h2>
              </li>
              <li className="justify-between flex items-center">
                <div className="flex items-center ">
                  <div className="border w-[13px] h-[13px] bg-[#FBE947]" />
                  <h2 className="pl-1 text-[15px] text-[#444444]">
                    Approved Requests
                  </h2>
                </div>
                <h2 className="pl-5 text-[15px] text-[#444444]">20</h2>
              </li>
              <li className="justify-between flex items-center py-2">
                <div className="flex items-center ">
                  <div className="border w-[13px] h-[13px] bg-[#EF7BE3] " />
                  <h2 className="pl-1 text-[15px] text-[#444444]">
                    Extended Requests
                  </h2>
                </div>
                <h2 className="pl-5 text-[15px] text-[#444444]">20</h2>
              </li>
              <li className="justify-between flex items-center">
                <div className="flex items-center ">
                  <div className="border w-[13px] h-[13px] bg-[#52ACFF]" />
                  <h2 className="pl-1 text-[15px] text-[#444444]">
                    Received Requests{" "}
                  </h2>
                </div>
                <h2 className="pl-5 text-[15px] text-[#444444]">20</h2>
              </li>
            </ul>
          )}
        </div>
        <div className="max-w-[200px] lg:py-0 py-3">
          <Pie
            data={data}
            className="w-auto h-auto"
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                  position: "left",
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};
export default PieChart;
