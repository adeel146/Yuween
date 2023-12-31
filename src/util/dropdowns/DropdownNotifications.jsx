import React, { useState, useRef, useEffect } from 'react';
import Transition from '../Transition/Transition';
import message from '../../assests/messages.svg'
function DropdownNotifications({
  align
}) {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

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
        className={`w-[50px] h-[50px] flex items-center justify-center bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] transition duration-150 rounded-full ${dropdownOpen && 'bg-slate-200'}`}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only">Notifications</span>
        <img src={message} alt="message" className='object-cover lg:w-auto md:w-auto w-[10%]'/>
        {/* <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full"></div> */}
      </button>

      <Transition
        className={`origin-top-right z-10 absolute top-full -mr-48 sm:mr-0 min-w-80 bg-white border border-slate-200 py-1.5 rounded shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] overflow-hidden mt-1 ${align === 'right' ? 'right-0' : 'left-0'}`}
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div ref={dropdown} onFocus={() => setDropdownOpen(true)} onBlur={() => setDropdownOpen(false)}   >
          <div className="text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4">Notifications</div>
          {/* <ul>
            <li className="border-b border-slate-200 last:border-0">
              <Link to="#0" onClick={() => setDropdownOpen(!dropdownOpen)} className="block py-2 px-4 hover:bg-slate-50" >
                <span className="block text-sm mb-2">📣 <span className="font-medium text-slate-800">Edit your information in a swipe</span> Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</span>
                <span className="block text-xs font-medium text-slate-400">Feb 12, 2021</span>
              </Link>
            </li>
          </ul> */}
        </div>
      </Transition>
    </div>
  )
}

export default DropdownNotifications;