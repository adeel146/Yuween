
import React, { useState } from 'react'
import loginImg from '../../assests/login.png'
import EmailFrom from '../../components/AuthComponents/ForgotPassword/EmailForm';
import OtpForm from '../../components/AuthComponents/ForgotPassword/OtpForm';
import Resetpassword from '../../components/AuthComponents/ForgotPassword/ResetPassword';

const Forgot = () => {
    const [active, setActive] = useState(0)
    const [email, setEmail] = useState('')
    const [emailOtp, setemailOtp] = useState('')
    return (
        <>
            <div className='flex lg:flex-row flex-col  justify-between'>
                <div className='w-full text-enter lg:pt-40'>
                    {/* <h2 className='text-[34px] text-center'>Forgot Password</h2> */}

                    {active === 0 && <EmailFrom handleNext={setActive} setEmail={setEmail}/>}
                    {active === 1 && <OtpForm handleNext={setActive} email={email} setemailOtp={setemailOtp} />}
                    {active === 2 && <Resetpassword  email={email} emailOtp={emailOtp}/>}
                </div>
                <div className={`flex justify-end lg:w-[60%] lg:order-1 md:order-1 order-0 `}>
                    <img src={loginImg} className='object-cover w-full h-screen 
                    ' alt="login_img" />
                </div>
            </div>


        </>
    )
}

export default Forgot