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
      },
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
  const valdashboard = [0, 1000, 1500, 2000, 2100, 2200, 2300, 2400];
  const valuser = [
    250, 230, 250, 300, 240, 241, 245, 246, 247, 249, 250, 255, 260,
  ];
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
      {location !== "/dashboard" ? (
        <>
          <div className="flex justify-between items-center">
            <h2 className="text-[#444444] text-[16px] font-medium">
              Services requests
            </h2>
            <h2 className="text-[#444444] text-[16px] font-medium">4</h2>
          </div>

          <div className="flex justify-between items-center py-2">
            <h2 className="text-[#98A2B3] text-[12px] font-medium">By month</h2>
            <h2 className="text-[#98A2B3] text-[12px] font-medium">
              Avg. Daily Requests
            </h2>
          </div>
        </>
      ) : null}

      <div className="flex items-center w-full  ">
        <h1 className="[writing-mode:vertical-rl] rotate-180 text-[12px] text-[#98A2B3]">
          FCFA
        </h1>
        <Line
          className=" !w-full lg:!h-[240px] xl:!h-[210px] md:!h-[260px] sm:!h-[280px] pr-7 sidebar-expanded:!h-[260px]"
          options={options}
          data={data}
          redraw={true}
        />
      </div>
      <h1 className=" text-[12px] text-[#98A2B3] text-center ">Month</h1>
    </>
  );
};

export default DashboardChart;
