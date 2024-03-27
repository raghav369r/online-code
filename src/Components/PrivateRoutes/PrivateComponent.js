import { useSelector } from "react-redux";
import GoLogin from "./GotoLogin";

function PrivateComponent({ element }) {
  const user = useSelector((store) => store?.user?.user);
  return (
    <>
      {user && element()}
      {!user && <GoLogin />}
    </>
  );
}

export default PrivateComponent;
