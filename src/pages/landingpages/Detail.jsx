import React, { useState } from 'react'
import Layout from '../../components/layouts/mainLayout/MainLayout'
import BreadCums from '../../components/MainLandingComp/breadCums/BreadCums'
// import Left from '../../components/MainLandingComp/search/Left'
import Right from '../../components/MainLandingComp/detail/Right'
// import { FiFilter } from 'react-icons/fi'
import Sidebar from '../../components/MainLandingComp/search/Sidebar'

const Detail = () => {
    const [filter, setFilter] = useState(false)

    return (
        <Layout>
            {/* <div className=' lg:px-[165px] px-5'> */}
            <div className='md:block lg:hidden tablet:block xtra-small:block hidden'>
                <Sidebar sidebarOpen={filter} setSidebarOpen={setFilter} />
            </div>

            <div className=' container mx-auto xl:px-[110px]   lg:m-auto px-5 xl:pt-[49px]pt-[20px] '>
                <div className='flex justify-between'>
                    <BreadCums left="Accueil" right="Détails" middle="Recherche" leftLink="/" middleLink="/search" />
                    {/* <div onClick={() => setFilter(!filter)} className='mt-1' >
                        <FiFilter className='text-[25px] lg:hidden  ' />
                    </div> */}
                </div>
                {/* <div className='flex lg:flex-nowrap  flex-wrap h-full mt-[44px]'> */}
                {/* <div className={` ${filter ? 'md:hidden tablet:hidden xtra-small:hidden block' : 'lg:block md:hidden hidden'}  lg:w-[30%] md:w-[30%] w-full h-full`}>
                        <Left />
                    </div> */}
                {/* <div className='w-full lg:mt-0 lg:pl-6 md:pl-4 md:pr-5 right_Section mt-8 lg:border-l'> */}
                <Right />
                {/* </div> */}
                {/* </div> */}
            </div>
        </Layout>
    )
}

export default Detail