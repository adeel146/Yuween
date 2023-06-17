import React from 'react'
import votrieImg from '../../../assests/newDesign/votre_img.svg'
const VotreMobilite = () => {
    return (
        <>
            {/* <div className=' lg:px-[165px]  px-5 text-center lg:pt-[7rem] p-6  items-center'> */}
            {/* <div className='bg-votreImg lg:bg-center  bg-contain md:bg-contain tablet:bg-contain tablet:h-[170px] bg-no-repeat lg:mb-[3rem] bg-no-rapeat md:h-[280px] lg:h-[550px]  lg:p-0 p-2 tablet:p-5 '>
                <div className=' container mx-auto xl:px-[110px]   lg:m-auto px-3 md:px-5  max-h-[800px] text-center  p-6 lg:pt-[6rem] xtra-small:pt-[10rem] md:pt-[1rem] pt-[8rem] tablet:pt-[10px]  items-center'>
                    <h1 className='lg:text-[40px] tablet:text-[25px] text-[25px] text-[#444444] font-bold  '>Votre mobilité n’aurait pas été plus simple</h1>
                    <p className='text-[18px] pt-[12px] tablet:text-[10px] tablet:pt-0 md:pt-0 text-[#444444] text-center lg:max-w-[650px] m-auto w-full'>Avec Primecar, vous gagnez du temps avec un accès à plusieurs opportunités de location aux meilleurs prix et en toute sécurité !</p>
                </div>
            </div> */}

            <div className=' container mx-auto xl:px-[110px]   lg:m-auto md:px-5 px-5 pt-[1rem]'>

                <div className='grid lg:grid-cols-2 md:grid-cols-2 lg:gap-20 gap-5 md:gap-7'>

                    <div className='max-w-[800px] xl:pt-[10rem] lg:pt-[10rem] md:pt-[8rem] pt-2 w-full  '>
                        <h1 className='lg:text-[31px]  max-w-[500px] text-[#444444] font-sans text-[22px] leading-0 font-bold'><span className='text-[#FF8C00]'>Votre mobilité </span>n’aurait pas été plus simple</h1>
                        <p className='text-[14px] font-normal pt-2'>Avec Primecar, vous gagnez du temps avec un accès à plusieurs opportunités de location aux meilleurs prix et en toute sécurité !</p>
                    </div>
                    <div className=' w-full  '>
                        <img src={votrieImg} alt="rentable" className='lg:object-cover md:object-cover tablet:w-full w-full h-full ' />
                    </div>

                </div>

            </div>
        </>
    )
}

export default VotreMobilite