import { toast } from "react-toastify"
import { callPrivateApi, callPublicApi } from "../Apiendpoint"


// get Metadata
// Get property Type
export const GetPropertyType = async () => {

    try {
        let response = await callPrivateApi('/servicer/properties/property-types', 'get')
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


// Get property Type Public
export const GetPublicPropertyType = async () => {

    try {
        let response = await callPrivateApi('/servicer/properties/property-types', 'get')
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

// Get property Amanities
export const GetPropertyAmenities = async () => {

    try {
        let response = await callPrivateApi('/servicer/properties/get-property-amenities', 'get')
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
// Get property Amanities Public
export const GetPublicPropertyAmenities  = async () => {
    try {
        let response = await callPublicApi('/servicer/properties/get-property-amenities', 'get')
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



// Get Leased peroid
export const GetLeasedPeriod = async () => {

    try {
        let response = await callPrivateApi('/user/get-lease-periods', 'get')
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


// Get Leased peroid Public
export const GetLeasedPeriodPublic = async () => {
       debugger
    try {
        let response = await callPublicApi('/user/get-lease-periods', 'get')
        console.log("REa", response)
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


// Get Property

export const GetRental = async () => {
    try {
        let response = await callPrivateApi('/servicer/properties', 'get')
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


// Create Rental
export const CreateRantel = async (data) => {
    let { lister_type, listed_with_realtor, realtor_name, realtor_email, realtor_license, sponsoring_broker, latitude, longitude, street, city, state, zipcode, rent, security_deposit, property_type_id, leased_period_id, number_of_beds, number_of_baths, amenities, description, images, video } = data
    try {
        let payload = {
            "lister_type": lister_type,
            "listed_with_realtor": listed_with_realtor,
            "realtor_name": realtor_name,
            "realtor_email": realtor_email,
            "realtor_license": realtor_license,
            "sponsoring_broker": sponsoring_broker,
            "latitude": 29.971703899999998,
            "longitude": -95.22580959999999,
            // "latitude": latitude,
            // "longitude": longitude,
            "street": street,
            "city": city,
            "state": state,
            "zipcode": zipcode,
            "rent": rent,
            "security_deposit": security_deposit,
            "property_type_id": property_type_id,
            "leased_period_id": leased_period_id,
            "number_of_beds": number_of_beds,
            "number_of_baths": number_of_baths,
            "amenities": amenities,
            "description": description,
            "images": images,
            "video": video
        }

        let response = await callPrivateApi('/servicer/properties/store', 'post', payload)
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

// Rental Update 
export const UpdateRental = async (data) => {
    // let { type, realtor, name, email, license, broker, latitude, longitude, street, city, state, zipcode, rent, security_deposit, propertyType, leased_period, number_of_beds, number_of_baths, amenities, description, images, video } = data
    try {
        let payload = {
            "property_id": 3,
            "user_id": 3,
            "latitude": 12300,
            "longitude": 12300,
            "street": "street test",
            "zipcode": "zip_code423 test",
            "city": "city",
            "rent": 123,
            "state": "state test",
            "security_deposit": 1200,
            "property_type_id": 1,
            "leased_period_id": 9,
            "number_of_beds": 12,
            "number_of_baths": 23,
            "amenities": [1, 3],
            "description": "description",
            "images": "reason_for_moving test",
            "video": "reason_for_moving test"
        }

        let response = await callPrivateApi('/servicer/properties/update', 'post', payload)
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


export const DeleteRental = async (id) => {
    try {

        let response = await callPrivateApi(`/servicer/properties/delete/${id}`, 'get')
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