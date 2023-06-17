import React, { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Transition from '../Transition/Transition';
import { BsEye, BsThreeDotsVertical, BsTrash } from 'react-icons/bs';
import { BiRefresh } from 'react-icons/bi';

function GenericDrodown({ data }) {

  let status = [{ id: 4, Title: "Approved", color: "#6ABD8B", bgColor: '#ECFFEC' }, { id: 5, Title: "Rejected", color: "#F04438", bgColor: '#FFE7E7' }, { id: 1, Title: "Incompleted", color: "#4B3A8E", bgColor: '#F4F1FF' }]

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
        className={` flex items-center w-full   justify-between bg-transparent  transition duration-150 rounded-full ${dropdownOpen && 'bg-slate-200'}`}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <BsThreeDotsVertical className='text-[20px] text-[#898989]' />

      </button>

      <Transition
        className={`origin-top-center   z-10 absolute top-full -left-[101px]  bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1`}
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
          {/* {data} */}

          <div className=''>
            <ul className=''>
              <li className=' px-5 py-2 flex justify-center hover:bg-gray-100 ' >
                <BsEye className='text-[15px] text-[#98A2B3]' />
                <h2 className='ml-2'>View details</h2>
              </li>
              <li className=' px-5 py-2 flex items-center hover:bg-gray-100' >
                <BiRefresh className='text-[20px] ml-auto text-[#98A2B3]' />
                <h2>Change Status</h2>
              </li>
              <li className=' px-5 py-2 flex items-center hover:bg-gray-100' >
                <BsTrash className='text-[15px] text-[#98A2B3]' />
                <h2 className='ml-2'>Delete</h2>
              </li>

            </ul>
          </div>
        </div>
      </Transition>
      <div className='origin-top-center   z-10 absolute top-full -left-[101px]  bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1'>
hell
      </div>
    </div>
  )
}

export default GenericDrodown;