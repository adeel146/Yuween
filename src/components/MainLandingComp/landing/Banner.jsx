import React from 'react'
import bannerImge from '../../../assests/newDesign/landing_banner.svg'
import { Link } from 'react-router-dom'
import { MdLocationOn } from 'react-icons/md'
import { AiFillCalendar } from 'react-icons/ai'

const Banner = () => {
    return (
        <>
            <div className='landing_bg_shade pb-8'>
                <div className='container mx-auto xl:px-[110px]   md:px-5 px-3 pt-[24px] '>
                    <div className=' h-full  '>
                        <div className='text-center max-w-[730px] m-auto '>
                            {/* <p className='text-[#72757A] font-medium lg:text-[28px] text-[20px]'>Fini les tracas </p> */}
                            <h2 className='lg:text-[48px] text-[28px] pb-5 text-[#444444] lg:leading-[65px] md:leading-[56px] font-semibold '>Louez votre véhicule pour <span className='text-[#FF8C00]'>satisfaire vos objectifs</span></h2>
                            <span className='lg:text-[18px] text-[14px] text-[#444444]'>C’est simple et en quelques clics</span>
                        </div>
                        <div className='flex justify-center '>
                            <img src={bannerImge} alt="banner_img" className='object-cover' />
                        </div>
                    </div>
                    <div className=' lg:-mt-[30px] ' >
                        
                        {/* large display   */}
                        <div className=' bg-white mt-10 px-4  shadow-md p-2 rounded-lg lg:flex-row flex-col flex lg:flex-nowrap md:flex-nowrap tablet:flex-nowrap w-full  flex-wrap'>
                            <div className='lg:w-[35%]  xl:w-[43%] 2xl:w-[54%]  w-full '>
                                <label className='text-[#667085] text-[12px]  '>Où recherchez vous votre véhicule ?</label>
                                <div className=' flex xl:mt-0 xl:mb-0 mt-3 mb-3 items-center h-[50px] xl:bg-transparent bg-[#F4F4F4]  rounded-md px-2'>
                                    <input  type='text' placeholder='Abidjan' className={`w-full placeholder:text-[#606060] xl:bg-transparent xl:mt-0  bg-[#F4F4F4] h-full focus:outline-none`} />
                                    <MdLocationOn className='text-[#FF8C00] text-[30px] xl:hidden block' />
                                </div>
                            </div>
                            <div className='flex lg:flex-nowrap md:flex-nowrap flex-wrap  lg:ml-9 '>

                                <div className={`lg:block  lg:w-[170px]   w-full`}>
                                    <label className='text-[#667085] text-[12px] '>Date</label>
                                    <div className=' xl:mt-0 xl:mb-0 mt-3 mb-3 flex items-center justify-between px-2 h-[50px]  rounded-md xl:bg-transparent bg-[#F4F4F4] '>
                                        <input type='text' placeholder='Tue 15 Feb, 09:00' className='w-full placeholder:text-[#606060] xl:bg-transparent bg-[#F4F4F4] rounded-md xl:px-0 px-2  h-full focus:outline-none' />
                                        <AiFillCalendar className='text-[#FF8C00] text-[30px] xl:hidden block' />
                                    </div>
                                </div>
                                <div className={` lg:block  lg:w-[180px]    w-full lg:mx-9 md:mx-5`}>
                                    <label className='text-[#667085]  text-[12px] '>Fin</label>
                                    <div className='xl:mt-0 xl:mb-0 mt-3 mb-3 flex items-center h-[50px] xl:bg-transparent bg-[#F4F4F4]  rounded-md '>
                                        <input type='text' placeholder='Tue 15 Feb, 09:00' className='w-full placeholder:text-[#606060] xl:bg-transparent bg-[#F4F4F4] rounded-md xl:px-0 px-2  h-full focus:outline-none' />
                                        <AiFillCalendar className='text-[#FF8C00] xl:hidden block mx-2 text-[30px]' />
                                    </div>
                                </div>

                                <div className='pt-6 xl:mb-0 mb-3 lg:w-auto md:mt-3  w-full 2xl:w-auto'>
                                    <Link to="/search" className=''>
                                        <button className={`bg-[#FF8C00] text-white md:py-3 xl:py-2 lg:px-8 w-full py-2 rounded-md`}>Rechercher</button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner