import React from 'react'
import closer from '../../../assests/newDesign/clos_1.svg'
const Closer = () => {
  return (
    <>
      {/* <div className=' lg:px-[165px] md:px-[50px] px-5 lg:py-20 py-5'> */}
      <div className=' container mx-auto xl:px-[110px]    lg:m-auto px-3 md:px-5 lg:py-20 py-5'>
        <h2 className='font-bold lg:text-[31px] text-[20px]  lg:leading-[58px] md:text-[36px] max-w-[700px] text-[#18191F]'>Nous sommes plus proches de vous que <span className='text-[#FF8C00]'>vous ne l’imaginez</span></h2>
        <div className='flex xl:flex-nowrap md:flex-nowrap flex-wrap justify-between items-center pt-[48px] '>
          <div className=' lg:pt-5 pt-2 w-[60%]'>
            <ul>
              <li className='bg-white shadow-md rounded-lg border-l-4 border-[#D16A00]  p-4'>
                <h2 className='text-[#D16A00] font-sans lg:text-[18px] md:text-[18px] text-[14px] lg:leading-[32.68px] font-semibold'>Un service client disponible</h2>
                <p className='text-[#5A5A5A] lg:text-[16p4] md:text-[16p2] text-[16p2]  leading-[24.51px] pt-[16px]'>Votre satisfaction est au centre de nos priorités. Notre équipe d’assistance clients est disponible 6j/7 de 08h00 à 20h00</p>
              </li>
              <li  className='py-5 bg-white shadow-md rounded-lg border-l-4 border-[#D16A00]  p-4 my-3'>
              <h2 className='text-[#D16A00] font-sans lg:text-[18px] md:text-[18px] text-[14px] font-semibold'>Une assistance 24h/24 en cas de panne ou d’accident</h2>
                <p className='text-[#5A5A5A] lg:text-[14px] md:text-[12px] text-[12px] pt-[16px] '>Nous vous offrons la possibilité de bénéficier d’un contrat d’assistance à tout moment si votre véhicule vient à être en panne et doit être remorqué.</p>
              </li>
              <li className='bg-white shadow-md rounded-lg border-l-4 border-[#D16A00]  p-4'>
              <h2 className='text-[#D16A00] font-sans lg:text-[18px] md:text-[18px] text-[14px] font-semibold'>Des conseils pour une assurance adaptée pour votre location</h2>
                <p className='text-[#5A5A5A] lg:text-[14px] md:text-[12px] text-[12px]  pt-[16px]'>Nous vous recommandons de prendre une assurance qui protège votre véhicule et votre locataire qu’il soit le chauffeur ou non.</p>
              </li>
            </ul>
          </div>
          <div className='pt-2 w-[50%] ml-20'>
            <img src={closer} alt="closer_img" className='object-cover w-full h-full' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Closer