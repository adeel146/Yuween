import React from 'react'
import car from '../../../assests/newDesign/s_1.svg'
import car2 from '../../../assests/newDesign/s_2.svg'
import car3 from '../../../assests/newDesign/s_3.svg'
// import vector from '../../../assests/newDesign/s_4.svg'
// import vector2 from '../../../assests/svg/Vector 3.svg'
import one from '../../../assests/newDesign/s_4.svg'
import two from '../../../assests/newDesign/s_5.svg'
import three from '../../../assests/newDesign/s_6.svg'
import oneNumber from '../../../assests/newDesign/01.svg'
import twoNumber from '../../../assests/newDesign/02.svg'
import threeNumber from '../../../assests/newDesign/03.svg'

const Services = () => {
    return (
        <>
            <div className='bg-[#FFFBF7] pb-10'>
                {/* <div className=' lg:px-[165px] px-5 py-[6rem]'> */}
                <div className=' container mx-auto xl:px-[90px]  md:px-0 px-3 lg:pt-[50px] md:pt-[90px] pt-[50px] '>
                    <div className='text-center '>
                        <h2 className='lg:text-[31px] text-[22px] font-sans text-[#444444] font-bold'>Comment ça <span className='text-[#FF8C00]'>marche?</span></h2>
                        <p className='lg:text-[14px] pt-[5px] font-sans font-normal text-[13px] text-[#444444]'>Facilitez votre mobilité, un véhicule près de chez vous est prêt pour le déplacement</p>
                    </div>
                    <div className='flex lg:flex-nowrap mt-5 md:flex-nowrap flex-wrap items-center justify-between lg:pt-[70px] pt-[120px] lg:px-[40px] md:px-5 '>
                        <div className=' relative flex justify-center flex-col items-center  w-full'>
                            <div className='lg:mt-5 mt-5 '>
                                <img src={car} alt="Car_img" className='object-cover w-[90px] h-[90px]' />
                            </div>
                            <img src={one} alt="one_img" className='absolute xl:block lg:block hidden  -top-[56px] -right-6 w-[56%] object-cover' />
                            <img src={oneNumber} alt="one_img" className='absolute xl:hidden lg:hidden block -top-[65px] md:-top-[80px] right-12 md:right-8 xtra-small:w-[20%] xtra-small:right-20 tablet:right-40 md:w-[35%] w-[26%] tablet:w-[15%]  object-cover' />
                            <div className='text-center pt-[32px] '>
                                <h1 className='lg:text-[18px] text-[20px] font-semibold'>Trouvez un véhicule</h1>
                                <p className='lg:text-[14px] xl:max-w-[200px] md:max-w-[230px] max-w-[280px] text-[16px] text-[#5A5A5A] leading-[28px] pt-4'>Téléchargez l’application et faites votre recherche selon votre besoin.</p>
                            </div>

                            {/* <img src={one} alt="one_img" className=' absolute -top-1 lg:left-6 md:left-1  left-[27%] object-cover' /> */}
                        </div>
                        {/* <div className='lg:w-[60%] w-[50%] lg:-mt-[8rem] md:-mt-[12rem] justify-center lg:flex md:flex hidden' >
                            <img src={vector} alt="one_img" className='object-cover ' />
                        </div> */}
                        <div className=' flex justify-center flex-col items-center  lg:w-[70rem] w-full lg:my-0 my-4  '>
                            <div className=' lg:mt-7 xl:mt-7 md:mt-7 mt-28 relative  flex justify-center flex-col items-center  w-full '>
                                <div className=' '>
                                    <img src={car2} alt="Car_img" className='object-cover w-[90px] h-[90px]' />
                                </div>
                                <img src={two} alt="one_img" className=' absolute xl:block lg:block hidden  -top-[77.4px] -right-3 w-[50%] object-cover' />
                                <img src={twoNumber} alt="one_img" className='absolute xl:hidden lg:hidden block -top-[82px] md:-top-[95px] md:right-5 right-12 w-[28%] md:w-[40%] tablet:right-40 tablet:w-[15%] xtra-small:w-[20%] xtra-small:right-24  object-cover' />
                            </div>
                            <div className='text-center w-full pt-[32px] '>
                                <h1 className='lg:text-[18px] text-[20px] font-semibold'>Réservez votre véhicule</h1>
                                <p className='lg:text-[14px] xl:max-w-[230px] md:max-w-[230px] max-w-[250px] m-auto text-[16px] text-[#5A5A5A] leading-[28px] pt-4'>Confirmez votre réservation dès qu’un propriétaire accepte votre demande de location.</p>
                            </div>

                        </div>
                        {/* <div className='lg:w-[60%] w-[50%] lg:-mt-[8rem] md:-mt-[15rem] justify-center md:flex  lg:flex hidden'>
                            <img src={vector2} alt="one_img" className='object-cover ' />

                        </div> */}
                        <div className=' flex justify-center flex-col items-center lg:w-[70rem] w-full '>
                            <div className='lg:mt-7 xl:mt-7 md:mt-12  mt-24 relative  '>
                                <div className=' '>
                                    <img src={car3} alt="Car_img" className='object-cover w-[90px] h-[90px]' />
                                </div>
                                <img src={three} alt="one_img" className='xl:block lg:block hidden absolute -top-[71.5px] -right-20 w-full  object-cover' />
                                <img src={threeNumber} alt="one_img" className='absolute xl:hidden lg:hidden block -top-[80px] -right-20 w-full  object-cover' />
                            </div>
                            <div className='text-center pt-[32px] '>
                                <h1 className='lg:text-[18px] text-[20px] font-semibold'>Récupérez-le et partez</h1>
                                <p className='lg:text-[14px] text-[16px] xl:max-w-[230px] md:max-w-[230px] max-w-[280px] m-auto text-[#5A5A5A] leading-[28px] pt-4'>Convenez d’un point de rendez-vous avec le propriétaire, récupérez le véhicule et partez.</p>
                            </div>
                            {/* <img src={three} alt="one_img" className=' absolute top-0 lg:left-10 md:left-2 left-[26%] object-cover' /> */}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Services