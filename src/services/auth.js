import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { Auth_Backend } from "../config/constants";

const getJwttoken=()=>{
    return localStorage.getItem('token');
}

const setJwttoken=(token)=>{
    localStorage.setItem('token',token)
}

const getUser=()=>{
    const token=getJwttoken();
    if(!token) return;
    const user=jwtDecode(token);
    // console.log(user);
    return user;
}

const login=async(data)=>{
    const {email, password}=data;
    try{
        const response = await axios.post("http://localhost:3010/auth/login", {
            email,
            password
        });
        setJwttoken(response.data);
        return;
    }catch(ex){
        if(!ex.response) return "server Down!! Try again later";
        let err=ex.response.data;
        if(ex.response.status===404) err="Server Error!! Try Again later";
        return err;
    }
}

const register=async(data)=>{
    const {name, email, password}=data;
    try{
        const response = await axios.post(Auth_Backend+'/user/register', {
            name,
            email,
            password
        });
        setJwttoken(response.data.token);
        return;
    }catch(ex){
        if(!ex.response) return "server Down!! Try again later";
        let err=ex.response.data;
        if(ex.response.status===404) err="Server Error!! Try Again later";
        return err;
    }

}

const logout=()=>{
    localStorage.removeItem("token");
}

export {getJwttoken, getUser, logout, login, register};