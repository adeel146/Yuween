import React from 'react'
import closer from '../../../assests/newDesign/prim_habit.svg'


const Habits = () => {
  return (
    // <div className='  container mx-auto xl:px-[110px]   lg:m-auto px-3 md:px-7 lg:pt-[150px] pt-6 lg:pb-[150px] pb-6'>
    //   <h2 className='font-bold lg:text-[40px] text-[30px] lg:leading-[64px] md:leading-[45px] lg:max-w-[800px] md:max-w-[550px] w-full text-[#444444]'>Facilitez davantage vos habitudes et celles de vos équipes</h2>
    //   <div className='flex lg:flex-nowrap md:flex-nowrap tablet:flex-nowrap  flex-wrap items-center pt-[40px] '>
    //     <div className='lg:max-w-[550px]  w-full'>
    //       <ul>
    //         <li className='flex items-start'>
    //           <img src={lock} alt="closer_img" className=' object-contain' />
    //           <div className='px-3'>
    //             <h2 className='text-[#444444] leading-[28px] text-[20px] font-semibold'>Moins de contraintes</h2>
    //             <p className='text-[#5A5A5A]  leading-[26px] text-[18px] pt-[10px]'>Plus nécessaire de se déplacer, gagnez du temps et faites tout à partir de vos bureaux ou chez vous.</p>

    //           </div>
    //         </li>
    //         <li className='flex items-start my-5'>
    //           <img src={calender} alt="closer_img" className=' object-contain' />
    //           <div className='px-3'>
    //             <h2 className='text-[#444444]  leading-[28px] text-[20px] font-semibold'>Réservez au dernier moment</h2>
    //             <p className='text-[#5A5A5A]  leading-[26px] text-[18px] pt-[10px]'>Votre statut vous confère la possibilité de réserver un véhicule jusqu'à quatre(4) heures avant le début de la location.</p>

    //           </div>
    //         </li>
    //         <li className='flex items-start'>
    //           <img src={doller} alt="closer_img" className=' object-contain' />
    //           <div className='px-3'>
    //             <h2 className='text-[#444444] font-semibold leading-[28px] text-[20px]'>Paiement en ligne</h2>
    //             <p className='text-[#5A5A5A] text-[18px] leading-[26px] pt-[10px] '>Un unique moyen de paiement pour toutes vos équipes. Vos reçus sont immédiatement générés au nom de votre entreprise avec le détail de vos opérations.</p>

    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className='lg:py-0 py-5 lg:pl-20 tablet:flex tablet:justify-center tablet:items-center flex justify-center text-center '>
    //       <img src={habit} alt="closer_img" className='object-cover lg:w-auto w-[70%] tablet:w-auto md:w-auto' />
    //     </div>
    //   </div>
    // </div>

    <div className='bg-[#F8F8F8] xl:mt-10 mt-10'>
      <div className=' container mx-auto xl:px-[110px]  lg:m-auto px-5 md:px-5 lg:py-20 py-5'>
        <h2 className='font-bold lg:text-[31px] text-[22px]  lg:leading-[58px]  max-w-[750px] text-[#18191F]'> Facilitez davantage vos habitudes et celles de <span className='text-[#FF8C00]'>vos équipes</span></h2>
        <div className='flex xl:flex-nowrap md:flex-wrap flex-wrap justify-between items-center pt-[48px] '>
          <div className=' lg:pt-5 pt-2 xl:w-[60%] lg:w-[60%]'>
            <ul>
              <li className='bg-white shadow-md rounded-lg border-l-4 border-[#D16A00]  p-4'>
                <h2 className='text-[#D16A00] font-sans lg:text-[18px] md:text-[18px] text-[14px] lg:leading-[32.68px] font-semibold'>Moins de contraintes</h2>
                <p className='text-[#5A5A5A] lg:text-[16p4] md:text-[16p2] text-[16p2]  leading-[24.51px] pt-[16px]'>Plus nécessaire de se déplacer, gagnez du temps et faites tout à partir de vos bureaux ou chez vous.</p>
              </li>
              <li className='py-5 bg-white shadow-md rounded-lg border-l-4 border-[#D16A00]  p-4 my-3'>
                <h2 className='text-[#D16A00] font-sans lg:text-[18px] md:text-[18px] text-[14px] font-semibold'>Réservez au dernier moment</h2>
                <p className='text-[#5A5A5A] lg:text-[14px] md:text-[12px] text-[12px] pt-[16px] '>Votre statut vous confère la possibilité de réserver un véhicule jusqu'à quatre(4) heures avant le début de la location.</p>
              </li>
              <li className='bg-white shadow-md rounded-lg border-l-4 border-[#D16A00]  p-4'>
                <h2 className='text-[#D16A00] font-sans lg:text-[18px] md:text-[18px] text-[14px] font-semibold'>Paiement en ligne</h2>
                <p className='text-[#5A5A5A] lg:text-[14px] md:text-[12px] text-[12px]  pt-[16px]'>Un unique moyen de paiement pour toutes vos équipes. Vos reçus sont immédiatement générés au nom de votre entreprise avec le détail de vos opérations.</p>
              </li>
            </ul>
          </div>
          <div className='pt-2 xl:w-[50%] xl:ml-20  md:w-[70%] lg:w-[50%] flex justify-center items-center  lg:ml-20 xl:mt-0 mt-4'>
            <img src={closer} alt="closer_img" className='object-cover w-full h-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Habits