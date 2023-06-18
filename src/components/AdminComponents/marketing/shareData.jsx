import React from 'react'
import copy from '../../../assests/copy.png'
const ShareData = () => {
    return (
        <>
            <div className=''>
                <h2 className='text-[#444444] font-semibold'>Refer the Promocode</h2>
                <p className='text-[#606060] leading-[20px] text-[14px] pt-2 max-w-[520px]'>You Have created this promo code. Share this code with your Team or Friend
                    for them to get 15% Discount</p>
                <div className='flex flex-col pt-5'>
                    <label className='pb-3 text-[#606060] text-[14px]'>Invitation Link </label>
                    <div className='flex justify-between items-center border px-2 rounded-md'>
                        <input type="text" placeholder='https://www.chartjs.org/docs/latest/line/multi-axis.html' className='w-full  h-[42px] ticket placeholder:text-[14px] rounded-md text-[#ACACAC] focus:outline-none px-2 ' />
                        <img src={copy} alt="copy" className='object-cover cursor-pointer' />
                    </div>
                </div>

                <div className='flex justify-end pt-5'>
                    <button className='bg-[#FF8C00] text-white h-[40px] w-full rounded-md'>Invite</button>
                </div>

            </div>
        </>
    )
}

export default ShareData