import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../services/auth";
import { addUser } from "../config/userSlice";

function CheckUser() {
    const dispatch=useDispatch();
    useEffect(()=>{
        const user=getUser();
        if(user) dispatch(addUser(user));
    },[])

    return ( null );
}

export default CheckUser;