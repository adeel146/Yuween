import React, { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import close from '../../../../../assests/svg/cancel-icon.svg'
import Popup from '../../../../../util/popup/Popup'
import CancelBooking from './CancelBooking'
const BookingDetail = () => {
    const [active, setActive] = useState(0)
    const [show, setShow] = useState(false)

    let list = [{ heading: "Booking ID", title: "REH1235GH" }, { heading: "Booking Code", title: "123456" }, { heading: "Booking Status ", status: "Ongoing" }, { heading: "Refund Status", title: "N/A" }, { heading: "Vehicle Name", title: "Vehicle Name" }, { heading: "Trip Duration", title: "24 Hours" }, { heading: "Starting Date", title: "Dec 7, 2022" }, { heading: "Service Fee", title: "1000 FCFA" }, { heading: "Renter Name", title: "John" }, { heading: "Payout ", title: "Mobile Money" }, { heading: "Penalties ", title: "N/A" }]

    return (
        <>
            {show && <Popup modalOpen={show} data={<CancelBooking setShow={(val) => setShow(val)} />} onClose={() => setShow(false)} />}
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
                    <div class="group inline-block">
                        <button

                            class="outline-none focus:outline-none  px-3 py-1 bg-white rounded-sm flex items-center"
                        >
                            <BsThreeDotsVertical className='text-[20px] text-[#898989]' />

                        </button>
                        <ul
                            class="bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-full border-0 rounded-md transform p-4 scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out right-7 origin-top lg:w-[14%]  "
                        >
                            <li onClick={() => setShow(true)} className="rounded-sm cursor-pointer actions flex items-center px-2 py-2 hover:bg-gray-100">
                                <div className="flex justify-center items-center">
                                    <img src={close} alt="close" className="" />
                                </div>
                                <h2 className='ml-2.5 text-[14px]'>Cancel Booking</h2>
                            </li>



                        </ul>
                    </div>
                </div>
                <div className='grid lg:grid-cols-4 grid-cols-2 gap-5 pt-6'>
                    {
                        list.map((item, i) => (
                            <div className='flex flex-col' key={i}>
                                <h2 className='text-[14px] font-medium text-[#444444] pb-5 '>{item?.heading}</h2>
                                {
                                    item?.status &&
                                    <p className='text-[12px] bg-[#FFECD6] py-[2px] text-[#FF8C00] rounded-full w-fit px-2.5'>{item?.status}</p>
                                }
                                <p className='text-[14px] text-[#898989] '>{item?.title}</p>
                            </div>
                        ))
                    }


                </div>

            </div>
        </>
    )
}

export default BookingDetail