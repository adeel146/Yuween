import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../Transition/Transition';
// import logo from '../images/logo-curtain.png';
import UserAvatar from '../../assests/user.png';
import { useDispatch } from 'react-redux'
import { signout } from '../../Redux/UserAuthSlice/UserAuthSlice'
import { useSelector } from 'react-redux'


const DropdownProfile = ({ align }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state?.userAuth?.userInfo)



  const trigger = useRef(null);
  const dropdown = useRef(null);

  const handleSignout = () => {
    dispatch(signout())
  }

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });
  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="inline-flex bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-full py-2 pl-[20px] pr-[20px] justify-center items-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        {/* <img className="w-8 h-8 rounded-full" src={logo} width="32" height="32" alt="User" /> */}
        {/* <img src={logo} alt="logo" className="w-[50px] lg:sidebar-expanded:w-[55px] h-[50px]" /> */}

        <div className="flex items-center truncate">

          <span className="truncate text-base capitalize font-normal mr-2 group-hover:text-slate-800 ">{userInfo?.lname}</span>
          <img className="w-8 h-8 mx-2 mr-2 rounded-full" src={userInfo? userInfo?.userimg :UserAvatar} alt="User" />
          <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.99938 1.00973C6.99938 1.16965 6.95308 1.30962 6.84522 1.40952L3.76123 4.40772C3.62246 4.54769 3.4374 4.54769 3.29864 4.40772L0.21464 1.40952C0.044969 1.24961 0.0141897 0.92978 0.137563 0.710019C0.260939 0.490094 0.50768 0.450198 0.677224 0.610112L3.52971 3.38821L6.38246 0.609944C6.55213 0.450025 6.79875 0.49009 6.92213 0.709851C6.96842 0.789808 6.99933 0.909665 6.99933 1.00974L6.99938 1.00973Z" fill="#444444"/>
          </svg>
        </div>
      </button>

      <Transition
        className={`origin-top-right z-10 absolute top-full w-full bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === 'right' ? 'right-0' : 'left-0'}`}
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200">
            <div className="font-regular capitalize text-slate-800">{userInfo?.userRole}</div>
            {/* <div className="text-xs text-slate-500 italic">Administrator</div> */}
          </div>
          <ul>
            <li>
              <Link
                className="font-regular text-sm text-[#444444]-500 hover:text-red-600 flex items-center py-1 px-3"
                to="/profile"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Profile Setting
              </Link>
            </li>
            <li>
              <span
                className="font-regular cursor-pointer text-sm text-[#444444]-500 hover:text-red-600 flex items-center py-1 px-3"

              onClick={handleSignout}
              >
                Sign Out
              </span>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  )
}

export default DropdownProfile