import React from 'react'
import fixez from '../../../assests/newDesign/mn_1.svg'
import car from '../../../assests/newDesign/mn_2.svg'
import mobile from '../../../assests/newDesign/mn_3.svg'
const Management = () => {
  return (
    <>
      {/* <div className='bg-[#FFFBF7] md:px-[50px] lg:px-[165px] px-5 py-20'> */}
      <div className='bg-[#FFFBF7]'>
        <div className='  container mx-auto xl:px-[110px]   lg:m-auto md:px-5  px-3 lg:pt-[50px] pt-[20px] pb-[90px]'>
          <div className='text-center pt-[2rem]  m-auto'>
            <h2 className='lg:text-[31px] text-[25px] font-sans lg:leading-[58px] font-bold text-[#18191F] lg:pb-0 md:pb-0 pb-5  '>La gestion de votre véhicule est sous <span className='text-[#FF8C00]'>votre entière responsabilité</span></h2>
            <p className='lg:text-[14px] md:text-[14px] font-sans text-[12px] text-[#5A5A5A]  font-medium leading-[32px]  '>En tant que propriétaire, gardez le contrôle sur votre véhicule et mettez-le à disposition quand vous le jugez nécessaire.</p>
          </div>
          <div className='grid lg:grid-cols-3 tablet:grid-cols-1 grid-cols-1  md:grid-cols-1 lg:gap-0  gap-5 pt-[4rem]'>
            <div className='text-center'>
              <div className='flex justify-center '>
                <img src={fixez} alt="fixez_img" className='object-cover ' />

              </div>
              <h2 className='text-[#444444] lg:text-[20px] max-w-[300px] m-auto md:text-[24px] text-[18px]  leading-[32px] pt-4 font-semibold'>Fixez le prix journalier de la location</h2>
              <p className=' text-[#5A5A5A] lg:text-[18px] md:text-[18px] text-[15px] leading-[32px] pt-5 px-5 text-center'>Vous êtes libre de fixer le prix de la location de votre véhicule, notre outil vous aide à adapter votre prix à la demande.</p>
            </div>
            <div className='text-center '>
              <div className='flex justify-center '>
                <img src={car} alt="fixez_img" className='object-cover ' />

              </div>
              <h2 className='text-[#444444] lg:text-[20px] md:text-[24px] text-[18px]  leading-[32px] pt-4 font-semibold'>Gérez la disponibilité de votre véhicule</h2>
              <p className=' text-[#5A5A5A] lg:text-[17px] max-w-[350px] m-auto md:text-[17px] text-[15px] leading-[32px] pt-5 px-5 text-center'>Un mode veille existe pour mettre en hibernation votre véhicule sur la plateforme quand il n’est pas disponible à la location.</p>
            </div>
            <div className='text-center '>
              <div className='flex justify-center  '>
                <img src={mobile} alt="fixez_img" className='object-cover ' />

              </div>
              <h2 className='text-[#444444] lg:text-[20px] max-w-[300px] m-auto md:text-[24px] text-[18px]  leading-[32px] pt-4 font-semibold'>Le tout à partir de votre smartphone</h2>
              <p className=' text-[#5A5A5A] text-center max-w-[350px] m-auto lg:text-[17px] md:text-[17px] text-[15px] leading-[32px] pt-5 px-5 '>Notre application mobile est accessible à tout moment à partir de votre smartphone. Gérez-y toutes vos opérations de location.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Management