import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['red', 'blue', 'yellow', "pink" , "orange"],
  datasets: [
    {
      
      data: [12, 8, 12,7, 9],
      backgroundColor: [
        '#58D764',
        '#EF7BE3',
        '#FF903E',
        '#FBE947',
        '#52ACFF',

      ],
      borderColor: [
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',

      ],
      borderWidth: 1,
    },
  ],
};



const PieChart = () => {
  return (
    <>
      <div className='flex lg:flex-nowrap md:flex-nowrap flex-wrap justify-between xxtra-small:justify-center '>
        <div className='flex pt-[2rem] '>
          <ul>
            <li className='justify-between flex items-center'>
              <div className='flex items-center '>
                <div className='border w-[13px] h-[13px] bg-[#58D764]' />
                <h2 className='pl-1 text-[15px] text-[#444444]'>Rejected Requests</h2>
              </div>
              <h2 className='pl-5 text-[15px] text-[#444444]'>20</h2>
            </li>
            <li className='justify-between flex items-center py-2'>
              <div className='flex items-center '>
                <div className='border w-[13px] h-[13px] bg-[#FF903E]' />
                <h2 className='pl-1 text-[15px] text-[#444444]'>Cancelled Requests</h2>
              </div>
              <h2 className='pl-5 text-[15px] text-[#444444]'>20</h2>
            </li>
            <li className='justify-between flex items-center'>
              <div className='flex items-center '>
                <div className='border w-[13px] h-[13px] bg-[#FBE947]' />
                <h2 className='pl-1 text-[15px] text-[#444444]'>Approved Requests</h2>
              </div>
              <h2 className='pl-5 text-[15px] text-[#444444]'>20</h2>
            </li>
            <li className='justify-between flex items-center py-2'>
              <div className='flex items-center '>
                <div className='border w-[13px] h-[13px] bg-[#EF7BE3] ' />
                <h2 className='pl-1 text-[15px] text-[#444444]'>Extended Requests</h2>
              </div>
              <h2 className='pl-5 text-[15px] text-[#444444]'>20</h2>
            </li>
            <li className='justify-between flex items-center'>
              <div className='flex items-center '>
                <div className='border w-[13px] h-[13px] bg-[#52ACFF]' />
                <h2 className='pl-1 text-[15px] text-[#444444]'>Received Requests </h2>
              </div>
              <h2 className='pl-5 text-[15px] text-[#444444]'>20</h2>
            </li>
          </ul>
        </div>
        <div className='h-[220px] w-[220px] xl:w-[220px] lg:max-w-[200px] md:max-w-[180px] ml-8 xxtra-small:mt-5'>
          <Pie
            data={data}
            width={300}
            height={100}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                  position: 'left',
                },
              },
            }} />
        </div>
      </div>
    </>
  )
}
export default PieChart