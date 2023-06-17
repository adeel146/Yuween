import React from 'react'

const SearchLoader = () => {
    return (
        <>
            <div className=' container mx-auto xl:px-[110px] lg:px-[3px]  lg:m-auto px-3 xtra-small:px-1 md:px-5  pt-[49px]'>
                <div role="status" className="  animate-pulse ">
                    <div className='lg:flex  rounded-lg lg:flex-row flex-col flex lg:flex-nowrap md:hidden  w-full  flex-wrap'>
                        <div className=' xl:w-[53%] 2xl:w-[54%]  w-full '>
                            <div className='bg-gray-200 rounded-t-lg  dark:bg-gray-700 flex items-center h-[50px]  rounded-md px-2'>
                            </div>
                        </div>
                        <div className='flex lg:flex-nowrap md:flex-nowrap flex-wrap  lg:ml-3 md:ml-9'>
                            <div className={` lg:block  lg:w-[256px] md:w-[190px]  w-full`}>
                                <div className='bg-gray-200 rounded-t-lg dark:bg-gray-700 flex items-center h-[50px]  rounded-md px-2'>
                                </div>
                            </div>
                            <div className={`  lg:block  lg:w-[258px] md:w-[190px]  w-full lg:ml-3 `}>
                                <div className='bg-gray-200 rounded-t-lg  dark:bg-gray-700 flex items-center h-[50px]  rounded-md px-2'>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex lg:flex-nowrap md:flex-nowrap flex-wrap h-full mt-[44px]'>
                        <div className='lg:w-[30%] md:w-[30%] w-full h-full '>
                            <div>
                                <div className='bg-gray-200 w-[90%] rounded-t-md  dark:bg-gray-700 flex items-center h-[40px]  rounded-md'></div>
                                {
                                    Array(4).fill(4).map((_, i) => (
                                        <div className='flex items-center mt-2' key={i}>
                                            <div className='bg-gray-200 w-[10%] rounded-t-md  dark:bg-gray-700 flex items-center h-[30px]  rounded-md'></div>
                                            <div className='bg-gray-200 mx-2 w-[70%] rounded-t-md  dark:bg-gray-700 flex items-center h-[30px]  rounded-md'></div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='mt-5'>
                                <div className='bg-gray-200 w-[70%] rounded-t-md  dark:bg-gray-700 flex items-center h-[40px]  rounded-md'></div>
                                {
                                    Array(4).fill(4).map((_, i) => (
                                        <div className='flex items-center mt-2' key={i}>
                                            <div className='bg-gray-200 w-[10%] rounded-t-md  dark:bg-gray-700 flex items-center h-[30px]  rounded-md'></div>
                                            <div className='bg-gray-200 mx-2 w-[70%] rounded-t-md  dark:bg-gray-700 flex items-center h-[30px]  rounded-md'></div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='mt-5'>
                                <div className='bg-gray-200 w-[70%] rounded-t-md  dark:bg-gray-700 flex items-center h-[40px]  rounded-md'></div>
                                {
                                    Array(4).fill(4).map((_, i) => (
                                        <div className='flex items-center mt-2' key={i}>
                                            <div className='bg-gray-200 w-[10%] rounded-t-md  dark:bg-gray-700 flex items-center h-[30px]  rounded-md'></div>
                                            <div className='bg-gray-200 mx-2 w-[70%] rounded-t-md  dark:bg-gray-700 flex items-center h-[30px]  rounded-md'></div>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className='mt-5'>
                                <div className='bg-gray-200 w-[70%] rounded-t-md  dark:bg-gray-700 flex items-center h-[40px]  rounded-md'></div>
                                <div className='bg-gray-200 w-[85%] my-2 rounded-t-md  dark:bg-gray-700 flex items-center h-[20px]  rounded-md'></div>
                                <div className='bg-gray-200 w-[90%] rounded-t-md  dark:bg-gray-700 flex items-center h-[40px]  rounded-md'></div>
                            </div>

                        </div>
                        <div className='w-full'>
                            <div className='grid lg:grid-cols-3 xtra-small:grid-cols-2   md:grid-cols-2 tablet:grid-cols-2  search_car sm:grid-cols-1 gap-3 lg:pl-6 md:pl-6 lg:border-l '>
                                {
                                    Array(12).fill(12).map((_, i) => (

                                        <div key={i} className='border border-gray-50 shadow-md bg-white rounded-md p-3 flex-col flex justify-center'>
                                            <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                                                <svg class="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                                            </div>
                                            <div>
                                                <div className='flex justify-between items-center pt-2'>
                                                    <div className='bg-gray-200 w-[50%] h-[30px] rounded-md  dark:bg-gray-700'></div>


                                                </div>
                                                <div className='flex justify-between pt-2'>
                                                    <div className='flex items-center w-full '>
                                                        <div className='bg-gray-200 w-[40%] h-[20px] rounded-md  dark:bg-gray-700'></div>
                                                        <div className='bg-gray-200 w-full ml-1 h-[20px] rounded-md  dark:bg-gray-700'></div>
                                                    </div>
                                                    <div className='flex items-center w-full mx-3 '>

                                                        <div className='bg-gray-200 w-[40%] h-[20px] rounded-md  dark:bg-gray-700'></div>
                                                        <div className='bg-gray-200 w-full ml-1 h-[20px] rounded-md  dark:bg-gray-700'></div>
                                                    </div>
                                                    <div className='flex items-center w-full '>

                                                        <div className='bg-gray-200 w-[40%] h-[20px] rounded-md  dark:bg-gray-700'></div>
                                                        <div className='bg-gray-200 w-full ml-1 h-[20px] rounded-md  dark:bg-gray-700'></div>
                                                    </div>
                                                </div>
                                                <div className='pt-5'>
                                                    <div className='flex '>

                                                        <div className='bg-gray-200 w-full h-[20px] rounded-md  dark:bg-gray-700'></div>
                                                    </div>
                                                </div>
                                                <div className='pt-5'>
                                                    <div className='bg-gray-200 w-full h-[40px] rounded-md  dark:bg-gray-700'></div>
                                                </div>
                                                <div className='pt-4'>

                                                    <div className='bg-gray-200 w-full h-[40px] rounded-md  dark:bg-gray-700'></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default SearchLoader