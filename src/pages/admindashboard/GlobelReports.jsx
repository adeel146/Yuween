import React from 'react'
import DataTable from '../../components/AdminComponents/GlobelReports/TransactionTable/Table'
import PieChart from '../../components/AdminComponents/dashboard/PieChart'
import WalletChart from '../../components/AdminComponents/GlobelReports/WalletChart'
import { useLocation } from 'react-router-dom'
import TotalSales from '../../components/AdminComponents/GlobelReports/TotalSales'
import WalletIncome from '../../components/AdminComponents/GlobelReports/WalletIncom'
const GlobelReports = () => {
    const location = useLocation().pathname
    return (
        <>
            <>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 xxtra-small:grid-cols-1 xtra-small:grid-cols-1  gap-6 pt-[19px]'>
                    <div className='bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] w-full  h-auto  rounded-md p-5 xtra-sm:px-0  m-auto xtra-sm:m-0 xtra-sm:w-full xxtra:max-w-full xxtra-sm:m-0 xxtra-sm:w-full lg:max-w-full lg:m-0'>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-[#FF8C00] leading-[20.16px] text-[20px] font-semibold'>
                                {
                                    location === "/globelOwner" ?
                                        "Overall Total Sales"
                                        :
                                        "Overall Wallet Trends"
                                }

                            </h2>
                        </div>
                        {location === "/globelOwner" ?
                            <TotalSales />
                            :
                            <PieChart />
                        }
                    </div>
                    <div className='bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] w-full h-auto rounded-md p-5 xxstra-sm:px-0 xstra-sm:px-0 m-auto xxstra-sm:m-0 xstra-sm:m-0  lg:max-w-full lg:m-0 '>
                        <h1 className='text-[#FF8C00] text-[20px] font-semibold pb-2'>

                            {
                                location === "/globelOwner" ? "Top Wallet With Highest Income" : "Top Wallet"
                            }
                        </h1>
                        <div className='flex pb-2'>
                            <div className='flex items-center '>
                                <div className=' w-[13px] h-[13px] rounded-full bg-[#FF8C00]' />
                                <h2 className='pl-1 text-[15px] text-[#444444]'>
                                    {
                                        location === "/globelOwner" ? "Highest Income" : "Car owners"
                                    }
                                    
                                </h2>
                            </div>
                            <div className='flex items-center ml-5 '>
                                <div className=' w-[13px] h-[13px] rounded-full bg-[#FFC278]' />
                                <h2 className='pl-1 text-[15px] text-[#444444]'>
                                    {
                                        location === "/globelOwner" ? "Average Income" : "Renters"
                                    }
                                    </h2>
                            </div>
                        </div>
                        {location === "/globelOwner" ?
                            <WalletIncome />
                            :
                            <WalletChart />
                        }
                    </div>
                </div>


                <div className='bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-md h-full mt-5'>
                    <DataTable title="Top Highly Ranked Renters" />
                </div>

                <div className=' h-full mt-5'>
                    <DataTable title="Transaction" />
                </div>
            </>
        </>
    )
}

export default GlobelReports