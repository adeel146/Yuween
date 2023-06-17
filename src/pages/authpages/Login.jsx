import React from 'react'
import loginImg from '../../assests/login.png'
// import google from '../../assests/google.png'
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

    return (
        <>
            <div className='flex lg:flex-row flex-col  justify-between'>
                <div className={`text-center  lg:order-0 md:order-0 order-1 ${errors && 'lg:!pt-[5rem]'} w-full lg:pt-[7rem] pt-[3rem]`}>
                    <h2 className='text-[34px]'>Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='max-w-[600px] lg:m-auto md:m-auto mx-5 lg:mb-0 md:mb-0 mb-[20px]  '>
                            <div className='flex flex-col items-start pt-[1rem]'>
                                <label className='text-[#444444] pb-2 text-[16px]'>*User name or email address </label>
                                <input type="text" {...register('email')} placeholder='abc@gmail.com' className={`border cursor-pointer focus:outline-none px-2 h-[40px] w-full rounded-md  ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
                            </div>
                            {errors.email && (
                                <p className="text-red-500 text-sm text-start pt-1 ">{errors.email.message}</p>
                            )}
                            <div className='flex flex-col items-start pt-[1rem]'>
                                <label className='text-[#444444] pb-2 text-[16px]'>*Password</label>
                                <input placeholder='......' {...register('password')} type="password" className={`border cursor-pointer focus:outline-none px-2 h-[40px] w-full rounded-md  ${errors.password ? 'border-red-500' : 'border-gray-300'}`} />
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-sm text-start pt-1 ">{errors.password.message}</p>
                            )}
                            <div   className='flex justify-end items-end'>
                            <Link to="/forgot" className=' pt-2 max-w-[200px]  text-[#444444] cursor-pointer'>Forgot your password</Link>
                            </div>
                            {/* <div className='flex cursor-pointer border items-center rounded-md h-[45px] mt-[2rem] justify-center '>
                                <img src={google} alt="google" />
                                <h2 className='text-[#444444] px-2 text-[16px]'>Continue with Google</h2>
                            </div> */}

                            <div className='flex  items-center rounded-md  mt-[1rem]  '>
                                <input type="checkbox" />
                                <h2 className='text-[#444444] px-2 text-[16px]'>Keep me sign in</h2>
                            </div>
                            <div className='flex  items-center rounded-md  mt-[1rem]  '>
                                <h2 className='text-[#444444] text-[16px]'>Don't Have an Account? <Link to="/signup" className='text-[#FF8C00] cursor-pointer'>SignUp</Link></h2>

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