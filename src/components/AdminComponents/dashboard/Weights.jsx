import React from 'react'
import fafc from '../../../assests/fafc.svg'
import owner from '../../../assests/owner.svg'
import vihical from '../../../assests/vihical.svg'
import car from '../../../assests/car1.svg'
import LoaderSpinner from '../../../util/LoaderSpinner'
const Weights = ({ Static }) => {

    return (
        <>
            <div className='grid lg:grid-cols-2 xtra-small:grid-cols-1 xxtra-small:grid-cols-1 tablet:grid-cols-2 md:grid-cols-2 gap-5'>
                <div className='shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-md border-b-[3px] border-[#2BA676]   h-auto p-4'>
                    <div className='flex flex-nowrap md:flex-wrap lg:justify-between justify-between md:justify-center '>
                        <h2 className='text-[#444444] text-[14px]  lg:order-0 md:order-1  leading-[24px] max-w-[150px]'>Total Earnings</h2>
                        <div className='rounded-full bg-[#ECFFF3] p-3 h-[60px] w-[60px] flex align-center justify-center lg:order-1 md:order-0 '>
                            <img src={fafc} alt="fcfa_imag" className="object-fill" />
                        </div>
                    </div>
                    <div>
                        {
                            Static?.earnings ?
                                <h2 className='lg:text-[24px] text-[20px] leading-[32px] font-medium lg:mt-2  text-[#2BA676] '>{Static?.earnings} FCFA</h2>
                                :
                                <LoaderSpinner type="weight" color="#2BA676" />
                        }
                    </div>
                </div>
                <div className='shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-md border-b-[3px] border-[#FF8C00]   h-auto p-4'>
                    <div className='flex flex-nowrap md:flex-wrap lg:justify-between justify-between md:justify-center'>

                        <h2 className='text-[#444444] text-[14px] lg:order-0 md:order-1 leading-[24px] max-w-[150px]'>Total Car Owners</h2>
                        <div className='rounded-full bg-[#FFF2E6] p-3 h-[60px] w-[60px] flex align-center justify-center lg:order-1 md:order-0 '>
                            <img src={owner} alt="fcfa_imag" className="object-fill" />
                        </div>
                    </div>
                    <div>
                        {
                            Static?.car_owners ?
                                <h2 className='lg:text-[24px] text-[20px] lg:text-left md:text-center leading-[32px] font-medium lg:mt-2  text-[#FF8C00] '>{Static?.car_owners}</h2>
                                :
                                <LoaderSpinner type="weight" color="#FF8C00" />
                        }
                    </div>
                </div>

            </div>

            <div className='grid lg:grid-cols-2 xtra-small:grid-cols-1 xxtra-small:grid-cols-1 md:grid-cols-2 tablet:grid-cols-2 gap-5 mt-5'>

                <div className='shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-md border-b-[3px] border-[#3459AB] h-auto p-4'>
                    <div className='flex flex-nowrap md:flex-wrap lg:justify-between justify-between md:justify-center'>
                        <h2 className='text-[#444444] lg:text-left md:text-center text-[14px] lg:order-0 md:order-1 leading-[24px] sidebar-expanded:max-w-[130px]  max-w-[200px]'> Total Commercial Vehicle</h2>
                        <div className='rounded-full bg-[#ECF2FF] p-3 h-[60px] w-[60px] flex align-center justify-center lg:order-1 md:order-0'>
                            <img src={vihical} alt="fcfa_imag" className="object-fill" />
                        </div>
                    </div>
                    <div>
                        {
                            Static?.commercial_vehicles ?
                                <h2 className='lg:text-[24px] text-[20px] lg:text-left md:text-center leading-[32px] font-medium lg:mt-2  text-[#3459AB] '>{Static?.non_commercial_vehicles}</h2>
                                :
                                <LoaderSpinner type="weight" color="#3459AB" />
                        }
                    </div>
                </div>
                <div className='shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-md border-b-[3px] border-[#AA1643]   h-auto p-4'>
                    <div className='flex flex-nowrap md:flex-wrap lg:justify-between justify-between md:justify-center'>
                        <h2 className='text-[#444444] text-[14px] lg:order-0 md:order-1 leading-[24px] max-w-[200px] sidebar-expanded:max-w-[130px]'>Total Non-Commercial Vehicle</h2>
                        <div className='rounded-full bg-[#FFF2E6] p-3 h-[60px] w-[60px] flex align-center justify-center lg:order-1 md:order-0'>
                            <img src={car} alt="fcfa_imag" className="object-fill" />
                        </div>
                    </div>
                    <div>
                        {
                            Static?.non_commercial_vehicles >= 0 ?
                                <h2 className='lg:text-[24px] text-[20px] lg:text-left md:text-center leading-[32px] font-medium lg:mt-2  text-[#AA1643] '>{Static?.commercial_vehicles}</h2>
                                :
                                <LoaderSpinner type="weight" color="#AA1643" />
                        }
                    </div>
                </div>

            </div>

        </>
    )
}

export default Weights