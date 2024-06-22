import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getContest } from "../../../services/auth";
import Problems from "./Problems";
import Countdown from "./Countdown";
import { Img_url } from "../../../config/constants";
import { ContestProblems } from "../../../shimmers/ContestProblems";

function ContestJoin() {
  const [data, setData] = useState({});
  const currdate = new Date();
  const {contestId}=useParams();
  useEffect(() => {
    const getdata = async () => {
      const data = await getContest(contestId);
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