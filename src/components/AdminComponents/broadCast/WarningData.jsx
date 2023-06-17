import React from 'react'
import warning from '../../../assests/warning.png'
const WarningData = ({setShow}) => {
    return (
        <>
            <div className='text-center p-5'>
                <div className='flex justify-center items-center'>
                    <img src={warning} alt="delicon" className='object-cover' />
                </div>
                <div className='py-5'>
                        <h1 className='text-[#292929] text-[20px] font-semibold'>Do you want to this Bradcast</h1>
                        <p className='text-[#666666] leading-[20px] text-[16px]'>Are you sure you want to delete this broadcast</p>
                    <div className='pt-5'>
                        <button onClick={() => setShow(false)} className='w-[138px] py-2 rounded-md bg-transparent border-[#ACACAC] border text-[#ACACAC]'>Cancel</button>
                        <button className='w-[138px] py-2 ml-3 rounded-md bg-[#FF8C00] text-white'>Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WarningData