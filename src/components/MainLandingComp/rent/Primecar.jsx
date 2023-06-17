import React from 'react'
import primcar from '../../../assests/newDesign/prim_1.svg'
import primcar2 from '../../../assests/newDesign/prim_2.svg'
import android from '../../../assests/svg/googleplay.svg'
import apple from '../../../assests/svg/apple.svg'
const Primecar = () => {
  return (
    <>
      {/* <div className=' lg:px-[165px] px-5 lg:py-20 pb-5'> */}
      <div className=' container mx-auto xl:px-[110px]   lg:m-auto px-3  md:px-5 lg:py-20 py-10  pb-5'>
        <div className='text-center'>
          <h2 className='lg:text-[31px] font-sans text-[20px] text-[#444444] lg:leading-[58px] font-bold text-center max-w-[950px] mx-auto'>Alors, vous faites déjà la location de véhicules, ou vous souhaitez en faire avec Primecar?</h2>
        </div>

        <div className='pt-10 text-center'>
          <h2 className='text-[18px] text-[#444444]'>Téléchargez l’application</h2>
          <div className='flex justify-center items-center pt-[8px]'>
            <img src={apple} alt="social_login" className='object-cover lg:w-[15%] md:w-[17%] tablet:w-[22%] w-[23%]' />
            <img src={android} alt="social_login" className='object-cover lg:w-[18%] md:w-[20%] w-[28%] tablet:w-[25%]  mx-2' />
            {/* <img src={apple} alt="social_login" className='object-contain  w-[160px] h-[51px] ' />
            <img src={android} alt="social_login" className='object-contain  w-[160px] h-[51px] rounded-md  mx-2' /> */}
          </div>
        </div>
        <div className="grid grid-cols-2  pt-10">
          <div className='p-8'>
            <div className=' text-center '>
              <h2 className='text-[#444444] lg:text-[18px] md:text-[18px] text-[14px] leading-[32px] font-semibold font-sans'>Vous êtes un particulier ?</h2>
              <p className='text-[#5A5A5A] leading-[24.51px] lg:text-[14px] md:text-[14px] text-[12px] pt-3'>Et vous souhaitez vous lancer dans l’activité de location de véhicules ?</p>
            </div>
            <div className='pt-10'>
              <img src={primcar} alt="prime_car" className='object-cover lg:w-auto md:w-auto tablet:w-auto w-[70%]' />
            </div>
          </div>
          <div className='flex justify-center items-center flex-col border-l-2 p-8'>
            <div className='  text-center'>
              <h2 className='text-[#444444] font-semibold font-sans leading-[32px] lg:text-[18px] md:text-[18px] text-[14px]'>Vous avez déjà une flotte de véhicules à disposition ?</h2>
              <p className='text-[#5A5A5A] leading-[24.51px] font-sans lg:text-[14px] md:text-[14px] text-[12px] pt-3'>Et vous souhaitez la rendre plus accessible au plus grand nombre ?</p>
            </div>
            <div className='lg:my-0 md:my-0 mb-5 pt-10 '>
              <img src={primcar2} alt="prime_car" className='object-cover lg:w-auto md:w-auto tablet:w-auto w-[70%]' />
            </div>
          </div>

        </div>


      </div>
    </>
  )
}

export default Primecar