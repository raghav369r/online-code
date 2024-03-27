import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { Auth_Backend, LOGIN_URL, REGISTER_URL } from "../config/constants";

const getJwttoken = () => {
  return localStorage.getItem("token");
};

const setJwttoken = (token) => {
  localStorage.setItem("token", token);
};

const removeJwtToken = () => {
  localStorage.removeItem("token");
};

const getUser = () => {
  const token = getJwttoken();
  if (!token) return;
  const user = jwtDecode(token);
  // console.log(user);
  return user;
};

const login = async (data) => {
  const { email, password } = data;
  try {
    const response = await axios.post(LOGIN_URL, {
      email,
      password,
    });
    setJwttoken(response.data);
    return;
  } catch (ex) {
    if (!ex.response) return "server Down!! Try again later";
    let err = ex.response.data;
    if (ex.response.status === 404) err = "Server Error!! Try Again later";
    return err;
  }
};

const register = async (data) => {
  const { name, email, password } = data;
  try {
    const response = await axios.post(REGISTER_URL, {
      name,
      email,
      password,
    });
    setJwttoken(response.data.token);
    return;
  } catch (ex) {
    if (!ex.response) return "server Down!! Try again later";
    let err = ex.response.data;
    if (ex.response.status === 404) err = "Server Error!! Try Again later";
    return err;
  }
};

const logout = () => {
  localStorage.removeItem("token");
};

export {
  getJwttoken,
  setJwttoken,
  removeJwtToken,
  getUser,
  logout,
  login,
  register,
};
