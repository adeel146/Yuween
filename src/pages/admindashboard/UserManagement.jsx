import React, { useEffect, useState } from 'react'
import rentcar from '../../assests/renter.png'
import DataTable from '../../components/AdminComponents/manageUser/DataTable/DataTable'
import RentalIndex from '../../components/AdminComponents/manageUser/vihicalRenterSteps/RentalIndex'
import { useLocation } from 'react-router-dom'
import SingleLineChart from '../../components/AdminComponents/manageUser/SingleLineChart'
import MultiLineChart from '../../components/AdminComponents/dashboard/MultiLineChart'
import { GetOwnerStatis } from '../../lib/Api/RentalAppApi'
import LoaderSpinner from '../../util/LoaderSpinner'
const UserManagement = () => {
    const [detail, setDetail] = useState(false)
    const [edit] = useState(false)
    const [rentalUser, setRentalUser] = useState({})


    const location = useLocation().pathname


    const [Static, setStatic] = useState({})
    useEffect(() => {
        try {
            let fetchStatis = async () => {
                let { res } = await GetOwnerStatis()
                let Statis = Object.assign({}, ...res)
                setStatic(Statis)
            }
            fetchStatis()
        }
        catch (err) { }
    }, [edit === true])


    return (

        <>
            {
                detail === false ?
                    <>
                        <h2 className='text-[#444444] font-semibold text-[20px]'>
                            {
                                location === "/vehicalRenters" ?
                                    "Vehicle Renters Statistics"
                                    :
                                    "Vehicle Owner's Statistics"
                            }
                        </h2>
                        <div className='grid lg:grid-cols-10 xxtra-small:grid-cols-1 xtra-small:grid-cols-1  md:grid-cols-2 gap-5 mt-6'>


                            {
                                location === "/vehicalRenters" ?
                                    <div className='bg-white  lg:max-w-full lg:m-0 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-md h-full pt-[23px] pl-[10px] pr-[18px] pb-[23px] h-[205px] col-span-6'>

                                        <SingleLineChart />
                                    </div>
                                    :
                                    <div className='bg-white lg:max-w-full lg:m-0 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-md h-full p-5 col-span-6 h-[205px]'>
                                        <MultiLineChart />
                                    </div>
                            }
                            <div className='grid lg:grid-cols-2 xtra-small:grid-cols-2 tablet:grid-cols-2 md:grid-cols-2 gap-5 col-span-4'>
                                <div className='shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] bg-white rounded-md px-4 lg:h-[205px] md:h-full tablet:h-[180px] h-[205px] xl:pt-[17px] md:pt-5 pt-8'>
                                    <div className='border-l-4 px-3'>
                                        <h1 className='text-[#98A2B3] text-[14px]'>Today request</h1>
                                        {
                                            Static?.recevied_request ?
                                                <h1 className="  text-[#FF8C00] text-[18px] pt-2 ">{Static?.recevied_request}</h1>
                                                :
                                                <LoaderSpinner type="weight" color="#FF8C00" />
                                        }
                                    </div>
                                    <hr className="mt-[25px] mb-[20px]" />
                                    <div className='border-l-4 px-3 '>
                                        <h1 className='text-[#98A2B3] text-[14px]'>Approved request</h1>
                                        {
                                            Static?.approved_requests ?
                                                <h1 className="  text-[#FF8C00] text-[18px] pt-2 ">{Static?.approved_requests}</h1>
                                                :
                                                <LoaderSpinner type="weight" color="#FF8C00" />
                                        }
                                    </div>
                                </div>

                                <div className='bg-[#FFEFDC] rounded-md lg:h-[205px] h-full py-2 px-4'>
                                    <h1 className=" text-[14px] leading-[24px]">Total car renter requests</h1>
                                    <div className='flex justify-end mt-5'>
                                        <img src={rentcar} alt="rent-car" className='object-cover ' />
                                    </div>
                                    {
                                        Static?.approved_requests ?
                                            <h1 className="  text-[#FF8C00] text-[24px] ">{Static?.approved_requests}</h1>
                                            :
                                            <LoaderSpinner type="weight" color="#FF8C00" />
                                    }
                                </div>
                            </div>


                        </div>

                        <div className='shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] bg-white rounded-md p-5 mt-5'>
                            <DataTable setDetail={setDetail} setRentalUser={setRentalUser} />
                        </div>
                    </>
                    :

                    <RentalIndex rentalUser={rentalUser} />
            }
        </>

    )
}

export default UserManagement