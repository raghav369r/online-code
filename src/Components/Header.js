import { useState } from "react";
import { MdMenu } from "react-icons/md";
import NavItems from "./NavItems";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [opened, setOpened] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className={"border-b-2 flex justify-between"}>
      <NavLink
        className={
          "p-2 text-gray-500 hover:text-black " +
          (path == "/" ? " border-b border-black text-black" : "")
        }
        to={"/"}
      >
        Codee
      </NavLink>
      <div
        className="cursor-pointer md:hidden"
        onClick={() => setOpened(!opened)}
      >
        <MdMenu className="size-5" />
      </div>
      <NavItems opened={opened} />
    </div>
  );
};
export default Header;
