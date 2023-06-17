import React from 'react'
import { MdSearch } from 'react-icons/md'
import DataList from './DataList'
import FilterDropdown from '../../../util/dropdowns/FilterDropdown'

const DataTable = ({setDetail}) => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <h2 className='text-[14.4px] leading-[20.16px] font-medium text-[#444444]'>New Vehicle Deposit Requests</h2>
                <div className='flex '>
                    <div className='bg-white shadow-sm rounded-full border flex items-center px-2 w-[380px] py-2'>
                        <MdSearch className='text-[25px] text-[#FF8C00]' />
                        <input type="text" className='focus:outline-none mx-2 w-full placeholder:text-[#ACACAC] placeholder:text-[16px]' placeholder='Search...' />
                    </div>
                    <div className='ml-2'>
                       <div className="text-center w-full flex justify-end">
                        <div className="dropdown relative">
                            <FilterDropdown/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div>
                <DataList setDetail={setDetail}/>
            </div>
        </>
    )
}

export default DataTable