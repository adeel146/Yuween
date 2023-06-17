import React, { useState } from 'react'
import { SearchVehical } from '../../lib/Api/Vehical'
import { MdSearch } from 'react-icons/md'

const SearchBar = ({ setVehicalList , setLoading }) => {

    const [search, setSearch] = useState('')

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            setLoading(true)
            let { res } = await SearchVehical(search)
            let vehicals = Object.assign({}, ...res)
            setLoading(false)
            setVehicalList(vehicals?.vehicles)
        }
    }
    return (
        <>
            {/* <div className='bg-white shadow-sm rounded-full border flex items-center lg:w-[380px] border-0 lg:flex items-center px-4 h-[45px] py-3 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]'>
                <MdSearch className='text-[25px] text-[#FF8C00]' />
                <input type="text" onKeyDown={handleKeyDown} onChange={(e) => setSearch(e.target.value)} className='focus:outline-none mx-2 w-full placeholder:text-[#ACACAC] placeholder:text-[16px]' placeholder='Search...' value={search} />
            </div> */}

            <div className='flex lg:flex-nowrap xxtra-small:w-full xtra-small:w-full xtra-small:flex-nowrap md:flex-nowrap flex-wrap lg:my-0 my-3'>
                <div className='bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-full border-0 flex items-center px-4 lg:w-[380px] w-full py-3 h-[45px]'>
                    <MdSearch className='text-[25px] text-[#FF8C00]' />
                    <input type="text" className='focus:outline-none mx-2 w-full font-medium placeholder:text-[#ACACAC] placeholder:text-[16px]' placeholder='Search...' />
                </div>
            
            </div>
            {/* <div className="flex border items-center h-[50px] rounded border-[#ACACAC] px-1   ">
                <BsSearch className='text-[#FF8C00] text-[20px] ml-[10px]' />
                {/* <img src={search} alt="search" className='object-cover pl-[24px]' /> */}
            {/* <input type="text" onKeyDown={handleKeyDown} onChange={(e) => setSearch(e.target.value)} placeholder='Insurance, additional driver, extensions...' name="search" value={search} className='focus:outline-none placeholder:text-[#ACACAC] placeholder:text-[16px]  h-full ml-5 w-full' />
            </div>  */}
        </>
    )
}

export default SearchBar