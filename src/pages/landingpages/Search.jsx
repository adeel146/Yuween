import React, { useState } from 'react'
import Layout from '../../components/layouts/mainLayout/MainLayout'
import BreadCums from '../../components/MainLandingComp/breadCums/BreadCums'
import Left from '../../components/MainLandingComp/search/Left'
import Right from '../../components/MainLandingComp/search/Right'
import { FiFilter } from 'react-icons/fi'
import Sidebar from '../../components/MainLandingComp/search/Sidebar'
import { AiFillCalendar } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'
import SearchLoader from '../../components/MainLandingComp/search/SearchLoader'
import { useEffect } from 'react'


const Search = () => {
    const [filter, setFilter] = useState(false)
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2500)
    }, [])



    return (
        <Layout>
            {
                loading ?
                    <SearchLoader />
                    :
                    <>
                        {/* <div className=' lg:px-[165px] px-5'> */}
                        {/* <div className='md:block lg:hidden tablet:block xtra-small:block hidden'> */}
                             { filter && <Sidebar sidebarOpen={filter} setSidebarOpen={setFilter} /> }
                        {/* </div> */}
                        <div className=' container mx-auto xl:px-[110px] lg:px-[3px]  lg:m-auto px-5 xtra-small:px-1 md:px-5  xl:pt-[49px] pt-5'>
                            <div className='flex'>
                                <div className='flex justify-between  '>
                                    <BreadCums left="Accueil" middle="" right="Recherche" leftLink="/" />
                                </div>


                            </div>
                            <div className='flex md:flex-row  md:flex-nowrap rounded-lg lg:flex-row flex-col lg:flex-nowrap   w-full  flex-wrap'>
                                <div className=' xl:w-[53%] lg:w-[53%] md:w-[53%] 2xl:w-[54%]  w-full  '>
                                    <div className='xl:flex lg:flex md:flex grid grid-cols-3 gap-5'>
                                        <div className='border flex items-center xl:w-full lg:w-full md:w-full col-span-2 h-[50px] bg-white rounded-md px-2'>
                                            <MdLocationOn className='text-[#FF8C00] text-[30px]' />
                                            <input onFocus={() => setActive(true)} type='text' placeholder='Abidjan' className='w-full placeholder:text-[#ACACAC] text-[15px] bg-transparent h-full focus:outline-none' />

                                        </div>
                                        <div className='xl:hidden lg:hidden md:hidden'>
                                            <div className='rounded-md bg-[#D16A00] h-full  flex justify-center items-center'>
                                                <div onClick={() => setFilter(!filter)} className='mt-1' >
                                                    <FiFilter className='text-[20px]  text-white' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='xl:flex grid grid-cols-2 gap-2 xl:mt-0 lg:mt-0 md:mt-0 mt-3  lg:ml-3 md:ml-9'>

                                    <div className={`lg:block  lg:w-[256px] md:w-[190px]  w-full`}>
                                        <div className='border flex items-center h-[50px] bg-white rounded-md xl:px-2 '>
                                            <AiFillCalendar className='text-[#FF8C00] text-[30px] mx-2' />
                                            <input type='text' placeholder='Tue 16 Feb, 10:00' className='w-full placeholder:text-[#ACACAC] text-[15px] bg-transparent h-full focus:outline-none' />
                                        </div>
                                    </div>
                                    <div className={` lg:block  lg:w-[258px] md:w-[190px]  w-full lg:ml-3 md:ml-4 `}>
                                        <div className='border flex items-center h-[50px] bg-white rounded-md xl:px-2 '>
                                            <AiFillCalendar className='text-[#FF8C00] text-[30px] mx-2' />
                                            <input type='text' placeholder='Tue 16 Feb, 10:00' className='w-full placeholder:text-[#ACACAC] text-[15px] bg-transparent h-full focus:outline-none' />
                                        </div>
                                    </div>


                                </div>

                            </div>
                            <div className='flex lg:flex-nowrap md:flex-nowrap flex-wrap h-full mt-[44px]'>

                                <div className={` ${filter ? 'md:hidden tablet:hidden xtra-small:hidden hidden' : 'lg:block md:block hidden'}  lg:w-[30%] md:w-[30%] w-full h-full`}>
                                    <Left />
                                </div>
                                <div className='w-full '>
                                    <Right />
                                </div>


                            </div>
                        </div>
                    </>
            }
        </Layout>

    )
}

export default Search