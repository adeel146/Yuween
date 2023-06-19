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
  tooltips: {
    enabled: false,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#98A2B3",
        font: {
          size: 8.64,
        },
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
      max: 300,
    },
  },
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
  },
};

const labels = [
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

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Requests Received",
      data: [280, 255, 222, 250, 222, 250, 225, 200, 320, 225, 250, 200],
      borderColor: "#FF8C00",
      backgroundColor: "rgba(247, 246, 246, 0.5)",
      borderWidth: 1,
      pointRadius: 0,
    },
    {
      fill: true,
      label: " Canceled Booking",
      data: [250, 225, 200, 220, 192, 220, 225, 170, 290, 195, 230, 170],
      borderColor: "#876842",
      backgroundColor: "rgba(247, 241, 236, 0.5)",
      borderWidth: 1,
      pointRadius: 0,
    },
    {
      fill: true,
      label: "Extended Booking",
      data: [220, 195, 170, 190, 172, 190, 195, 140, 260, 165, 200, 140],
      borderColor: "#FFC278",
      backgroundColor: "rgba(247, 231, 217, 0.2)",
      borderWidth: 1,
      pointRadius: 0,
    },
    {
      fill: true,
      label: " Canceled Booking",
      data: [190, 165, 140, 160, 142, 160, 165, 110, 230, 135, 170, 110],
      borderColor: "#FFC278",
      backgroundColor: "rgba(247, 227, 208 , 1)",
      borderWidth: 1,
      pointRadius: 0,
    },
  ],
};

const MultiLineChart = () => {
  return (
    <>
      <div className="flex py-3 justify-between xl:flex-nowrap md:flex-nowrap flex-wrap">
        <div className="flex  items-center ">
          <div className=" w-[13px] h-[13px] rounded-full bg-[#FF8C00]" />
          <h2 className="pl-1 text-[12px] text-[#444444]">Requests Received</h2>
        </div>
        <div className="flex items-center ">
          <div className=" w-[13px] h-[13px] rounded-full bg-[#876842]" />
          <h2 className="pl-1 text-[12px] text-[#444444]">Canceled Booking</h2>
        </div>
        <div className="flex items-center ">
          <div className=" w-[13px] h-[13px] rounded-full bg-[#FFC278]" />
          <h2 className="pl-1 text-[12px] text-[#444444]">Extended Booking</h2>
        </div>
        <div className="flex items-center ">
          <div className=" w-[13px] h-[13px] rounded-full bg-[#CF7200]" />
          <h2 className="pl-1 text-[12px] text-[#444444]">Requests Approved</h2>
        </div>
      </div>
      <div className="!h-full">
        <Line
          className="!w-full !h-full"
          options={options}
          data={data}
          redraw={true}
        />
      </div>
    </>
  );
};

export default MultiLineChart;
