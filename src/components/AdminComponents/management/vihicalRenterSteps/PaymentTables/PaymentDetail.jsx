import React, { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

const PaymentDetail = () => {
    const [active, setActive] = useState(0)
    let list = [{ heading: "Booking ID", title: "REH1235GH" }, { heading: "Booking Code", title: "123456" }, { heading: "Booking Status ", status: "Ongoing" }, { heading: "Refund Status", title: "N/A" }, { heading: "Vehicle Name", title: "Vehicle Name" }, { heading: "Trip Duration", title: "24 Hours" }, { heading: "Starting Date", title: "Dec 7, 2022" }, { heading: "Service Fee", title: "1000 FCFA" }, { heading: "Renter Name", title: "John" }, { heading: "Payout ", title: "Mobile Money" }, { heading: "Penalties ", title: "N/A" }]

    return (
        <>
            <div className='bg-white px-5 pb-5 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] border-0 rounded-md'>
                <div className='flex lg:flex-nowrap md:flex-nowrap flex-wrap items-center py-5'>
                    <div onClick={() => setActive(0)} className={`${active === 0 ? 'bg-[#FF8C00] text-white' : 'bg-[#EAEAEA] text-[#8E8E8E]'} py-3 px-5 cursor-pointer text-[14px] leading-[16px]`}>
                        <h2>Vehicle Owner</h2>
                    </div>
                    <div onClick={() => setActive(1)} className={`${active === 1 ? 'bg-[#FF8C00] text-white' : 'bg-[#EAEAEA] text-[#8E8E8E]'} py-3 px-5 cursor-pointer text-[14px] leading-[16px]`}>
                        <h2>Vehicle Renter</h2>
                    </div>
                </div>

                <div className='flex justify-between items-center'>
                    <h2 className='text-[16px] font-semibold'>Booking Details</h2>
                    <BsThreeDotsVertical className='text-[#898989] text-[20px]' />
                </div>
                <div className='grid lg:grid-cols-4 grid-cols-2 gap-5 pt-6'>
                {
                        list.map((item, i) => (
                            <div className='flex flex-col' key={i}>
                                <h2 className='text-[14px] font-medium text-[#444444] pb-5'>{item?.heading}</h2>
                                {
                                    item?.status &&
                                    <p className='text-[12px] bg-[#FFECD6] py-[2px] text-[#FF8C00] rounded-full w-fit px-2.5'>{item?.status}</p>
                                }
                                <p className='text-[14px] text-[#898989]'>{item?.title}</p>
                            </div>
                        ))
                    }


                </div>

            </div>
        </>
    )
}

export default PaymentDetail