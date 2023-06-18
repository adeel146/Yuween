import React, { useState, useEffect } from 'react'
// import { MdSearch } from 'react-icons/md'
import DataList from './DataList'
import FilterDropdown from '../../../../util/dropdowns/FilterDropdown'
import { useLocation } from 'react-router-dom'
import SearchBar from '../../../GenericComponents/SearchBar'
import  { GetVihicals} from '../../../../lib/Api/Vehical'
const DataTable = ({ setDetail, setRentalUser }) => {
    const [vehicalData , setVehicalData] = useState([])
    const [loading , setLoading] = useState(false)
    const [types , setTypes] = useState(true)
    const location = useLocation().pathname
    const [vehicalList, setVehicalList] = useState([])



    useEffect(() => {
            (async () => {
                setLoading(true)
                let { res } = await GetVihicals()
                setLoading(false)
                let vehicals = Object.assign({}, ...res)
                setVehicalList(vehicals?.vehicles)
            })();
        
    }, [types])

    return (
        <>
            <div className='flex lg:flex-nowarp  flex-wrap justify-between items-center'>
                <h2 className='text-[14.4px] leading-[20.16px] font-semibold text-[#444444]'>New Vehicle Deposit Requests</h2>
                <div className='flex lg:flex-nowrap xxtra-small:w-full xtra-small:w-full xtra-small:flex-nowrap md:flex-nowrap flex-wrap lg:my-0 my-3'>
                    <SearchBar setVehicalList={(val) => setVehicalList(val)} setLoading={setLoading} />
                    {
                        location === "/vehicalOwner" &&
                        <div className='lg:ml-4 md:ml-4 ml-[5rem] lg:my-0 md:my-0 my-2'>
                            <div className="text-center w-full flex justify-end">
                                <div className="dropdown relative ">
                                    <FilterDropdown setVehicalList={(val) => setVehicalList(val)} setTypes={setTypes} setLoading={setLoading}  />
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div>
            <div>
                <DataList setDetail={setDetail} setRentalUser={setRentalUser} vehicalList={vehicalList} setVehicalList={setVehicalList} loading={loading} setLoading={setLoading} setTypes={setTypes} />
            </div>
        </>
    )
}

export default DataTable