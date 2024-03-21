import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useRef, useState } from "react";
import { getUser, register } from "../services/auth";
import axios from "axios";
import { Auth_Backend } from "../config/constants";

function Signup() {
  const [error,setError]=useState(null);
  const navigate = useNavigate();
  const name=useRef(null);
  const email=useRef(null);
  const pass=useRef(null);

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if (name?.current?.value === "") {
      name.current.focus();
      return;
    }
    if (email.current.value === "") {
      email.current.focus();
      return;
    }
    if (pass.current.value === "") {
      pass.current.focus();
      return;
    }
    const data={name:name, email:email, password:pass};
    const err=await register(data);
    setError(err);
    console.log(getUser());
  }

  return (
    <>
      <Header />
      <div className="flex justify-center h-[90vh] align-middle">
        <form className="my-auto p-4 h-96 flex flex-col bg-gray-200 md:w-1/3 rounded-md">
          <h1 className="text-2xl mt-5 flex justify-center font-bold">Sign Up</h1>
          <input
            ref={name}
            className="mx-auto p-2 w-2/3 mt-4 border-gray-500"
            placeholder="name"
            type="text"
            name="name"
          />
          <input
            ref={email}
            className="mx-auto p-2 w-2/3 mt-4 border-gray-500"
            placeholder="email"
            type="email"
            name="email"
          />
          <input
            ref={pass}
            className="mx-auto p-2 w-2/3 mt-4 border-gray-500"
            type="password"
            placeholder="password"
            name="password"
          />
          <p className="mx-auto mt-2 text-red-600 font-mono">{error}</p>
          <button className="mt-4 w-2/3 mb-2 mx-auto  text-white p-2 rounded-md bg-dark-bg" onClick={handleSubmit}>
            Register
          </button>
          <p
            className="my-2 mx-auto hover:cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Already a user? Login
          </p>
        </form>
      </div>
    </>
  );
}

export default Signup;
// background-color: #282c34;
