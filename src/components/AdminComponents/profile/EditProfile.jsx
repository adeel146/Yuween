import React, { useEffect, useRef, useState } from 'react'
import renteruser from '../../../assests/renteruser.png'
import camera from '../../../assests/Camera.png'
import { MdSave } from 'react-icons/md'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ConvertBase64 } from '../../../util/ConvBase64'
import { useDispatch, useSelector } from 'react-redux';
import LoaderSpinner from '../../../util/LoaderSpinner';
import { EditAdminProfile } from '../../../lib/Api/AdminApi';
import { updateProfile } from '../../../Redux/UserAuthSlice/UserAuthSlice';

const schema = yup.object({
    fname: yup.string().required(),
    lname: yup.string().required(),
    email: yup.string().email("Invalid email format").required(),
    phone: yup.string().required(),
    address: yup.string().required(),
});
const EditProfile = () => {
    const [pic, setPic] = useState('')
    const inputFile = useRef(null)
    const [loading, setLoading] = useState(false)


    const userInfo = useSelector((state) => state?.userAuth?.userInfo)
    const dispatch = useDispatch()

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });


    const onButtonClick = () => {
        // `current` points to the mounted file input element
        inputFile.current.click();

    }

    const handleImage = async (e) => {
        const file = e.target.files[0]
        const base64 = await ConvertBase64(file)
        setPic(base64)
    }


    const onSubmit = async (data) => {
        setLoading(true)
        let payload = {
            image: pic,
            ...data,
        }
        let { res, error } = await EditAdminProfile(payload)
        setLoading(false)
        let UserData = Object.assign({}, ...res)
        if (res !== undefined) {
            setLoading(false)
            dispatch(updateProfile(UserData))
        }
        else if (error) {
            setLoading(false)

        }
        else {
            setLoading(false)

        }
    }



    useEffect(() => {
        reset(userInfo)
    }, [reset])




    return (
        <>
            <div className='flex justify-center' >
                <div className='relative'>
                    <img src={userInfo ? userInfo?.userimg : pic ? pic : renteruser} alt="camera_img" className='xl:w-[152px] xl:h-[152px] md:w-[120px] md:h-[120px] object-cover rounded-full' />
                    <div className='absolute right-4 bottom-[3%]'>
                        <div onClick={onButtonClick} className='bg-[#FF8C00] cursor-pointer p-2 rounded-full'>
                            <img src={camera} alt="camera_img" className="object-cover" />
                        </div>
                        <input type="file" onChange={handleImage} ref={inputFile} id="img_upload" className='hidden' />
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=' '>
                    <div className=' grid  lg:grid-cols-2 gap-10 pt-5'>
                        <div className='flex flex-col '>
                            <label className='text-[#98A2B3] text-[14px] leading-[24px]'>First Name</label>
                            <input type="text" placeholder='john'  {...register('fname')} className={`border cursor-pointer focus:outline-none px-2 h-[40px] w-full rounded-md  ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
                            {errors.fname && (
                                <p className="text-red-500 text-sm text-start pt-1 ">{errors.fname.message}</p>
                            )}
                        </div>

                        <div className='flex flex-col '>
                            <label className='text-[#98A2B3] text-[14px] leading-[24px]'>Last Name</label>
                            <input type="text" placeholder='doe'  {...register('lname')} className={`border cursor-pointer focus:outline-none px-2 h-[40px] w-full rounded-md  ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
                            {errors.lname && (
                                <p className="text-red-500 text-sm text-start pt-1 ">{errors.lname.message}</p>
                            )}
                        </div>
                    </div>
                    <div className=' grid  lg:grid-cols-2 gap-10 pt-5'>
                        <div className='flex flex-col '>
                            <label className='text-[#98A2B3] text-[14px] leading-[24px]'>Email Address</label>
                            <input type="email" {...register('email')} placeholder='johndoe@gmail.com' className={`border cursor-pointer focus:outline-none px-2 h-[40px] w-full rounded-md  ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
                            {errors.email && (
                                <p className="text-red-500 text-sm text-start pt-1 ">{errors.email.message}</p>
                            )}
                        </div>
                        <div className='flex flex-col '>
                            <label className='text-[#98A2B3] text-[14px] leading-[24px]'>Phone Number</label>
                            <input type="tel" {...register('phone')} placeholder='+313-333-333-2334' className={`border cursor-pointer focus:outline-none px-2 h-[40px] w-full rounded-md  ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
                            {errors.phone && (
                                <p className="text-red-500 text-sm text-start pt-1 ">{errors.phone.message}</p>
                            )}
                        </div>
                    </div>

                    <div className='pt-4'>
                        <label className='text-[#98A2B3] text-[14px] leading-[24px]'>Address</label>
                        <textarea placeholder='address' {...register('address')} rows={4} className={`${errors?.address ? 'border-red-500' : 'border-[#CDD2E1]'} border py-2  focus:outline-none rounded-md px-2 w-full`}></textarea>
                        {errors.address && (
                            <p className="text-red-500 text-sm text-start pt-1 ">{errors.address.message}</p>
                        )}
                    </div>
                    <div className='flex justify-end'>
                        <button className='my-2 flex items-center text-white  justify-center w-[138px] py-2  rounded-md bg-[#FF8C00] '>
                            {loading ?
                                <LoaderSpinner />
                                :
                                <>
                                    <MdSave className='mx-1 ' />
                                    Save
                                </>
                            }
                        </button>
                    </div>



                </div>
            </form>
        </>
    )
}

export default EditProfile