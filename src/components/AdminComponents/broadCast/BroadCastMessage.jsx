import React, { useState } from 'react'
import Popup from '../../../util/popup/Popup'
import WarningData from './WarningData'

const BroadCastMessage = () => {
    const [show, setShow] = useState(false);

    const openPopup = (e, mode,) => {
        e.stopPropagation()
        setShow(true)
    }
    return (
        <>

          { show &&  <Popup  modalOpen={show} data={<WarningData  setShow={(val) => setShow
            (val)}/>} />}

            <div className='flex justify-between'>
                <div>
                    <h2 className='text-[#FF8C00] font-semibold text-[20px]'>Broadcast</h2>
                    <p className='pt-4 text-[14px] text-[#898989]'>Here You can send Broadcast message to every one</p>
                </div>

            </div>

            <div className='pt-5'>
                <h2 className='text-[#444444] font-semibold'>Broadcast Message</h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-3 pt-5 gap-[34px]'>
                    <div className='flex flex-col'>
                        <label className='pb-3 text-[#606060] text-[14px]'>Represents</label>
                        <select className='border border-[#CDD2E1] h-[42px] text-[14px] placeholder:text-[14px] rounded-md placeholder:text-[#ACACAC] focus:outline-none px-2 '>
                            <option>Renter</option>
                            <option>Vehicle Owner</option>
                            <option>All</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label className='pb-3 text-[#606060] text-[14px]'>Schedule Delivery</label>
                        <input type="date" placeholder='Code' className='border border-[#CDD2E1] h-[42px] ticket placeholder:text-[14px] rounded-md text-[#ACACAC] focus:outline-none px-2 ' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='pb-3 text-[#606060] text-[14px]'>Send Message via</label>
                        <select className='border border-[#CDD2E1] h-[42px] placeholder:text-[14px] rounded-md text-[#ACACAC] focus:outline-none px-2 '>
                            <option>Email</option>
                            <option>App Notification</option>
                        </select>
                    </div>

                </div>
                <div className='pt-4 flex flex-col'>
                    <label className='pb-3 text-[#606060] text-[14px]'>Message</label>
                    <textarea placeholder='description' className='border border-[#CDD2E1] w-full placeholder:text-[14px] py-2 text-[#ACACAC] focus:outline-none px-2 rounded-md  ' rows={5}></textarea>
                </div>
                <div className='flex justify-end pt-5'>
                    <button onClick={(e) => openPopup(e)} className='bg-[#FF8C00] text-white text-[14px] font-semibold h-[40px] px-[52px] rounded-md'>Send</button>
                </div>

            </div>
        </>
    )
}

export default BroadCastMessage