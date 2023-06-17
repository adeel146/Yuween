import React from 'react'
import { useState } from 'react';
import LoaderSpinner from '../../../util/LoaderSpinner';
import { SendOtp } from '../../../lib/Api/AuthApi';
import OTPInput from 'otp-input-react'
const OtpForm = ({ handleNext, email, setemailOtp }) => {
    const [loading, setLoading] = useState(false)
    const [otp, setOtp] = useState('')
    const onSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        let data = {
            email: email,
            pin_code: otp
        }
        let { res} = await SendOtp(data)
        setLoading(false)
        if (res.success === true) {
            setLoading(false)
            setemailOtp(otp)
            handleNext(2)

        }
       
        else {
            setLoading(false)

        }
    }

    return (
        <>

            <div >
                {/* <h2 className='text-[18px] text-center'>Enter Email Otp </h2> */}
                <form onSubmit={onSubmit}>
                    <div className='max-w-[600px] lg:m-auto md:m-auto mx-5 text-center lg:mb-0 md:mb-0 mb-[20px]  '>
                        {/* <h1 className="text-2xl">Email Verification</h1> */}
                        <h2 className='text-[34px] text-center'>Email Verification</h2>
                        <div className="flex flex-col mt-4">
                            <span>we have sent you a code on your Email please verify</span>
                        </div>
                        <div className='text-center pt-10 '>

                            <OTPInput
                                value={otp}
                                onChange={setOtp}
                                autoFocus
                                style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', width: '100%' }}
                                OTPLength={4}
                                otpType="number"
                                disabled={false}
                                inputStyles={{ padding: '0px', border: '2pt solid' }}
                                secure={false}

                            />
                        </div>


                        <button type='submit' disabled={loading ? true : false} className='flex  mt-10 w-full bg-[#FF8C00] items-center rounded-md h-[45px]  justify-center text-[white] px-2 text-[16px] '>
                            {/* Login */}
                            {loading ?
                                <LoaderSpinner />
                                : "Verify"}
                        </button>

                    </div>
                </form>
            </div>



        </>
    )
}

export default OtpForm