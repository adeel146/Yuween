import React from 'react'

const Promo = () => {
    return (
        <>
            <div className='flex md:py-5 py-5 justify-between'>
                <div>
                    <h2 className='text-[#FF8C00] font-semibold text-[20px]'>Promo Code</h2>
                    <p className='pt-4 text-[#898989] text-[14px]'>Here you can Create and edit promo code</p>
                </div>
                <button className='bg-[#FF8C00] text-white w-[160px] min-w-max h-[40px] text-[14px] leading-[16px] font-semibold rounded-md'>Invite a Friend</button>
            </div>

            <div className='pt-5'>
                <h2 className='text-[#444444] font-semibold text-[20px]'>Create New Promo Code</h2>
                <div className='grid lg:grid-cols-4 md:grid-cols-4 pt-5 gap-[32px]'>
                    <div className='flex flex-col'>
                        <label className='pb-2 text-[#606060] text-[14px]'>Code</label>
                        <input type="text" placeholder='Code' className='border border-[#CDD2E1] h-[42px] placeholder:text-[14px] text-[14px] rounded-md text-[#ACACAC] focus:outline-none px-2 ' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='pb-2 text-[#606060] text-[14px]'>Discount</label>
                        <input type="text" placeholder='Code' className='border border-[#CDD2E1] h-[42px] placeholder:text-[14px] text-[14px] rounded-md text-[#ACACAC] focus:outline-none px-2 ' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='pb-2 text-[#606060] text-[14px]'>Starting Date</label>
                        <input type="date" placeholder='Code' className='border border-[#CDD2E1] h-[42px] ticket placeholder:text-[14px] text-[14px] rounded-md text-[#ACACAC] focus:outline-none px-2 ' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='pb-2 text-[#606060] text-[14px]'>Ending Date</label>
                        <input type="date" placeholder='Code' className='border border-[#CDD2E1] h-[42px] ticket placeholder:text-[14px] text-[14px] rounded-md text-[#ACACAC] focus:outline-none px-2 ' />
                    </div>
                </div>
                <div className='pt-10'>
                    <textarea placeholder='description' className=' resize-none border border-[#CDD2E1] w-full placeholder:text-[14px] text-[14px] py-2 text-[#ACACAC] focus:outline-none px-2 rounded-md  ' rows={5}></textarea>
                </div>
                <div className='flex justify-end pt-5'>
                    <button className='bg-[#FF8C00] text-white h-[40px] px-[46px] text-[14px] font-semibold rounded-md'>Create</button>
                </div>

            </div>
        </>
    )
}

export default Promo