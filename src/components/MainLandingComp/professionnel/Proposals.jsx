import React from 'react'
import perposel from '../../../assests/newDesign/nose_img.svg'
const Proposals = () => {
  return (
    <>
      <div className='  container mx-auto xl:px-[110px]   lg:m-auto px-5 md:px-5 xl:pt-[75px] pt-5'>
        <div className='flex lg:flex-nowrap tablet:flex-nowrap md:flex-nowrap flex-wrap items-center'>
          <div className=' xl:order-0 md:order-0 md:order-0 order-1 xl:mt-0  mt-5'>
            <img src={perposel} alt="perposel" className='object-cover lg:w-auto w-[90%] tablet:w-auto md:w-auto' />
          </div>
          <div className='lg:pl-20 xl:pl-20 md:pl-20 tablet:pl-16 xl:order-1 md:order-1 tablet:order-1 order-0'>
              <h1 className='font-bold lg:text-[31px] lg:leading-[64px] md:leading-[45px] text-[20px] text-[#444444]'>Nos propositions, <span className="text-[#D16A00]">vos exigences</span></h1>
            <p className=' text-[14px] py-2 text-[#5A5A5A] leading-[26px]'>Nous prêtons attention à vos besoins et nous faisons ce qu’il faut pour vous.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Proposals