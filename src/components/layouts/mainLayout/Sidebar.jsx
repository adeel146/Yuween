import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

function Sidebar({
    sidebarOpen,
    setSidebarOpen
}) {



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


    const location = useLocation().pathname



    return (
        <div>
            {/* Sidebar backdrop (mobile only) */}
            <div className={`fixed inset-0 bg-slate-900 bg-opacity-30 md:hidden   transition-opacity duration-200 ${sidebarOpen ? 'opacity-100 z-50' : 'opacity-0 pointer-events-none'}`} aria-hidden="true" ></div>

            {/* Sidebar */}

            <div className={` flex flex-col md:hidden  fixed l z-50 top-0 left-0 h-full  ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transform ease-in-out h-[400px] w-64 border bg-white`}>

               
                <div className='flex justify-start m-4 items-start'>
                    <div className='' onClick={() => setSidebarOpen(false)}>
                        <MdClose className='text-[30px] ' />
                    </div>
                </div>
                <div>
                    <div className="h-full ">
                       

                        <ul className='pt-7 flex flex-col justify-center px-6'>
                            <li className={`${location === "/professional" ? 'border-b border-[#FF8C00]' : ''} text-[16px] pt-8 font-medium leading-[24px] text-center w-full`} >
                                <Link to="/professional">
                                    Professionnel
                                </Link>
                            </li>
                            <li className={`${location === "/helpsupport" || location === "/helpsupport_detail" ? 'border-b border-[#FF8C00] text-[#444444]' : 'text-[#444444]'} text-[16px] pt-8   font-medium leading-[24px] text-center w-full`}>
                                <Link to="/helpsupport">
                                    Besoin d’aide
                                </Link>
                            </li>
                            <li className='w-full flex justify-center items-center mt-5 '>
                                <Link to="/rent">
                                    <button className='bg-[#FF8C00] px-5  font-medium leading-[24px]  text-[14px] py-2 rounded-md text-white'>Louer mon véhicule</button>
                                </Link>
                            </li>
                        </ul>

                    </div>
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