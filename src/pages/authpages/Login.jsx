import React from 'react'
import loginImg from '../../assests/login.png'
 import google from '../../assests/google.png'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import * as yup from "yup";
import { signin } from '../../Redux/UserAuthSlice/UserAuthSlice'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SignInUser } from '../../lib/Api/AuthApi'
import LoaderSpinner from '../../util/LoaderSpinner';
const schema = yup.object({
    email: yup.string().email("Invalid email format").required(),
    password: yup.string().required(),
});
const Login = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });


    const onSubmit = async (data) => {

        setLoading(true)
        let { res, error } = await SignInUser(data)
        setLoading(false)
        let UserData = Object.assign({}, ...res)
        if (res !== undefined) {
            setLoading(false)
            dispatch(signin(UserData))
            navigate('/dashboard')
        }
        else if (error) {
            setLoading(false)

        }
        else {
            setLoading(false)

        }
    }
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

    return (
        <>
            <div className='flex lg:flex-row flex-col  justify-between'>
                <div className={`text-center  lg:order-0 md:order-0 order-1 ${errors && 'lg:!pt-[5rem]'} w-full lg:pt-[7rem] pt-[3rem]`}>
                    <h2 className='text-[34px] font-semibold text-[#444]'>Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='max-w-[600px] lg:m-auto md:m-auto mx-5 lg:mb-0 md:mb-0 mb-[20px]  '>
                            <div className='flex flex-col items-start pt-[1rem] mb-[1rem]'>
                                <label className='text-[#444444] pb-2 text-[16px]'>*User name or email address </label>
                                <input type="text" {...register('email')} placeholder='abc@gmail.com' className={`border bg-white focus:outline-none px-2 h-[40px] w-full rounded-md  ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
                            </div>
                            {errors.email && (
                                <p className="text-red-500 text-sm text-start pt-1 ">{errors.email.message}</p>
                            )}
                            <div className='flex flex-col items-start'>
                                <label className='text-[#444444] pb-2 text-[16px]'>*Password</label>
                                <div className='relative w-full'>
                                <input placeholder='......' {...register('password')} type={isPasswordVisible ? "text" : "password"} className={`border bg-white focus:outline-none px-2 h-[40px] w-full rounded-md  ${errors.password ? 'border-red-500' : 'border-gray-300'}`} />
                                <button
        className="absolute top-[8px] right-0 flex items-center px-4 text-gray-600"
        onClick={togglePasswordVisibility}
      >
        {isPasswordVisible ? (
        
           <svg
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           strokeWidth={1.5}
           stroke="currentColor"
           className="w-5 h-5"
         >
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
           />
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
           />
         </svg>
        ) : (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>
        )}
      </button>
                                </div>
                                
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-sm text-start pt-1 ">{errors.password.message}</p>
                            )}
                            <div   className='flex justify-end items-end'>
                            <Link to="/forgot" className=' pt-2 max-w-[200px]  text-[#444444] cursor-pointer'>Forgot your password</Link>
                            </div>
                            <div className='flex cursor-pointer border items-center rounded-md h-[45px] mt-[2rem] justify-center '>
                                <img src={google} alt="google" />
                                <h2 className='text-[#444444] px-2 text-[16px]'>Continue with Google</h2>
                            </div>

                            <div className='flex  items-center rounded-md  mt-[1rem]  '>
                                <input type="checkbox" />
                                <h2 className='text-[#444444] px-2 text-[16px]'>Keep me sign in</h2>
                            </div>
                            <div className='flex  items-center rounded-md w-full text-center mt-[1rem]  '>
                                <h2 className='text-[#444444] text-[16px] w-full text-center'>Don't Have an Account? <Link to="/signup" className='text-[#FF8C00] cursor-pointer'>SignUp</Link></h2>

                            </div>
                            <button type='submit' disabled={loading ? true : false} className='flex w-full bg-[#FF8C00] items-center rounded-md h-[45px] mt-[1rem] justify-center text-[white] px-2 text-[16px] '>
                                {/* Login */}
                                {loading ?
                                    <LoaderSpinner />
                                    : "login"}
                            </button>

                        </div>
                    </form>
                </div>
                <div className={`flex justify-end lg:w-[60%] lg:order-1 md:order-1 order-0 `}>
                    <img src={loginImg} className='object-cover w-full h-screen 
                    ' alt="login_img" />
                </div>
            </div>


        </>
    )
}

export default Login