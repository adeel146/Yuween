import React from 'react'
import message from '../../../assests/message.png'
import call from '../../../assests/call.png'
import car from '../../../assests/unsplash_eTuO9BNtcPA.png'
import car2 from '../../../assests/caar2.png'
import car3 from '../../../assests/car3.png'
import car4 from '../../../assests/car4.png'
import pump from '../../../assests/pump.png'
import boite from '../../../assests/Group (2).png'
import seet from '../../../assests/Group (3).png'
import setting from '../../../assests/setting.png'
import usb from '../../../assests/usb.png'
import upload from '../../../assests/Input fields.png'
import bluthoth from '../../../assests/blue.png'
import { IoLocation } from 'react-icons/io5'
import file from '../../../assests/file.png'
import { MdDelete } from 'react-icons/md'
const CarlistDetail = () => {
    // const [isEdit, setIsEdit] = useState(true)

    return (
        <>
            <div className=''></div>

            {/* section 1  */}
            <div className='grid grid-cols-2 gap-3'>
                <div className='bg-white shadow-md border rounded-md border-gray-100 p-5'>
                    <div className='flex items-center'>
                        <div className='bg-[#D9D9D9] w-[110px] h-[80px] rounded-md '>

                        </div>
                        <div className='w-full pl-8 '>
                            <div className='flex items-center'>
                                <h2 className='text-[#444444] text-[18px]'>Jacob Jones</h2>
                                <span className='text-[#ACACAC] px-3'>( With Driver )</span>
                            </div>
                            <div className='flex justify-between pt-2'>
                                <div className=''>
                                    <h2 className='text-[#ACACAC] text-[16px]'>Proprétaire</h2>
                                    <div className={`bg-[#ECFFEC] mt-3 text-[14px] text-[#6ABD8B] rounded-full text-center  py-2 w-full px-2 ml-auto`}>
                                        <h2>Approved</h2>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <img src={message} alt="message" className='object-cover' />
                                    <img src={call} alt="message" className='object-cover ml-2' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-4'>
                        <p className='text-[#ACACAC] text-[16px]'>Renault est connu pour son rôle dans le sport automobile, en particulier le rallye, la Formule 1 et la Formule E. Ses premiers travaux sur la modélisation mathématique des courbes pour les carrosseries automobiles sont importants dans l'histoire de l'infographie.Renault est connu pour son rôle dans </p>
                    </div>
                </div>
                <div>
                    <img src={car} alt="car" className='object-cover w-full' />

                </div>
            </div>


            {/*  section 2 */}
            <div className='grid grid-cols-2 gap-3 pt-6'>
                <div className='bg-white shadow-md border rounded-md border-gray-100 p-5'>
                    <h1 className='text-[#FF8C00] font-semibold text-[18px]'>Caracteristiques</h1>
                    <div className='grid grid-cols-3 pt-8'>
                        <div className=''>
                            <img src={pump} alt="car" className='object-cover' />
                            <h2 className='text-[#444444] font-medium text-[18px] pt-3'>Carburant</h2>
                            <p className='text-[#ACACAC] text-[16px]'>Hybride</p>
                        </div>
                        <div className=''>
                            <img src={boite} alt="car" className='object-cover' />
                            <h2 className='text-[#444444] font-medium text-[18px] pt-3'>Boite</h2>
                            <p className='text-[#ACACAC] text-[16px]'>Manuelle</p>
                        </div>
                        <div className=''>
                            <img src={seet} alt="car" className='object-cover' />
                            <h2 className='text-[#444444] font-medium text-[18px] pt-3'>Places, Portes</h2>
                            <p className='text-[#ACACAC] text-[16px]'>2,2</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 pt-8'>
                        <div className=''>
                            <img src={setting} alt="car" className='object-cover' />
                            <h2 className='text-[#444444] font-medium text-[18px] pt-3'>AC</h2>
                            <p className='text-[#ACACAC] text-[16px]'>convertisseur</p>
                        </div>
                        <div className=''>
                            <img src={usb} alt="car" className='object-cover' />
                            <h2 className='text-[#444444] font-medium text-[18px] pt-3'>USB</h2>
                            <p className='text-[#ACACAC] text-[16px]'>chargeur</p>
                        </div>
                        <div className=''>
                            <img src={bluthoth} alt="car" className='object-cover' />
                            <h2 className='text-[#444444] font-medium text-[18px] pt-3'>Bluetooth</h2>
                            <p className='text-[#ACACAC] text-[16px]'>connexion</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-5 gap-5 pl-1'>
                        <img src={car2} alt="car" className='object-cover rounded-md border-[3px] border-[#FF8C00]' />
                        <img src={car2} alt="car" className='object-cover rounded-md' />
                        <img src={car3} alt="car" className='object-cover rounded-md' />
                        <img src={car4} alt="car" className='object-cover rounded-md' />
                        <img src={car2} alt="car" className='object-cover rounded-md' />
                    </div>
                    <div className='bg-white shadow-md border rounded-md  border-gray-100 p-5 mt-4'>
                        <h1 className='text-[#FF8C00] text-[18px] font-semibold'>Total Requests</h1>
                    </div>
                </div>
            </div>

            {/* secrtion 3  */}
            <section>
                <div className='grid grid-cols-2 gap-3 pt-6'>
                    <div className='bg-white shadow-md border rounded-md border-gray-100 p-5'>
                        <h1 className='text-[#FF8C00] font-semibold text-[18px]'>Location</h1>

                        <div className='flex justify-between items-center pt-5'>
                            <h2 className='text-[#898989] text-[14px] '>Within Abidjan</h2>
                            <p className='text-[#FF8C00]  text-[14px]'>33 000 FCFA<span className='text-[#898989] '>/day</span></p>
                        </div>
                        <div className='flex justify-between items-center pt-5'>
                            <h2 className='text-[#898989] text-[14px] '>Within Abidjan</h2>
                            <p className='text-[#FF8C00]  text-[14px]'>33 000 FCFA<span className='text-[#898989] '>/day</span></p>
                        </div>
                        <div className='flex items-center pt-5 '>
                            <IoLocation className='text-[#FF8C00]' />
                            <h2 className='ml-1 text-[#444444]'>4709 Shadowmar drive kenner, LA 70062</h2>
                        </div>
                    </div>
                    <div className='bg-white shadow-md border rounded-md border-gray-100 p-5'>
                        <h1 className='text-[#FF8C00] font-semibold text-[18px]'>Rental Options</h1>

                        <div className='flex justify-between items-center pt-5'>
                            <h2 className='text-[#444444] text-[14px] '>Smokers</h2>
                            <p className='text-[#444444]  text-[14px]'>Pets</p>
                        </div>
                        <div className='flex justify-between items-center pt-5'>
                            <h2 className='text-[#898989] text-[14px] '>Not Accepting</h2>
                            <p className='text-[#898989]  text-[14px]'>Not Accepting</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* section 4  */}

            <div className='bg-white shadow-md border rounded-md border-gray-100 p-5 mt-5'>
                <h1 className='text-[#FF8C00] font-semibold text-[18px]'>Vehicle Details</h1>
                <div className='grid grid-cols-5 gap-28 pt-5'>
                    <div className=''>
                        <h2 className='text-[#444444] text-[14px] '>Number Plate</h2>
                        <p className='text-[#444444]  text-[14px]'>REH1235GH</p>
                    </div>
                    <div className=''>
                        <h2 className='text-[#898989] text-[14px] '>Brand</h2>
                        <p className='text-[#898989]  text-[14px]'>Fortuner</p>
                    </div>
                    <div className=''>
                        <h2 className='text-[#898989] text-[14px] '>Model</h2>
                        <p className='text-[#898989]  text-[14px]'>206+</p>
                    </div>
                    <div className=''>
                        <h2 className='text-[#898989] text-[14px] '>Mileage</h2>
                        <p className='text-[#898989]  text-[14px]'>50,000-100,000 km</p>
                    </div>
                    <div className=''>
                        <h2 className='text-[#898989] text-[14px] '>Vehicle type</h2>
                        <p className='text-[#898989]  text-[14px]'>Non-Commercial</p>
                    </div>

                </div>
            </div>

            {/* section 5  */}
            <section>

                <div className='bg-white shadow-md border rounded-md border-gray-100 p-5 mt-5'>
                    <h1 className='text-[#FF8C00] text-[18px] font-semibold'>Insurance Details</h1>
                    <div className='flex justify-between items-center pt-5'>
                        <div className=''>
                            <h2 className='text-[#444444] text-[14px]'>Insurance ID</h2>
                            <p className='text-[14px] pt-4 text-[#898989] leading-[22px]'>REH1235GH</p>
                        </div>
                        <div className=''>
                            <h2 className='text-[#444444] text-[14px]'>Registration ID</h2>
                            <p className='text-[14px] pt-4 text-[#898989] leading-[22px]'>REH1235GH</p>
                        </div>
                        <div className=''>
                            <h2 className='text-[#444444] text-[14px]'>Insurance Validity</h2>
                            <p className='text-[14px] pt-4 text-[#898989] leading-[22px]'>1 month</p>
                        </div>
                        <div className=''>
                            <h2 className='text-[#444444] text-[14px] text-center'>Status</h2>
                            <p className='text-[14px] mt-4 text-[#2BA676] bg-[#E0F3EC] px-6 py-2 rounded-full leading-[22px]'>valid</p>
                        </div>
                    </div>

                    <div className='pt-5'>
                            <h2 className='text-[#444444] text-[14px] font-medium pb-5'>Upload Insurance Doccuments</h2>
                        <img src={upload} alt="upload" className='object-cover w-full' />
                    </div>
                    <div className='pt-5'>
                        <div className='grid grid-cols-2 gap-5'>

                            {
                                Array(4).fill(4).map((_, i) => (
                                    <div key={i} className='border border-[#ACACAC] rounded-md mt-4 px-2'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex items-center'>
                                                <img src={file} alt="file_image" className='object-cover' />
                                                <div className='px-2 py-2'>
                                                    <p className='text-[14px] text-[#444444]'>license front.PNG</p>
                                                    <span className='text-[12px] text-[#898989]'>13 dec 2022, 5.7MB</span>
                                                </div>
                                            </div>
                                            <div className='flex items-center'>
                                                <h2 className='underline mx-1 text-[#397DED] text-[14px]'>Preview</h2>
                                                {isEdit && <MdDelete className='text-[#F04438] ' />}
                                            </div>
                                        </div>
                                    </div>

                                ))
                            }
                        </div>

                    </div>



                </div>

            </section>

        </>
    )
}

export default CarlistDetail