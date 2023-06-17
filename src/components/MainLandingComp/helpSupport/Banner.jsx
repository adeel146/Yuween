import React, { useEffect, useState } from 'react'
// import road from '../../../assests/line.png'
import { BsSearch } from 'react-icons/bs';
import BreadCums from '../breadCums/BreadCums';
const Banner = ({ left, center, right, middleLink }) => {
    const [windowDimensions, setWindowDimensions] = useState(0);

    useEffect(() => {
        function handleResize() {
            const { innerWidth: width } = window;
            setWindowDimensions(width)
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [windowDimensions]);

    return (
        <>
            {/* <div className=' bg-[#F3F3F3]  pt-2'> */}
            <div className={`text-center xl:h-[297px] h-[320px]  px-3 bg-support_img bg-cover bg-no-repeat bg-center  `}>
                {/* <img src={road} className='object-contain h-full' alt="road" /> */}
                <div className=' w-full pt-[66px]  '>
                    <BreadCums left={left} right={right} middle={center} middleLink={middleLink} />
                    <h1 className='text-[#FF8C00]  lg:text-[40px] text-[35px] leading-[58px] font-bold'>Centre d’aide</h1>
                    <div className=' lg:pl-10  flex lg:flex-nowrap  md:flex-nowrap flex-wrap items-center xl:max-w-[850px] tablet:flex-nowrap tablet:max-w-[600px]  md:max-w-[600px]  lg:m-auto md:m-auto max-w-[400px] m-auto  pt-[24px] h-[50px]'>
                        <div className='flex md:w-[400px] tablet:w-[400px] xl:w-[600px] w-full bg-white px-2 rounded-md border items-center lg:mr-5 md:mr-5 tablet:mr-5 '>
                            <BsSearch className='text-[#FF8C00]' />
                            <input type="text" className='xl:w-[540px] md:!w-[400px]  tablet:w-[340px]   focus:outline-none  text-[#444444] placeholder:text-[#ACACAC] w-full ml-4    h-[50px]' placeholder='Des réponses dans notre centre d’aide ...' style={{ borderColor: 'rgba(68, 68, 68, 0.4)' }} />
                        </div>
                        <div className='flex xl:justify-end xl:w-auto w-full justify-center items-center'>
                            <button className='bg-[#FF8C00]  lg:my-0 my-2 xl:w-auto  text-white rounded-md xl:px-4 px-5 py-3'>Rechercher</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default Banner