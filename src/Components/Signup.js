import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Signup() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="flex justify-center h-[90vh] align-middle">
        <form className="my-auto p-4 h-80 flex flex-col bg-gray-200 md:w-1/3 rounded-md">
          <h1 className="text-2xl flex justify-center font-bold">Sign Up</h1>
          <input
            className="mx-auto p-2 w-2/3 mt-4 border-gray-500"
            placeholder="name"
            type="text"
            name="name"
          />
          <input
            className="mx-auto p-2 w-2/3 mt-4 border-gray-500"
            placeholder="email"
            type="email"
            name="email"
          />
          <input
            className="mx-auto p-2 w-2/3 mt-4 border-gray-500"
            type="password"
            placeholder="password"
            name="password"
          />
          <button className="mt-2 w-2/3 mb-2 mx-auto  text-white p-2 rounded-md bg-slate-800">
            Signup
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
