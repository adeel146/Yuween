import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import LoaderSpinner from '../../../util/LoaderSpinner';
import { ResetPassword } from '../../../lib/Api/AuthApi';

const schema = yup.object({
  password: yup.string().required(),
  confirm_passwod: yup.string().required()
  .oneOf([yup.ref('password')], 'Passwords does not match'),
});
const Resetpassword = ({email , emailOtp }) => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });


  const onSubmit = async (data) => {
    setLoading(true)
    let payload = {
      "email":email,
      "new_pass": data?.password,
      "r_new_pass": data?.confirm_passwod,
      "pin_code":emailOtp
  }
    let { res } = await ResetPassword(payload)
    setLoading(false)
    if (res.success === true) {
      setLoading(false)
      navigate('/signin')
    }
   
    else {
      setLoading(false)

    }
  }

  return (
    <>
      {/* <h2 className='text-[34px] text-center'>Reset  Password</h2> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='max-w-[600px] lg:m-auto md:m-auto mx-5 lg:mb-0 md:mb-0 mb-[20px]  '>
          <div className='flex flex-col items-start pt-[1rem]'>
            <label className='text-[#444444] pb-2 text-[16px]'>*Password </label>
            <input type="password" {...register('password')} className={`border cursor-pointer focus:outline-none px-2 h-[40px] w-full rounded-md  ${errors.password ? 'border-red-500' : 'border-gray-300'}`} />
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm text-start pt-1 ">{errors.password.message}</p>
          )}
          <div className='flex flex-col items-start pt-[1rem]'>
            <label className='text-[#444444] pb-2 text-[16px]'>*Confirm Password</label>
            <input {...register('confirm_passwod')} type="password" className={`border cursor-pointer focus:outline-none px-2 h-[40px] w-full rounded-md  ${errors.confirm_passwod ? 'border-red-500' : 'border-gray-300'}`} />
          </div>
          {errors.confirm_passwod && (
            <p className="text-red-500 text-sm text-start pt-1 ">{errors.confirm_passwod.message}</p>
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

export default Resetpassword