import { useDispatch, useSelector } from "react-redux";
import { removeJwtToken } from "../services/auth";
import { removeUser } from "../config/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "./Header";

function User() {
  const user = useSelector((store) => store?.user?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    removeJwtToken();
    dispatch(removeUser());
    toast.success("successfully logged out!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
    navigate("/");
  };
  return (
    <>
    <Header/>
    <div className="p-4 bg-light-bg h-screen w-screen">
      <p>name: {user.name}</p>
      <p>email:{user.email}</p>
      <button className="bg-lime-600 p-2" onClick={handleLogout}>
        Logout
      </button>
    </div>
    </>
  );
}

export default User;
