import React from 'react'
import { MdSearch } from 'react-icons/md'
import DataList from './DataList'

const DataTable = ({ setDetail, setRentalUser }) => {

    return (
        <>
            <div className='flex lg:flex-nowarp  flex-wrap justify-between items-center'>
                <h2 className='text-[14.4px] leading-[20.16px] font-medium text-[#444444]'>New Vehicle Deposit Requests</h2>
                <div className='flex lg:flex-nowrap xxtra-small:w-full  xtra-small:w-full xtra-small:flex-nowrap md:flex-nowrap flex-wrap lg:my-0 my-3'>
                    <div className='bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-full border-0 flex items-center px-4 lg:w-[380px] w-full py-3 h-[45px]'>
                        <MdSearch className='text-[25px] text-[#FF8C00]' />
                        <input type="text" className='focus:outline-none mx-2 w-full font-medium placeholder:text-[#ACACAC] placeholder:text-[16px]' placeholder='Search...' />
                    </div>
                
                </div>
            </div>
            <div>
                <DataList setDetail={setDetail} setRentalUser={setRentalUser} />
            </div>
        </>
    )
}

export default DataTable