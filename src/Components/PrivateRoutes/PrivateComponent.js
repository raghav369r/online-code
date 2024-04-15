import { useSelector } from "react-redux";
import GoLogin from "./GotoLogin";

function PrivateComponent({ element:Element }) {
  const user = useSelector((store) => store?.user?.user);
  return (
    <>
      {user?<Element/> : <GoLogin/>}
    </>
  );
}

export default PrivateComponent;
