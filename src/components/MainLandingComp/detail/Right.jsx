import React, { useState } from 'react'
import Car from '../../../assests/newDesign/searchcar.svg'
import gas from '../../../assests/newDesign/Clip.svg'
import cricle from '../../../assests/newDesign/specification.svg'
import user from '../../../assests/newDesign/seat.svg'
import profile from '../../../assests/Profill.png'
import { IoLocationSharp } from 'react-icons/io5'
import car from '../../../assests/svg/CarVehicledetail.svg'
import sp_1 from '../../../assests/newDesign/specification_1.svg'
import sp_2 from '../../../assests/newDesign/specification_2.svg'
import sp_3 from '../../../assests/newDesign/specification_3.svg'
import sp_4 from '../../../assests/newDesign/specification_4.svg'
import sp_5 from '../../../assests/newDesign/specification_5.svg'
import car_Image from '../../../assests/newDesign/searchCarMainImg.svg'
import srch_1 from '../../../assests/newDesign/srch_1.svg'
import srch_2 from '../../../assests/newDesign/srch_2.svg'
import srch_3 from '../../../assests/newDesign/srch_3.svg'
// import star from '../../../assests/star2.png'
// import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { Link } from 'react-router-dom'
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import required modules
// import { Navigation } from "swiper";
import { AiFillStar } from 'react-icons/ai'
const Right = () => {
    const [activeImg, setActiveImag] = useState({id:0, Pic: srch_1})

    const specification = [{ Pic: sp_1, heading: "Type Car", subheading: "4x4" }, { Pic: sp_2, heading: "Portes", subheading: "4" }, { Pic: sp_3, heading: "Places", subheading: "4" }, { Pic: sp_4, heading: "Boite", subheading: "Manuelle" }, { Pic: sp_5, heading: "Moteur", subheading: "Hybride" }]

    const carImages = [{id:0, Pic: srch_1}, {id:1, Pic: srch_2},{id:2, Pic: srch_3},{id:3, Pic: srch_2},]

    return (
        <>


            <div className=''>

                <div className=''>
                    {/* <img src={car} alt="car_img" className='object-cover w-full' /> */}
                    {/* <div className='xl:max-w-[500px]  md:max-w-[500px] '>
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper xl:!w-[810px]  ">
                            {
                                Array(4).fill(4).map((_, i) => (
                                    <SwiperSlide key={i}>
                                        <img src={car} alt="car_img" className='object-cover w-full rounded-md' />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div> */}
                    <div className='flex xl:pt-[30px] pt-3 xl:flex-nowrap lg:flex-nowrap md:flex-wrap flex-wrap items-center'>
                        <div className='xl:order-0 lg:order-0 md:order-1 order-1 xl:mt-0 lg:mt-0  mt-3 flex xl:flex-col flex-row lg:flex-col md:flex-row items-center justify-between'>
                            {
                                carImages.map((item, i) => (
                                    <img onClick={() => setActiveImag(item)} src={item.Pic} key={i}  alt="car_img" className={`object-cover xl:w-auto lg:w-auto w-[22%] my-1 cursor-pointer rounded-xl ${activeImg.id === item.id && 'border-2 border-[#D16A00]'}`} />
                                ))
                            }

                        </div>
                        <div className='xl:ml-5 lg:ml-5 xl:order-1 lg:order-1 md:order-0 order-0'>
                            <img src={activeImg.Pic}  alt="car_img" className='object-cover rounded-md  xl:w-[1020px] xl:h-[505px] lg:w-[1020px] lg:h-[505px] md:w-[1020px] tablet:w-[1020px] xtra-small:w-[700px] w-[350px]' />
                        </div>
                    </div>

                    <div className='pt-[30px] '>
                        <div className=''>
                            <h1 className='xl:text-[31px] md:text-[28px] text-[20px] font-bold'>Renault twingo</h1>

                        </div>
                        <div className='flex xl:flex-no-wrap  flex-wrap justify-between items-center py-2'>
                            <div className='flex items-center'>
                                <div className='flex items-center'>
                                    {
                                        Array(5).fill(5).map((_, i) => (
                                            <AiFillStar className='text-[#FF8C00] text-[20px] ' key={i} />
                                        ))
                                    }
                                </div>
                                <h1 className='text-[#5A5A5A] text-[14px] font-medium mx-2'> 440+ Avis</h1>
                            </div>

                        </div>
                        <div className='pt-[15px]'>
                            <p className='text-[#5A5A5A] text-[16px]'>Renault est connu pour son rôle dans le sport automobile, en particulier le rallye, la Formule 1 et la Formule E. Ses premiers travaux sur la modélisation mathématique des courbes pour les carrosseries automobiles sont importants dans l'histoire de l'infographie.Renault est connu pour son rôle dans </p>
                        </div>

                        <div className='pt-[18px] max-w-[500px]'>
                            <div className='bg-[#FCE5E5] rounded-md p-3 '>
                                <p className='text-[#F04438] text-[14px] font-normal font-sans xl:py-0 md:py-0 py-2'>Note: Ce véhicule est à réserver uniquement à partir de l’application mobile.</p>
                            </div>
                        </div>


                        <div className='mt-7'>
                            <h1 className='xl:text-[24px] text-[16px] font-sans font-semibold'>Specification</h1>
                            <div className='grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-3 tablet:grid-cols-3 gap-5 grid-cols-2  pt-[20px]'>
                                {
                                    specification.map((item, i) => (
                                        <div className='flex items-center ' key={i}>
                                            <div className='rounded-md w-[54px] h-[54px] p-2 flex justify-center items-center' style={{ background: 'rgba(255, 231, 202, 0.47)' }}>
                                                <img src={item?.Pic} alt="specification" className='object-cover' />
                                            </div>
                                            <div className='flex flex-col items-start  pl-3'>
                                                <h2 className='text-[#98A2B3] xl:text-[16px] text-[14px]'>{item?.heading}</h2>
                                                <p className='text-[#444444] font-semibold  xl:text-[16px] text-[14px]'>{item?.subheading}</p>
                                            </div>
                                        </div>

                                    ))
                                }


                            </div>

                        </div>
                        <div className=' border rounded-md xl:p-4 mt-7'>

                            <h1 className='xl:text-[22px] text-[16px] font-sans xl:p-0  pt-4 px-3 font-bold'>Avis des locataires</h1>
                            {
                                Array(3).fill(3).map((_, i) => (
                                    <div key={i} className='  testimation pt-[32px] last:border-b-0 border-b pb-2'>
                                        <div className='w-full testimation_list pl-3'>
                                            <div className='flex '>
                                                <div className='testimation_img'>
                                                    <img src={profile} alt="profile" className='object-cover' />
                                                </div>
                                                <div className='pl-3'>
                                                    <h2 className='text-[#1A202C] text-[19px] font-sans font-bold'>Alex Stanton</h2>
                                                    <p className='text-[14px]  font-semibold font-sans text-[#667085]'>Locataire</p>
                                                </div>

                                            </div>
                                            <div className='flex items-center'>
                                                <div className='flex items-center pt-[10px] '>
                                                    {
                                                        Array(5).fill(5).map((_, i) => (
                                                            <AiFillStar className='text-[#FF8C00] text-[14px] ml-[3px]' key={i} />
                                                            // <img src={star} alt="star" key={i} className='object-cover mx-[2px]' />
                                                        ))
                                                    }
                                                    <h2 className='text-[12px] font-normal font-sans text-[#667085] pl-1'>December 7, 2022</h2>
                                                </div>
                                            </div>
                                            <p className='pt-5 text-[#5A5A5A] text-[14px] leading-8'>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congueconsectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla </p>
                                        </div>
                                    </div>

                                ))
                            }

                            {/* <div className='flex justify-center items-center pt-[52px] pb-[50px]'>
                                <h2 className='text-[#667085] text-[16px] font-semibold'>Voir tout</h2>
                                <MdOutlineKeyboardArrowDown className='text-[25px]  text-[#667085] mx-1' />
                            </div> */}
                        </div>
                    </div>



                </div>
                <div>
                    <h2 className='text-[#444444] text-[31px] font-bold font-sans pb-4 pt-8'>Voiture associée</h2>
                    <div className='grid xl:grid-cols-4 xtra-small:grid-cols-2   md:grid-cols-2 tablet:grid-cols-2 gap-3 xl:pl-4 '>
                        {
                            Array(4).fill(4).map((_, i) => (

                                <div key={i} className='border border-gray-50 shadow-md bg-white rounded-md p-3 flex-col flex justify-center'>
                                    <div className='flex justify-center items-center'>
                                        <img src={Car} alt="car" className=' object-cover' />
                                    </div>
                                    <div>
                                        <div className='flex justify-between items-center pt-2'>
                                            <h2 className='text-[17px] font-bold text-[#444444]'>Renault twingo</h2>
                                            {/* <div className='flex justify-between items-center'>
                                        <IoLocationSharp className='text-[#FF8C00]' />
                                        <h2 className='pl-1 text-[#ACACAC] text-[11.57px]'>Abidjan</h2>
                                    </div> */}

                                        </div>
                                        <div className='flex justify-between pt-2'>
                                            <div className='flex items-center w-full '>
                                                <img src={gas} alt="detail" className='object-cover' />
                                                <h2 className='text-[11.57px] font-medium text-[#ACACAC] pl-1   '>Essence</h2>
                                            </div>
                                            <div className='flex items-center w-full mx-3 '>
                                                <img src={cricle} alt="detail" className='object-cover' />
                                                <h2 className='text-[11.57px] font-medium text-[#ACACAC] pl-1   '> Manuel</h2>
                                            </div>
                                            <div className='flex items-center w-full '>
                                                <img src={user} alt="detail" className='object-cover' />
                                                <h2 className='text-[11.57px] font-medium text-[#ACACAC] pl-1   '>4 Places</h2>
                                            </div>
                                        </div>
                                        <div className='pt-5'>
                                            <div className='flex '>
                                                <IoLocationSharp className='text-[#FF8C00]' />
                                                <h2 className='pl-1 font-normal text-[#ACACAC] text-[12px]'>4709 Shadowmar drive kenner, LA 70062</h2>
                                            </div>
                                        </div>
                                        <div className='pt-5'>
                                            <div className='bg-[#F4F4F4] rounded-md py-2'>
                                                <h2 className='text-[#FF8C00] text-center font-sans  text-[14.43px] font-medium'>33 000 FCFA <span className='text-[12.22px] font-normal text-[#ACACAC]'>/8 jours</span></h2>
                                            </div>
                                        </div>
                                        <div className='pt-4'>
                                            <Link to="/detail">
                                                <button className='bg-[#FF8C00] font-sans font-normal  rounded-md text-center text-white text-[14px] px-8 py-2 w-full'>Voir </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Right