import React, { useEffect , useState } from 'react'
import { GetRoles, InviteMember } from '../../../lib/Api/AdminApi'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import LoaderSpinner from '../../../util/LoaderSpinner';

const schema = yup.object({
    first_name: yup.string().required("First Name is required"),
    last_name: yup.string().required("Last Name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    role: yup.string().required("Role is required"),
});

const ManageRole = () => {
    const [role, setRole] = useState([])
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });


    const onSubmit = async (data) => {
        try {
            setLoading(true)
            let { res } = await InviteMember(data)
            console.log("res", res)
            if (res !== undefined) {
                setLoading(false)
                reset()
            }
            else {
                setLoading(false)
            }
        }
        catch (err) {
            setLoading(false)
        }
    }




    useEffect(() => {
        let fetchRols = async () => {
            let { res } = await GetRoles()
            let rols = Object.assign({}, ...res)
            setRole(rols.roles)
        }
        fetchRols()
    }, [])



    return (
        <>


            <div className='bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] mt-5 p-5 rounded-md'>
                <div className='flex justify-between'>
                    <div>
                        <h2 className='text-[#FF8C00] font-semibold text-[20px]'>Manage roles</h2>
                        <p className='pt-4 text-[#898989] text-[14px]'>Here you can add role to Members</p>
                    </div>

                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid lg:grid-cols-3 md:grid-cols-3 pt-5 gap-[34px] '>
                        <div className='flex flex-col'>
                            <label className='pb-3 text-[#606060] text-[14px]'>Name</label>
                            <input type="text" {...register('name')} placeholder='Name' className={`border border-[#CDD2E1] h-[42px] placeholder:text-[14px] text-[14px] rounded-md text-[#ACACAC] focus:outline-none px-2.5 ${errors.name && 'border-red-500'}`} />
                            {errors.name && (
                                <p className="text-red-500 text-sm text-start pt-1 ">{errors.name.message}</p>
                            )}
                        </div>
                        <div className='flex flex-col'>
                            <label className='pb-3 text-[#606060] text-[14px]'>Email</label>
                            <input type="text" {...register('email')} placeholder='jhondie@gmail.com' className={`border border-[#CDD2E1] h-[42px] placeholder:text-[14px] text-[14px] rounded-md text-[#ACACAC] focus:outline-none px-2.5 ${errors.email && 'border-red-500'}`} />
                            {errors.email && (
                                <p className="text-red-500 text-sm text-start pt-1 ">{errors.email.message}</p>
                            )}
                        </div>
                        <div className='flex flex-col'>
                            <label className='pb-3 text-[#606060] text-[14px]'>Role</label>
                            <select {...register('role')} className={`border border-[#CDD2E1] h-[42px] placeholder:text-[14px] text-[14px] rounded-md text-[#ACACAC] focus:outline-none px-2 ${errors.role && 'border-red-500'}`}>
                                <option value="">Please Select </option>
                                {
                                    role?.map((item, i) => (
                                        <option key={i} value={item?.id}>{item.role}</option>

                                    ))
                                }
                            </select>
                            {errors.role && (
                                <p className="text-red-500 text-sm text-start pt-1 ">{errors.role.message}</p>
                            )}
                        </div>

                    </div>

                    <div className='flex justify-end pt-5'>
                        <button className='bg-[#FF8C00] text-white text-[14px] font-semibold h-[40px] px-[52px] rounded-md'>
                            {loading ?
                                <LoaderSpinner />
                                :
                                "Send"
                            }
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ManageRole