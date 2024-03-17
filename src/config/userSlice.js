import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        user:null,
        isAdmin:false,
        night_mode:false,
    },
    reducers:{
        modeChange:(store)=>{
            store.night_mode=!store.night_mode;
        }
    }

});

export const {modeChange} = userSlice.actions;
export default userSlice.reducer;