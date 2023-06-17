import React, { useState } from 'react'
import logo from '../../../assests/svg/Logo (SVG).svg'
import { Link, useLocation } from 'react-router-dom'
import Sidebar from '../mainLayout/Sidebar'
import { GoThreeBars } from 'react-icons/go'

const Header = () => {
  const [sideNavShow, setSideNavShow] = useState(false)

  const location = useLocation().pathname
  return (
    <>
      <Sidebar sidebarOpen={sideNavShow} setSidebarOpen={setSideNavShow} />
      {/* <div className='flex justify-between items-center  lg:px-[165px] md:px-[50px] px-5 h-[70px] '> */}
      <div className='flex justify-between items-center container mx-auto lg:px-[3px] xl:px-[110px] 2xl:w-full    tablet:pr-10 px-3 h-[50px] pt-3 '>
        <div className='lg:w-full md:w-[50%] tablet:w-[28%]   w-full'>
          <Link to="/">
            <img src={logo} alt="logo" className='object-contain lg:w-[170px] lg:h-[48px] md:w-[170px] md:h-[48px] tablet:w-[170px] tablet:h-[48px]  w-[120px] h-[30px] cursor-pointer' />
          </Link>
        </div>
        <div className=' lg:hidden md:hidden tablet:hidden cursor-pointer  '>
          <GoThreeBars className=' text-[30px]' onClick={() => setSideNavShow(true)} />
        </div>
        <div className='hidden md:block tablet:block lg:block w-full'>
          <ul className='flex items-center tablet:justify-end tablet:items-center'>
            <li className="px-4 lg:w-full md:w-[35%] tablet:w-[35%]" >
              <Link to="/professional" className={`${location === "/professional"  ? ' pb-[10px]  text-[#FF8C00] font-semibold' : 'text-[#444444] font-semibold'} px-4 text-[15px] font-medium tablet:text-[14px] leading-[24px] tablet:px-2 md:px-2 text-center w-full`}>
                Professionnel
              </Link>
            </li>
            <li className='lg:w-full md:w-[30%] tablet:w-[35%]  '>
              <Link to="/helpsupport" className={`${location === "/helpsupport" || location === "/helpsupport_detail" ? ' pb-[10px]   text-[#FF8C00] font-semibold' : 'text-[#444444] font-semibold'} tablet:px-2 px-4 md:px-2 text-[15px] tablet:text-[14px] font-medium leading-[24px] text-center w-full`}>
                Besoin d’aide
              </Link>
            </li>
            <li className=' ml-5 lg:w-full md:w-[20%] tablet:w-[35%]  tablet:ml-2'>
              <Link to="/rent">
                <button className='bg-[#FF8C00] xl:w-[200px] w-[196px] md:w-[155px] tablet:w-[160px] py-2 text-[15px] font-medium leading-[24px] rounded-md text-white'>Louer mon véhicule</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header