import React, { useState, useEffect, useRef } from 'react'
import camera from '../../../../../assests/Camera.png'
import renteruser from '../../../../../assests/renteruser.png'
import { FiEdit2 } from 'react-icons/fi'
import { MdDelete, MdSave } from 'react-icons/md'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ConvertBase64 } from '../../../../../util/ConvBase64'
import { EditRentalUserProfile } from '../../../../../lib/Api/RentalAppApi'
import LoaderSpinner from '../../../../../util/LoaderSpinner'

const schema = yup.object({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().email("Invalid email format").required(),
    phone_number: yup.string().required(),
    address: yup.string().required(),
});


const Profile = ({ isEdit, setIsEdit, rentalUser }) => {
    const [pic, setPic] = useState('')
    const inputFile = useRef(null)
    const [loading, setLoading] = useState(false)

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


    const handleEdit = () => {
        setIsEdit(true)
    }


    const onSubmit = async (data) => {
        debugger
        setLoading(true)
        data.image = pic
        let payload = {
            ...data,
        }
        let { res, error } = await EditRentalUserProfile(payload)
        setLoading(false)
        if (res !== undefined) {
            setLoading(false)
            setIsEdit(false)
        }
        else if (error) {
            setLoading(false)

        }
        else {
            setLoading(false)

        }
    }



    useEffect(() => {
        reset(rentalUser)
    }, [reset])



    return (
        <>
            <div className='bg-white rounded-md shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] lg:h-auto xl:sidebar-expanded:h-auto w-full border-0 p-5'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex xl:flex-nowrap 2xl:justify-between w-full flex-wrap'>
                        <div className='flex justify-between 2xl:w-[20%] xl:w-auto w-full '>
                            <div className='h-full '>
                                <div className='relative xl:w-[152px] xl:h-[152px] md:w-[120px] md:h-[120px] rounded-full'>
                                    <img src={rentalUser?.image || renteruser} alt="camera_img" className='xl:w-[152px] xl:h-[152px] md:w-[120px] md:h-[120px] w-[120px] h-[120px] object-cover rounded-full' />
                                    {isEdit &&
                                        <div className='absolute right-4 bottom-[3%]'>
                                            <div onClick={onButtonClick} className='bg-[#FF8C00] cursor-pointer p-2 rounded-full'>
                                                <img src={camera} alt="camera_img" className="object-cover" />
                                            </div>
                                            <input type="file" onChange={handleImage} ref={inputFile} id="img_upload" className='hidden' />
                                        </div>
                                    }
                                </div>
                                <h2 className='text-center mt-3 text-[16px]'>Renter</h2>
                            </div>
                            <div className=' xl:hidden pt-5 pl-2'>
                                {isEdit === false ?
                                    <>
                                        <div onClick={() => handleEdit()} className=' cursor-pointer flex items-center text-[#ACACAC] border-[#ACACAC] justify-center w-[138px] py-2 border rounded-md bg-transparent '>
                                            <FiEdit2 className='mx-1 text-[#ACACAC]' />
                                            Edit
                                        </div>
                                        <button className='my-2 flex items-center text-white  justify-center w-[138px] py-2  rounded-md bg-[#FF8C00] '>
                                            <MdDelete className='mx-1 ' />
                                            Delete
                                        </button>
                                    </>
                                    :
                                    <button type="submit" className='my-2 flex items-center text-white  justify-center w-[138px] py-2  rounded-md bg-[#FF8C00] '>
                                        {
                                            loading ?
                                                <LoaderSpinner />
                                                :
                                                <>
                                                    <MdSave className='mx-1 ' />
                                                    Save
                                                </>
                                        }
                                    </button>
                                }
                            </div>

                        </div>
                        <div className=' sidebar-expanded:w-[40rem] 2xl:w-full 2xl:sidebar-expanded:w-full w-[50rem] lg:mx-10  pt-4'>
                            <h1 className='text-[24px] text-[#444444]'>{rentalUser?.first_name} {rentalUser?.last_name}</h1>
                            <div className='flex  xl:!sidebar-expanded:flex-nowrap flex-wrap justify-between  items-start '>
                                <div className='pt-6'>
                                    <div className='flex flex-col'>
                                        <label className='text-[#98A2B3] text-[14px] leading-[22px]'>First Name</label>
                                        {isEdit === false ? <h2 className='text-[16px] text-[#898989] leading-[24px] pt-2'> {rentalUser?.first_name}</h2> :

                                            <input type="text" placeholder='john'  {...register('first_name')} className={`border cursor-pointer focus:outline-none px-2 h-[40px] w-full rounded-md  ${errors.first_name ? 'border-red-500' : 'border-gray-300'}`} />
                                        }
                                        {errors.first_name && (
                                            <p className="text-red-500 text-sm text-start pt-1 ">{errors.first_name.message}</p>
                                        )}
                                    </div>
                                    <div className='flex flex-col pt-9'>
                                        <label className='text-[#98A2B3] text-[14px] leading-[22px]'>Last Name</label>
                                        {isEdit === false ? <h2 className='text-[16px] text-[#898989] leading-[24px] pt-2'> {rentalUser?.last_name}</h2> :

                                            <input type="text" placeholder='john'  {...register('last_name')} className={`border cursor-pointer focus:outline-none px-2 h-[40px] w-full rounded-md  ${errors.last_name ? 'border-red-500' : 'border-gray-300'}`} />
                                        }
                                        {errors.last_name && (
                                            <p className="text-red-500 text-sm text-start pt-1 ">{errors.last_name.message}</p>
                                        )}
                                    </div>
                                </div>
                                <div className='pt-6'>
                                    <div className='flex flex-col'>
                                        <label className='text-[#98A2B3] text-[14px] leading-[22x]'>Email</label>
                                        {isEdit === false ? <h2 className='text-[16px] text-[#898989] leading-[24px] pt-2'> {rentalUser?.email}</h2> :

                                            <input type="email" placeholder='john'  {...register('email')} className={`border cursor-pointer focus:outline-none px-2 h-[40px] w-full rounded-md  ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
                                        }
                                        {errors.email && (
                                            <p className="text-red-500 text-sm text-start pt-1 ">{errors.email.message}</p>
                                        )}
                                    </div>
                                    <div className='flex flex-col pt-9'>
                                        <label className='text-[#98A2B3] text-[14px] leading-[22px]'>Phone</label>
                                        {isEdit === false ? <h2 className='text-[16px] text-[#898989] leading-[24px] pt-2'> {rentalUser?.phone_number}</h2> :

                                            <input type="text" placeholder='john'  {...register('phone_number')} className={`border cursor-pointer focus:outline-none px-2 h-[40px] w-full rounded-md  ${errors.phone_number ? 'border-red-500' : 'border-gray-300'}`} />
                                        }
                                        {errors.phone_number && (
                                            <p className="text-red-500 text-sm text-start pt-1 ">{errors.phone_number.message}</p>
                                        )}
                                    </div>
                                </div>
                                <div className='pt-6'>
                                    <div className='flex flex-col'>
                                        <label className='text-[#98A2B3] text-[14px] leading-[22px]'>Address</label>
                                        {isEdit === false ? <h2 className='text-[16px] text-[#898989] leading-[24px] pt-2'> {rentalUser?.address}</h2> :

                                            <textarea placeholder='address'  {...register('address')} className={`border cursor-pointer focus:outline-none px-2 h-[40px] w-full rounded-md  ${errors.address ? 'border-red-500' : 'border-gray-300'}`}></textarea>
                                        }
                                        {errors.address && (
                                            <p className="text-red-500 text-sm text-start pt-1 ">{errors.address.message}</p>
                                        )}

                                    </div>
                                    {/* <div className='flex flex-col pt-9'>
                                        <label className='text-[#98A2B3] text-[14px] leading-[24px]'>Password</label>
                                        {isEdit === false ? <h2 className='text-[16px] text-[#898989] leading-[24px] '>123</h2> :
                                            <input type="text" placeholder='123' className='border border-[#CDD2E1] rounded-md px-2 w-full h-[40px]' />}
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className='hidden xl:block 2xl:w-[30%] 2xl:flex 2xl:items-end 2xl:flex-col'>
                            {isEdit === false ?
                                <>
                                    <div onClick={() => handleEdit()} className=' cursor-pointer flex items-center font-semibold text-[#ACACAC] border-[#ACACAC] justify-center w-[138px] py-2 border rounded-md bg-transparent h-[40px] text-[14px] leading-[16px]'>
                                        <FiEdit2 className='mr-2 text-[#ACACAC]' />
                                        Edit
                                    </div>
                                    <button className='my-3.5 flex items-center text-white font-semibold justify-center w-[138px] py-2 rounded-md bg-[#FF8C00] h-[40px] text-[14px] leading-[16px]'>
                                        <MdDelete className='mr-2 ' />
                                        Delete
                                    </button>
                                </>
                                :
                                <button type="submit" className='my-2 flex items-center text-white  justify-center w-[138px] py-2  rounded-md bg-[#FF8C00] '>
                                    {
                                        loading ?
                                            <LoaderSpinner />
                                            :
                                            <>
                                                <MdSave className='mx-1 ' />
                                                Save
                                            </>
                                    }
                                </button>
                            }
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default Profile