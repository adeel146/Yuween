import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SidebarLinkGroup from './SidebarLinkGroup';
import SidebarObj from './SidebarObj'
import { MdArrowForwardIos } from 'react-icons/md'
import logo from '../../../assests/logoY.svg';
import logoText from '../../../assests/logoText.svg';
// import company from '../../../assests/company.png';
function Sidebar({
  sidebarOpen,
  setSidebarOpen
}) {
  const sidebaritems = SidebarObj()

  const location = useLocation();
  const { pathname } = location;
  
  const [height, setHeight] = useState(0);
  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');





  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    // let expand = localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);


  useEffect(() => {
    // Update the height when the component mounts and on window resize
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial height

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <div className='relative'>
      {/* Sidebar backdrop (mobile only) */}
      <div className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true" ></div>

      {/* Sidebar */}
      <div id="sidebar" ref={sidebar} className={`flex overflow-hidden flex-col absolute z-40 left-0 top-0 px-2 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen  no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 xl:sidebar-expanded:!w-64 2xl:sidebar-expanded:!w-64   shrink-0 bg-[#FF8C00] border-r py-6 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`} >
        {/* Sidebar header */}
        <div className="flex justify-between mb-5 pr-3 sm:px-2">
          {/* Close button */}
          <button ref={trigger} className="lg:hidden text-black shadow-md  border rounded-full w-[50px] mt-3 mr-5 bg-white flex justify-center items-center h-[40px]" onClick={() => setSidebarOpen(!sidebarOpen)} aria-controls="sidebar" aria-expanded={sidebarOpen}  >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/dashboard" className="block border-b border-white pb-6 w-full">
            {sidebarExpanded ?
              <div className='flex items-center justify-start pt-0 '>
                <img src={logo} alt="logo" className="w-[39px] h-[39px] object-over" />
                <img src={logoText} alt="logoText" className="ml-2" />
                {/* <h2 className='text-[25px] px-2 font-semibold text-white w-full'>Primecar</h2> */}
                {/* <img src={company} alt="logo" className="object-over mt-2 mx-1" /> */}

              </div>

              :
              <div className='flex items-center justify-start pt-0 '>
                <img src={logo} alt="logo" className="w-[39px] h-[39px] object-over ml-1" />
                <img src={logoText} alt="logoText" className="ml-30 ml-4" />
                {/* <h2 className='text-[25px] px-2 font-semibold text-white w-full'>Primecar</h2> */}
              </div>
            }
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {sidebaritems.map((group, i) => {
            return (
              <div key={i}>
                {/* <h3 className="text-xs uppercase text-[white] font-semibold pl-3">
                  <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">{group.groupname}</span>
                </h3> */}
                <ul className=" lg:max-h-[550px] !h-[90vh] overflow-x-hidden md:h-full  2xl:max-h-full  admin_sidrbar_scroll px-2 overflow-auto pb-4">
                  {group.menuitems?.map((item, index) => {
                    if (item.subMenuItems.length === 0) {
                      return (
                        <li key={index} className={`px-3 py-2 rounded-md ${ height<700?"mb-0":"mb-4"}  last:mb-0 ${pathname.includes(item.pathname) && 'bg-[white]'}`}>
                          <NavLink end to={item.path} className={`block text-white   ${pathname.includes(item.pathname) ? '!text-[#FF8C00] bg-white' : ''}  truncate transition duration-150 ${pathname.includes(item.pathname) ? '' : ""}`} >
                            <div className="flex items-center justify-start  ">
                              <p className='contents w-[60%]'>{pathname.includes(item.pathname) ? item.activeLeftIcon : item.leftIcon}</p>
                              <span style={{ paddingLeft: '10px' }} className={({ isActive }) => "text-[16px] font-medium   lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100  duration-200" + (isActive ? 'text-[#FF8C00]' : '')}>
                                {item.label}
                              </span>

                            </div>
                          </NavLink>
                        </li>
                      )
                    }
                    else {
                      return (
                        <SidebarLinkGroup key={index} activecondition={pathname.includes(item.pathname)} height={height} level={1}>
                          {(handleClick, open) => {
                            return (
                              <React.Fragment>
                                <a onClick={(e) => { e.preventDefault(); sidebarExpanded ? handleClick() : setSidebarExpanded(true); }} className={`block text-white  truncate transition duration-150  `} href="#0" >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-start">
                                      <p className='contents w-[60%]'>{pathname.includes(item.pathname) ? item.activeLeftIcon : item.leftIcon}</p>
                                      <span className="text-[16px] pl-2 font-medium text-[white]  lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                        {item.label}
                                      </span>
                                    </div>
                                    <div className={` flex shrink-0 ml-2`}>
                                      <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-white ${open && 'rotate-180'}`} viewBox="0 0 12 12"><path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" /> </svg>
                                    </div>
                                  </div>
                                </a>
                                <div className="lg:hidden 2xl:hidden 2xl:sidebar-expanded:block lg:sidebar-expanded:block ">
                                  <ul className={` mt-2  ${!open && 'hidden '}`}>
                                    {item.subMenuItems.map((subitem, s_index) => {
                                      if (subitem.subMenuItems.length === 0) {
                                        return (
                                          <li key={s_index} className="mb-1 last:mb-0">
                                            <NavLink end to={subitem.path} className={({ isActive }) => 'block text-white  px-8 py-2  sdfdsf w-full   transition duration-150 truncate ' + (isActive ? '!text-[#FF8C00] border rounded-md shadow-md  bg-white  font-bold' : '')}>
                                              <span className="text-[16px]    font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                                {subitem.label}
                                              </span>
                                            </NavLink>
                                          </li>
                                        )
                                      }
                                      else {
                                        return (
                                          <SidebarLinkGroup key={index} activecondition={pathname.includes(subitem.pathname)} level={2} >
                                            {(handleClick, open) => {
                                              return (
                                                <React.Fragment>
                                                  <a onClick={(e) => { e.preventDefault(); sidebarExpanded ? handleClick() : setSidebarExpanded(true); }} className={`block text-white  truncate transition duration-150 ${pathname.includes(item.pathname) ? '' : ""}`} href="#0" >
                                                    <div className="flex items-center justify-between">
                                                      <div className="flex items-center">
                                                        {pathname.includes(subitem.pathname) ? subitem.activeLeftIcon : subitem.leftIcon}
                                                        <span className="text-sm  font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                                          {subitem.label}
                                                        </span>
                                                      </div>
                                                      <div className="flex shrink-0 ml-2">
                                                        <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`} viewBox="0 0 12 12"><path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" /> </svg>
                                                      </div>
                                                    </div>
                                                  </a>
                                                  <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                                                    <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                                                      {subitem.subMenuItems.map((subitem, s_index) => {

                                                        return (
                                                          <li key={s_index} className="mb-1 last:mb-0">
                                                            <NavLink end to={subitem.path} className={({ isActive }) => 'block text-white  sdfdsf transition duration-150 truncate ' + (isActive ? '!text-[#444444] font-bold' : '')}>
                                                              <span className="text-[16px]  font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                                                {subitem.label}
                                                              </span>
                                                            </NavLink>
                                                          </li>
                                                        )

                                                      })}
                                                    </ul>
                                                  </div>
                                                </React.Fragment>
                                              );
                                            }}
                                          </SidebarLinkGroup>
                                        )
                                      }

                                    }
                                    )

                                    }
                                  </ul>
                                </div>
                              </React.Fragment>
                            );
                          }}
                        </SidebarLinkGroup>
                      )
                    }

                  })}
                </ul>



              </div>

            )
          })}

        </div>


      </div>
      {/* Expand / collapse button */}
      <div className="pt-3.5 hidden absolute top-2   transition-all duration-200 ease-in-out -right-[25px] z-40 lg:inline-flex justify-end mt-auto ">
        <div className="px-3 py-2">
          <button onClick={() => setSidebarExpanded(!sidebarExpanded)} className='shadow-md p-[5px] flex justify-center items-center bg-white rounded-full'>
            <MdArrowForwardIos className='sidebar-expanded:rotate-180 text-[#FF8C00]' />
            {/* <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text-white-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
              </svg> */}
          </button>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;