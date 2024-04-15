import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../Header"

function Main() {
  const navigate = useNavigate();
  return (
    <div className="">
      <Header/>
        <img 
          className="w-full h-[60vh] object-cover mt-1"
          src="https://assets.leetcode.com/users/images/631b1b00-3eb7-4d35-b437-5a03bb87d501_1652094030.359858.png"
        />
      <div className="md:flex justify-center gap-5 mb-10 -mt-10 ">
        <Link className="h-52 w-1/3 bg-white rounded-md " to={"join"}>
          <h1 className="p-4 text-center text-2xl">Join a contest</h1>
        </Link>
        <Link className="h-52 w-1/3 bg-white rounded-md" to={"create"}>
          <h1 className="p-4 text-center text-2xl">Create contest</h1>
        </Link>
      </div>
    </div>
  );
}

export default Main;

// onClick={()=>navigate('/contest/create')}

{
  /* <div className="bg-white p-10 border rounded-md">
  <Link to={"join"}>
    <button className="m-2 py-2 px-4 bg-green-900 text-white">join</button>
  </Link>
  <Link to={"create"}>
    <button className="m- py-2 px-4 bg-green-900 text-white">create</button>
  </Link>
</div> */
}
