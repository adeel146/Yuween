import React from 'react'
import user from '../../../assests/newDesign/prof.svg'
const Banner = () => {
  return (
    <>
      <div className='  container mx-auto xl:px-[110px] pb-10  lg:m-auto px-5 md:px-5'>

        <div className='flex items-center lg:flex-nowrap md:flex-nowrap tablet:flex-nowrap  flex-wrap   '>

          <div className='xl:w-[37%] lg:w-[37%] md:w-[35%] tablet:w-[36%]'>
            <img src={user} alt="user_img" className='object-cover ' />
          </div>

          <div className='xl:pl-20 lg:pl-20 md:pl-20 tablet:pl-14 xl:pt-0 pt-5'>
            <h1 className='font-semibold font-sans max-w-[450px] mr-auto lg:text-[31px] text-[22px] text-[#444444]'>Nous simplifions le quotidien <span className='text-[#FF8C00]'>des professionnels</span></h1>
            <p className=' text-[14px] py-6 md:py-2 text-[#667085]'>Obtenez un véhicule en un clin d’œil, pour vous et vos équipes</p>
            <button className='text-[text-16px] mt-5 md:mt-2 px-8 py-3 md:py-2 rounded-md font-medium bg-[#FF8C00] text-white'>Ça m’intéresse !</button>

          </div>

        </div>
      </div>
    </>
  )
}

export default Banner