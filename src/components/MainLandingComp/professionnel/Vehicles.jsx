import React from 'react'
import fixez from '../../../assests/newDesign/vehical_1.svg'
import car from '../../../assests/newDesign/vehical_2.svg'
import mobile from '../../../assests/newDesign/vehical_3.svg'
const Vehicles = () => {
  return (
    <>
      <div className='bg-[#FFFBF7] pb-5'>
        <div className=' container mx-auto xl:px-[110px]   lg:m-auto px-3 md:px-5 pb-[50px] md:pb-[40px]'>
          <div className='text-center pt-[100px]  '>
            <h2 className='lg:text-[31px] text-[20px] lg:max-w-[800px]  leading-0 lg:leading-[64px] md:leading-[64px] w-full lg:m-auto md:m-auto font-bold text-[#18191F] '>Des véhicules disponibles, où et <span className='text-[#FF8C00]'>quand vous voulez</span></h2>
            <p className='text-[14px] text-[#5A5A5A] font-medium leading-0 lg:leading-[32px] md:leading-[32px] pt-[5px] '>Fini les déplacements en agence</p>
          </div>
          <div className='grid lg:grid-cols-3 grid-cols-1 tablet:grid-cols-1  md:grid-cols-3 pt-[25px]  '>
            <div className='text-center '>
              <div className='flex justify-center'>
                <img src={fixez} alt="fixez_img" className='object-contain' />
              </div>
              <h2 className='text-[#444444] text-[18px] lg:max-w-[250px] m-auto leading-[32px] pt-4 font-semibold'>Réservez rapidement un véhicule</h2>
              <p className=' text-[#5A5A5A] lg:max-w-[350px] m-auto text-[14px] leading-[26px] pt-[18px] px-5 text-center'>Nous vous donnerons un accès unique.
                Plusieurs personnes peuvent gérer ce même
                compte pour votre entreprise
                et faire des réservations</p>
            </div>
            <div className='text-center lg:py-0 md:py-0 md:pb-6 tablet:py-0 py-5'>
              <div className='flex justify-center'>
                <img src={car} alt="fixez_img" className='object-contain' />

              </div>
              <h2 className='text-[#444444] text-[18px] lg:max-w-[200px] m-auto leading-[32px] pt-4 font-semibold'>Réservez rapidement
                un véhicule</h2>
              <p className=' text-[#5A5A5A] lg:max-w-[280px] m-auto  text-[14px] leading-[26px] pt-[18px] px-5 text-center'>Des véhicules disponibles selon vos besoins
                du moment que la location soit
                pour quelques semaines ou
                plusieurs mois.</p>
            </div>
            <div className='text-center'>
              <div className='flex justify-center'>
                <img src={mobile} alt="fixez_img" className='object-contain' />
              </div>
              <h2 className='text-[#444444] text-[18px] lg:max-w-[200px] m-auto leading-[32px] pt-4 font-semibold'>Soyez livré à votre convenance</h2>
              <p className=' text-[#5A5A5A] lg:max-w-[280px] m-auto  text-[14px] leading-[26px] pt-[18px] px-5 text-center'>Que ce soit une voiture ou un utilitaire,
                avec ou sans chauffeur, votre
                véhicule vous attendra au point
                de rendez-vous.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Vehicles