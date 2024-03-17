import { useState } from "react";
import { MdMenu } from "react-icons/md";
import NavItems from "./NavItems";
import { useDispatch } from "react-redux";
import { modeChange } from "../config/userSlice";
import useNight from "../services/useNight";

const Header = () => {
  const night=useNight();
  const dispatch=useDispatch();
  const setNight=(val)=>{
    dispatch(modeChange(val));
  }
  const [opened, setOpened] = useState(false);
  const cls = `mx-3 cursor-pointer ${
    night ? "text-white bg-slate-950" : "bg-white text-black"
  } hover:text-gray-500`;
  return (
    <div className={(night?"bg-slate-950":"bg-white")+" p-4 border-b-2 flex justify-between"}>
      <div> 
        <h1 className={cls}>CodeEditor</h1>
      </div>
      <div
        className="cursor-pointer md:hidden"
        onClick={() => setOpened(!opened)}
      >
        <MdMenu className="size-5"/>
      </div>
      <NavItems cls={cls} opened={opened}/>
      
    </div>
  );
};
export default Header;
