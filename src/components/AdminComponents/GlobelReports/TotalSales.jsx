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
            backgroundColor: 'rgba(247, 246, 247, 0.5)',
        },
        {
            fill: true,
            label: ' Canceled Booking',
            data: [200, 180, 200, 180, 200, 80, 85, 86, 87, 245, 246, 247, 249],
            borderColor: '#FFC278',
            backgroundColor: 'rgba(247, 241, 236, 0.5)',
        },


    ],
};

const TotalSales = () => {
    return (

        <>
            <div className='h-auto'>
                <div className='py-3 text-center'>
                    <h2 className='text-[10px] text-[#444444]'>Amount</h2>
                    <h1 className='text-[#444444] text-[12px]'>2,678 M</h1>
                </div>
                <Line  className='xl:!w-[580px]  2xl:!w-full 2xl:sidebar-expanded:!w-full md:!w-[330px]  xl:sidebar-expanded:!w-[480px] xxtra-sm:w-full xtra-sm:w-full' options={options} data={data} redraw={true} />
            </div>
        </>
    )
}

export default TotalSales
