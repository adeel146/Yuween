import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md'
import DataList from './DataList'
import PaymentDetail from './PaymentDetail'
import FilterDropdown from '../../../../../util/dropdowns/FilterDropdown'


const DataTable = () => {
    // const [active, setActive] = useState(0)
    const [detail, setDetail] = useState(false)
    return (
        <>

            {
                detail === false ?

                    <>


                        <div className='flex  lg:flex-nowrap flex-wrap  justify-between items-center'>
                            <h2 className='text-[20px] leading-[20.16px] font-semibold text-[#444444]'>Gateway Payment Management</h2>
                            <div className='flex lg:py-0 py-2'>
                                <div className='bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-full border-0 flex items-center px-4 lg:w-[380px] py-3 h-[45px]'>
                                    <MdSearch className='text-[25px] text-[#FF8C00]' />
                                    <input type="text" className='focus:outline-none mx-2 w-full placeholder:text-[#ACACAC] placeholder:text-[16px]' placeholder='Search...' />
                                </div>
                                <FilterDropdown />
                            </div>
                        </div>
                        <div>
                            <DataList setDetail={setDetail} />
                        </div>
                    </>
                    :
                    <PaymentDetail />
            }
        </>
    )
}

export default DataTable