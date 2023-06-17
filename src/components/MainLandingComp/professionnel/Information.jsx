import React from 'react'
import info from '../../../assests/newDesign/prof_contect.svg'
import info2 from '../../../assests/newDesign/contact_mob.svg'
const Information = () => {
  return (
    <>
      <div className=' xl:mb-[40px]'>
        <div className=' container mx-auto xl:px-[110px]   lg:m-auto px-5 md:px-5 xl:pt-[90px] pt-0 pb-3 xl:pb-[90px]'>
          <div className='flex xl:flex-nowrap flex-wrap justify-between items-center xl:pt-[48px] pt-2'>
            <div className='flex justify-center items-center w-[50%]'>
              <img src={info} alt="information_img" className='object-cover md:mt-5 lg:w-auto xl:block md:block hidden  w-full tablet:w-auto md:w-auto' />
            </div>
            <div className='xl:pl-20'>
              <h2 className='font-bold lg:text-[31px] xl:pt-10 py-4 lg:leading-[50px] md:leading-[45px] text-[20px]  text-left  text-[#444444]'>Renseignez vos informations, nous nous <span className='text-[#FF8C00]'>occupons de vous</span></h2>
              <img src={info2} alt="information_img" className='object-cover md:mt-5 lg:w-auto  block xl:hidden md:hidden  w-full tablet:w-auto md:w-auto' />

              <form className='pt-[2rem]'>
                <div className='grid grid-cols-2  lg:gap-10 gap-5'>
                  <div className='flex flex-col'>
                    <label className='text-[16px] leading-[24px] text-[#5A5A5A] pb-2'>Nom</label>
                    <input type="text" className='border rounded-md h-[48px] border-[#ACACAC] px-2' />
                  </div>
                  <div className='flex flex-col'>
                    <label className='text-[16px] leading-[24px] text-[#5A5A5A] pb-2'>Prénom</label>
                    <input type="text" className='border rounded-md h-[48px] border-[#ACACAC] px-2' />
                  </div>
                </div>
                <div className='grid grid-cols-2  lg:gap-10 gap-5 pt-4'>
                  <div className='flex flex-col'>
                    <label className='text-[16px] leading-[24px] text-[#5A5A5A] pb-2'>Téléphone</label>
                    <input type="tel" className='border rounded-md h-[48px] border-[#ACACAC] px-2' />
                  </div>
                  <div className='flex flex-col'>
                    <label className='text-[16px] leading-[24px] text-[#5A5A5A] pb-2'>Email</label>
                    <input type="email" className='border rounded-md h-[48px] border-[#ACACAC] px-2' />
                  </div>
                </div>
                <div className='pt-4'>
                  <div className='flex flex-col'>
                    <label className='text-[16px] leading-[24px] text-[#5A5A5A] pb-2'>Nom de votre société</label>
                    <input type="text" className='border rounded-md h-[48px] border-[#ACACAC] px-2' />
                  </div>
                </div>

                <div className='pt-10 flex justify-start'>
                  <button className='bg-[#FF8C00] leading-[24px] text-white w-[227px] h-[48px] rounded-md'>Ouvrir mon compte</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Information