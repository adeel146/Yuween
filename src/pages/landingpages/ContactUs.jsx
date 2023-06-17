import React from 'react'
import Layout from '../../components/layouts/mainLayout/MainLayout'
// import phone from '../../assests/newDesign/phone.svg'
// import mail from '../../assests/newDesign/inbox.svg'
// import locate from '../../assests/newDesign/locat.svg'
import { FaPhoneAlt } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { MdLocationOn } from 'react-icons/md'
import contact from '../../assests/newDesign/contact_img.svg'
// import facebook from '../../assests/Facebook Icon2.png'
// import linkdin from '../../assests/Linkedin Icon2.png'
const ContactUs = () => {
    return (
        <Layout>
            {/* <div className=' lg:px-[165px] md:px-[50px] px-5 lg:py-20 '> */}
            <div className=' container mx-auto xl:px-[110px]   lg:m-auto px-3 md:px-5 lg:py-20 '>
                {/* <div className='flex lg:flex-nowrap  flex-wrap'>
                    <div className='bg-contactImg lg:w-[65%] w-full lg:order-0 order-1  lg:mt-0 md:mt-5  bg-cover bg-no-repeat lg:h-[718px] h-[550px]'>
                        <div className='lg:max-w-[450px] w-full px-5 pt-[6rem] text-white'>
                            <h1 className=' lg:text-[46px] text-[35px]  font-bold'>Contactez-nous</h1>
                            <p className='text-[18px] pt-4'>Renseignez le formulaire, nos équipes vous reviendrons dans un délais de 24h.</p>

                            <div className='lg:pt-10'>
                                <ul>
                                    <li className=''>
                                        <div className='flex items-center'>
                                            <img src={phone} alt="phone" className='object-contain' />
                                            <h2 className='text-[18px] px-7'>+225 0797229746</h2>
                                        </div>
                                    </li>
                                    <li className='py-5'>
                                        <div className='flex items-center'>
                                            <img src={mail} alt="phone" className='object-contain' />
                                            <h2 className='text-[18px] px-7'>hello@primecarapp.com</h2>
                                        </div>
                                    </li>
                                    <li className='w-full'>
                                        <div className='flex '>
                                            <img src={locate} alt="phone" className='object-contain -mt-5' />
                                            <h2 className='text-[18px] px-7'>Cocody Riviera Faya, Abidjan Côte d'Ivoire</h2>
                                        </div>
                                    </li>

                                </ul>

                            </div>

                            <div className='flex lg:pt-40 pt-20'>
                                <img src={facebook} alt="facebook" className='object-contain' />
                                <img src={linkdin} alt="linkdin" className='object-cover mx-2' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:order-1 order-0 '>
                        <form className='lg:pt-[5.5rem] lg:pl-7 pt-4'>
                            <div className='grid lg:grid-cols-2 md:grid-cols-2 lg:gap-10 gap-5'>
                                <div className='flex flex-col'>
                                    <label className='text-[16px] text-[#5A5A5A] pb-2'>Nom</label>
                                    <input type="text" className='border rounded-md h-[48px] border-[#ACACAC] px-2' />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-[16px] text-[#5A5A5A] pb-2'>Prénom</label>
                                    <input type="text" className='border rounded-md h-[48px] border-[#ACACAC] px-2' />
                                </div>
                            </div>
                            <div className='grid lg:grid-cols-2 md:grid-cols-2 lg:gap-10 gap-5 pt-7'>
                                <div className='flex flex-col'>
                                    <label className='text-[16px] text-[#5A5A5A] pb-2'>Email</label>
                                    <input type="email" className='border rounded-md h-[48px] border-[#ACACAC] px-2' />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-[16px] text-[#5A5A5A] pb-2'>Téléphone</label>
                                    <input type="tel" className='border rounded-md h-[48px] border-[#ACACAC] px-2' />
                                </div>
                            </div>
                            <div className='pt-7'>
                                <div className='flex flex-col'>
                                    <label className='text-[16px] text-[#5A5A5A] pb-2'>Objet</label>
                                    <input type="text" className='border rounded-md h-[48px] border-[#ACACAC] px-2' />
                                </div>
                            </div>
                            <div className='pt-7'>
                                <div className='flex flex-col'>
                                    <label className='text-[16px] text-[#5A5A5A] pb-2'>Message</label>
                                    <textarea rows={6}  className='border rounded-md  border-[#ACACAC] px-2'></textarea>
                                </div>
                            </div>
                            <div className='pt-10 flex justify-end'>
                               <button className='bg-[#FF8C00] text-white px-10 h-[48px] rounded-md'>Envoyer</button>
                            </div>
                        </form>

                    </div>
                </div> */}
                <div className=" text-center">
                    <h1 className=' lg:text-[31px] text-[20px] font-sans leading-[58px] font-bold'>Contactez-nous</h1>
                    <p className='text-[14px] pt-2'>Renseignez le formulaire, nos équipes vous reviendrons dans un délais de 24h.</p>
                </div>

                <div className='grid grid-cols-3 pt-[56px]'>
                    <div className='flex items-center'>
                        <div className='bg-contact_img w-[63px] bg-cover h-[63px] flex justify-center items-center'>
                            <FiMail className='text-[#FF8C00] text-[25px]' />

                        </div>
                        <div className='pl-4 flex flex-col'>
                            <h1 className=' lg:text-[18px] text-[16px] font-sans  font-bold'>Email Address</h1>
                            <p className='text-[14px] text-[#8F8F8F]'>info@mayhemshield.com</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='bg-contact_img w-[63px] bg-cover h-[63px] flex justify-center items-center'>
                            <FaPhoneAlt className='text-[#FF8C00] text-[25px]' />
                        </div>
                        <div className='pl-4 flex flex-col'>
                            <h1 className=' lg:text-[18px] text-[16px] font-sans  font-bold'>Téléphone</h1>
                            <p className='text-[14px] text-[#8F8F8F]'>+225 0797229746</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='bg-contact_img w-[63px] bg-cover h-[63px] flex justify-center items-center'>
                            <MdLocationOn className='text-[#FF8C00] text-[30px]' />

                        </div>
                        <div className='pl-4 flex flex-col'>
                            <h1 className=' lg:text-[18px] text-[16px] font-sans  font-bold'>Office</h1>
                            <p className='text-[14px] text-[#8F8F8F]'>Cocody Riviera Faya, Abidjan Côte d'Ivoire</p>
                        </div>
                    </div>
                </div>

                <div className='flex item-center border p-8 border-gray-100 pb-10 mt-[38px] shadow-md rounded'>
                    <div className='w-[50%]'>
                        <img src={contact} className='object-cover w-full h-full rounded-lg' alt="contact_img" />
                    </div>
                    <div className='w-full'>
                        <form className='lg:pl-8  w-full'>
                            <div className='grid lg:grid-cols-2 md:grid-cols-2 lg:gap-10 gap-5'>
                                <div className='flex flex-col'>
                                    <label className='text-[16px] text-[#5A5A5A] pb-2'>Nom</label>
                                    <input type="text" className='border rounded-md h-[48px] border-[#ACACAC] px-2' />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-[16px] text-[#5A5A5A] pb-2'>Prénom</label>
                                    <input type="text" className='border rounded-md h-[48px] border-[#ACACAC] px-2' />
                                </div>
                            </div>
                            <div className='grid lg:grid-cols-2 md:grid-cols-2 lg:gap-10 gap-5 pt-7'>
                                <div className='flex flex-col'>
                                    <label className='text-[16px] text-[#5A5A5A] pb-2'>Email</label>
                                    <input type="email" className='border rounded-md h-[48px] border-[#ACACAC] px-2' />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-[16px] text-[#5A5A5A] pb-2'>Téléphone</label>
                                    <input type="tel" className='border rounded-md h-[48px] border-[#ACACAC] px-2' />
                                </div>
                            </div>
                            <div className='pt-7'>
                                <div className='flex flex-col'>
                                    <label className='text-[16px] text-[#5A5A5A] pb-2'>Objet</label>
                                    <input type="text" className='border rounded-md h-[48px] border-[#ACACAC] px-2' />
                                </div>
                            </div>
                            <div className='pt-7'>
                                <div className='flex flex-col'>
                                    <label className='text-[16px] text-[#5A5A5A] pb-2'>Message</label>
                                    <textarea rows={6} className='border rounded-md  border-[#ACACAC] px-2'></textarea>
                                </div>
                            </div>
                            <div className='pt-10 flex justify-start'>
                                <button className='bg-[#FF8C00] text-white px-10 h-[48px] rounded-md'>Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ContactUs