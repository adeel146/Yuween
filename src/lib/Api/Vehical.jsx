import { toast } from "react-toastify"
import { callPrivateApi } from "../Apiendpoint"



// Get Dashboard Statis
export const GetDashStatis = async () => {
    try {
        let response = await callPrivateApi('admin/dashboard-stats', 'get')
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



export const GetDashPendding = async () => {
    try {
        let response = await callPrivateApi('admin/vehicle/pending', 'get')
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





// Get Vehicals
export const GetVihicals = async () => {
    try {
        let response = await callPrivateApi('admin/vehicle', 'get')
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


// Get Vehicals
export const GetVihicalsByFilter = async (status) => {
    try {
        let response = await callPrivateApi(`admin/vehicle/${status}`, 'get')
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


// Get Pendding Vehicals
export const GetVihicalsPendding = async () => {
    try {
        let response = await callPrivateApi('admin/vehicle/pending', 'get')
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

// Get Vehical base on page
export const GetVihicalsBaseOnPages = async (pageNo) => {
    try {
        let response = await callPrivateApi(`admin/vehicle?page=${pageNo}`, 'get')
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


// Get Vehical base on page
export const SearchVehical = async (search) => {
    try {
        let response = await callPrivateApi(`admin/vehicle?search=${search}`, 'get')
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

// Change  Vehical Status
export const ChangeVehicalStatus = async (data ) => {
    try {
        let response = await callPrivateApi(`admin/vehicle/update-status`, 'post', data )
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
