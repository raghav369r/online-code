import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { getUser, login } from "../services/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../config/userSlice";
import Header from "./Header";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const email = useRef(null);
  const pass = useRef(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const userinstore = useSelector((store) => store.user.user);

  useEffect(() => {
    if (userinstore) navigate(-1);
  }, [userinstore]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.current.value === "") {
      email.current.focus();
      return;
    }
    if (pass.current.value === "") {
      pass.current.focus();
      return;
    }
    setLoading(true);
    const err = await login({
      email: email.current.value,
      password: pass.current.value,
    });
    setLoading(false);
    setError(err);
    if (!err) {
      const user = getUser();
      toast.success("Sucsessfully Loggedin!", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(addUser(user));
      // navigate(-1); //done automatically as user changes in useEffect
    } else {
      toast.error("Error Logging in!", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center h-[90vh] align-middle ">
        <form className="my-auto p-4 h-80 flex flex-col bg-white shadow-md md:w-1/3 rounded-md">
          <h1 className="text-2xl flex justify-center font-bold mt-5">Login</h1>
          <input
            ref={email}
            className="mx-auto p-2 w-2/3 mt-4 border border-neutral-400 focus:border-2 rounded-md "
            placeholder="email"
            type="email"
            name="email"
          />
          <input
            ref={pass}
            className="mx-auto p-2 w-2/3 mt-4 border border-neutral-400 focus:border-2 rounded-md "
            type="password"
            placeholder="password"
            name="password"
          />
          <p className="text-red-700 text-sm mx-auto mt-2">{error}</p>
          <button
            className="mt-2 w-2/3 mb-2 mx-auto   p-2 rounded-md bg-dark-bg text-white disabled:opacity-45 disabled:cursor-not-allowed"
            onClick={handleSubmit}
            disabled={loading}
          >
            {!loading && "Login"}
            {loading && "Loading"}
          </button>
          <p
            className="my-2 mx-auto hover:cursor-pointer hover:underline"
            onClick={() => navigate("/signup")}
          >
            New a user? Sign In
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
