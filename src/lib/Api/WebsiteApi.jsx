import { toast } from "react-toastify"
import { callPrivateApi } from "../Apiendpoint"


// Get car model , year , make
export const GetMetaData = async () => {
    try {
        let responseModel = await callPrivateApi('vehicle/models/176', 'get')
        let responseMake = await callPrivateApi('vehicle/makes/1', 'get')
        let responseYears = await callPrivateApi('vehicle/years/1810', 'get')
        if (responseModel.success === true) {
            return {resModel: responseModel.data , resMake: responseMake.data , resYear: responseYears.data }
        }
        else {
            toast.error(responseModel.message)
        }
    }
    catch (err) {
        toast.error(err)

    }
}




// Get car model , type  , feule
export const GetFilterData = async () => {
    try {
        let responseTypes = await callPrivateApi('vehicle/series', 'get')
        let responseModel = await callPrivateApi('vehicle/models/176', 'get')
        let responseFuel = await callPrivateApi('vehicle/fuel-types', 'get')
        if (responseModel.success === true && responseTypes.success === true && responseFuel.success === true ) {
            return {resModel: responseModel.data , resType: responseTypes.data , resFuel: responseFuel.data }
        }
        else {
            toast.error(responseModel.message)
        }
    }
    catch (err) {
        toast.error(err)

    }
}


// Get car model , type  , feule
export const GetFilterCar = async (payload) => {
    try {
        
        let response = await callPrivateApi('vehicle/filter', 'post' , payload )
        
        if (response.success === true ) {
            return {res : response.data }
        }
        else {
            toast.error(response.message)
        }
    }
    catch (err) {
        toast.error(err)

    }
}




