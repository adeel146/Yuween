import { toast } from "react-toastify"
import { callPrivateApi } from "../Apiendpoint"


// Get Roles

export const GetRoles = async () => {
    try {
        let response = await callPrivateApi('admin/roles', 'get')
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


// InviteMember
export const InviteMember = async (data) => {
    let { name , email , role } = data
    try {
        let payload = {
            "name": name,
            "email":email,
            "role_id": role
        }

        let response = await callPrivateApi('admin/invite-new-admin', 'post', payload)
        if (response.success === true) {
            toast.success(response.message)
            return {
                res: response
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
export const EditAdminProfile = async (data) => {
    let { fname , lname , email , phone , address , image } = data
    try {
        let payload ={
            "first_name":fname,
            "last_name":lname,
            "email": email,
            "phone_number":phone,
            "address":address,
            "image":image
        }

        let response = await callPrivateApi('admin/edit-profile', 'post', payload)
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

// Edit Profile After Invite
export const EditProfileAfterInvite = async (data) => {
    let { first_name , last_name , email , phone_number , user_id , password } = data
    try {
        let payload ={
            "user_id": user_id,
            "first_name": first_name,
            "last_name":last_name,
            "email":email,
            "password":password,
            "phone_number":phone_number
        }
        let response = await callPrivateApi('admin/register', 'post', payload)
        if (response.success === true) {
            toast.success(response.message)
            return {
                data: response.data
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



// export const DeleteLeased= async (id) => {
//     try {

//         let response = await callPrivateApi(`/servicer/lease-builder/destroy/${id}`, 'post')
//         if (response.success === true) {
//             toast.success(response.message)
//             return {
//                 res: response.data
//             }
//         }
//         else {
//             toast.error(response.message)
//         }
//     }
//     catch (err) {
//         toast.error(err)

//     }
// }