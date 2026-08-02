import { createSlice } from "@reduxjs/toolkit";

const acmeSlice = createSlice({
    name: 'acmeApp',
    initialState: {
        profile: {}
    },
    reducers: {
        setProfile: ((state, actions) => {
            state.profile = actions.payload
        })
    }
})

export const {setProfile}=acmeSlice.actions
export default acmeSlice.reducer;
