
import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import LoaderSpinner from '../../../util/LoaderSpinner'


const EditData = ({ setShow, callback, loadReason }) => {
    const [reason, setReason] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (reason !== "") {
            callback(reason)
        }
        else {
            // setError("Reason is Required")
        }
    }
    console.log("res", reason)

    return (
        <>
            <div className='w-[500px]'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-[#444444] font-semibold' >Reason</h2>
                    <MdClose onClick={() => setShow(false)} className='cursor-pointer' />
                </div>

                <textarea onChange={(e) => setReason(e.target.value)} value={reason} rows={4} placeholder='Type here.....' className='border py-2  placeholder:text-[14px] mt-5 w-full rounded-md text-[#ACACAC] focus:outline-none px-2 ' />

                <div className='pt-5 flex justify-end'>

                    <button type='submit' onClick={(e) => onSubmit(e)} className='w-[138px] py-2 rounded-md bg-[#FF8C00]   text-white'>
                        {
                            loadReason ?
                                <LoaderSpinner/>
                                :
                                "Soumettre"
                        }
                    </button>
                </div>


            </div>
        </>
    )
}

export default EditData