
import React from 'react'
import { MdClose } from 'react-icons/md'
const EditData = ({setShow}) => {
    return (
        <>
            <div className=''>
                <div className='flex justify-between items-center'>
                    <h2 className='text-[#444444] font-semibold text-xl'>Edit Member</h2>
                    <MdClose onClick={() => setShow(false )} className='cursor-pointer'/>
                </div>
                <div className='flex flex-col pt-5'>
                    <label className='pb-2 text-[#606060] text-sm'>Name</label>
                    <input type="text" placeholder='Name' className='border border-[#CDD2E1] h-[42px] placeholder:text-[14px] text-[#ACACAC] text-sm rounded-md focus:outline-none px-2.5 ' />
                </div>
                <div className='flex flex-col py-4'>
                    <label className='pb-2 text-[#606060] text-sm'>Email</label>
                    <input type="text" placeholder='jhondie@gmail.com' className='border border-[#CDD2E1] h-[42px] placeholder:text-[14px] rounded-md text-[#ACACAC] focus:outline-none px-2.5 ' />
                </div>
                <div className='flex flex-col'>
                    <label className='pb-2 text-[#606060] text-sm'>Role</label>
                    <select className='border border-[#CDD2E1] h-[42px] placeholder:text-[14px] rounded-md text-[#ACACAC] focus:outline-none px-2.5 '>
                        <option>Admin</option>
                        <option>Moderator</option>
                        <option>Operator</option>
                        <option>Finance</option>
                    </select>
                </div>
                <div className='pt-5 text-right'>
                    <button onClick={() => setShow(false)} className='w-[138px] h-[40px] text-sm leading-[16px] font-semibold py-3 rounded-md bg-transparent border-[#ACACAC] border text-[#ACACAC]'>Cancel</button>
                    <button className='w-[138px] h-[40px] py-3 ml-3 rounded-md text-sm font-semibold bg-[#FF8C00] text-white leading-[16px]'>Send</button>
                </div>


            </div>
        </>
    )
}

export default EditData