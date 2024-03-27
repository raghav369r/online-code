import { NavLink, useNavigate } from "react-router-dom";

function GoLogin() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen justify-center align-middle">
      <div>
        <h1>Login to Access</h1>
        <button className="px-2 py-4 bg-lime-600">
          <NavLink to={"/login"}>Login</NavLink>
        </button>
        <button className="px-2 py-4 bg-lime-600">
          <NavLink to={"/signup"}>Register</NavLink>
        </button>
      </div>
    </div>
  );
}

export default GoLogin;
