import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: "name",
    initialState: {
        userInfo: {
            role: '0',
        },
        token: '',
        errors: null,
        isAuth: true
    }
})

export default user.reducer