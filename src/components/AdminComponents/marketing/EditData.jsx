import React from 'react'
const EditData = () => {
    return (
        <>
            <div className=''>
                <h2 className='text-[#444444] font-semibold'>Edit Promo Code</h2>
                <div className='flex flex-col pt-5'>
                    <label className='pb-3 text-[#606060] text-[14px]'>Code</label>
                    <input type="text" placeholder='Code' className='border h-[42px] placeholder:text-[14px] rounded-md text-[#ACACAC] focus:outline-none px-2 ' />
                </div>
                <div className='flex flex-col pt-2'>
                    <label className='pb-3 text-[#606060] text-[14px]'>Discount</label>
                    <input type="text" placeholder='Code' className='border h-[42px] placeholder:text-[14px] rounded-md text-[#ACACAC] focus:outline-none px-2 ' />
                </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 pt-5 gap-5'>
                    <div className='flex flex-col'>
                        <label className='pb-3 text-[#606060] text-[14px]'>Starting Date</label>
                        <input type="date" placeholder='Code' className='border h-[42px] ticket placeholder:text-[14px] rounded-md text-[#ACACAC] focus:outline-none px-2 ' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='pb-3 text-[#606060] text-[14px]'>Ending Date</label>
                        <input type="date" placeholder='Code' className='border h-[42px] ticket placeholder:text-[14px] rounded-md text-[#ACACAC] focus:outline-none px-2 ' />
                    </div>
                </div>
                <div className='pt-5'>
                    <label className='X text-[#606060] text-[14px]'>Description</label>
                    <textarea placeholder='description' className=' resize-none border mt-2 w-full placeholder:text-[14px] py-2 text-[#ACACAC] focus:outline-none px-2 rounded-md  ' rows={3}></textarea>
                </div>
                <div className='flex justify-end pt-5'>
                    <button className='bg-[#FF8C00] text-white h-[40px] px-8 w-[120px] rounded-md'>Edit</button>
                </div>

            </div>
        </>
    )
}

export default EditData