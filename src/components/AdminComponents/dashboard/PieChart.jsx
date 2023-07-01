 import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["red", "blue", "yellow"],
  datasets: [
    {
      data: [12, 15, 14],
      backgroundColor: ["#58D764", "#FBE947", "#52ACFF"],
      borderColor: ["#FFFFFF", "#FFFFFF", "#FFFFFF"],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return (
    <>
      <div className="flex lg:flex-row md:flex-col justify-center sm:justify-between lg:justify-center xl:justify-between items-center flex-wrap pt-[1rem] ">
        <div className="flex ">
          <ul>
            <li className="justify-between flex items-center">
              <div className="flex items-center ">
                <div className="border w-[13px] h-[13px] bg-[#58D764]" />
                <h2 className="pl-1 text-[15px] text-[#444444]">
                  Yuween System
                </h2>
              </div>
              <h2 className="pl-5 text-[15px] text-[#444444]">980 000 FCFA</h2>
            </li>
            <li className="justify-between flex items-center py-3">
              <div className="flex items-center ">
                <div className="border w-[13px] h-[13px] bg-[#FF903E]" />
                <h2 className="pl-1 text-[15px] text-[#444444]">Renters</h2>
              </div>
              <h2 className="pl-5 text-[15px] text-[#444444]">980 000 FCFA</h2>
            </li>
            <li className="justify-between flex items-center">
              <div className="flex items-center ">
                <div className="border w-[13px] h-[13px] bg-[#FBE947]" />
                <h2 className="pl-1 text-[15px] text-[#444444]">Car owners</h2>
              </div>
              <h2 className="pl-5 text-[15px] text-[#444444]">980 000 FCFA</h2>
            </li>
          </ul>
        </div>
        <div className={`lg:py-0 py-2`}>
          <Pie
            data={data}
            className="max-w-[200px] lg:py-0 py-3"
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
