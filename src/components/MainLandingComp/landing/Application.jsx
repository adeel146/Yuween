import React from 'react'
import android from '../../../assests/svg/googleplay.svg'
import apple from '../../../assests/svg/apple.svg'
import phone from '../../../assests/svg/mobile.svg'
import phone1 from '../../../assests/newDesign/phone-left.svg'
import phone2 from '../../../assests/newDesign/phone-right.svg'
// import SocialButton from '../../downLoadBtn/SocialButton'
const Application = () => {
    return (
        <>
            <div className='application mt-[5rem] h-full lg:pb-0 md:pb-0 pb-5 '>
                {/* <div className=' lg:px-[165px] px-5 text-left items-center '> */}
                <div className=' container mx-auto xl:px-[110px]   lg:m-auto md:px-5 px-5 '>
                    <div className='flex lg:flex-nowrap md:flex-nowrap flex-wrap'>
                        <div className='w-full lg:pt-[5rem] xl:pt-[5rem] md:pt-[3rem]  pt-[2rem] lg:order-0 md:order-0 order-1'>
                            <h1 className='lg:text-[31px] font-sans text-[22px] text-[#444444] font-bold'>Une <span className='text-[#FF8C00]'>application</span> pour vous</h1>
                            <p className='text-[#18191F] font-sans font-normal leading-[20px] text-[14px] md:pt-[14px] pt-[24px]'>Que vous cherchiez une voiture, un camion ou un engin lourd, pour votre besoin du moment, nous vous donnons accès aux meilleures offres. Réservez votre véhicule à partir de notre application, c’est simple, rapide et sans difficulté</p>
                            <div className='pt-[48px] lg:pt-[50px] md:pt-[20px] text-[#444444]'>
                                <h2 className='text-[15px] font-medium font-sans'>Téléchargez l’application</h2>
                                <div className='flex pt-[8px] md:pt-[2px] items-center'>
                                    {/* <SocialButton /> */}

                                    <img src={apple} alt="social_login" className='object-cover lg:w-[30%] md:w-[35%] tablet:w-[22%] w-[40%]' />
                                    <img src={android} alt="social_login" className='object-cover lg:w-[35%] w-[45%] md:w-[40%] tablet:w-[25%]  mx-2' />
                                </div>
                            </div>
                        </div>

                        {/* <div className=' lg:hidden md:hidden  w-full pl-5 md:order-1  order-0'>
                            <div className="lg:hidden flex justify-center items-center tablet:flex tablet:justify-center tablet:items-center">
                                <img src={phone} alt="social_login" className='object-cover tablet:w-[50%] md:w-[80%] w-[50%]  ' />
                            </div>
                        </div> */}

                        <div className='grid grid-cols-2  w-full pl-5 md:order-1  pt-5 lg:order-1 order-0'>

                            <div>
                                <img src={phone1} alt="social_login" className='object-contain md:object-cover   w-full' />
                            </div>
                            <div className='mt-[2rem]'>
                                <img src={phone2} alt="social_login" className='object-contain md:object-cover w-full ' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Application