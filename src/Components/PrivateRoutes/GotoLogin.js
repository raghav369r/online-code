import { NavLink, useNavigate } from "react-router-dom";

function GoLogin() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <div className="mt-[15%] text-center p-4 bg-white md:w-1/3 rounded-md shadow-md">
        <h1 className="text-xl text-red-800">Route Protected</h1>
        <h1 className="text-xl text-red-800">Login/Signup To Access</h1>
        <div className="m-4 flex justify-center">
          <button className="p-2 bg-green-900 w-1/3 mr-4" onClick={()=>navigate('/login')}>Login</button>
          <button className="p-2 bg-green-900 w-1/3" onClick={()=>navigate('/signup')}>Signup</button>
        </div>
      </div>
    </div>
  );
}

export default GoLogin;

// <div>
//   <h1>Login to Access</h1>
//   <div className="m-4 p-2">
//     <button className="px-2 py-4 mr-4 bg-lime-600">
//       <NavLink to={"/login"}>Login</NavLink>
//     </button>
//     <button className="px-2 py-4 bg-lime-600">
//       <NavLink to={"/signup"}>Register</NavLink>
//     </button>
//   </div>
// </div>
