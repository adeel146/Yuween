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
            label: 'Car Owner ',
            data: [250, 230, 250, 300, 240, 241, 245, 246, 247, 249, 250, 255, 260],
            borderColor: '#FF8C00',
            backgroundColor: 'rgba(247, 246, 247, 0.5)',
        },
        {
            fill: true,
            label: 'Renters',
            data: [200, 180, 200, 180, 200, 80, 85, 86, 87, 245, 246, 247, 249],
            borderColor: '#FFC278',
            backgroundColor: 'rgba(247, 241, 236, 0.5)',
        },


    ],
};

const WalletChart = () => {
    return (

        <>
            <div className='h-auto '>
                <Line options={options} className='xl:w-full xl:max-w-max md:!w-[624px] xxtra-small:w-auto xtra-small:!w-[480px] tablet:!w-[550px] !w-[260px] 2xl:!w-[700px] 2xl:sidebar-expanded:!w-[550px] sidebar-expanded:!w-[480px]' data={data} redraw={true} />
            </div>
        </>
    )
}

export default WalletChart
