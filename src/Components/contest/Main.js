import { Link } from "react-router-dom";
import Header from "../Header";
import { TfiCup } from "react-icons/tfi";

function Main() {
  return (
    <div className="">
      <Header />
      <div className="flex flex-col items-center justify-center gap-4 m-10">
        <TfiCup className="size-60" color="gray" />
        <h1 className="text-center text-gray-600 text-2xl font-semibold">compete and see your Rankings</h1>
      </div>
      {/* <img 
          className="w-full h-[60vh] object-cover mt-1"
          src="https://assets.leetcode.com/users/images/631b1b00-3eb7-4d35-b437-5a03bb87d501_1652094030.359858.png"
        /> */}
      <div className="md:flex justify-center gap-5 mb-10 ">
        <Link className="h-52 w-1/3 bg-white rounded-md shadow-md flex justify-center items-center" to={"join"}>
          <h1 className="p-4 text-center text-2xl">Join a contest</h1>
        </Link>
        <Link className="h-52 w-1/3 bg-white rounded-md shadow-md flex justify-center items-center" to={"create"}>
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
