import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        user:null,
        night_mode:false,
        problem_page:0,
        limit:15,
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
        },
        setProblemPage:(store,att)=>{
            store.problem_page=att.payload;
        },
        setLimit:(store,att)=>{
            store.limit=att.payload;
        }
    }

});

export const {modeChange, addUser, removeUser, setLimit, setProblemPage} = userSlice.actions;
export default userSlice.reducer;