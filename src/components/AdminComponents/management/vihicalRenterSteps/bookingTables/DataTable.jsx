import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md'
import DataList from './DataList'
import BookingDetail from './BookingDetail'


const DataTable = () => {
    const [active, setActive] = useState(0)
    const [detail, setDetail] = useState(false)
    return (
        <>

            {
                detail === false ?

                    <>
                        <div className='flex lg:flex-nowrap md:flex-nowrap flex-wrap items-center py-5'>
                            <div onClick={() => setActive(0)} className={`${active === 0 ? 'bg-[#FF8C00] text-white' : 'bg-[#EAEAEA] text-[#8E8E8E]'} py-3 px-[34px] cursor-pointer text-[14px] leading-[16px]`}>
                                <h2>Booking Management</h2>
                            </div>
                            <div onClick={() => setActive(1)} className={`${active === 1 ? 'bg-[#FF8C00] text-white' : 'bg-[#EAEAEA] text-[#8E8E8E]'} text-[14px] lg:my-0 md:my-0 my-2 py-3 px-[34px] leading-[16px] cursor-pointer`}>
                                <h2>Booking Management Cancelled</h2>
                            </div>
                        </div>

                        <div className='flex lg:flex-nowrap flex-wrap justify-between items-center'>
                            <h2 className='text-[20px] leading-[20.16px] font-semibold text-[#444444]'>Booking Management</h2>
                            <div className='flex lg:py-0 py-2'>
                                <div className='bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-full border-0 flex items-center px-4 lg:w-[380px] py-3 h-[45px]'>
                                    <MdSearch className='text-[25px] text-[#FF8C00]' />
                                    <input type="text" className='focus:outline-none mx-2 w-full placeholder:text-[#ACACAC] placeholder:text-[16px]' placeholder='Search...' />
                                </div>

                            </div>
                        </div>
                        <div>
                            <DataList setDetail={setDetail} />
                        </div>
                    </>
                    :
                    <BookingDetail />
            }
        </>
    )
}

export default DataTable