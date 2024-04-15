import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getContest } from "../../../services/auth";
import Problems from "./Problems";
import Countdown from "./Countdown";
import { Img_url } from "../../../config/constants";
import { ContestProblems } from "../../../shimmers/ContestProblems";

function ContestJoin() {
  const [data, setData] = useState({});
  const location = useLocation();
  const path = location.pathname;
  const contest = path.split("/").slice(-1)[0];
  const currdate = new Date();

  useEffect(() => {
    const getdata = async () => {
      const data = await getContest(contest);
      setData(data);
    };
    getdata();
  }, []);

  if (data.error)
    return (
      <h1 className="pt-52 mx-auto text-4xl text-red-800">{data.error}</h1>
    );

  if (!data?.name)
    return <ContestProblems/>
    // return <h1 className="p-52 font-mono text-4xl">Loading...</h1>;

  if (new Date(data.start) > currdate)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div>
          <h1 className="text-2xl my-5 text-violet-950 font-semibold">
            Contest Not yet Started
          </h1>
          <Countdown start={data?.start} />
        </div>
      </div>
    );

  return (
    <>
      {/* {(currdate>new Date(data?.end)) && <h1 className="text-2xl font-semibold p-5 text-red-800">Contest Ended</h1>} */}
      <Problems data={data}/>
    </>
  );
}

export default ContestJoin;

// <div>
//   <div className="p-36">
//     <p>{"name :" + data?.name}</p>
//     <p>{"url :" + data?.url}</p>
//     {data?.questions?.map((ele, ind) => {
//       return (
//         <div key={ind}>
//           <h1>Problem</h1>
//           <p>title: {ele?.title}</p>
//           <p>{ele?.question}</p>
//           <h1>input</h1>
//           <p>{ele?.exampleip}</p>
//           <h1>output</h1>
//           <p>{ele?.exampleop}</p>
//         </div>
//       );
//     })}
//   </div>
// </div>
