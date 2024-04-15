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

const registerContest = async (data) => {
  try {
    const response = await axios.post(Auth_Backend + "/contest/create", data);
    return response.data;
  } catch (ex) {
    console.log(ex);
    return {
      error:
        ex?.response?.data?.message ||
        ex?.response?.data ||
        ex?.message ||
        "cant't connect to server",
    };
  }
};

const getContest = async (data) => {
  const config = {
    headers: {
      "x-auth-token": getJwttoken(),
    },
  };
  try {
    const response = await axios.get(
      Auth_Backend+"/contest/join/" + data,
      config
    );
    // console.log(response);
    return response.data;
  } catch (ex) {
    return { error: ex?.response?.data || "Can't connect to server!!" };
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
  registerContest,
  getContest,
};
