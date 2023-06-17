import React from 'react'
import { MdSearch } from 'react-icons/md'
import DataList from './DataList'
// import GenericDrodown from '../../util/dropdowns/GenericDropdown'
// import FilterDropdown from '../../util/dropdowns/FilterDropdown'

const DataTable = ({ setIsEdit , title }) => {
    return (
        <>
            <div className='flex lg:flex-nowrap flex-wrap justify-between items-center'>
                <h2 className='text-[20px] leading-[20.16px] font-semibold text-[#444444]'>
                    { title }
                </h2>
                <div className='flex lg:py-0 py-2 '>
                    <div className='bg-white hidden rounded-full border-0 lg:flex items-center px-4 h-[45px] w-[380px] py-3 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]'>
                        <MdSearch className='text-[25px] text-[#FF8C00]' />
                        <input type="text" className='focus:outline-none mx-2 w-full placeholder:text-[#ACACAC] placeholder:text-[16px]' placeholder='Search...' />
                    </div>
                    {/* <div className='ml-2'>
                        <div className="text-center w-full flex justify-end">
                            <div className="dropdown relative">
                                <FilterDropdown />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div>
                <DataList setDetail={setIsEdit} />
            </div>
        </>
    )
}

export default DataTable