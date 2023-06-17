import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from 'react';
import { ForgotUser } from '../../../lib/Api/AuthApi'
import LoaderSpinner from '../../../util/LoaderSpinner';
const schema = yup.object({
    email: yup.string().email("Invalid email format").required(),
});
const EmailFrom = ({ handleNext , setEmail }) => {
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });


    const onSubmit = async (data) => {

        setLoading(true)
        let { res } = await ForgotUser(data)
        if (res.success === true) {
            setLoading(false)
            setEmail(data.email)
            handleNext(1)
        }
        else {
            setLoading(false)

        }
    }

    return (
        <>
          <h2 className='text-[34px] text-center'>Forgot Password</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='max-w-[600px] lg:m-auto md:m-auto mx-5 lg:mb-0 md:mb-0 mb-[20px]  '>
                    <div className='flex flex-col items-start pt-[1rem]'>
                        <label className='text-[#444444] pb-2 text-[16px]'>*User name or email address </label>
                        <input placeholder='abc@gmail.com' type="text" {...register('email')} className={`border cursor-pointer focus:outline-none px-2 h-[40px] w-full rounded-md  ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
                    </div>
                    {errors.email && (
                        <p className="text-red-500 text-sm text-start pt-1 ">{errors.email.message}</p>
                    )}

                    <button type='submit' disabled={loading ? true : false} className='flex w-full bg-[#FF8C00] items-center rounded-md h-[45px] mt-[1rem] justify-center text-[white] px-2 text-[16px] '>
                        {/* Login */}
                        {loading ?
                            <LoaderSpinner />
                            : "Send"}
                    </button>

                </div>
            </form>



        </>
    )
}

export default EmailFrom