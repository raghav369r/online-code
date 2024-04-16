import { NavLink } from "react-router-dom";
import {
  MdLightMode,
  MdOutlineLightMode,
  MdDarkMode,
  MdOutlineDarkMode,
} from "react-icons/md";
import useNight from "../services/useNight";
import { useDispatch, useSelector } from "react-redux";
import { modeChange } from "../config/userSlice";
import { useLocation } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import  {Tooltip}  from "../tooltip/Tooltip";

function NavItems({ opened }) {
  const location = useLocation();
  const night = useNight();
  const dispatch = useDispatch();
  const user = useSelector((store) => store?.user?.user);
  const path = location.pathname;
  const setNight = () => {
    dispatch(modeChange());
  };
  return (
    <div
      className={`z-10 w-full bg-light-bg md:bg-transparent md:p-0 md:w-auto md:block right-0 p-2 mt-10 fixed md:relative md:m-0 ${
        opened ? "block" : "hidden"
      }`}
    >
      <div className={" gap-3 flex flex-col md:flex-row justify-evenly"}>
        <div className={"my-auto"} onClick={() => setNight(!night)}>
          <Tooltip text={night?"Light mode":"Dark Mode"}>
          {night ? <MdOutlineLightMode /> : <MdLightMode />}
          </Tooltip>
        </div>
        <NavLink
          className={
            "p-2 hover:text-black " +
            (path == "/contest"
              ? " border-b border-black text-black"
              : " text-gray-500")
          }
          to={"/contest"}
        >
          Contest
        </NavLink>
        <NavLink
          className={
            "p-2 hover:text-black " +
            (path == "/playground"
              ? " border-b border-black text-black"
              : " text-gray-500")
          }
          to={"/playground"}
        >
          PlayGround
        </NavLink>
        <NavLink
          className={
            "p-2 hover:text-black " +
            (path == "/problems"
              ? " border-b border-black text-black"
              : " text-gray-500")
          }
          to={"/problems"}
        >
          Problems
        </NavLink>
        <NavLink
          className={
            "p-2 hover:text-black " +
            (path == "/Login" || path == "/me"
              ? " border-b border-black text-black"
              : " text-gray-500")
          }
          to={user?"/me":"/Login"}
        >
          {user ? <FaRegUser className="mt-1 mr-2" /> : "Login/SignUp"}
        </NavLink>
      </div>
    </div>
  );
}

export default NavItems;
