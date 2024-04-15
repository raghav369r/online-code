import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";
import { getProblems } from "../services/problems/problem";
import { useDispatch, useSelector } from "react-redux";
import { setLimit, setProblemPage } from "../config/userSlice";

function ProblemTable() {
  const [problems, setProblems] = useState(null);
  const page = useSelector((store) => store.user.problem_page);
  const limit = useSelector((store) => store.user.limit) || 15;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const thcls = "p-3 bg-white text-gray-400 font-normal m-0";
  const trcls = "odd:bg-gray-200 p-3 bg-white";
  const tdcls = "p-3";

  const getdata = async () => {
    const data = await getProblems(page, limit);
    setProblems(data.models || data);
  };
  useEffect(() => {
    getdata();
  }, [page, limit]);

  return (
    <div className="">
      <Header />
      <div className="md:mx-24">
        <table className="w-full">
          <thead>
            <tr className={trcls}>
              <th className={thcls}>Status</th>
              <th className={thcls}>Title</th>
              <th className={thcls}>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {problems?.map((ele, index) => (
              <tr className={trcls} key={ele.preview}>
                <td className={tdcls}>{!(index % 2) ? "Done" : ""}</td>
                <td
                  className={
                    tdcls + " cursor-pointer hover:text-blue-700 line-clamp-1"
                  }
                  onClick={() => navigate(ele.slug)}
                >
                  {limit*page+index+1+ ". " + ele.name}
                </td>
                <td className={tdcls}>{ele.difficulty_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between m-10">
          <div>
            <select className="p-3 hover:cursor-pointer"  value={limit} onChange={(e)=>dispatch(setLimit(e.target.value))}>
              <option value={10}>10/page</option>
              <option value={15}>15/page</option>
              <option value={25}>25/page</option>
              <option value={50}>50/page</option>
            </select>
          </div>
          <div className="flex cursor-pointer ">
            <h1
              className="border rounded-l  border-black px-3 py-2 hover:bg-slate-500"
              onClick={() => page?dispatch(setProblemPage(page - 1)):""}
            >
              prev
            </h1>
            <h1 className="border-y  border-black px-3 py-2">{page + 1}</h1>
            <h1
              className="border rounded-r border-black px-3 py-2 hover:bg-slate-500"
              onClick={() => dispatch(setProblemPage(page + 1))}
            >
              next
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemTable;
