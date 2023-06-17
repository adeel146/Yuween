import React, { useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import Left from './Left';
import { useRef } from 'react';
import { FiFilter } from 'react-icons/fi';

function Sidebar({
    sidebarOpen,
    setSidebarOpen
}) {


    const sidebar = useRef(null);

    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });



    useEffect(() => {
        if (sidebarOpen === true) {
            if (typeof window != "undefined" && window.document) {
                document.body.style.overflow = "hidden";
            }
        } else {
            document.body.style.overflow = "auto";
        }
    }, [sidebarOpen]);





    return (
        <div>
            {/* Sidebar backdrop (mobile only) */}
            <div
                className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"  ></div>

            {/* Sidebar */}
            <div id="sidebar" ref={sidebar} className={`lg:flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen   border border-gray-100  overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-[15rem] lg:sidebar-expanded:!w-[15rem] 2xl:!w-64 shrink-0 bg-white p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`} >


                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                    <FiFilter className='text-[20px] lg:hidden md:hidden text-[#FF8C00]' />
                    <h2 className='text-[#FF8C00] font-normal text-[22px]'>Filter</h2>
                    </div>
                    <div className='' onClick={() => setSidebarOpen(false)}>
                        <MdClose className='text-[28px] ' />
                    </div>
                </div>
                <div>
                    <Left />
                </div>
            </div>

            {/* <div id="sidebar" ref={sidebar} className={`flex flex-col  absolute z-50  bottom-0   
      ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} h-[400px]  overflow-y-auto no-scrollbar w-[360px] rounded-md  mx-2 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white  border-l py-4 transition-all duration-200 ease-in-out `} >
                <div className="  pr-6 sm:px-2">
                    

                    <div >
                        <Link to="/" className="flex items-center justify-center pt-8  ">
                            <img src={logo} className=" w-[60%] object-cover  " alt="logo" />
                        </Link>
                    </div>
                </div>

                <div>
                    <div className="h-full ">
                        <ul className='pt-7 flex flex-col justify-center px-6'>
                            <li className={`${location === "/professional" ? 'border-b border-[#FF8C00]' : ''} text-[16px] pt-8   font-medium leading-[24px] text-center w-full`} >
                                <Link to="/professional">
                                    Professionnel
                                </Link>
                            </li>
                            <li className={`${location === "/helpsupport" || location === "/helpsupport_detail" ? 'border-b border-[#FF8C00] text-[#444444]' : 'text-[#444444]'} text-[16px] pt-8   font-medium leading-[24px] text-center w-full`}>
                                <Link to="/helpsupport">
                                    Besoin d’aide
                                </Link>
                            </li>
                            <li className='w-full ml-5 pt-7'>
                                <Link to="/rent">
                                    <button className='bg-[#FF8C00] px-5  font-medium leading-[24px]  text-[16px] py-2 rounded-md text-white'>Louer mon véhicule</button>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>

              
            </div> */}
        </div>
    );
}

export default Sidebar;