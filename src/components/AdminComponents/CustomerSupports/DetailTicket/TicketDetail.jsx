import React from 'react'
import Messages from '../../manageUser/chats/Messages'
import { BsCheck } from 'react-icons/bs'
import { MdKeyboardArrowRight } from 'react-icons/md'
import user from '../../../../assests/ticketuser.png'
import { useLocation } from 'react-router-dom'
const TicketDetail = () => {
    const location = useLocation().pathname

    let checkType = location === "/ticket" ? " Support Tickets" : "Reports"
    let changeHeading = location === "/ticket" ? "Want to create an account in your system, please help!" : "Car Owner Report"
    return (
        <>

            <div className='flex items-center'>
                <h1 className='text-[#ACACAC] text-[16px]'>
                    {checkType}
                </h1>
                <MdKeyboardArrowRight className='text-[#ACACAC] mx-2 text-[20px]' />
                <h1 className='text-[#FF8C00] text-[16px]'> {
                    location === "/ticket" ? "Ticket 1374" : "Reports 1374"} </h1>

            </div>

            <div className='bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-md mt-10 mb-5 p-5'>
                <div className='flex items-center'>
                    <p className='text-[#98A2B3] text-[14px] '>
                        {checkType}
                    </p>
                    <p className='text-[#444444] text-[14px] pl-2'>#343434</p>
                </div>
                <div className='pt-5'>
                    <h1 className='text-[#444444] text-[24px] font-semibold'>{changeHeading}</h1>
                    <p className='text-[#444444] text-[14px] pt-4'>Diam, in vitae ante velit suscipit scelerisque commodo urna at. Arcu quam erat ac volutpat sed nunc faucibus id. Tempor adipiscing ultricies odio ipsum sed quis amet, mauris. Diam, in vitae ante velit suscipit scelerisque commodo urna at. Arcu quam erat ac volutpat sed nunc faucibus id. </p>
                </div>
            </div>



            <div className="grid lg:grid-cols-4 gap-4">
                <div className='lg:col-span-3'>
                    <Messages type="ticket" />
                </div>
                <div className='w-full shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] px-5 py-5 bg-white rounded '>
                    <button className='h-[40px] text-[14px] w-full bg-[#2BA676] flex justify-center items-center font-semibold text-white'>
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                        <path d="M6.00016 11.1698L1.83016 6.99984L0.410156 8.40984L6.00016 13.9998L18.0002 1.99984L16.5902 0.589844L6.00016 11.1698Z" fill="white"/>
                    </svg>
                        Mark as Resolved
                    </button>
                    <div className="pt-5 border-b border-[#ACACAC]">
                        <h1 className='text-[16px] font-semibold'>Ticket details</h1>
                        <ul className='pt-5'>
                            <li className='flex justify-between pb-4'>
                                <p className='text-[#ACACAC] text-[14px]'>Ticket ID</p>
                                <p className='text-[16px] text-[#898989]'>#34345</p>
                            </li>
                            <li className='flex justify-between pb-4'>
                                <p className='text-[#ACACAC] text-[14px]'>Status</p>
                                <p className='text-[12px] text-[#0041B2] px-1.5 font-medium py-[2px] bg-[#E9F3FF] rounded-full'>Open</p>
                            </li>
                            <li className='flex justify-between pb-4'>
                                <p className='text-[#ACACAC] text-[14px]'>Req Date</p>
                                <p className='text-[16px] text-[#898989]'>12/06/2023</p>
                            </li>
                            <li className='flex justify-between pb-4'>
                                <p className='text-[#ACACAC] text-[14px]'>Type</p>
                                <p className='text-[16px] text-[#898989]'>General</p>
                            </li>
                        </ul>
                    </div>

                    <div className="pt-5 ">
                        <h1 className='text-[16px] font-semibold'>User detail</h1>
                        <ul className='pt-5'>
                            <li className='flex items-center  pb-4'>
                                <img src={user} alt="user" className='object-cover' />
                                <p className='text-[14px] text-[#444444] px-2'>David Smith</p>
                            </li>
                            <li className='pb-4'>
                                <p className='text-[#98A2B3] text-[14px] '>Email</p>
                                <p className='text-[14px] pt-2 text-[#898989]'>davidsmith@gmail.com</p>
                            </li>
                            <li className=' pb-5'>
                                <p className='text-[#98A2B3] text-[14px]'>Phone</p>
                                <p className='text-[14px] text-[#898989] pt-2'>+920320212456</p>
                            </li>
                            <li className=' pb-5'>
                                <p className='text-[#606060] text-[14px]'>Assign to</p>
                                <select className='border border-[#E0E0E0] px-2 focus:outline-none w-full mt-2 h-[38px] text-[14px] text-[#ACACAC] rounded-md'>
                                    <option>Moderator</option>
                                </select>
                            </li>
                            <li className=' pb-5'>
                                <p className='text-[#606060] text-[14px]'>Due date</p>
                                <input type="date" className='w-full ticket text-[#ACACAC] text-[14px] mt-2 border border-[#E0E0E0] h-[38px] rounded-md focus:outline-none px-2' />
                            </li>
                        </ul>
                    </div>

                    <div className='pt-8'>
                        <button className='h-[40px] text-[14px] w-full bg-[#FF8C00] flex justify-center items-center font-semibold text-white rounded-md'>
                            Assign ticket
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TicketDetail