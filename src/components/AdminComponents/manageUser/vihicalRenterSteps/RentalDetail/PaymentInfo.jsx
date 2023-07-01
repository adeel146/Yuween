import React from 'react'
// import file from '../../../../assests/file.png'
import car from '../../../../../assests/svg/CarRent.svg'
import { useLocation } from 'react-router-dom'
import PieChart from '../../PieChart'
const PaymentInfo = () => {
    const location = useLocation().pathname

    const titleArray = ['Sent Requests', 'Approved Requests', 'Ended Requests', 'Expired Requests']
    return (
        <>

            <div className='mt-7'>
                {location === "/vehicalOwner" ?
                    <div className='bg-white border-0 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-md p-5'>
                        <h1 className='text-[#FF8C00] text-[20px] leading-[30px] font-semibold'>Payment Details</h1>
                        <div className=''>
                            <PieChart/>
                        </div>
                    </div>
                    :
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>
                        {
                            Array(4).fill(4).map((_, i) => (

                                <div key={i} className='bg-white border-0 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-md p-5'>
                                    <h1 className='text-[18px] leading-[20px] text-[#444444]'>{ titleArray[i]}</h1>
                                    <div className='flex flex-wrap  justify-between items-center pt-[34px]'>
                                        <h2 className='text-[42.55px] leading-[39px] text-[#FF8C00] font-semibold'>115</h2>
                                        <img src={car} alt="car_img" className='object-cover' />
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                }


                <div className='bg-white border-0 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-md p-5 mt-5'>
                    <h1 className='text-[#FF8C00] text-[20px] leading-[30px] font-semibold'>Payment Details</h1>
                    <div className='grid grid-cols-2 gap-3 items-center pt-5'>
                        <div >
                            <h2 className='text-[18px] leading-[20px] pb-4'>Mobile Money</h2>
                            <div className=''>
                                <h2 className='text-[#444444] text-[14px] leading-[20px]'>ID Card</h2>
                                <p className='text-[14px] text-[#898989] pt-5 xxtra-small:pt-3 leading-[22px]'>15 Sep, 2023</p>
                            </div>
                            <div className='pt-4'>
                                <h2 className='text-[#444444] text-[14px] leading-[20px]'>Passport</h2>
                                <p className='text-[14px] text-[#898989] pt-5 xxtra-small:pt-3 leading-[22px]'>15 Sep, 2023</p>
                            </div>

                        </div>
                        <div >
                            <h2 className='text-[18px] leading-[20px] pb-4'>Bank</h2>
                            <div className=''>
                                <h2 className='text-[#444444] text-[14px] leading-[20px]'>ID Card</h2>
                                <p className='text-[14px] text-[#898989] pt-5 xxtra-small:pt-3 leading-[22px]'>15 Sep, 2023</p>
                            </div>
                            <div className='pt-4'>
                                <h2 className='text-[#444444] text-[14px] leading-[20px]'>ID Card</h2>
                                <p className='text-[14px] text-[#898989] pt-5 xxtra-small:pt-3 leading-[22px]'>15 Sep, 2023</p>
                            </div>
                        </div>

                    </div>
                    <div className='pt-9'>
                        <h1 className='text-[18px] leading-[20px] text-[#444444]'>Recent Transactions</h1>
                        <div className="overflow-x-auto bg-white rounded-md mt-6">
                            {
                                <>
                                    <table className="table-auto w-full ">
                                        {/* Table header */}
                                        <thead className="text-xs font-medium bg-[#FFF8EF] border-slate-200">
                                            <tr className='text-[#626973]'>

                                                <th className="px-4 py-3 whitespace-nowrap w-px">
                                                    <div className="font-medium text-[14px] text-left">Mobile Money </div>
                                                </th>
                                                <th className="px-4 py-3 whitespace-nowrap">
                                                    <div className="font-medium text-[14px] text-left">Date</div>
                                                </th>
                                                <th className="px-4 py-3 whitespace-nowrap">
                                                    <div className="font-medium text-[14px] text-left">Location</div>
                                                </th>


                                            </tr>
                                        </thead>
                                        {/* Table body */}
                                        <tbody className="text-sm ">
                                            {
                                                Array(3).fill(3).map((_, i) =>
                                                    <tr className=' cursor-pointer  ' key={i}>
                                                        <td className="px-4 py-3 whitespace-nowrap">
                                                            <div className="text-left text-[14px] text-[#898989]">Orange</div>
                                                        </td>
                                                        <td className="px-4 py-3 whitespace-nowrap">
                                                            <div className="text-left text-[14px] text-[#898989]">12 Sept 2023</div>
                                                        </td>
                                                        <td className="px-4 py-3 whitespace-nowrap">
                                                            <div className="text-left text-[14px] text-[#898989]">Abid Jan</div>
                                                        </td>


                                                    </tr>
                                                )
                                            }

                                        </tbody>

                                    </table>

                                </>

                            }

                        </div>


                    </div>

                </div>
            </div>

        </>
    )
}

export default PaymentInfo