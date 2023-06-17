import { toast } from "react-toastify"
import { callPublicApi } from "../Apiendpoint"
// User api's 

// SignUp as a Servicer 
export const SignUpUser = async (data) => {
     let { first_name , last_name  , phone  , email , password } = data 
    try {
        let payload = {
            "first_name": first_name,
            "last_name": last_name,
            "phone_number": phone,
            "email": email,
            "password": password,
            
        }

        
        let response = await callPublicApi("admin/register", 'post', payload)
        if (response.success === true) {
            toast.success(response.message)
            return {
                res: response
            }
        }
        else {
            toast.error(response.message)
            return {
                res: response
            }
        }
    }
    catch (err) {
        toast.error(err)

    }
}




// SignIn User 

export const SignInUser = async (data) => {
    let { email, password } = data
    try {
        let payload = {
            "email": email,
            "password": password
        }



        let response = await callPublicApi("admin/login", 'post', payload)
        if (response.success === true) {
            toast.success(response.message)
            return { res: response.data }
        }
        else {
            toast.error(response.message)
            return { error: response.message }
        }
    }
    catch (err) {
        toast.error(err)

    }
}


// SignIn User With Social 

export const SignInUserSocialy = async (data) => {
    let { email, phoneNumber, uid, displayName , role , checkProvider } = data

    try {
        let payload = {
            "first_name": displayName,
            "phone_number": phoneNumber,
            "email": email,
            ...checkProvider === "google_user_id" ? { "google_user_id" : uid } : checkProvider === "fb_user_id" ? { "fb_user_id" : uid } :  checkProvider === "apple_user_id" ? { "apple_user_id" : uid } : ""
        }
        console.log("data" , payload)
        let checkRole = role === "servicer" ? "/user/login/servicer" : "/user/login/renter"

           let response = await callPublicApi(checkRole, 'post', payload)
           console.log("rea", response)
        //    if (response.success === true) {
        //        toast.success(response.message)
        //        return { res : response.data }
        //    }
        //    else {
        //        toast.error(response.message)
        //        return { error : response.message }
        //    }
    }
    catch (err) {
        toast.error(err)

    }
}

// forgot 

export const ForgotUser = async (data) => {
    //  let { firstname , lastname , dateofbirth , phone  , email , password , confirmpassword} = data 
    try {
      
        let response = await callPublicApi('admin/reset-password/step-1', 'post', data)
        if (response.success === true) {
            toast.success(response.message)
            return { res: response }
        }
        else {
            toast.error(response.message)
            return { res: response }
        }
    }
    catch (err) {
        toast.error(err)

    }
}

// otp send 
export const SendOtp = async (data) => {
    try {
        // let payload = {
        //     "email": data.email,
        //     "pin_code": data.otp
        // }

        let response = await callPublicApi('admin/reset-password/step-2', 'post', data)
        if (response.success === true) {
            toast.success(response.message)
            return { res: response }
        }
        else {
            toast.error(response.message)
            return { res: response }
        }
    }
    catch (err) {
        toast.error(err)

    }
}


// otp send 
export const ResetPassword = async (data) => {
    try {
        // let payload = {
        //     "email": data?.email,
        //     "new_pass": data?.password,
        //     "r_new_pass": data?.r_password
        // }

        let response = await callPublicApi('admin/reset-password/step-3', 'post', data)
        if (response.success === true) {
            toast.success(response.message)
            return {
                res: response
            }
        }
        else {
            toast.error(response.message)
            return { res: response }
        }
    }
    catch (err) {
        toast.error(err)

    }
}