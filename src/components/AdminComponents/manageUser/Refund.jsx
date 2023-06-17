
import React from 'react'
const Refund = ({ setShow }) => {
    return (
        <>
            <div className='lg:w-[400px]'>

                <h1 className='text-[#FF8C00] text-[20px] font-semibold'>Refund Summary</h1>
                <div>
                    <ul>
                        <li className='flex justify-between  items-center pt-2'>
                            <h1 className='text-[15px] text-[#444444]'>Amount</h1>
                            <h2 className='text-[15px] text-[#898989]'>33 000 FCFA</h2>
                        </li>
                        <li className='flex justify-between items-center py-3'>
                            <h1 className='text-[15px] text-[#444444]'>Driver</h1>
                            <h2 className='text-[15px] text-[#898989]'>10 000 FCFA</h2>
                        </li>
                        <li className='flex justify-between  items-center'>
                            <h1 className='text-[15px] text-[#444444]'>Refund Total</h1>
                            <h2 className='text-[15px] text-[#898989]'>44 000 FCFA</h2>
                        </li>
                        <li className='py-5'><hr/></li>
                        <li className='flex justify-between items-center py-3'>
                            <h1 className='text-[15px] text-[#444444]'>Refund Amount</h1>
                            <h2 className='text-[15px] text-[#898989]'>44 000 FCFA</h2>
                        </li>
                        <li className='flex justify-between  items-center'>
                            <h1 className='text-[15px] text-[#444444]'>Orange Payment</h1>
                            <h2 className='text-[15px] text-[#898989]'>225xxxxxxxxxx5</h2>
                        </li>
                        <li className='flex flex-col pt-3'>
                                <label className='pb-2 text-[#98A2B3] text-[14px]'>All currency in FCFA only</label>
                            <input type="text" placeholder='44 000 ' className='border focus:outline-none px-2 py-2 rounded-md '/>
                        </li>
                        <li className='flex flex-col pt-3'>
                                <label className='pb-2 text-[#98A2B3] text-[14px]'>Deduction Percentage</label>
                            <input type="text" placeholder='15 % ' className='border focus:outline-none px-2 py-2 rounded-md '/>
                        </li>
                    </ul>
                </div>
                <div className='pt-5 flex justify-end'>
                    <button onClick={() => setShow(false)} className='w-[148px] py-2 rounded-md bg-[#FF8C00]   text-white'>Soumettre</button>
                </div>


            </div>
        </>
    )
}

export default Refund