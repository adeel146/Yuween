import React from 'react'
import BroadCastMessage from '../../components/AdminComponents/broadCast/BroadCastMessage'
import BradCastTable from '../../components/AdminComponents/broadCast/BroadCastTable'

const BroadCast = () => {
    return (
        <>
            {/* Promo component */}
            <div className="bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] border-0 border-gray-100 rounded-md h-full p-5 mt-5">
                <BroadCastMessage />
            </div>
            {/* table component */}
            <div className='mt-5 p-5 mt-5 rounded-md shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]'>
                <div className='flex justify-between items-center '>
                    <h2 className='text-[20px] font-semibold leading-[20.16px]  text-[#FF8C00]'>Broadcast Messages</h2>
                    {/* <div className='flex '>
                        <div className='bg-white shadow-sm rounded-full border flex items-center px-2 w-[380px] py-2'>
                            <MdSearch className='text-[25px] text-[#FF8C00]' />
                            <input type="text" className='focus:outline-none mx-2 w-full placeholder:text-[#ACACAC] placeholder:text-[16px]' placeholder='Search...' />
                        </div>
                    </div> */}
                </div>
                <BradCastTable />
            </div>
        </>
    )
}

export default BroadCast