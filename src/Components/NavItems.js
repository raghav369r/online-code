import { NavLink } from "react-router-dom";
import { MdLightMode,MdOutlineLightMode,MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import useNight from "../services/useNight";
import { useDispatch } from "react-redux";
import { modeChange } from "../config/userSlice";


function NavItems({ cls, opened }) {
  const night=useNight();
  const dispatch=useDispatch();
  const setNight=()=>{
    dispatch(modeChange());
  }
  return (
    <div
      className={`z-10 w-[40%] md:block right-0 mt-7 fixed md:relative md:m-0 ${
        opened ? "block" : "hidden"
      }`}
    >
      <div className={(night?"bg-slate-950":"bg-white ")+" gap-3 flex flex-col md:flex-row justify-evenly"}>
        <div className={cls+" pt-1 mr-0"} onClick={() => setNight(!night)}>
          {night ?<MdOutlineLightMode/> :<MdLightMode/>}
        </div>
        <NavLink className={cls} to={"/contest"}>
          Contest
        </NavLink>
        <NavLink className={cls} to={"/playground"}>
          PlayGround
        </NavLink>
        <NavLink className={cls} to={"/problems"}>
          Problems
        </NavLink>
        <NavLink className={cls} to={"/Login"}> 
          Login/SignUp
        </NavLink>
      </div>
    </div>
  );
}

export default NavItems;
