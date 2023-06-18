import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useLocation } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  // maintainAspectRatio: true,
  devicePixelRatio: 4,
  tooltips: {
    enabled: false,
  },
  scales: {
    x: {
      ticks: {
        color: "#98A2B3",
        font: {
          size: 8.64,
        },
      },
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        color: "#98A2B3",
        font: {
          size: 8.64,
        },
        stepSize: 100,
      },
      min: 0,
      max: 200,
      stepSize: 100,
    },
  },
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
  },
};

const DashboardChart = () => {
  const location = useLocation().pathname;

  const label = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const label2 = [
    "11th",
    "12th",
    "13th",
    "14th",
    "15th",
    "16th",
    "17th",
    "18th",
  ];
  const valdashboard = [0, 1000, 1500, 2000, 2500, 3000];
  const valuser = [20, 35, 155, 25, 120];
  const data = {
    labels: location === "/dashboard" ? label2 : label,
    datasets: [
      {
        fill: true,
        data: location === "/dashboard" ? valdashboard : valuser,
        borderColor: "#FF8C00",
        backgroundColor: "rgba(247, 246, 247, 0.5)",
      },
    ],
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-[#444444] text-[14px] font-medium pl-[53px]">
          Services requests
        </h2>
        <h2 className="text-[#444444] text-[14px] font-medium max-w-[109px] text-left w-full">
          4
        </h2>
      </div>

      <div className="flex justify-between items-center">
        <h2 className="text-[#98A2B3] text-[12px] font-medium pl-[53px]">
          By month
        </h2>
        <h2 className="text-[#98A2B3] text-[12px] font-medium ">
          Avg. Daily Requests
        </h2>
      </div>

      <div className="flex items-center xl:w-full h-full  ">
        <h1 className="[writing-mode:vertical-rl] rotate-180 text-[12px] text-[#98A2B3]">
          Request
        </h1>
        <Line
          className="!w-full !h-full"
          options={options}
          data={data}
          redraw={true}
        />
      </div>
      <h1 className=" text-[12px] text-[#98A2B3] text-center">Month</h1>
    </>
  );
};

export default DashboardChart;
