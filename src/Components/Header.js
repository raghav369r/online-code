import { useState } from "react";
import { MdMenu } from "react-icons/md";
import NavItems from "./NavItems";
import { NavLink, useLocation } from "react-router-dom";
import { Tooltip } from "../tooltip/Tooltip";

const Header = () => {
  const [opened, setOpened] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className={"border-b-2 flex justify-between bg-white"}>
      <NavLink
        className={
          "p-2 hover:text-black " +
          (path == "/" ? "text-black border-b border-black " : "text-gray-500")
        }
        to={"/"}
      >
        <Tooltip>
        Codee
        </Tooltip>
      </NavLink>
      <div
        className="cursor-pointer px-2 my-auto md:hidden "
        onClick={() => setOpened(!opened)}
      >
        <MdMenu className="size-5" />
      </div>
      <NavItems opened={opened} />
    </div>
  );
};
export default Header;
