import React from 'react'
import Car from '../../../assests/newDesign/searchcar.svg'
import gas from '../../../assests/newDesign/Clip.svg'
import cricle from '../../../assests/newDesign/specification.svg'
import user from '../../../assests/newDesign/seat.svg'
import { IoLocationSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
const Right = () => {
    return (
        <>
            <div className='grid lg:grid-cols-3 xtra-small:grid-cols-2   md:grid-cols-2 tablet:grid-cols-2  search_car sm:grid-cols-1 gap-3 lg:pl-6 md:pl-6 lg:border-l '>
                {
                    Array(12).fill(12).map((_, i) => (

                        <div key={i} className='border border-gray-50 shadow-md bg-white rounded-md p-3 flex-col flex justify-center'>
                            <div className='flex justify-center items-center'>
                                <img src={Car} alt="car" className=' object-cover' />
                            </div>
                            <div>
                                <div className='flex justify-between items-center pt-2'>
                                    <h2 className='text-[17px] font-bold text-[#444444]'>Renault twingo</h2>
                                    {/* <div className='flex justify-between items-center'>
                                        <IoLocationSharp className='text-[#FF8C00]' />
                                        <h2 className='pl-1 text-[#ACACAC] text-[11.57px]'>Abidjan</h2>
                                    </div> */}

                                </div>
                                <div className='flex justify-between pt-2'>
                                    <div className='flex items-center w-full '>
                                        <img src={gas} alt="detail" className='object-cover' />
                                        <h2 className='text-[11.57px] font-medium text-[#ACACAC] pl-1   '>Essence</h2>
                                    </div>
                                    <div className='flex items-center w-full mx-3 '>
                                        <img src={cricle} alt="detail" className='object-cover' />
                                        <h2 className='text-[11.57px] font-medium text-[#ACACAC] pl-1   '> Manuel</h2>
                                    </div>
                                    <div className='flex items-center w-full '>
                                        <img src={user} alt="detail" className='object-cover' />
                                        <h2 className='text-[11.57px] font-medium text-[#ACACAC] pl-1   '>4 Places</h2>
                                    </div>
                                </div>
                                <div className='pt-5'>
                                    <div className='flex '>
                                        <IoLocationSharp className='text-[#FF8C00]' />
                                        <h2 className='pl-1 font-normal text-[#ACACAC] text-[12px]'>4709 Shadowmar drive kenner, LA 70062</h2>
                                    </div>
                                </div>
                                <div className='pt-5'>
                                    <div className='bg-[#F4F4F4] rounded-md py-2'>
                                        <h2 className='text-[#FF8C00] text-center font-sans  text-[14.43px] font-medium'>33 000 FCFA <span className='text-[12.22px] font-normal text-[#ACACAC]'>/8 jours</span></h2>
                                    </div>
                                </div>
                                <div className='pt-4'>
                                    <Link to="/detail">
                                        <button className='bg-[#FF8C00] font-sans font-normal  rounded-md text-center text-white text-[14px] px-8 py-2 w-full'>Voir </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='flex justify-between items-center pt-[73px] pb-[40px] pl-7'>
                <h2 className='text-[#ACACAC] text-[16px] font-medium'>Page 1 sur 12</h2>
                <div className='flex items-center'>
                    <h2 className='font-bold text-[#FF8C00] text-[16px] px-5'>Suivant</h2>
                    <MdKeyboardArrowRight className='text-[25px] text-[#FF8C00] ' />
                </div>
            </div>
        </>
    )
}

export default Right