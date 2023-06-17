import React, { useState } from 'react'
// import user from '../../assests/renteruser.png'
import EditProfile from '../../components/AdminComponents/profile/EditProfile'
import { useSelector } from 'react-redux'
const Profile = () => {
    const [active, setActive] = useState(0)
    const userInfo = useSelector((state) => state?.userAuth?.userInfo)
    return (
        <>
            <h1 className='text-[20px] font-semibold'>Profile</h1>
            <div className='mt-5'>
                <div className='grid xtra-small:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-3'>
                    <div className='bg-white w-full  p-5 flex justify-center shadow-md border border-gray-100 rounded-md'>
                        <ul className='text-left  '>
                            <li onClick={() => setActive(0)} className={`${active === 0 ? 'text-[#FF8C00]' : 'text-[#444444]'}   text-[16px] cursor-pointer `}>Profile</li>
                            <li onClick={() => setActive(1)} className={`${active === 1 ? 'text-[#FF8C00]' : 'text-[#444444]'}   text-[16px] cursor-pointer py-5`}>Edit Profile</li>
                            <li onClick={() => setActive(2)} className={`${active === 2 ? 'text-[#FF8C00]' : 'text-[#444444]'}   text-[16px] cursor-pointer`}>Notification</li>
                        </ul>
                    </div>
                    <div className='lg:col-span-2 xtra-small:col-span-2 md:col-span-2 bg-white w-full p-5 shadow-md border border-gray-100 rounded-md'>
                        {active === 0 ?
                            <div>
                                <div className='flex xl:flex-nowrap md:flex-nowrap flex-wrap items-center'>
                                    <div className="flex justify-center items-center xl:w-auto md:w-auto w-full">
                                        {/* <img src={userInfo?.userimg} alt="user" className='object-cover rounded-full xl:w-[15%] w-full h-full xl:h-[120px]' /> */}
                                        <img src={userInfo?.userimg} alt="camera_img" className=' xl:w-[132px] xl:h-[132px] md:w-[70px] md:h-[70px] object-cover rounded-full' />
                                    </div>
                                    <div className='pl-4 '>
                                        <h1 className='text-[#444444] text-[24px]  font-medium'>{userInfo?.fname}{userInfo?.lname}</h1>
                                        <p className='text-[14px] text-[#444444] pt-2'>{userInfo?.UserRole}</p>
                                    </div>
                                </div>
                                <div className='pt-5'>
                                    <h2 className='text-[#98A2B3] text-[14px]'>About Me </h2>
                                    <p className='text-[#898989] text-[16px]'>Сonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div className='pt-5'>
                                    <div className='grid lg:grid-cols-3 grid-cols-2 gap-20'>
                                        <div>
                                            <div>
                                                <h1 className='text-[#98A2B3] text-[14px]'>EMAIL</h1>
                                                <p className='text-[#898989] text-[16px]'>{userInfo?.email}</p>
                                            </div>

                                            <div className='pt-5'>
                                                <h1 className='text-[#98A2B3] text-[14px]'>Address</h1>
                                                <p className='text-[#898989] text-[16px]'>{userInfo?.address}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <h1 className='text-[#98A2B3] text-[14px]'>PHONE NUMBER</h1>
                                                <p className='text-[#898989] text-[16px]'>{userInfo?.phone}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <h1 className='text-[#98A2B3] text-[14px]'>Country</h1>
                                                <p className='text-[#898989] text-[16px]'>DC1235MORJG9</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : active === 1 ?
                                <EditProfile /> : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile