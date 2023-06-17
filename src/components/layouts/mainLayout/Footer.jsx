import React, { useState, useEffect } from 'react'
import logo from '../../../assests/newDesign/footer_logo.svg'
// import android from '../../../assests/svg/googleplay.svg'
// import apple from '../../../assests/svg/apple.svg'
// import facebook from '../../../assests/Facebook Icon.png'
// import linkdin from '../../../assests/Linkedin Icon.png'
// import visa from '../../../assests/svg/PaymentOptions.svg'
// import bottomImg from '../../../assests/ff3.png'
import { Link, useLocation } from 'react-router-dom'
import Question from './Question'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { RiLinkedinFill } from 'react-icons/ri'
// import SocialButton from '../../downLoadBtn/SocialButton'


import c_1 from '../../../assests/newDesign/card_1.svg'
import c_2 from '../../../assests/newDesign/card_2.svg'
import c_3 from '../../../assests/newDesign/card_3.svg'
import c_4 from '../../../assests/newDesign/card_4.svg'
import c_5 from '../../../assests/newDesign/card_5.svg'
import c_6 from '../../../assests/newDesign/card_6.svg'

const Footer = () => {

  const location = useLocation().pathname

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
    <div className=' w-full '>

      {location === "/search" || location === "/detail" || location === "/" ?
        <div className='bg-footerTop bg-cover bg-center w-full xl:h-[349px] h-[320px] lg:px-0 px-5'>
          {/* <div className=" lg:px-[165px] flex lg:flex-nowrap md:flex-nowrap flex-wrap px-5 justify-center items-center lg:pt-[5rem] pt-[4rem]"> */}
          <div className=' container mx-auto xl:px-[110px]  lg:px-[110px]   lg:m-auto lg:pt-[5rem] pt-[4rem] md:pt-[5rem] '>
            <div className=' max-w-[550px] mr-auto'>
              <div className='text-white w-full '>
                <h2 className='lg:text-[31px] text-[22px] font-sans py-2 font-semibold' >Restez <span className='text-[#FF8C00]'>informé !</span></h2>
                <p className='lg:text-[14px] text-[12px] font-medium'>Souscrivez à notre newsletter et recevez nos dernières offres avec celles de nos partenaires.</p>
              </div>
              <div className='w-full lg:my-0 my-5 xl:pt-6 pt-1 max-w-[500px] '>
                <div className='flex items-center'>
                  <input style={{ background: 'rgba(255, 255, 255, 0.28)' }} type="text" placeholder='Subscribe' className='w-full focus:outline-none px-2 text-white placeholder:text-[#ACACAC] rounded-md border border-[#6B6B6B] mr-2 h-[40px]' />
                  <button className='bg-[#FF8C00] text-[16px] text-white rounded-md lg:px-8 px-5 py-2'>Subscribe</button>
                </div>
                <p className='text-[12px]  leading-[18px] pt-2.5 text-white'>En souscrivant, vous confirmez être en accord avec nos  <span className='text-[12px] text-[#FF8C00] px-2'>Conditions Générales</span></p>

              </div>
            </div>
          </div>
        </div>
        :
        <Question />
      }
      <div className='bg-[#EBEBEB] bg-center bg-cover w-full h-full '>
        <div className=' container mx-auto xl:px-[110px] lg:px-[110px]   lg:m-auto px-5  pt-[40px] pb-5 '>
          <div className='flex lg:flex-nowrap  flex-wrap '>
            <div className='xl:w-[50%] lg:w-[50%]'>
              <img src={logo} alt="logo" className='object-contain lg:w-[170px] lg:h-[48px] md:w-[170px] md:h-[48px] tablet:w-[170px] tablet:h-[48px]  w-[120px] h-[30px] cursor-pointer ' />
              <div className='pt-5'>
                <p className='text-[13px] font-normal text-justify leading-[22px]'>Primecar est la première plateforme digitale d'autopartage dans la zone Afrique francophone. En tant qu’acteur de l’économie collaborative, notre mission est de faciliter l’accès aux services de mobilité à tout moment et n’importe quand.  Vous n'avez qu'à réservez votre véhicule sur notre application mobile, il est immédiatement mis à votre disposition.</p>
              </div>
            </div>
            <div className='grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-2 gap-0 xl:ml-20 lg:ml-20 xl:mt-0 mt-5'>

              <div className=''>
                <ul className=' text-[13px]'>
                  <li className=' font-bold text-[#FF8C00] text-[15px]'>En savoir plus</li>
                  <li className='my-5 text text-[#5A5A5A]'>À propos</li>
                  <li className='text-[#5A5A5A]'><Link to="/contactus">  Contactez-nous </Link></li>
                  <li className='my-5 text-[#5A5A5A]'>Centre d’aide</li>
                </ul>
              </div>
              <div className=''>
                <ul className=' text-[13px]'>
                  <li className=' font-bold text-[#FF8C00] text-[15px]'>Découvrir</li>
                  <li className='my-6 text-[#5A5A5A]'> <Link to="/professional"> Professionnel </Link></li>
                  <li className='text-[#5A5A5A]'><Link to="/rent"> Louer mon véhicule</Link></li>
                </ul>
              </div>
              <div className="">
                <h2 className='font-bold text-[#FF8C00] text-[15px]'>Paiements sécurisés</h2>
                <div className='flex  xl:flex-wrap lg:flex-wrap pt-3'>
                  <img src={c_1} alt="card_1" className='object-contain ' />
                  <img src={c_2} alt="card_1" className='object-contain ml-2 mt-2 ' />
                  <img src={c_3} alt="card_1" className='object-contain ml-2 mt-2 ' />
                  <img src={c_4} alt="card_1" className='object-contain ml-2 mt-2  ' />
                  <img src={c_5} alt="card_1" className='object-contain ml-2 mt-2 ' />
                  <img src={c_6} alt="card_1" className='object-contain ml-6 mt-2' />
                </div>

                <div className='pt-8 flex justify-between  '>
                  <div className='rounded-full flex justify-center items-center bg-[#FF8C00] w-[40px] h-[40px]'>
                    <FaFacebookF className='text-white' />
                  </div>
                  <div className='rounded-full   flex justify-center items-center bg-[#FF8C00] w-[40px] h-[40px]'>
                    <RiLinkedinFill className='text-white' />
                  </div>
                  <div className='rounded-full   flex justify-center items-center bg-[#FF8C00] w-[40px] h-[40px]'>
                    <FaTwitter className='text-white' />
                  </div>
                  <div className='rounded-full   flex justify-center items-center bg-[#FF8C00] w-[40px] h-[40px]'>
                    <FaInstagram className='text-white' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' container mx-auto xl:px-[110px]   lg:m-auto px-3'>
          <hr className='border-[#667085]' />
          <div className='flex  flex-wrap lg:flex-nowrap md:justify-between md:items-center lg:items-center  md:flex-nowrap justify-center lg:justify-between pt-2 pb-2 text-[#667085] text-[14px]'>
            <h1>© 2023 Prime Car All rights reserved</h1>
            <div className='flex lg:pt-0 pt-3 '>
              <h1 className='mx-3'>Conditions générales</h1>
              <h1>Confidentialités</h1>

            </div>
          </div>
        </div>
      </div>

      {/* <div className='bg-footerBg bg-cover bg-center h-full'>
        <div className=' container mx-auto xl:px-[110px]   lg:m-auto px-3 md:px-5  pt-[70px]'>
          <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-10'>
            <div className='text-white w-full '>
              <Link to="/">
                <img src={logo} alt="logo" className='object-contain lg:w-[170px] lg:h-[48px] md:w-[170px] md:h-[48px] tablet:w-[170px] tablet:h-[48px]  w-[120px] h-[30px] cursor-pointer' />
              </Link>
              <div className='pt-[36px]'>
                <h2>Téléchargez l’application</h2>
                <div className='flex pt-[8px] items-center'>
                  <img src={apple} alt="social_login" className='object-cover lg:w-[30%] md:w-[35%] tablet:w-[22%] w-[40%]' />
                  <img src={android} alt="social_login" className='object-cover lg:w-[35%] w-[45%] md:w-[40%] tablet:w-[25%]  mx-2' />
                </div>
              </div>

              <div className='flex items-center mt-[28px]'>
                <div className='w-[35px] h-[35px] rounded-full bg-[#FF8C00] flex justify-center items-center p-2'>
                  <FaFacebookF className='text-white text-[20px] ' />
                </div>
                <div className='w-[35px] h-[35px] mx-3 rounded-full bg-[#FF8C00] flex justify-center items-center p-2'>
                  <RiLinkedinFill className='text-white text-[20px] ' />
                </div>
               
              </div>
            </div>
            <div>
              <div className='w-full'>
                <div className='flex list_items lg:pt-7 pt-4 lg:pl-10'>
                  <div className='w-full'>
                    <ul className='text-white text-[15px]'>
                      <li className=' font-semibold text-[16px]'>En savoir plus</li>
                      <li className='my-5 text'>À propos</li>
                      <li className=''><Link to="/contactus">  Contactez-nous </Link></li>
                      <li className='my-5'>Centre d’aide</li>
                    </ul>
                  </div>
                  <div className='w-full list_items_right pl-20'>
                    <ul className='text-white text-[15px]'>
                      <li className=' font-semibold text-[16px]'>Découvrir</li>
                      <li className='my-6'> <Link to="/professional"> Professionnel </Link></li>
                      <li className=''><Link to="/rent"> Louer mon véhicule</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='lg:pl-10 lg:pt-[50px] md:pt-[40px] '>
                <h2 className='text-white text-[15px] '>Paiements sécurisés</h2>
                <div className='flex  items-center pt-[32px] md:pt-2'>
                  <img src={visa} alt="visa" className='object-cover  lg:ml-[13px] md:-ml-[13px]' />
                </div>

              </div>
            </div>
          </div>
          <div className=' w-full pt-[20px] pb-2'>
            <div className='  lg:m-auto '>
              <hr />
              <div className='flex  flex-wrap lg:flex-nowrap md:justify-between md:items-center lg:items-center  md:flex-nowrap justify-center lg:justify-between pt-2 text-[#D9DBE1] text-[14px]'>
                <h1>© 2023 Prime Car All rights reserved</h1>
                <div className='flex footer_bottom lg:pt-0 pt-3 '>
                  <h1 className='fotter_bottom_heading mx-3'>Conditions générales</h1>
                  <h1>Confidentialités</h1>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div > */}

      {/* <div className='bg-[#272727] bg-center bg-cover w-full h-full '>
        <div className=' container mx-auto xl:px-[110px]   lg:m-auto px-3 flex  lg:flex-nowrap md:flex-nowrap flex-wrap justify-center   pt-[71px] '>
          <div className='text-white w-full pt-8'>
            <img src={logo} alt="logo" className='object-cover lg:w-[30%] w-[50%]' />

            <div className='pt-8'>
              <h2>Téléchargez l’application</h2>
              <div className='flex pt-4 items-center'>
                <img src={apple} alt="social_login" className='object-cover lg:w-[30%]  w-[45%]' />
                <img src={android} alt="social_login" className='object-cover lg:w-[35%] w-[45%]  mx-2' />
              </div>
            </div>

            <div className='flex items-center mt-10'>
              <img src={facebook} alt="facebook" className='object-cover ' />
              <img src={linkdin} alt="facebook" className=' mx-3 object-cover' />
            </div>
          </div>

          <div className='w-full'>
            <div className='flex lg:pt-7 pt-4 pl-10'>
              <div className='w-full'>
                <ul className='text-white text-[15px]'>
                  <li className=' font-semibold text-[16px]'>En savoir plus</li>
                  <li className='my-5 text'>À propos</li>
                  <li className=''><Link to="/contactus">  Contactez-nous </Link></li>
                  <li className='my-5'>Centre d’aide</li>
                </ul>
              </div>
              <div className='w-full pl-20'>
                <ul className='text-white text-[15px]'>
                  <li className=' font-semibold text-[16px]'>Découvrir</li>
                  <li className='my-6'> <Link to="/professional"> Professionnel </Link></li>
                  <li className=''><Link to="/rent"> Louer mon véhicule</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={`relative -mt-[90px] `}>
          <img src={bottomImg} className='object-cover  ' alt="footer" />
          <div className='absolute top-[30%] right-[12%] '>
            <h2 className='text-white text-[15px]'>Paiements sécurisés</h2>
            <div className='flex items-center pt-[32px] '>
              <img src={visa} alt="visa" className='object-cover lg:w-auto w-[10%] ml-[13px]' />

            </div>

          </div>
          <div className=' w-full absolute bottom-0'>
            <div className=' container mx-auto xl:px-[110px]   lg:m-auto px-3'>
              <hr />
              <div className='flex  flex-wrap lg:flex-nowrap md:justify-between md:items-center lg:items-center  md:flex-nowrap justify-center lg:justify-between pt-2 text-[#D9DBE1] text-[14px]'>
                <h1>© 2023 Prime Car All rights reserved</h1>
                <div className='flex lg:pt-0 pt-3 '>
                  <h1 className='mx-3'>Conditions générales</h1>
                  <h1>Confidentialités</h1>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div> */}


    </div >
  )
}

export default Footer