import React from 'react'
import fafc from '../../../assests/cus1.svg'
import cus2 from '../../../assests/cus2.svg'
import cus3 from '../../../assests/cus3.svg'
import cus4 from '../../../assests/cus4.svg'
const OwnerWeights = () => {
    return (
        <>
            <div className='grid lg:grid-cols-2 xtra-small:grid-cols-2  gap-5'>
                <div className='shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]  rounded-md   p-5'>
                    <div className='flex justify-between  '>
                        <h2 className='text-[#444444] text-[14px] leading-[24px] max-w-[150px] tablet-lg:max-w-[200px] '>Total Received Rents</h2>
                        <div className='h-10 w-10 tablet-lg:w-20 tablet-lg:h-auto bg-[#FFEBF1] rounded-full flex items-center  justify-center'>
                            <img src={fafc} alt="fcfa_imag" className="object-fill lg:w-auto tablet-lg:max-w-[30px] w-full" />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-[24px] leading-[32px] font-medium mt-3  text-[#FF8C00] '>50 000</h2>
                    </div>
                </div>
                <div className='shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]  rounded-md   p-5'>
                    <div className='flex justify-between  '>
                        <h2 className='text-[#444444] text-[14px] leading-[24px] max-w-[150px] tablet-lg:max-w-[200px]'>Total Accepted Rents</h2>
                        <div className='h-10 w-10 tablet-lg:w-20 tablet-lg:h-auto bg-[#ECFFF3] rounded-full flex items-center justify-center'>
                            <img src={cus2} alt="fcfa_imag" className="object-cover tablet-lg:max-w-[30px]" />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-[24px] leading-[32px] font-medium mt-3  text-[#FF8C00] '>5000</h2>
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 xtra-small:grid-cols-2  gap-5 mt-5'>
                <div className='shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]  rounded-md   p-5'>
                    <div className='flex justify-between  '>
                        <h2 className='text-[#444444] text-[14px] leading-[24px] max-w-[150px] tablet-lg:max-w-[200px]'>Total Cancelled Rents</h2>
                        <div className='h-10 w-10 tablet-lg:w-20 tablet-lg:h-auto bg-[#FFECEC] rounded-full flex items-center justify-center'>
                            <img src={cus3} alt="fcfa_imag" className="object-cover tablet-lg:max-w-[30px]" />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-[24px] leading-[32px] font-medium mt-3  text-[#FF8C00] '>5000</h2>
                    </div>
                </div>
                <div className='shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]  rounded-md  p-5'>
                    <div className='flex justify-between  '>
                        <h2 className='text-[#444444] text-[14px] leading-[24px] tablet-lg:max-w-[200px]'>Cancelled Rent Reasons</h2>
                        <div className='h-10 w-10 tablet-lg:w-20 tablet-lg:h-auto bg-[#D5C2C2] rounded-full flex items-center justify-center'>
                            <img src={cus4} alt="fcfa_imag" className="object-cover tablet-lg:max-w-[30px]" />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-[24px] leading-[32px] font-medium mt-3  text-[#FF8C00] '>5000</h2>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OwnerWeights