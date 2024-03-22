import { NavLink } from "react-router-dom";
import { MdLightMode,MdOutlineLightMode,MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import useNight from "../services/useNight";
import { useDispatch } from "react-redux";
import { modeChange } from "../config/userSlice";
import { useLocation } from "react-router-dom";

function NavItems({ cls, opened }) {
  const location=useLocation();
  const night=useNight();
  const dispatch=useDispatch();
  const path=location.pathname;

  const setNight=()=>{
    dispatch(modeChange());
  }
  return (
    <div
      className={`w-[40%] md:block right-0 mt-7 fixed md:relative md:m-0 ${
        opened ? "block" : "hidden"
      }`}
    >
      <div className={" gap-3 flex flex-col md:flex-row justify-evenly"}>
        <div className={"my-auto"} onClick={() => setNight(!night)}>
          {night ?<MdOutlineLightMode/> :<MdLightMode/>}
        </div>
        <NavLink className={"p-2 "+(path=="/contest"?" border-b border-black":"")} to={"/contest"}>
          Contest
        </NavLink>
        <NavLink className={"p-2 "+(path=="/playground"?" border-b border-black":"")} to={"/playground"}>
          PlayGround
        </NavLink>
        <NavLink className={"p-2 "+(path=="/problems"?" border-b border-black":"")} to={"/problems"}>
          Problems
        </NavLink>
        <NavLink className={"p-2 "+(path=="/Login"?" border-b border-black":"")} to={"/Login"}> 
          Login/SignUp
        </NavLink>
      </div>
    </div>
  );
}

export default NavItems;
