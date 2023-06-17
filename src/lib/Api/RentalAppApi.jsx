import { toast } from "react-toastify"
import { callPrivateApi } from "../Apiendpoint"




// Get Vehical Owner Statis
export const GetOwnerStatis = async () => {
    try {
        let response = await callPrivateApi('admin/vehicle/vehicle-owner-stats', 'get')
        if (response.success === true) {
            return {
                res: response.data
            }
        }
        else {
            toast.error(response.message)
        }
    }
    catch (err) {
        toast.error(err)

    }
}



// Get Vehical Owner Statis
export const GetOwnerVehicalByUser = async (id) => {
    try {
        let response = await callPrivateApi(`admin/vehicle/by-user/${id}`, 'get')
        if (response.success === true) {
            return {
                res: response.data
            }
        }
        else {
            toast.error(response.message)
        }
    }
    catch (err) {
        toast.error(err)

    }
}




// Edit Profile
export const EditRentalUserProfile = async (data) => {
    let { id , first_name , last_name , email , phone_number , address , image } = data
    try {
        let payload ={
            "first_name":first_name,
            "last_name":last_name,
            "email": email,
            "phone_number":phone_number,
            "address":address,
            "image":image
        }

        let response = await callPrivateApi(`admin/edit-profile/${id}`, 'post', payload)
        if (response.success === true) {
            toast.success(response.message)
            return {
                res: response.data
            }
        }
        else {
            toast.error(response.message)
        }
    }
    catch (err) {
        toast.error(err)

    }
}