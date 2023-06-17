import React from 'react';

// import SearchModal from '../components/ModalSearch';
import Notifications from '../../../util/dropdowns/DropdownNotifications';
import Help from '../../../util/dropdowns/DropdownHelp';
import UserMenu from '../../../util/dropdowns/DropdownProfile';
import { MdSearch } from 'react-icons/md';
// import { useSelector } from 'react-redux';

function Header({
  sidebarOpen,
  setSidebarOpen
}) {





  return (
    <header className="sticky top-0 bg-white border-b border-[#E0E0E0] z-30">
      <div className="px-4 sm:px-6 lg:px-5">
        <div className="flex items-center justify-between h-[90px] -mb-px">

          {/* Header: Left side */}
          <div className="flex lg:hidden">

            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 "
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>

          </div>

          <div>
            <div className='bg-white hidden rounded-full border-0 lg:flex items-center px-4 h-[45px] w-[380px] py-3 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]'>
              <MdSearch className='text-[25px] text-[#FF8C00]' />
              <input type="text" className='focus:outline-none mx-2 w-full placeholder:text-[#ACACAC] placeholder:text-[16px] font-weight: 400;' placeholder='Search...' />
            </div>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            <div className='lg:block hidden'>
              <Notifications align="right" />
            </div>
            <Help align="right" />
            <UserMenu align="right" />

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;