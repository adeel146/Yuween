import React from 'react'
// import question from '../../../assests/svg/Customerservices.svg'
const Question = () => {
    return (
        <>
            {/* <div className=' lg:px-[165px] md:px-[50px] px-5 bg-[#FFFBF7] lg:pb-0 md:pb-0  pb-5 '> */}
            {/* <div className='  bg-[#FFFBF7] lg:pb-0   pb-5  '>
                <div className='container mx-auto xl:px-[110px]   lg:m-auto px-3'>
                    <div className='flex lg:justify-between items-center lg:flex-nowrap md:flex-nowrap justify-center flex-wrap'>
                   
                        <div className='lg:order-0 order-1 md:order-0 lg:pl-10 md:pl-10 pl-[20%]  '>
                            <h1 className='text-[#444444] lg:text-[36px] text-[30px] font-bold'>Des questions?</h1>
                            <p className='text-[16px] text-[#ACACAC] lg:pt-[24px] md:pt-[24px] lg:w-full max-w-[300px]'>Notre service client est à votre disposition 6j/7</p>
                            <button className='text-[text-16px] lg:mt-[32px] md:mt-[32px] mt-[10px] px-8 py-3 rounded-md font-medium bg-[#FF8C00] text-white'>Besoin d’aide</button>

                        </div>
                        <div className='lg:order-1 md:order-1  order-0 flex justify-center items-center lg:mr-0 md:mr-0 mr-4'>
                            <img src={question} alt="question" className='object-cover lg:w-auto  w-[60%]' />
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='bg-footer_2_img h-[300px]'>
                <div className='flex justify-center flex-col items-center text-center xl:pt-[60px] pt-[95px]'>
                    <h1 className='text-white lg:text-[31px] text-[20px] font-bold'>Des questions?</h1>
                    <p className='text-[14px] text-white lg:pt-[10px] md:pt-[10px] lg:w-full '>Notre service client est à votre disposition 6j/7</p>
                    <button className='text-[text-16px] lg:mt-[32px] md:mt-[32px] mt-[10px] px-8 py-3 rounded-md font-medium bg-[#FF8C00] text-white'>Besoin d’aide</button>

                </div>
            </div>

        </>
    )
}

export default Question