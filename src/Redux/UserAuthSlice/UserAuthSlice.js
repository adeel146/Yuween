import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loginInfo: {
        token: null
    },
    userInfo: {
        fname: null,
        lname: null,
        email: null,
        userid: null,
        userimg: null,
        userRole: null,
        address: null,
        phone: null,

    }
}
export const UserAuthSlice = createSlice({
    name: 'UserAuthSlice',
    initialState,
    reducers: {
        signin: (state, action) => {
            debugger
            state.loginInfo.token = action?.payload?.token
            state.userInfo.fname = action?.payload?.user?.first_name
            state.userInfo.lname = action?.payload?.user?.last_name
            state.userInfo.email = action?.payload?.user?.email
            state.userInfo.userid = action?.payload?.user?.id
            state.userInfo.phone = action?.payload?.user?.phone_number
            state.userInfo.address = action?.payload?.user?.address
            state.userInfo.userimg = action?.payload?.user?.image
            state.userInfo.userRole = action?.payload?.user?.role
        },
        updateProfile : (state , action) => {
            debugger
            state.userInfo.fname = action?.payload?.user?.first_name
            state.userInfo.lname = action?.payload?.user?.last_name
            state.userInfo.email = action?.payload?.user?.email
            state.userInfo.userid = action?.payload?.user?.id
            state.userInfo.phone = action?.payload?.user?.phone_number
            state.userInfo.address = action?.payload?.user?.address
            state.userInfo.userimg = action?.payload?.user?.image
            state.userInfo.userRole = action?.payload?.user?.role
        },
        signout: (state) => {
            return {
                loginInfo: {
                    token: null

                },
                userInfo: {
                    fname: null,
                    lname: null,
                    email: null,
                    userid: null,
                    userimg: null,
                    userRole: null,
                    address: null,
                    phone: null,
                }
            }
        },

    },
})

// Action creators are generated for each case reducer function
export const { signin, signout,updateProfile } = UserAuthSlice.actions

export default UserAuthSlice.reducer