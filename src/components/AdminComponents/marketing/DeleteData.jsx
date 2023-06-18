import React from 'react'
import delIcon from '../../../assests/delIcon.png'
const DeleteData = ({setShow}) => {
    return (
        <>
            <div className='text-center p-5'>
                <div className='flex justify-center items-center'>
                    <img src={delIcon} alt="delicon" className='object-cover' />
                </div>
                <div className='py-5'>
                        <h1 className='text-[#292929] text-[20px] font-semibold'>Do you want to delete this Promo code</h1>
                        <p className='text-[#666666] leading-[20px] text-[16px] !mt-3 '>Are you sure you want to delete this code</p>
                    <div className='pt-5'>
                        <button onClick={() => setShow(false)} className='w-[138px] py-2 rounded-md bg-transparent border-[#ACACAC] border text-[#ACACAC]'>Cancel</button>
                        <button className='w-[138px] lg:my-0 md:my-0 my-2 py-2 lg:ml-3 rounded-md bg-[#F04438] text-white'>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteData