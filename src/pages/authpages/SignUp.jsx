import React, { useState } from 'react'
import loginImg from '../../assests/login.png'
import google from '../../assests/google.png'
import { useNavigate} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import LoaderSpinner from '../../util/LoaderSpinner';
import { SignUpUser } from '../../lib/Api/AuthApi';

const schema = yup.object({
  first_name: yup.string().required("Name is required"),
  last_name: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  phone_number: yup.string().required("Phone Number is required"),
  password: yup.string().required(),
  confirm_password: yup.string().required()
    .oneOf([yup.ref('password')], 'Passwords does not match'),

});

const SignUp = () => {
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()


  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    setLoading(true)
    let { res } = await SignUpUser(data)
    setLoading(false)
    if (res?.success === true) {
      setLoading(false)
      navigate('/signin')
    }
    else if (res?.success === false) {
      setLoading(false)
    }
    else {
      setLoading(false)
    }
  }

  return (
    <>
      <div className='flex lg:flex-row flex-col  justify-between'>
        <div className='text-center lg:order-0 md:order-0 order-1  w-full lg:pt-[3rem] pt-[3rem] '>
          <h2 className='text-[34px]'>Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='max-w-[600px] lg:m-auto md:m-auto mx-5 lg:mb-0 md:mb-0 mb-5   '>
              <div className='grid grid-cols-2 gap-20'>
                <div className='flex flex-col items-start pt-[1rem]'>
                  <label className='text-[#444444] pb-2 text-[16px]'>*First Name </label>
                  <input type="text" {...register('first_name')} className={`px-2  outline-none border h-[40px] w-full rounded-md border-gray-300 ${errors.first_name && 'border-red-500'}`} />
                  {errors.first_name && (
                    <p className="text-red-500 text-sm text-start pt-1 ">{errors.first_name.message}</p>
                  )}
                </div>
                <div className='flex flex-col items-start pt-[1rem]'>
                  <label className='text-[#444444] pb-2 text-[16px]'>*Last Name </label>
                  <input type="text" {...register('last_name')} className={`px-2  outline-none border h-[40px] w-full rounded-md border-gray-300 ${errors.last_name && 'border-red-500'}`} />
                  {errors.last_name && (
                    <p className="text-red-500 text-sm text-start pt-1 ">{errors.last_name.message}</p>
                  )}
                </div>
              </div>
              <div className='flex flex-col items-start pt-[1rem]'>
                <label className='text-[#444444] pb-2 text-[16px]'>*Email</label>
                <input type="email" {...register('email')} className={`px-2  outline-none border h-[40px] w-full rounded-md border-gray-300 ${errors.email && 'border-red-500'}`} />
                {errors.email && (
                  <p className="text-red-500 text-sm text-start pt-1 ">{errors.email.message}</p>
                )}
              </div>
              <div className='flex flex-col items-start pt-[1rem]'>
                <label className='text-[rgb(68,68,68)] pb-2 text-[16px]'>*Phone</label>
                <input type="tel" {...register('phone_number')} className={`px-2  outline-none border h-[40px] w-full rounded-md border-gray-300 ${errors.phone_number && 'border-red-500'}`} />
                {errors.phone_number && (
                  <p className="text-red-500 text-sm text-start pt-1 ">{errors.phone_number.message}</p>
                )}
              </div>
              <div className='flex flex-col items-start pt-[1rem]'>
                <label className='text-[#444444] pb-2 text-[16px]'>*Password</label>
                <input type="password" {...register('password')} className={`px-2  outline-none border h-[40px] w-full rounded-md border-gray-300 ${errors.password && 'border-red-500'}`} />
                {errors.password && (
                  <p className="text-red-500 text-sm text-start pt-1 ">{errors.password.message}</p>
                )}
              </div>
              <div className='text-left'>
                <span className='text-[#F04438] pt-1 text-[14px]'>Note: Mot de passe d’au moins 8 caractères exigé incluant les numéros 0, 1,2,... les lettres ou l’alphanumérique.</span>
              </div>
              <div className='flex flex-col items-start pt-[1rem]'>
                <label className='text-[#444444] pb-2 text-[16px]'>*Confirm Password</label>
                <input type="password" {...register('confirm_password')} className={`px-2  outline-none border h-[40px] w-full rounded-md border-gray-300 ${errors.confirm_password && 'border-red-500'}`} />
                {errors.confirm_password && (
                  <p className="text-red-500 text-sm text-start pt-1 ">{errors.confirm_password.message}</p>
                )}
              </div>

              <div className='flex  items-center rounded-md  mt-[1rem]  '>
                <input type="checkbox" />
                <h2 className='text-[#444444] px-2 text-[14px]'>I’accepte les termes & conditions de Yuween.</h2>
              </div>

              <button type='submit' disabled={loading ? true : false} className='flex w-full bg-[#FF8C00] items-center rounded-md h-[45px] mt-[1rem] justify-center text-[white] px-2 text-[16px] '>
                {/* Login */}
                {loading ?
                  <LoaderSpinner />
                  : "Sign Up"}
              </button>

              <div className='flex border items-center cursor-pointer rounded-md h-[45px] mt-[2rem] justify-center '>
                <img src={google} alt="google" />
                <h2 className='text-[#444444] px-2 text-[16px]'>Continue with Google</h2>
              </div>


            </div>
          </form>
        </div>
        <div className='flex justify-end lg:w-[60%] h-full lg:order-1 md:order-1 order-0 '>
          <img src={loginImg} className='object-fill w-full h-full
                    ' alt="login_img" />
        </div>
      </div>
    </>
  )
}

export default SignUp