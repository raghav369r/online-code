import { useState } from "react";
import { MdMenu } from "react-icons/md";
import NavItems from "./NavItems";

const Header = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div className={"border-b-2 flex justify-between"}>
      <div> 
        <h1 className="p-2">CodeEditor</h1>
      </div>
      <div
        className="cursor-pointer md:hidden"
        onClick={() => setOpened(!opened)}
      >
        <MdMenu className="size-5"/>
      </div>
      <NavItems opened={opened}/>
      
    </div>
  );
};
export default Header;
