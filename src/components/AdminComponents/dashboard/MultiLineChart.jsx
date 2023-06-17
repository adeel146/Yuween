import React from 'react';
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
} from 'chart.js';
import { Line } from 'react-chartjs-2';

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
    enabled: false
  },
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        color: "#98A2B3",
        font: {
          size: 8.64
        }
      }
    },
    y: {
      ticks: {
        color: "#98A2B3",
        font: {
          size: 8.64
        }
      }
    },
  },
  plugins: {
    legend: {
      display: false,
      position: 'top'
    },

  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Requests Received',
      data: [250, 230, 250, 300, 240, 241, 245, 246, 247, 249, 250, 255, 260],
      borderColor: '#FF8C00',
      backgroundColor: 'rgba(247, 246, 246, 0.5)',
    },
    {
      fill: true,
      label: ' Canceled Booking',
      data: [230, 220, 270, 240, 241, 245, 246, 247, 249, 250, 255, 260],
      borderColor: '#876842',
      backgroundColor: 'rgba(247, 241, 236, 0.5)',
    },
    {
      fill: true,
      label: 'Extended Booking',
      data: [200, 180, 170, 175, 180, 190, 195, 196, 197, 198, 147, 148],
      borderColor: '#FFC278',
      backgroundColor: 'rgba(247, 231, 217, 0.2)',
    },
    {
      fill: true,
      label: ' Canceled Booking',
      data: [100, 130, 140, 144, 145, 146, 147, 148, 149, 147, 148, 147],
      borderColor: '#FFC278',
      backgroundColor: 'rgba(247, 227, 208 , 1)',
    },
  ],
};

const MultiLineChart = () => {
  return (
    <>
      <div className='flex py-3 justify-between xl:flex-nowrap md:flex-nowrap flex-wrap'>
        <div className='flex  items-center '>
          <div className=' w-[13px] h-[13px] rounded-full bg-[#FF8C00]' />
          <h2 className='pl-1 text-[12px] text-[#444444]'>
            Requests Received
          </h2>
        </div>
        <div className='flex items-center '>
          <div className=' w-[13px] h-[13px] rounded-full bg-[#876842]' />
          <h2 className='pl-1 text-[12px] text-[#444444]'>
            Canceled Booking
          </h2>
        </div>
        <div className='flex items-center '>
          <div className=' w-[13px] h-[13px] rounded-full bg-[#FFC278]' />
          <h2 className='pl-1 text-[12px] text-[#444444]'>
            Extended Booking
          </h2>
        </div>
        <div className='flex items-center '>
          <div className=' w-[13px] h-[13px] rounded-full bg-[#CF7200]' />
          <h2 className='pl-1 text-[12px] text-[#444444]'>
            Requests Approved
          </h2>
        </div>

      </div>
      <div className='h-auto'>
        <Line className='xl:w-full xl:max-w-max  md:!w-[349px] xxtra-small:w-auto xtra-small:w-auto tablet:!w-[550px] !w-full 2xl:!w-full 2xl:sidebar-expanded:!w-full xl:sidebar-expanded:!w-full' options={options} data={data} redraw={true} />
      </div>
    </>
  )
}

export default MultiLineChart
