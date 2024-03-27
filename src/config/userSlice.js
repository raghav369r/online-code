import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        user:null,
        night_mode:false,
    },
    reducers:{
        modeChange:(store)=>{
            store.night_mode=!store.night_mode;
        },
        addUser:(store,att)=>{
            store.user=att.payload;
        },
        removeUser:(store)=>{
            store.user=null;
        }
    }

});

export const {modeChange, addUser, removeUser} = userSlice.actions;
export default userSlice.reducer;